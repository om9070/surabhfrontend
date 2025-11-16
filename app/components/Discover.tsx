import React from 'react';
import Image from 'next/image';
import Button from './Button';

interface discoverProps {
    image: string;
    content: string;
    title: string;
    hasButton?: boolean;
}


export const DiscoverFirstImage: React.FC<discoverProps> = ({ image, content, title, hasButton }) => {
    return (
        <>
            <div className="hidden md:flex md:bg-lightGray relative pt-10">
                <div className="flex w-[90%] mx-auto">
                    <div className="flex flex-col pl-10  w-[50%] gap-10 pr-6">
                        <h1 className="relative">
                            <span className='text-black text-2xl z-20  mt-10 font-din relative'>
                                {title}
                            </span>
                            <span className="absolute bg-blue w-[800px] h-[150px] top-[30px] right-[120px]">
                            </span>
                        </h1>
                        <div className='flex flex-col '>
                            <p className="text-base font-din_medium">{content}</p>
                        </div>
                        {hasButton && <Button label={"DISCOVER MORE"} link={"/discover"} type="primary" />}
                    </div>
                    <div className="z-50 mt-10 order-first w-[800px] self-end relative overflow-hidden">
                        <Image
                            src={`/images/${image}`}
                            alt="Discover Image"
                            layout="responsive"
                            width={1000}
                            height={1200}
                        />
                    </div>
                </div>
            </div >
            <div className="md:hidden bg-lightGray pt-5 w-full">
                <div className="flex flex-col">
                    <h1 className="relative font-din text-mobile_hero pl-10 pr-2">
                        <span className="absolute pl-2 h-[200px] bg-blue top-[40px] left-48 w-full"></span>
                        <span className="relative h-[500px] z-100">{title}</span>
                    </h1>
                    <div className='flex flex-col text-base'>
                        <p className="w-[70%] m-auto">{content}</p>
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        {hasButton && <Button label={"DISCOVER MORE"} link={"/discover"} type="primary" />}

                    </div>
                </div>
                <div className="relative flex full">
                    <div className="relative w-[100%] z-50 overflow-hidden">
                        <Image
                            src={`/images/${image}`}
                            alt="Discover Image"
                            layout="responsive"
                            width={1000}
                            height={1200}
                        />
                    </div>

                </div>
            </div>
        </>
    )
}
export const DiscoverLastImage: React.FC<discoverProps> = ({ image, content, title, hasButton }) => {
    return (
        <>
            <div className="hidden md:flex md:bg-lightGray relative pt-10">
                <div className="flex w-[100%] overflow-hidden">
                    <div className="flex flex-col gap-10 pl-10 w-[30%] mb-20">
                        <h1 className="relative">
                            <span className='text-black text-2xl z-20  mt-10 font-din relative'>
                                {title}
                            </span>
                            <span className="absolute bg-blue w-[650px] h-[150px] top-[30px] left-28">
                            </span>
                        </h1>
                        <div className='flex flex-col w-[494px] text-base font-din_medium'>
                            <p>{content}</p>
                        </div>
                        {hasButton && <Button label={"DISCOVER MORE"} link={"/discover"} type="primary" />}
                    </div>
                    <div className="float-right w-[1000px] z-50 relative self-end justify-self-start">
                        <Image
                            src={`/images/${image}`}
                            alt="Discover Image"
                            layout="responsive"
                            width={1000}
                            height={1200}
                        />
                    </div>
                </div>
            </div>
            <div className="md:hidden bg-lightGray pt-5 w-full">
                <div className="flex flex-col">
                    <h1 className="relative font-din text-mobile_hero pl-10 pr-2">
                        <span className="absolute p-2 h-[200px] bg-blue top-[50px] left-48 w-full"></span>
                        <span className="relative h-[500px] z-100">{title}</span>
                    </h1>
                    <div className='flex flex-col text-base'>
                        <p className="w-[70%] m-auto">{content}</p>
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        {hasButton && <Button label={"DISCOVER MORE"} link={"/discover"} type="primary" />}

                    </div>
                </div>
                <div className="relative flex full">
                    <div className="float-right w-[1000px] z-50 relative self-end justify-self-start">
                        <Image
                            src={`/images/${image}`}
                            alt="Discover Image"
                            layout="responsive"
                            width={1000}
                            height={1200}
                        />
                    </div>

                </div>
            </div>
        </>





    );
};