import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: [],
    isLoading: false,
    isError: false,
    errorMessage: ''
};

export const getNotes = createAsyncThunk(
    "notes/getNotes",
    async () => {
        const response = await fetch(
            `${process.env.STACK_NOTES_API_URL}/api/notes/getNotes`,
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

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(getNotes.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getNotes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.notes = action.payload.notes;
            })
            .addCase(getNotes.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = 'Something went wrong, Please try again later';
            });
    },
});

export default notesSlice.reducer;
