import React from "react";
import { Box, Button, Card, Flex, Link, Text } from "@radix-ui/themes";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";

const Note = ({
    title,
    problem,
    solution = "",
    tags,
    references,
    handleDelete,
    handleEdit,
}) => {
    return (
        <Box width="465px" height="200px" className="mt-3 mr-3">
            <Card className="h-full">
                <Flex gap="3" align="center" className="h-full">
                    <Box className="w-full h-full">
                        <div className="h-3/6">
                            <div className="flex justify-between items-center">
                                <Text as="div" size="3" weight="bold">
                                    {title}
                                </Text>
                                <div className="flex">
                                    <Button
                                        variant="surface"
                                        size="1"
                                        className="!mr-1 !cursor-pointer"
                                        onClick={handleEdit}
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
                                Problem: {problem}
                            </Text>
                            <Text as="div" size="2" color="gray" className="pt-1">
                                Solution: {solution}
                            </Text>
                        </div>
                        <div className="h-3/6 flex flex-col justify-end mb-2">
                            {tags?.length ? (
                                <div className="flex flex-wrap pt-2 items-center">
                                    <Text as="div" size="2" color="gray" className="pr-2">
                                        Tags:
                                    </Text>
                                    {tags.map((tag, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center px-3 py-1 mr-2 w-max text-[12px] h-[25px]
                                                     bg-gray-200 
                                                     text-gray-800 
                                                     rounded-full 
                                                     cursor-pointer 
                                                     border-1 border-gray-500
                                                     hover:bg-gray-300 transition"
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
                                        <div
                                            key={index}
                                            className="flex items-center px-3 py-1 mr-2 w-max text-[12px] h-[25px]
                                                     bg-blue-500 rounded-md 
                                                     border-1 border-blue-900
                                                     cursor-pointer
                                                     hover:bg-blue-400 transition"
                                        >
                                            <Link className="!pr-1 !cursor-pointer !text-white">
                                                {reference}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    </Box>
                </Flex>
            </Card>
        </Box>
    );
};

export default Note;
