import React from "react";
import { Box, Button, Card, Flex, Link, Text } from "@radix-ui/themes";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";

const Note = ({ title, problem, solution = "", tags, references, handleDelete }) => {
    return (
        <Box width="450px" height="140px" className="m-3">
            <Card className="h-full">
                <Flex gap="3" align="center">
                    <Box className="w-full">
                        <div className="flex justify-between items-center">
                            <Text as="div" size="3" weight="bold">
                                {title}
                            </Text>
                            <div className="flex">
                                <Button
                                    variant="surface"
                                    size="1"
                                    className="!mr-1 !cursor-pointer"
                                >
                                    <EditIcon sx={{ width: "20px", height: "18px" }} />
                                </Button>
                                <Button
                                    variant="surface"
                                    color="crimson"
                                    size="1"
                                    className="!cursor-pointer"
                                    onClick={handleDelete}
                                >
                                    <DeleteOutlineOutlinedIcon
                                        sx={{ width: "px", height: "18px" }}
                                    />
                                </Button>
                            </div>
                        </div>
                        <Text as="div" size="2" weight="bold" className="pt-2">
                            {problem}
                        </Text>
                        <Text as="div" size="2" color="gray" className="pt-1">
                            {solution}
                        </Text>
                        {tags?.length ? (
                            <div className="flex flex-wrap pt-2 items-center">
                                <Text as="div" size="2" color="gray" className="pr-2">
                                    Tags:
                                </Text>
                                {tags.map((tag, index) => (
                                    <div
                                        key={index}
                                        className="text-[14px] px-3 py-1 bg-gray-200 text-gray-800 rounded-full cursor-pointer hover:bg-gray-300 transition"
                                    >
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <></>
                        )}
                        {references?.length ? (
                            <div className="flex flex-wrap pt-2 items-center">
                                <Text as="div" size="2" color="gray" className="pr-1">
                                    References:
                                </Text>
                                {references.map((reference, index) => (
                                    <Link key={index} size="3" className="!pr-1 !cursor-pointer">
                                        {reference}
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <></>
                        )}
                    </Box>
                </Flex>
            </Card>
        </Box>
    );
};

export default Note;
