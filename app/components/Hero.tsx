"use client"
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { FaArrowRightLong } from 'react-icons/fa6'


interface dataProps {
    image: string,
    title: string,
    brand?: string,
}
interface HeroProps {
    slideData: dataProps[],
    isSlider?: boolean,
    autoPlay?: boolean,
    autoPlaySpeed?: number,
    isForBrand?: boolean,

}
const Hero: React.FC<HeroProps> = ({ slideData, isSlider, autoPlay, autoPlaySpeed, isForBrand }) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrevSlide = () => {
        setCurrentSlide(prev => (prev === 0 ? slideData.length - 1 : prev - 1));


    }

    const handleNextSlide = useCallback(() => {
        console.log(slideData.length)
        setCurrentSlide(prev => (prev === slideData.length - 1 ? 0 : prev + 1));
    }, [setCurrentSlide, slideData]);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (autoPlay) {
            interval = setInterval(() => {
                handleNextSlide();
            }, autoPlaySpeed);
        }

        return () => clearInterval(interval);
    }, [currentSlide, autoPlay, autoPlaySpeed, handleNextSlide]);




    return (
        <>
            <div>
                <div className="hidden md:flex md:bg-lightGray h-[90vh]  justifyitems-stretch pl-20">
                    <div className="self-center w-1/2 max:h-[650px]">
                        <h1 className="md:relative">
                            <span className="text-black text-2xl z-20 relative font-din">{slideData[currentSlide].title}</span>
                            <span className="absolute bg-blue w-full lg:h-[330px] 2xl:h-[330px] lg:top-[30px] 2xl:top-[30px] left-20"></span>
                        </h1>
                    </div>
                    <div className={`h-[100%] w-[100%] relative  self-end z-40 ${isForBrand ? '-ml-[50px] w-[100%] h-[100%]' : '-ml-[50px] w-[100%] h-[100%]'} `}>
                        <div className="absolute top-0 -left-20 h-full w-full">
                            <Image
                                src={`/images/${slideData[currentSlide].image}`}
                                alt="Hero Image"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>

                    <div className={`${!isForBrand ? 'right-[150px] top-[180px]' : 'right-10 top-40'} absolute`}>
                        <div>
                            <Image src="/images/icons/blue-arrow.svg" alt="Logo" width={27} height={32} />

                        </div>
                        <div className="pt-4">THIS MODEL WEARS</div>
                        <div className="pt-4">
                            <Image src={`/images/${slideData[currentSlide].brand}`} alt="Logo" width={91} height={91} />
                        </div>
                    </div>
                    {
                        isSlider && <div className="absolute bottom-0 right-0 z-50">
                            <div className=" flex items-center text-xl justify-center text-blue mb-2 font-din">0{currentSlide + 1}</div>
                            <div className="flex gap-2 items-center justify-center">
                                <div className=" flex bg-white w-[123px] h-[123px] items-center justify-center" onClick={handlePrevSlide}>
                                    <MdArrowBackIos height={"24px"} width={"14px"} />
                                </div>
                                <div className="bg-white w-[123px] h-[123px] flex items-center justify-center" onClick={handleNextSlide}>
                                    <MdArrowForwardIos height={"14px"} width={"24px"} />
                                </div>
                            </div>
                        </div>

                    }
                </div>

            </div>
            <div className="md:hidden bg-lightGray w-full flex gap-4 flex-col pt-4">
                <div className="flex flex-col">
                    <h1 className="relative font-din text-mobile_hero pl-2 pr-2">
                        <span className="absolute h-[200px] bg-blue top-[40px] left-20 w-full"></span>
                        <span className=" relative h-[500px] z-100">{isForBrand ? 'SHOW WHAT YOU HAVE AND JOIN TODAY' : 'WORLDS HUB FOR INDIE BRANDS'}</span>

                    </h1>

                </div>
                <div className="relative flex">
                    <div className={` ${!isForBrand ? 'h-[85vh]' : 'h-[50vh]'} w-[800px] relative z-50`}>
                        <div className={`absolute top-0 ${!isForBrand ? 'left-8' : "left-0"} h-full w-full`}>

                            <Image
                                src={`${isForBrand ? '/images/3rd.png' : "/images/home1.png"}`}
                                alt="Hero Image"
                                layout="fill"
                                objectFit="cover"

                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 absolute w-[200px] h-[200px] bg-blue top-4 pl-5">
                        <div>
                            <FaArrowRightLong style={{ width: "40px", height: "32px", color: "white", fontWeight: "bold" }} />
                        </div>
                        <div className='font-din text-[15px]'>THIS MODEL WEARS</div>
                        <div>
                            <Image src={`/images/brand-logo.png`} alt="Logo" width={50} height={50} />
                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}

export default Hero