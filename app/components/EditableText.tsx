"use client";

import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

interface EditableTextProps {
    initialText: string;
    textStyle?: string;
}

const EditableText: React.FC<EditableTextProps> = ({ initialText, textStyle }) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [text, setText] = useState<string>(initialText);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <div className="flex items-center">
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="border-2 border-[#FFA000] rounded p-1"
                        style={{ width: `${text.length + 1}ch` }}
                    />
                    <button onClick={handleSaveClick} className="ml-2">
                        Save
                    </button>
                </div>
            ) : (
                <div className="flex items-center">
                    <span className={`block ${textStyle}`}>{text}</span>
                    <FaPencilAlt
                        className="text-sm ml-2 cursor-pointer text-gray-600"
                        onClick={handleEditClick}
                    />
                </div>
            )}
        </div>
    );
};

export default EditableText;
