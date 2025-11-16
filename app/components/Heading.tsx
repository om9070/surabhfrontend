import React from 'react';

interface TitleProps {
    title: string;
    description?: string;
    full?: boolean;

}

const Heading: React.FC<TitleProps> = ({ title, description, full }) => {
    return (
        <div className={`flex flex-col md:mx-10 md:my-10 p-4 gap-4`}>
            <h1 className={`relative flex  flex-col ${full ? 'm-auto w-[100%]' : 'w-1/2'}  `}>
                <span className="text-black  font-din text-[40px] md:text-heading z-50">{title}</span>
                <span className={`hidden md:block absolute bg-blue left-[50px] right-[-20px] top-[28px] h-[49px] w-auto`}></span>

            </h1>
            <div className={`w-auto m-auto" p-x-5`}>{description}</div>
        </div>
    );
}

export default Heading;