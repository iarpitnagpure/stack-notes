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

export const addNote = createAsyncThunk("notes/addNote", async (payload) => {
    const response = await fetch(
        `${process.env.STACK_NOTES_API_URL}/api/notes/addNote`,
        {
            credentials: "include",
            method: "POST",
            headers: {
                ["content-type"]: "application/json",
            },
            body: JSON.stringify({ ...payload }),
        }
    );
    return response.json();
});

export const updateNote = createAsyncThunk("notes/updateNote", async (payload) => {
    const response = await fetch(
        `${process.env.STACK_NOTES_API_URL}/api/notes/updateNote`,
        {
            credentials: "include",
            method: "PATCH",
            headers: {
                ["content-type"]: "application/json",
            },
            body: JSON.stringify({ ...payload }),
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
            .addCase(addNote.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addNote.fulfilled, (state, action) => {
                state.isLoading = false;
                const { note, isError, error } = action.payload;
                if (note) {
                    state.notes.push(note);
                }
                if (isError) {
                    state.isError = true;
                    state.errorMessage = error;
                }
            })
            .addCase(addNote.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.payload.error;
            })
            .addCase(updateNote.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateNote.fulfilled, (state, action) => {
                state.isLoading = false;
                const { updatedNote, isError, error } = action.payload;
                if (updatedNote) {
                    const index = state.notes.findIndex(item => item._id === updatedNote._id);
                    state.notes[index] = updatedNote;
                }
                if (isError) {
                    state.isError = true;
                    state.errorMessage = error;
                }
            })
            .addCase(updateNote.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.payload.error;
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
