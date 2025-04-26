import Notes from "../models/note.js";

const deleteNoteController = async (req, res) => {
    const { id } = req.body;
    try {
        if (id) {
            const deletedNote = await Notes.deleteOne({ _id: id, username: req.username });
            res.status(200).json({ message: "Note deleted successfully.", deletedNote });
        } else {
            res.status(404).json({ message: "Please enter correct note id" });
        }
    } catch (e) {
        res.status(500).send({ isError: true, error: "Error occured in deleteNote controller" });
    }
};

export default deleteNoteController;
