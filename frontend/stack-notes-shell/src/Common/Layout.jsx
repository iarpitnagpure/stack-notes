import React from "react";
import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Avatar, Button, Tooltip } from "@radix-ui/themes";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { toggleTheme } from "../Slices/ThemeSlice";

const Layout = () => {
    const { theme } = useSelector((state) => state.theme);
    const { isUserAuthenticated, userInfo } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    return (
        <div className="h-screen overflow-hidden p-2">
            <div className="flex justify-between items-center px-8 py-3">
                <div className="text-2xl font-semibold cursor-pointer">Stack Notes</div>
                <div className="flex justify-end items-center absolute right-0 px-8">
                    {isUserAuthenticated && <Tooltip content="Profile">
                        <Button variant="ghost" className="!mr-6">
                            <Avatar
                                size="2"
                                src={userInfo?.profilepic}
                                fallback={userInfo?.name[0]}
                                radius="full"
                            />
                        </Button>
                    </Tooltip>}
                    <Tooltip content={theme === 'light' ? 'Dark Mode' : 'Light Mode'}>
                        <Button variant="ghost" onClick={() => dispatch(toggleTheme())}>
                            {theme === 'light' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
                        </Button>
                    </Tooltip>
                </div>
            </div>
            <main>
                <Outlet />
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
            </main>
        </div>
    );
};

export default Layout;
