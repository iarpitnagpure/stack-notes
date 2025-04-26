import Notes from "../models/note.js";

const updateNoteController = async (req, res) => {
    const { id, title, problem, solution, tags, references } = req.body;
    try {
        if (id) {
            const updateFields = {};
            if (title) updateFields.title = title;
            if (problem) updateFields.problem = problem;
            if (solution) updateFields.solution = solution;
            if (tags) updateFields.tags = tags;
            if (references) updateFields.references = references;

            if (Object.keys(updateFields).length === 0) {
                return res.status(400).json({ message: "No fields to update." });
            }

            const result = await Notes.updateOne(
                { _id: id, username: req.username },
                { $set: updateFields }
            );

            if (result.matchedCount === 0) {
                return res.status(404).json({ message: "Note not found." });
            }

            const updatedNote = await Notes.findOne({ _id: id, username: req.username });

            res.status(200).json({ message: "Note updated successfully.", updatedNote });
        } else {
            res.status(404).json({ message: "Please enter correct note id" });
        }
    } catch (e) {
        res.status(500).send({ isError: true, error: "Error occured in updateNote controller" });
    }
};

export default updateNoteController;
