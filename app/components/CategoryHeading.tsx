import React from 'react';
import { FaPencilAlt } from 'react-icons/fa'; // Import your icon

interface TitleProps {
    title: string;
    description?: string;
    full?: boolean;
}

const CategoryHeading: React.FC<TitleProps> = ({ title, description, full }) => {
    return (
        <div className={`flex flex-col md:ml-4 md:mr-8 p-4 gap-4`}>  {/* Adjust margins */}
            <h1 className={`relative flex flex-col ${full ? 'm-auto w-[100%]' : 'w-1/2'}`}>
                <span className="text-black font-din text-[40px] md:text-heading z-50">{title}</span>
                <span className={`hidden md:block absolute bg-gray left-[50px] right-[-70px] top-[50px] h-[49px] w-auto`}></span>
            </h1>
            <div className={`w-auto m-auto px-5 flex items-center justify-between`}>
                <span>{description}</span>
                
            </div>
        </div>
    );
}

export default CategoryHeading;
