import React from 'react';
import Image from 'next/image';

interface categoryProps {
    image?: string
    title: string
}

const Category: React.FC<categoryProps> = ({ image, title }) => {
    return (
        <div className="relative h-full w-full">
            {image ? (
                <Image
                    src={`/images/${image}`}
                    alt="Category Image"
                    fill={true}
                    objectFit='cover'
                />
            ) : (
                <div className="flex justify-center items-center h-full w-full bg-gray-300">
                    <span className="text-6xl text-gray-500">+</span>
                </div>
            )}

            <div className="flex absolute bottom-0 left-0 px-4 bg-white gap-2 py-4 justify-between  w-[90%] h-[70px] z-20 flex-wrap">
                <div className="flex flex-col font-din text-[18px]">
                    {title}
                    <div className="hidden md:flex text-[13px] divide-x divide-gray font-din_medium">
                        <p className="px-2">ALL</p>
                        <p className="px-2">NEW</p>
                        <p className="px-2">CLOTHING</p>
                        <p className="px-2">ACCESSORIES</p>
                    </div>
                </div>
                <div>
                    <p className="text-blue underline font-din cursor-pointer">BROWSE</p>
                </div>
            </div>
        </div>
    );
}

export default Category;







