import React from 'react';
import { cn } from "@/lib/utils"; // Import your utility function if needed

interface HighlightedHeadingProps {
    title: string;
    bgColor?: string; // Background color class
    bgPosition?: string; // Position for the background
    bgHeight?: string; // Height for the background
    bgWidth?: string; // Width for the background
    titleSize?: string; // Size for the title text
}

const HighlightedHeading: React.FC<HighlightedHeadingProps> = ({
    title,
    bgColor = 'bg-gray', // Default background color
    bgPosition = 'top-[30px]', // Default position for the background
    bgHeight = 'h-[30px]', // Default height for the background
    bgWidth = 'w-[90%]', // Default width for the background
    titleSize = 'text-main_title' // Default title size
}) => {
    return (
        <h1 className="relative flex flex-col w-[100%] m-auto justify-center items-center">
            <span className={`text-black font-din z-50 text-center ${titleSize}`}>{title}</span>
            <span className={`absolute hidden md:block ${bgColor} ${bgPosition} ${bgHeight} ${bgWidth} ml-8 md:ml-20`} />
        </h1>
    );
};

export default HighlightedHeading;
