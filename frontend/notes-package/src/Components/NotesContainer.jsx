import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../Slices/NotesSlice";

const NotesContainer = ({ isUserAuthenticated = true }) => {
    const { notes } = useSelector((state) => state.notes);
    console.log('Notes--->', notes);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isUserAuthenticated) {
            dispatch(getNotes());
        }
    }, [isUserAuthenticated]);

    return (
        <div className="m-5">Notes package Test</div>
    );
};

export default NotesContainer;

