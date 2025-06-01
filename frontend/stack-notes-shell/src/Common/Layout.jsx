import React, { lazy } from "react";
import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Avatar, Button, DropdownMenu, Tooltip } from "@radix-ui/themes";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { logoutUser } from "../Slices/AuthSlice";
import useThemeStore from "../Store/useThemeStore";

const Layout = () => {
    const { theme, toggleTheme } = useThemeStore();

    const { isUserAuthenticated, userInfo } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleLoggedOut = () => {
        sessionStorage.removeItem('loggedInUser');
        dispatch(logoutUser());
    }

    return (
        <div className="h-screen overflow-hidden p-2">
            <div className="flex justify-between absolute top-0 left-0 w-screen items-center px-8 py-5">
                <div className="text-2xl font-semibold cursor-pointer">Stack Notes</div>
                <div className="flex justify-end items-center absolute right-0 px-8">
                    {isUserAuthenticated ? (
                        <Tooltip content="Profile">
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                    <Button variant="ghost" className="!mr-6">
                                        <Avatar
                                            size="2"
                                            src={userInfo?.profilepic}
                                            fallback={userInfo?.name[0]}
                                            radius="full"
                                        />
                                    </Button>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content>
                                    <DropdownMenu.Sub>
                                        <DropdownMenu.SubTrigger>
                                            User Details
                                        </DropdownMenu.SubTrigger>
                                        <DropdownMenu.SubContent>
                                            <DropdownMenu.Item
                                                disabled={true}
                                                shortcut={userInfo?.name}
                                            >
                                                Name
                                            </DropdownMenu.Item>
                                            <DropdownMenu.Item
                                                disabled={true}
                                                shortcut={userInfo?.username}
                                            >
                                                Username
                                            </DropdownMenu.Item>
                                            <DropdownMenu.Item
                                                disabled={true}
                                                shortcut={userInfo?.gender}
                                            >
                                                Gender
                                            </DropdownMenu.Item>
                                        </DropdownMenu.SubContent>
                                    </DropdownMenu.Sub>
                                    <DropdownMenu.Item
                                        shortcut={theme === "light" ? "Light Mode" : "Dark Mode"}
                                        onClick={() => toggleTheme()}
                                    >
                                        Theme
                                    </DropdownMenu.Item>
                                    <DropdownMenu.Separator />
                                    <DropdownMenu.Item color="red" onClick={handleLoggedOut}>Logout</DropdownMenu.Item>
                                </DropdownMenu.Content>
                            </DropdownMenu.Root>
                        </Tooltip>
                    ) : (
                        <Tooltip content={theme === "light" ? "Dark Mode" : "Light Mode"}>
                            <Button variant="ghost" onClick={() => toggleTheme()}>
                                {theme === "light" ? (
                                    <DarkModeOutlinedIcon />
                                ) : (
                                    <LightModeOutlinedIcon />
                                )}
                            </Button>
                        </Tooltip>
                    )}
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
