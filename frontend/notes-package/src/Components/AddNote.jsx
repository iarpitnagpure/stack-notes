import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AlertDialog, Button, Flex, Link, TextField } from "@radix-ui/themes";
import { addNote, updateNote } from "../Slices/NotesSlice";
import { toast } from "react-toastify";

const AddNote = ({ isEditMode, editNoteInfo }) => {
    const [showDialog, setShowDialog] = useState(false);
    const [noteInfo, setNoteInfo] = useState({
        title: "",
        problem: "",
        solution: "",
        tags: [],
        references: [],
    });
    const [tagInput, setTagInput] = useState("");
    const [refernceInput, setRefernceInput] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (isEditMode) {
            setShowDialog(true);
            setNoteInfo(
                {
                    title: editNoteInfo?.title,
                    problem: editNoteInfo?.problem,
                    solution: editNoteInfo?.solution,
                    tags: editNoteInfo?.tags,
                    references: editNoteInfo?.references,
                }
            );
        }
    }, [isEditMode, editNoteInfo]);

    const handleTagInputKeyDown = (e) => {
        const newTag = tagInput.trim();
        if (e.key === "Enter" && newTag) {
            e.preventDefault();
            handleNoteInfoChange([...noteInfo?.tags, newTag], "tags");
            setTagInput("");
        }
    };

    const handleReferenceInputKeyDown = (e) => {
        const newReference = refernceInput.trim();
        if (e.key === "Enter" && newReference) {
            e.preventDefault();
            handleNoteInfoChange(
                [...noteInfo?.references, newReference],
                "references"
            );
            setRefernceInput("");
        }
    };

    const handleNoteInfoChange = (value, field) => {
        setNoteInfo((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const removeTag = (index) => {
        const newTags = noteInfo.tags.filter((_, i) => i !== index);
        handleNoteInfoChange(newTags, "tags");
    };

    const removeReference = (index) => {
        const newReferences = noteInfo.references.filter((_, i) => i !== index);
        handleNoteInfoChange(newReferences, "references");
    };

    const handleAddClick = () => {
        const { title, problem } = noteInfo;
        if (title && problem) {
            dispatch(addNote(noteInfo));
            setShowDialog(false);
            resetNoteInfo();
        } else {
            toast.error("Title and problem is required field");
        }
    };

    const handleUpdatedClick = () => {
        const { title, problem } = noteInfo;
        if (title && problem) {
            dispatch(updateNote({ ...noteInfo, id: editNoteInfo._id }));
            setShowDialog(false);
            resetNoteInfo();
        } else {
            toast.error("Title and problem is required field");
        }
    };

    const resetNoteInfo = () => {
        setNoteInfo({
            title: "",
            problem: "",
            solution: "",
            tags: [],
            references: [],
        });
    };

    const handleCancelClick = () => {
        setShowDialog(false);
        resetNoteInfo();
    };

    return (
        <>
            <Button size="2" className="!w-[120px] !cursor-pointer !mb-4" onClick={() => setShowDialog(true)}>
                Create Note
            </Button>
            <AlertDialog.Root open={showDialog}>
                <AlertDialog.Content maxWidth="450px">
                    <AlertDialog.Title>New Note</AlertDialog.Title>
                    <div className="font-semibold text-xs pl-0.5 mb-1 mt-5">
                        Title<span className="text-red-500 pl-0.5">*</span>
                    </div>
                    <TextField.Root
                        radius="medium"
                        placeholder="Enter note title"
                        onChange={(e) => handleNoteInfoChange(e.target.value, "title")}
                        value={noteInfo.title}
                    />
                    <div className="font-semibold text-xs pl-0.5 mt-3 mb-1">
                        Problem<span className="text-red-500 pl-0.5">*</span>
                    </div>
                    <TextField.Root
                        radius="medium"
                        placeholder="Enter problem that you are facing"
                        onChange={(e) => handleNoteInfoChange(e.target.value, "problem")}
                        value={noteInfo.problem}
                    />
                    <div className="font-semibold text-xs pl-0.5 mt-3 mb-1">Solution</div>
                    <TextField.Root
                        radius="medium"
                        placeholder="Enter solution if you have"
                        onChange={(e) => handleNoteInfoChange(e.target.value, "solution")}
                        value={noteInfo.solution}
                    />
                    <div className="font-semibold text-xs pl-0.5 mt-3 mb-1">Tags</div>
                    <TextField.Root
                        radius="medium"
                        placeholder="Enter tag and press Enter"
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyDown={handleTagInputKeyDown}
                        value={tagInput}
                    />
                    <div className="flex flex-wrap mt-2">
                        {noteInfo.tags.map((tag, index) => (
                            <div
                                key={index}
                                className="flex items-center mt-1 px-3 py-1 mr-2 w-max text-[12px] h-[25px]
                                     bg-gray-200 
                                     text-gray-800 
                                     rounded-full 
                                     cursor-pointer 
                                     border-1 border-gray-500
                                     hover:bg-gray-300 transition"
                            >
                                <span>{tag}</span>
                                <button
                                    className="ml-2 text-blue-500 hover:text-red-500"
                                    onClick={() => removeTag(index)}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="font-semibold text-xs pl-0.5 mt-3 mb-1">References</div>
                    <TextField.Root
                        radius="medium"
                        placeholder="Enter reference and press Enter"
                        onChange={(e) => setRefernceInput(e.target.value)}
                        onKeyDown={handleReferenceInputKeyDown}
                        value={refernceInput}
                    />
                    <div className="flex flex-wrap mt-2">
                        {noteInfo.references.map((reference, index) => (
                            <div
                                key={index}
                                className="flex items-center mt-1 px-3 py-1 mr-2 w-max text-[12px] h-[25px]
                                          bg-blue-500 rounded-md 
                                          border-1 border-blue-900
                                          cursor-pointer
                                          hover:bg-blue-400 transition"
                            >
                                <Link className="!pr-1 !cursor-pointer !text-white">
                                    {reference}
                                </Link>
                                <button
                                    className="ml-2 text-white hover:text-red-500"
                                    onClick={() => removeReference(index)}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                    <Flex gap="3" mt="6" justify="end">
                        <AlertDialog.Cancel>
                            <Button variant="soft" color="gray" onClick={handleCancelClick}>
                                Cancel
                            </Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                            <Button variant="solid" onClick={isEditMode ? handleUpdatedClick : handleAddClick}>{isEditMode ? 'Update' : 'Add'}</Button>
                        </AlertDialog.Action>
                    </Flex>
                </AlertDialog.Content>
            </AlertDialog.Root>
        </>
    );
};

export default AddNote;
