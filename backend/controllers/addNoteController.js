import Notes from "../models/note.js";

const addNoteController = async (req, res) => {
    const { title, problem, solution, tags, references } = req.body;
    try {
        if (title && problem) {
            const newNote = new Notes({
                title,
                problem,
                solution,
                tags,
                references,
                username: req.username
            });
            await newNote.save();

            res.status(201).send({
                message: "Note Added",
                note: {
                    title: newNote.title,
                    problem: newNote.problem,
                    solution: newNote.solution || '',
                    tags: newNote.tags,
                    references: newNote.references,
                },
            });
        } else {
            res.status(400).send({
                isError: true,
                error: "Invalid notes details, Please enter title and problem",
            });
        }
    } catch (e) {
        res.status(500).send({ isError: true, error: "Error occured in addNotes controller" });
    }
};

export default addNoteController;
