import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isUserAuthenticated: false,
    isLoading: false,
    isError: false,
    errorMessage: '',
    userInfo: null,
};

export const loginUser = createAsyncThunk(
    "auth/login",
    async ({ username, password }) => {
        const response = await fetch(
            `${process.env.STACK_NOTES_API_URL}/api/auth/login`,
            {
                credentials: "include",
                method: "POST",
                headers: {
                    ["content-type"]: "application/json",
                },
                body: JSON.stringify({ username, password }),
            }
        );
        return response.json();
    }
);

export const signUpUser = createAsyncThunk(
    "auth/signup",
    async ({ name, username, gender, password, randomAvatar }) => {
        const response = await fetch(
            `${process.env.STACK_NOTES_API_URL}/api/auth/signup`,
            {
                credentials: "include",
                method: "POST",
                headers: {
                    ["content-type"]: "application/json",
                },
                body: JSON.stringify({
                    name,
                    username,
                    gender,
                    password,
                    randomAvatar,
                }),
            }
        );
        return response.json();
    }
);

export const logoutUser = createAsyncThunk(
    "auth/logout",
    async () => {
        const response = await fetch(
            `${process.env.STACK_NOTES_API_URL}/api/auth/logout`,
            {
                credentials: "include",
                method: "GET",
                headers: {
                    ["content-type"]: "application/json",
                }
            }
        );
        return response.json();
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserAuth: (state, action) => {
            state.isUserAuthenticated = true;
            state.userInfo = action.payload;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.payload.isError) state.isError = true;
                if (action.payload.error) state.errorMessage = action.payload.error;
                if (action.payload.user) {
                    state.userInfo = action.payload.user;
                    state.isUserAuthenticated = true;
                }
            })
            .addCase(loginUser.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(signUpUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.payload.isError) state.isError = true;
                if (action.payload.error) state.errorMessage = action.payload.error;
                if (action.payload.user) {
                    state.userInfo = action.payload.user;
                    state.isUserAuthenticated = true;
                }
            })
            .addCase(signUpUser.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(logoutUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.payload.isUserLoggedOut) {
                    state.isUserAuthenticated = false;
                    state.isLoading = false;
                    state.isError = false;
                    state.errorMessage = '';
                    state.userInfo = null;
                }
            })
            .addCase(logoutUser.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = 'Something went wrong, Please try again later';
            });
    },
});

export const { setUserAuth } = authSlice.actions;

export default authSlice.reducer;
