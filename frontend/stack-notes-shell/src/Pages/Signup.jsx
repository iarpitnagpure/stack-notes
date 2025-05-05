import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
    Box,
    Button,
    Card,
    Checkbox,
    RadioGroup,
    TextField,
} from "@radix-ui/themes";
import { toast } from "react-toastify";

const Signup = () => {
    const [signupInfo, setSignupInfo] = useState({
        name: "",
        username: "",
        password: "",
        gender: "male",
        useRandomAvatar: true,
    });
    const navigate = useNavigate();

    const handleSignupInfoChange = (value, field) => {
        setSignupInfo((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSignupClick = () => {
        const { name, username, password } = signupInfo;
        if (!name || !username || !password) {
            toast.error("Pleae enter all required fields");
            return;
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <Box maxWidth="550px" width="400px">
                <Card>
                    <div className="p-2">
                        <div className="font-bold text-2xl mb-5">Create an account</div>
                        <div className="font-semibold text-xs mb-1">Name</div>
                        <TextField.Root
                            radius="medium"
                            placeholder="Enter your name"
                            onChange={(e) => handleSignupInfoChange(e.target.value, "name")}
                        />
                        <div className="font-semibold text-xs mb-1 mt-4">Username</div>
                        <TextField.Root
                            radius="medium"
                            placeholder="Enter your username"
                            onChange={(e) =>
                                handleSignupInfoChange(e.target.value, "username")
                            }
                        />
                        <div className="font-semibold text-xs mb-1 mt-4">Password</div>
                        <TextField.Root
                            radius="medium"
                            placeholder="Enter your password"
                            type="password"
                            onChange={(e) =>
                                handleSignupInfoChange(e.target.value, "password")
                            }
                        />
                        <div className="mt-4 ml-0.5">
                            <RadioGroup.Root
                                defaultValue="male"
                                name="gender"
                                size="1"
                                className="!flex !flex-row"
                                onValueChange={(value) =>
                                    handleSignupInfoChange(value, "gender")
                                }
                            >
                                <RadioGroup.Item value="male">Male</RadioGroup.Item>
                                <RadioGroup.Item value="female" className="pl-3">
                                    Female
                                </RadioGroup.Item>
                            </RadioGroup.Root>
                        </div>
                        <div className="flex justify-start items-center mt-4 ml-0.5">
                            <Checkbox
                                size="2"
                                defaultChecked
                                onCheckedChange={(value) =>
                                    handleSignupInfoChange(value, "useRandomAvatar")
                                }
                            />
                            <div className="text-xs pl-1.5">Use random avatar</div>
                        </div>
                        <div className="flex justify-end mt-8 mx-0.5">
                            <div className="mr-3">
                                <Button
                                    variant="surface"
                                    size="1"
                                    onClick={() => navigate("/")}
                                >
                                    Already have an account
                                </Button>
                            </div>
                            <div className="mb-3">
                                <Button variant="solid" size="1" onClick={handleSignupClick}>
                                    Sign up
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </Box>
        </div>
    );
};

export default Signup;
