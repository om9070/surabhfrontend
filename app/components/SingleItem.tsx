import React from 'react';
import Image from 'next/image';


const imageList = [
    { src: "/images/patrobas.png", alt: "Image 1" },
    { src: "/images/3rd@2x.png", alt: "Image 2" },
    { src: "/images/x3uD_haX_400x400.jpg", alt: "Image 3" },
    { src: "/images/brand_one_image_2.png", alt: "Image 4" },
];

function SingleItem() {
    return (
        <div className=" relative md:w-[90%] bg-white border-gray z-50">
            <div className="md:h-[70vh] flex flex-col md:flex-row">
                <div className="md:w-[35%] py-7 items-center justify-center flex flex-col">
                    <Image src="/images/brand_one_image_2.png" width={300} height={300} alt="Product image" objectFit="cover" className="w-full h-[68vh] cursor-pointer" />
                </div>
                <div className='md:w-[65%] flex flex-col md:px-16 px-2'>
                    <h1 className='font-din md:text-itemsHeading md:text-left text-center py-2 md:p-0'> ITEM NAME </h1>
                    <p className='text-xs tracking-widest md:mr-12 p-2 md:p-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="flex space-x-8 mt-12 w-[90%]">
                        <div className="flex-1">
                            <select className="w-full border-b-2 border-gray bg-white text-xs py-2">
                                <option className="text-xs font-serif" value="" disabled selected>Choose a size</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>
                        <div className="flex-1">
                            <select className="w-full border-b-2 border-gray bg-white text-xs py-2">
                                <option value="" disabled selected>Quantity</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex mt-20 space-x-4 md:space-x-4'>
                        <div className="bg-gray p-6 items-center justify-center flex flex-col">
                        </div>
                        <div className="p-6 items-center border-2 bg-slate-600 border-gray justify-center flex flex-col">
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[30vh] w-[100%] bg-white flex flex-col md:flex-row'>
                <div className='md:w-[35%] items-start flex justify-center mt-5'>
                    {imageList.map((image, index) => (
                    <div key={index} className="bg-white h-[16vh]  mx-1 items-center justify-center flex flex-col">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={50}
                            height={50}
                            className="cursor-pointer h-[14vh] w-full"
                        />
                    </div>
                ))}
                </div>
                <div className='md:w-[65%] flex space-x-4 md:mt-0 mt-5 items-center justify-center'>
                    <button type="submit" className="text-black py-2 md:ml-10 font-bold px-4 text-xs hover:bg-blue-600">
                        ADD TO MY WISHLIST
                    </button>
                    <button type="submit" className="text-black py-2 md:ml-10 font-bold px-4 md:px-12 border-2 text-xs border-red-500 hover:bg-blue-600">
                        ADD TO BAG
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SingleItem;
