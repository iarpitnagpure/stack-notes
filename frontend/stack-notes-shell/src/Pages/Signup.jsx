import React from "react";
import { Box, Button, Card, Checkbox, RadioGroup, Text, TextField } from "@radix-ui/themes";

const Signup = () => {
    return <div className="flex justify-center items-center h-screen">
        <Box maxWidth="550px" width="400px">
            <Card>
                <div className="p-2">
                    <div className="font-bold text-2xl mb-5">Create an account</div>
                    <div className="font-semibold text-xs mb-1">Name</div>
                    <TextField.Root radius="medium" placeholder="Enter your name" />
                    <div className="font-semibold text-xs mb-1 mt-4">Username</div>
                    <TextField.Root radius="medium" placeholder="Enter your username" />
                    <div className="font-semibold text-xs mb-1 mt-4">Password</div>
                    <TextField.Root radius="medium" placeholder="Enter your password" type="password" />
                    <div className="mt-4 ml-0.5">
                        <RadioGroup.Root defaultValue="1" name="gender" size="1" className="!flex !flex-row">
                            <RadioGroup.Item value="1">Male</RadioGroup.Item>
                            <RadioGroup.Item value="2" className="pl-3">Female</RadioGroup.Item>
                        </RadioGroup.Root>
                    </div>
                    <div className="flex justify-start items-center mt-4 ml-0.5">
                        <Checkbox size="2" defaultChecked />
                        <div className="text-xs pl-1">Use random avatar</div>
                    </div>
                    <div className="flex justify-end mt-8 mx-0.5">
                        <div className="mr-3">
                            <Button variant="surface" size="1">Already have an account</Button>
                        </div>
                        <div className="mb-3">
                            <Button variant="solid" size="1">Sign up</Button>
                        </div>
                    </div>
                </div>
            </Card>
        </Box>
    </div>
};

export default Signup;
