import React, { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router';
import { Theme } from "@radix-ui/themes";
import Loader from "./Common/Loader";
import useThemeStore from "./Store/useThemeStore";

const LayoutComponent = lazy(() => import('./Common/Layout'));
const LoginComponent = lazy(() => import('./Pages/Login'));
const SignupComponent = lazy(() => import('./Pages/Signup'));
const DashboardComponent = lazy(() => import('./Pages/Dashboard'));

const App = () => {
     const { theme } = useThemeStore();

    return (
        <Theme appearance={theme}>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<LayoutComponent />}>
                        <Route index element={<LoginComponent />} />
                        <Route path="signup" element={<SignupComponent />} />
                        <Route path="dashboard" element={<DashboardComponent />} />
                    </Route>
                </Routes>
            </Suspense>
        </Theme>
    );
};

export default App;

