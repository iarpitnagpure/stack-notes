import React from "react";
import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Button, Tooltip } from "@radix-ui/themes";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { toggleTheme } from "../Slices/ThemeSlice";

const Layout = () => {
    const { theme } = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    return (
        <div className="h-screen overflow-hidden p-2">
            <div className="flex justify-end px-8 py-3 absolute right-0">
                <Tooltip content={theme === 'light' ? 'Dark Mode' : 'Light Mode'}>
                    <Button variant="ghost" onClick={() => dispatch(toggleTheme())}>
                        {theme === 'light' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
                    </Button>
                </Tooltip>
            </div>
            <main>
                <Outlet />
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </main>
        </div>
    );
};

export default Layout;
