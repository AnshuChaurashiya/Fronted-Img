import React from "react";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-full w-full">
            <div className="animate-spin border-8 border-t-transparent border-blue-500 w-16 h-16 rounded-full"></div>
        </div>
    );
};

export default Loading;
