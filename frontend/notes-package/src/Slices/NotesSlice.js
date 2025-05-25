import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: [],
    isLoading: false,
    isError: false,
    errorMessage: "",
};

export const getNotes = createAsyncThunk("notes/getNotes", async () => {
    const response = await fetch(
        `${process.env.STACK_NOTES_API_URL}/api/notes/getNotes`,
        {
            credentials: "include",
            method: "GET",
            headers: {
                ["content-type"]: "application/json",
            },
        }
    );
    return response.json();
});

export const deleteNote = createAsyncThunk("notes/deleteNote", async (id) => {
    const response = await fetch(
        `${process.env.STACK_NOTES_API_URL}/api/notes/deleteNote`,
        {
            credentials: "include",
            method: "POST",
            headers: {
                ["content-type"]: "application/json",
            },
            body: JSON.stringify({ id }),
        }
    );
    return response.json();
});

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {},
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
                state.errorMessage = "Something went wrong, Please try again later";
            })
            .addCase(deleteNote.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteNote.fulfilled, (state, action) => {
                state.isLoading = false;
                const deletedNoteId = action.payload?.deletedNoteId;
                if (deletedNoteId) {
                    state.notes = state.notes.filter((note) => note._id !== deletedNoteId);
                }
            })
            .addCase(deleteNote.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = "Something went wrong, Please try again later";
            });
    },
});

export default notesSlice.reducer;
