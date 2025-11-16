"use client"

import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FiX, FiPlus } from 'react-icons/fi';
import SingleItem from "@/app/components/SingeItem"
import EditableText from '@/app/components/EditableText';
import { ShopCategoryOne, ShopCategoryTwo, ShopCategoryThree } from '@/app/components/ShopCategory';
import HighlightedHeading from '@/app/components/ui/HighlightedHeading';
import Slider from 'react-slick';
import { BiSolidPencil } from 'react-icons/bi';





const CustomizeCategories: React.FC = () => {

    const initialSlides = [null, null, null, null];
    const [images, setImages] = useState<{ [key: string]: string | null }>({
        onSale: null,
        newHotStaff: null,
        whoWeAre: null,
    });

    const [isModalVisible, setIsModalVisible] = useState(false);


    const handleImageChange = (key: string, file: File) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.result) {
                setImages((prevImages) => ({
                    ...prevImages,
                    [key]: reader.result as string,
                }));
            }
        };
        reader.readAsDataURL(file);
    };



    return (
        <>
            <div className='flex flex-col '>
                <div className={`flex flex-col mx-10 my-10 p-4 gap-4`}>
                    <h1 className={`relative flex  flex-col  'w-[490px]'} `}>
                        <span className="text-black font-din text-heading z-50">
                            {"CATEGORIES"}
                        </span>
                        <span
                            className={`absolute bg-gray left-[50px] top-[50px] h-[49px] w-[350px]`}
                        ></span>
                    </h1>
                    <div className="flex flex-row items-center space-x-4  sm: mt-16">
                        <div className={`w-auto m-auto" p-x-5 font-din_medium`}>
                            {
                                "YOUR SHOPPING BAG IS CURRENTLY EMPTY. FIND SOMETHING EXCITING TO PUT IN IT!"
                            }
                        </div>
                        <div className="w-5 h-3">
                            <BiSolidPencil />
                        </div>

                    </div>
                </div>
                <div className="grid grid-rows-2 sm:grid-flow-col gap-4 w-[85%] ml-4 py-5 h-full">
                    <div className="h-[150px] row-span-2 col-span-2 md:h-[400px] relative overflow-hidden">
                        <ShopCategoryOne
                            title="1ST MAIN CATEGORY"
                            bgImage={images.onSale}
                            onImageChange={(file) => handleImageChange('onSale', file)}
                        />
                    </div>
                    <div className="h-[150px] row-span-2 col-span-2 md:h-[400px] relative overflow-hidden">
                        <ShopCategoryOne
                            title="2ND MAIN CATEGORY"
                            bgImage={images.onSale}
                            onImageChange={(file) => handleImageChange('onSale', file)}
                        />
                    </div>

                </div>

                {/* Follow div */}
                <div className="flex flex-col items-center gap-2 mt-10 w-[90%] py-4 mb-5">
                    <HighlightedHeading
                        title="DO YOU LIKE WHAT YOU SEE?"
                        bgColor="bg-gray"
                        bgPosition="top-[30px]"
                        bgHeight="h-[30px]"
                        bgWidth="w-[90%]"
                        titleSize="text-main_title"
                    />
                    <div className="m-1">
                        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR
                    </div>
                    <button type="submit" className="text-black py-2 md:ml-10 font-bold px-16 border-2 text-xs border-gray hover:bg-blue-600">
                        FOLLOW
                    </button>
                </div>
            </div>

            {/* modal */}
            {isModalVisible && (

                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 p-4">
                    <div className="relative w-full max-w-5xl h-[80vh] bg-white rounded-lg overflow-y-auto shadow-lg">
                        <button
                            onClick={() => setIsModalVisible(false)}
                            className="absolute top-4 right-4 z-50 text-gray-600 hover:text-black cursor-pointer"
                        >
                            <FiX className="w-6 h-6" />
                        </button>
                        <SingleItem isCustomizable={true} />

                    </div>
                </div>
            )}



        </>
    )
}

export default CustomizeCategories