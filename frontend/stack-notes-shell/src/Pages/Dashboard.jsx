import React, { lazy, Suspense, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setUserAuth } from "../Slices/AuthSlice";
import Loader from "../Common/Loader";
import useThemeStore from "../Store/useThemeStore";
const NoteApp = lazy(() => import("notesAppPackage/NoteApp"));

const Dashboard = () => {
    const { isUserAuthenticated } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const { theme } = useThemeStore();

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
        <NoteApp isUserAuthenticated={isUserAuthenticated} theme={theme} />
    </Suspense>
};

export default Dashboard;