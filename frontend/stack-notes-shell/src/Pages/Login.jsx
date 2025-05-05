import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Box, Button, Card, TextField } from "@radix-ui/themes";
import { toast } from "react-toastify";

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleLoginInfoChange = (value, field) => {
        setLoginInfo((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleLoginClick = () => {
        const { username, password } = loginInfo;
        if (!username || !password) {
            toast.error('Field username and password is required');
            return;
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <Box maxWidth="550px" width="400px">
                <Card>
                    <div className="p-2">
                        <div className="font-bold text-2xl mb-5">Sign in</div>
                        <div className="font-semibold text-xs mb-1">Username</div>
                        <TextField.Root
                            radius="medium"
                            placeholder="Enter your username"
                            onChange={(e) =>
                                handleLoginInfoChange(e.target.value, "username")
                            }
                        />
                        <div className="font-semibold text-xs mb-1 mt-4">Password</div>
                        <TextField.Root
                            radius="medium"
                            placeholder="Enter your password"
                            type="password"
                            onChange={(e) =>
                                handleLoginInfoChange(e.target.value, "password")
                            }
                        />
                        <div className="flex justify-end mt-8 mx-0.5">
                            <div className="mr-3">
                                <Button
                                    variant="surface"
                                    size="1"
                                    onClick={() => navigate("/signup")}
                                >
                                    Create an account
                                </Button>
                            </div>
                            <div className="mb-3">
                                <Button variant="solid" size="1" onClick={handleLoginClick}>
                                    Sign in
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </Box>
        </div>
    );
};

export default Login;
