import React from "react";
import { Box, Button, Card, Text, TextField } from "@radix-ui/themes";

const Login = () => {
    return <div className="flex justify-center items-center h-screen">
        <Box maxWidth="550px" width="400px">
            <Card>
                <div className="p-2">
                    <div className="font-bold text-2xl mb-5">Sign in</div>
                    <div className="font-semibold text-xs mb-1">Username</div>
                    <TextField.Root radius="medium" placeholder="Enter your username" />
                    <div className="font-semibold text-xs mb-1 mt-4">Password</div>
                    <TextField.Root radius="medium" placeholder="Enter your password" type="password" />
                    <div className="flex justify-end mt-8 mx-0.5">
                        <div className="mr-3">
                            <Button variant="surface" size="1">Create an account</Button>
                        </div>
                        <div className="mb-3">
                            <Button variant="solid" size="1">Sign in</Button>
                        </div>
                    </div>
                </div>
            </Card>
        </Box>
    </div>
};

export default Login;
