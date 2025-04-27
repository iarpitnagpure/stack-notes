import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

const LoginComponent = lazy(() => import('./Components/Login'));
const SignupComponent = lazy(() => import('./Components/Signup'));

const App = () => {
    return (
        <Suspense fallback={'Loading'}>
            <Routes>
                <Route path="/" element={<LoginComponent />} />
                <Route path="/signup" element={<SignupComponent />} />
            </Routes>
        </Suspense>
    );
};

export default App;

