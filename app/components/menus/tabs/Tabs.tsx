"use client";
import React, { useState, useEffect } from 'react';
import Tab from './Tab';

interface TabData {
    key: string;
    label: string | React.ReactNode; 
    content: React.ReactNode;
}

interface TabsProps {
    tabs: TabData[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].key);
    const [isMobile, setIsMobile] = useState(false);

    const handleTabClick = (key: string) => {
        setActiveTab(key);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const filteredTabs = isMobile
        ? tabs.filter((tab) =>
              ['insights', 'orders', 'favorites', 'store', 'messages', 'brand_info', 'personal_info'].includes(tab.key)
          )
        : tabs;

    return (
        <div className="flex flex-col gap-4">
            {/* Horizontal scroll on small screens */}
            <div className="flex overflow-x-auto md:overflow-visible border-b-[#8D8D8D] border-b-[1px] justify-start md:justify-center items-center gap-2 md:gap-16 ">
    {filteredTabs.map((tab) => (
        <Tab
            key={tab.key}
            label={tab.label}
            isActive={tab.key === activeTab}
            onClick={() => handleTabClick(tab.key)}
        />
    ))}
</div>
            <div className="flex-grow">{filteredTabs.find((tab) => tab.key === activeTab)?.content}</div>
        </div>
    );
};

export default Tabs;



