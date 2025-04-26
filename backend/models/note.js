import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    problem: {
        type: String,
        required: true
    },
    solution: {
        type: String,
        required: false
    },
    tags: {
        type: [String],
        required: false
    },
    references: {
        type: [String],
        required: false
    },
    username: {
        type: String,
        ref: 'Users',
        required: true
    }
}, { timestamps: true });

const Notes = mongoose.model('Notes', NoteSchema);

export default Notes;
