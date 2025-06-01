import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { deleteNote, getNotes } from "../Slices/NotesSlice";
import Note from "./Note";
import AddNote from "./AddNote";

const NotesContainer = ({ isUserAuthenticated = true }) => {
    const [isNoteEditMode, setIsNoteEditMode] = useState(false);
    const [editNoteInfo, setEditNoteInfo] = useState(null);

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

    const handleEditClick = (note) => {
        setIsNoteEditMode(true);
        setEditNoteInfo(note);
    };

    return (
        <div className="flex flex-col mt-19 px-6">
            <AddNote isEditMode={isNoteEditMode} editNoteInfo={editNoteInfo} />
            <div className="flex justify-start flex-wrap">
                {notes?.map((note, index) => (
                    <Note
                        key={index}
                        title={note?.title}
                        problem={note?.problem}
                        solution={note?.solution}
                        tags={note?.tags}
                        references={note?.references}
                        handleDelete={() => handleDeleteClick(note?._id)}
                        handleEdit={() => handleEditClick(note)}
                    />
                ))}
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};

export default NotesContainer;
