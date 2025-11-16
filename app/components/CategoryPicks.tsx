import React from 'react';
import Image from 'next/image';

interface categoryProps {
    image: string
    title: string
    hasDimensions?: boolean
    height?: number | string
    width?: number | string
}

const Category: React.FC<categoryProps> = ({ image, title, hasDimensions, height, width }) => {
    return (
        <div className={`relative h-[573px]'}`}>
            <div className="overflow-hidden">
                <Image
                    src={`/images/${image}`}
                    alt="Product Image"
                    width={694}
                    height={274}
                    layout="responsive"
                />
            </div>
            <div className="flex absolute bottom-0 left-0 bg-white gap-2 py-3 justify-between pr-5 w-[90%] h-[70px] z-50">
                <div className="flex flex-col font-din text-custom">
                    {title}
                    <div className="flex text-sm divide-x divide-gray font-din_medium">
                        <p className="px-2">ALL</p>
                        <p className="px-2">NEW</p>
                        <p className="px-2">CLOTHING</p>
                        <p className="px-2">ACCESSORIES</p>
                    </div>
                </div>
                <div>
                    <p className="text-blue underline font-din">BROWSE</p>
                </div>
            </div>
        </div>
    );
}

export default Category;


