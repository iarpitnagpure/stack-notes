import React, { lazy, Suspense, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setUserAuth } from "../Slices/AuthSlice";
import Loader from "../Common/Loader";
const NoteApp = lazy(() => import("stacknotes/NoteApp"));

const Dashboard = () => {
    const { isUserAuthenticated } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const verifyUserAuthentication = () => {
        const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

        if (isUserAuthenticated) {
            // Call notes api
        } else if (loggedInUser?.username) {
            dispatch(setUserAuth(loggedInUser));
        } else {
            redirectToLogin();
        }
    };

    const redirectToLogin = () => {
        navigate('/');
    };

    useEffect(() => {
        verifyUserAuthentication();
    }, [isUserAuthenticated]);

    return <Suspense fallback={<Loader />}>
        <NoteApp isUserAuthenticated={isUserAuthenticated} />
    </Suspense>
};

export default Dashboard;