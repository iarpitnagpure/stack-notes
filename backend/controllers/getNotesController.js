import Notes from "../models/note.js";

const getNotesController = async (req, res) => {
    try {
        const notes = await Notes.find({ username: req.username });
        res.status(200).send({ notes });
    } catch (e) {
        res.status(500).send({ isError: true, error: "Error occured in getNotes controller" });
    }
};

export default getNotesController;
