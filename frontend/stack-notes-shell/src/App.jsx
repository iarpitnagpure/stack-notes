import React, { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router';
import { Theme } from "@radix-ui/themes";
import Loader from "./Common/Loader";
import useThemeProvider from "./utils/useThemeProvider";

const LayoutComponent = lazy(() => import('./Common/Layout'));
const LoginComponent = lazy(() => import('./Pages/Login'));
const SignupComponent = lazy(() => import('./Pages/Signup'));

const App = () => {
    const { theme } = useThemeProvider();

    return (
        <Theme appearance={theme}>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<LayoutComponent />}>
                        <Route index element={<LoginComponent />} />
                        <Route path="/signup" element={<SignupComponent />} />
                    </Route>
                </Routes>
            </Suspense>
        </Theme>
    );
};

export default App;

