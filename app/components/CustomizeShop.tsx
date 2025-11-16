import React from 'react';
import { FiPlus} from 'react-icons/fi';

interface categoryProps {
    image: string
    title: string
    hasDimensions?: boolean
    height?: number | string
    width?: number | string
}

const Customizeshop: React.FC<categoryProps> = ({ title }) => {
    return (
        <>
            <div className='relative h-full bg-mediumGray w-full flex justify-center items-center flex-col'>
                <div className='text-2xl cursor-pointer  text-white flex flex-col items-center px-4 md:px-20'>
                    <FiPlus className="w-6 h-6" strokeWidth={3} />
                </div>
                <p className='text-xs text-white font-serif'>Add a photo for this banner</p>
            </div>
            <div className="flex absolute bottom-0 left-0 px-2 bg-white gap-2 py-1 justify-between  w-[90%] h-[50px] z-20 flex-wrap">
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
        </>
    );
}

export default Customizeshop;