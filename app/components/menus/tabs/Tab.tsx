import React from 'react';

interface TabProps {
    label: string |React.ReactNode;
    isActive: boolean;
    onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
    return (
        <div
            className={`cursor-pointer py-1 px-2 text-sm text-[#8D8D8D] ${isActive ? "text-[#000000] font-din border-b-[#4273F5] border-b-[2px] transition-border delay-150 duration-300 ease-in-out" : ""}`}
            onClick={onClick}
        >
            {label}
        </div>
    );
};

export default Tab;
