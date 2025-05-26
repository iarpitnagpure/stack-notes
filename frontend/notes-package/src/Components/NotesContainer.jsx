import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, getNotes } from "../Slices/NotesSlice";
import Note from "./Note";
import { Button } from "@radix-ui/themes";
import AddNote from "./AddNote";

const NotesContainer = ({ isUserAuthenticated = true }) => {
    const { notes } = useSelector((state) => state.notes);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isUserAuthenticated) {
            dispatch(getNotes());
        }
    }, [isUserAuthenticated]);

    const handleDeleteClick = (id) => {
        dispatch(deleteNote(id));
    };

    return (
        <div className="flex flex-col mt-19 px-6">
            <AddNote />
            <div className="m-5 flex justify-between flex-wrap">
                {notes?.map((note, index) => (
                    <Note
                        key={index}
                        title={note?.title}
                        problem={note?.problem}
                        solution={note?.solution}
                        tags={note?.tags}
                        references={note?.references}
                        handleDelete={() => handleDeleteClick(note?._id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default NotesContainer;
