"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CustomSelect } from '@/app/components/ui/Select';
import { MultiSelect } from './ui/Multiselect';
import { FiPlus, FiTrash, FiEdit } from 'react-icons/fi';
import { ChromePicker } from "react-color";
import EditableText from "../components/EditableText";


interface SingleItemProps {
    isCustomizable?: boolean;
}

const SingleItem: React.FC<SingleItemProps> = ({ isCustomizable }) => {
    const [selectedQuantities, setSelectedQuantities] = useState<string[]>([]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [imageList, setImageList] = useState<{ src: string; alt: string }[]>([]);
    const [colorList, setColorList] = useState<string[]>([]);
    const [selectedColor, setSelectedColor] = useState<string>("#ffffff");
    const [showColorPicker, setShowColorPicker] = useState(false);

    const handleRemoveColor = (index: number) => {
        setColorList((prevList) => prevList.filter((_, i) => i !== index));
    };

    const handleColorChange = (color: any) => {
        setSelectedColor(color.hex);
    };


    useEffect(() => {
        console.log('Selected Quantities:', selectedQuantities);
    }, [selectedQuantities]);

    const handleAddColor = () => {
        if (selectedColor && !colorList.includes(selectedColor)) {
            setColorList((prevColors) => [...prevColors, selectedColor]);
        }
    };

    const sizeOptions = [
        { label: 'Small', value: 'Small' },
        { label: 'Medium', value: 'Medium' },
        { label: 'Large', value: 'Large' },
        { label: 'X-Large', value: 'X-Large' },
        { label: 'XX-Large', value: 'XX-Large' },
    ];

    const quantityOptions = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
    ];

    const handleAddPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const newImage = { src: URL.createObjectURL(file), alt: file.name };
            setImageList((prevList) => [...prevList, newImage]);
        }
    };

    const handleRemovePhoto = (index: number) => {
        setImageList((prevList) => prevList.filter((_, i) => i !== index));
    };

    const handleReplacePhoto = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newImageList = [...imageList];
                newImageList[index] = { src: reader.result as string, alt: file.name };
                setImageList(newImageList);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col gap-10 relative">
            <div className="md:h-auto h-auto flex flex-col md:flex-row gap-4">
                <div
                    className={`h-[350px] w-[300px] overflow-hidden relative m-4 flex items-center justify-center ${imageList.length === 0 ? 'bg-[#8d8d8d]' : ''}`}
                >
                    {imageList.length > 0 ? (
                        <Image
                            className="absolute inset-0 object-cover w-full h-full"
                            src={imageList[0].src}
                            alt="Product image"
                            width={300}
                            height={350}
                        />
                    ) : (
                        <p className="text-white text-center">No image uploaded</p>
                    )}
                </div>

                <div className="md:w-[65%] flex flex-col gap-8">
                    <EditableText
                        initialText={"ITEM NAME"}
                        textStyle="font-din md:text-itemsHeading md:text-left text-center"
                    />
                    <EditableText
                        initialText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
                        textStyle="text-xs tracking-widest"
                    />
                    <div className="flex gap-11">
                        <div>
                            <MultiSelect
                                options={quantityOptions}
                                selectedValues={selectedQuantities}
                                onChange={setSelectedQuantities}
                                placeholder="Select quantities"
                                width="w-48"
                            />
                        </div>
                        <div>
                            <MultiSelect
                                options={sizeOptions}
                                selectedValues={selectedSizes}
                                onChange={setSelectedSizes}
                                placeholder="Select sizes"
                                width="w-48"
                            />

                        </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                        {colorList.map((color, index) => (
                            <div
                                key={index}
                                className="relative h-[60px] w-[60px] border rounded flex items-center justify-center"
                            >
                                <div
                                    style={{ backgroundColor: color }}
                                    className="w-full h-full"
                                />
                                {/* <button onClick={() => handleRemoveColor(index)} className="absolute top-0 right-0">
                                    <FiTrash />
                                </button> */}
                                <label
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleRemoveColor(index);
                                    }}
                                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 z-10 cursor-pointer"
                                >
                                    <FiTrash size={14} />
                                </label>

                            </div>
                        ))}
                        <div className="relative
                         flex flex-col h-[60px] w-[60px] 
                         border-dotted border-2
                         border-[#8d8d8d] items-center 
                         justify-center text-[#8d8d8d]
                          cursor-pointer p-2"
                            onClick={(e) => {
                                setShowColorPicker(true);
                            }}
                        >
                            <FiPlus size={15} />
                            <p className="text-xs">Color</p>
                        </div>
                        {showColorPicker && (
                            <div className='flex flex-col gap-4'>

                                <ChromePicker
                                    color={selectedColor}
                                    onChange={handleColorChange}
                                />
                                <button
                                    className="mt-2 p-1 bg-red-500 text-white text-xs rounded"
                                    onClick={(e) => {
                                        handleAddColor();
                                        setShowColorPicker(false);
                                    }}
                                >
                                    Close Picker
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex m-4">
                <div className="flex justify-center items-start gap-4">
                    {imageList.map((image, index) => (
                        <div key={index} className="relative h-[80px] w-[100px]">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={80}
                                height={141}
                                className="cursor-pointer h-[14vh] w-full object-cover"
                            />
                            <label
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemovePhoto(index);
                                }}
                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 z-10"
                            >
                                <FiTrash size={14} />
                            </label>

                            <label className="absolute top-0 left-0 bg-green-500 text-white rounded-full p-1 z-10 cursor-pointer">
                                <FiEdit size={14} />
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => handleReplacePhoto(index, e)}
                                />
                            </label>
                        </div>
                    ))}

                    <div className="flex flex-col h-[100px] w-[80px] border-dotted border-2 border-[#8d8d8d] items-center justify-center text-[#8d8d8d] cursor-pointer ml-4 relative">
                        <input
                            type="file"
                            accept="image/*"
                            className="absolute opacity-0 cursor-pointer w-full h-full"
                            onChange={handleAddPhoto}
                        />
                        <FiPlus size={30} />
                        <p className="text-xs">Add Image</p>
                    </div>
                </div>

                {!isCustomizable && (
                    <div className="md:w-[65%] flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 md:mt-0 mt-4">
                        <button type="submit" className="text-black py-2 font-bold px-4 md:px-4 text-xs hover:bg-blue-600">
                            ADD TO MY WISHLIST
                        </button>
                        <button type="submit" className="text-black py-2 font-bold px-4 md:px-8 border-2 text-xs border-red-500 hover:bg-blue-600">
                            ADD TO MY CART
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SingleItem;
