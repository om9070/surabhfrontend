import React, { useRef } from 'react';
import { AiFillSave } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { MdDelete, MdOutlineFindReplace } from "react-icons/md";

interface ShopCategoryProps {
    title: string;
    bgImage: string | null;
    onImageChange: (file: File) => void;
}


export const ShopCategoryOne: React.FC<ShopCategoryProps> = ({ title, bgImage, onImageChange }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            onImageChange(file);
        }
    };

    return (
        <div className="relative h-full w-full">
            <div
                className="relative h-full w-full flex justify-center items-center flex-col bg-mediumGray"
                style={{
                    backgroundImage: bgImage ? `url(${bgImage})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: bgImage ? 'transparent' : '#8d8d8d',
                }}
            >
                <div className={`absolute inset-0 ${bgImage ? 'bg-black opacity-70' : 'bg-black opacity-20'}`} />

                <input
                    type="file"
                    accept="image/*"
                    id="fileInputOne"
                    hidden
                    ref={fileInputRef}
                    onChange={handleInputChange}
                />
                <label
                    htmlFor="fileInputOne"
                    className="text-white text-base text-center relative inline-block cursor-pointer"
                >
                    {bgImage ? (
                        <>
                            <span className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 text-3xl">
                                <MdOutlineFindReplace />
                            </span>
                            <p>Replace Image</p>
                        </>
                    ) : (
                        <>
                            <span className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 text-3xl">
                                <IoMdAdd />
                            </span>
                            Add a photo for this banner
                        </>
                    )}
                </label>
            </div>

            {/* Title and category tags */}
            <div className="flex absolute bottom-0 left-0 px-2 bg-white gap-2 py-1 justify-between w-[90%] h-[50px] z-20 flex-wrap">
                <div className="flex flex-col font-din text-[18px]">
                    {title}
                    <div className="hidden md:flex text-[13px] divide-x divide-gray font-din_medium">
                        <p className="px-2 text-gray text-xs">ALL</p>
                        <p className="px-2 text-gray text-xs">NEW</p>
                        <p className="px-2 text-gray text-xs">CLOTHING</p>
                        <p className="px-2 text-gray text-xs">ACCESSORIES</p>
                    </div>
                </div>
                <div>
                    <p className="text-gray underline font-din cursor-pointer">BROWSE</p>
                </div>
            </div>
        </div>
    );
};
export const ShopCategoryThree: React.FC<ShopCategoryProps> = ({ title, bgImage, onImageChange }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            onImageChange(file);
        }
    };

    return (
        <div className="relative h-full w-full">
            <div
                className="relative h-full w-full flex justify-center items-center flex-col bg-mediumGray"
                style={{
                    backgroundImage: bgImage ? `url(${bgImage})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: bgImage ? 'transparent' : '#8d8d8d',
                }}
            >
                <div className={`absolute inset-0 ${bgImage ? 'bg-black opacity-70' : 'bg-black opacity-20'}`} />

                <input
                    type="file"
                    accept="image/*"
                    id="fileInputTwo"
                    hidden
                    ref={fileInputRef}
                    onChange={handleInputChange}
                />
                <label
                    htmlFor="fileInputTwo"
                    className="text-white text-base text-center relative inline-block cursor-pointer"
                >
                    {bgImage ? (
                        <>
                            <span className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 text-3xl">
                                <MdOutlineFindReplace />
                            </span>
                            <p>Replace Image</p>
                        </>
                    ) : (
                        <>
                            <span className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 text-3xl">
                                <IoMdAdd />
                            </span>
                            Add a photo for this banner
                        </>
                    )}
                </label>
            </div>

            {/* Title and category tags */}
            <div className="flex absolute bottom-0 left-0 px-2 bg-white gap-2 py-1 justify-between w-[90%] h-[50px] z-20 flex-wrap">
                <div className="flex flex-col font-din text-[18px]">
                    {title}
                    <div className="hidden md:flex text-[13px] divide-x divide-gray font-din_medium">
                        <p className="px-2 text-gray text-xs">ALL</p>
                        <p className="px-2 text-gray text-xs">NEW</p>
                        <p className="px-2 text-gray text-xs">CLOTHING</p>
                        <p className="px-2 text-gray text-xs">ACCESSORIES</p>
                    </div>
                </div>
                <div>
                    <p className="text-gray underline font-din cursor-pointer">BROWSE</p>
                </div>
            </div>
        </div>
    );
};
export const ShopCategoryTwo: React.FC<ShopCategoryProps> = ({ title, bgImage, onImageChange }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            onImageChange(file);
        }
    };

    return (
        <div className="relative h-full w-full">
            <div
                className="relative h-full w-full flex justify-center items-center flex-col bg-mediumGray"
                style={{
                    backgroundImage: bgImage ? `url(${bgImage})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: bgImage ? 'transparent' : '#8d8d8d',
                }}
            >
                <div className={`absolute inset-0 ${bgImage ? 'bg-black opacity-70' : 'bg-black opacity-20'}`} />

                <input
                    type="file"
                    accept="image/*"
                    id="fileInputThree"
                    hidden
                    ref={fileInputRef}
                    onChange={handleInputChange}
                />
                <label
                    htmlFor="fileInputThree"
                    className="text-white text-base text-center relative inline-block cursor-pointer"
                >
                    {bgImage ? (
                        <>
                            <span className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 text-3xl">
                                <MdOutlineFindReplace />
                            </span>
                            <p>Replace Image</p>
                        </>
                    ) : (
                        <>
                            <span className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 text-3xl">
                                <IoMdAdd />
                            </span>
                            Add a photo for this banner
                        </>
                    )}
                </label>
            </div>

            {/* Title and category tags */}
            <div className="flex absolute bottom-0 left-0 px-2 bg-white gap-2 py-1 justify-between w-[90%] h-[50px] z-20 flex-wrap">
                <div className="flex flex-col font-din text-[18px]">
                    {title}
                    <div className="hidden md:flex text-[13px] divide-x divide-gray font-din_medium">
                        <p className="px-2 text-gray text-xs">ALL</p>
                        <p className="px-2 text-gray text-xs">NEW</p>
                        <p className="px-2 text-gray text-xs">CLOTHING</p>
                        <p className="px-2 text-gray text-xs">ACCESSORIES</p>
                    </div>
                </div>
                <div>
                    <p className="text-gray underline font-din cursor-pointer">BROWSE</p>
                </div>
            </div>
        </div>
    );
};

