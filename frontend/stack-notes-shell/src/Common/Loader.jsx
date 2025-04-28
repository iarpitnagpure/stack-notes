import { Spinner } from "@radix-ui/themes";
import React from "react";

const Loader =() => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Spinner size="3" />
        </div>
    );
};

export default Loader;