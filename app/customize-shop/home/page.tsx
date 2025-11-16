'use client'
import Category from "@/app/components/Category";
import ProductCard from "@/app/components/ProductCard";
import HighlightedHeading from "@/app/components/ui/HighlightedHeading";
import cardData from '@/configs/card_data.json'
import { useState } from "react";
import { FaChevronLeft, FaPencilAlt, FaChevronRight } from "react-icons/fa";

import Image from "next/image";


interface SliderProps {
    slides?: {
        type: 'image' | 'video';
        url: string;
    }[];
}

// Default test data
const slides = [
    {
      type: 'image',
      url: '/images/who-we-are-img.png',
    },
    {
      type: 'image' as const,
      url: '/images/who-we-are-img.png',
    },
    {
      type: 'image' as const,
      url: '/images/who-we-are-img.png',
    },
    {
      type: 'image' as const,
      url: '/images/who-we-are-img.png',
    },
  ];
  


export default function CustomHome() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = slides.length;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    return (
        <>
            <div className={`flex flex-col items-center gap-2 mt-10 mb-10`}>

                <div className="relative h-[75vh] w-full flex flex-col items-center justify-center">
                    <div className="relative h-full w-full flex items-center justify-center">
                        <FaChevronLeft
                            className="absolute left-4 text-white text-3xl cursor-pointer z-10 hover:scale-110 transition-transform"
                            onClick={prevSlide}
                        />

                        <div className="relative h-full w-full">
                            {slides[currentSlide].type === 'video' ? (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="h-full w-full object-cover"
                                    src={slides[currentSlide].url}
                                />
                            ) : (
                                <Image
                                    src={slides[currentSlide].url}
                                    alt={`Slide ${currentSlide + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            )}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h1 className="text-white text-[61px] font-bold">LACE & LOFFAS</h1>
                            </div>
                        </div>

                        <FaChevronRight
                            className="absolute right-4 text-white text-3xl cursor-pointer z-10 hover:scale-110 transition-transform"
                            onClick={nextSlide}
                        />
                    </div>

                    <div className="absolute bottom-4 flex space-x-2">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                className={`h-2 w-2 rounded-full border border-white cursor-pointer transition-colors
                            ${currentSlide === index ? "bg-white" : "bg-gray-500/50"}`}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                </div>


                <h1 className={`relative flex  flex-col  md:'w-[490px]'} w-[100%] m-auto items-center`}>
                    <span className="text-black font-din text-main_title z-50">{"TOP SELLERS"}</span>
                    <span className={`absolute bg-red-600  top-[30px] h-[30px] w-[350px] right-[8px] md:right-[380px]`}></span>
                </h1>
                <div className='m-1'>{"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR"}</div>
            </div>

            <div className="mb-8 md:w-[100%]">
                <div className="md:w-[85%] w-[95%] m-auto grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-5">
                    {
                        cardData.items.map(item => (
                            <ProductCard
                                key={item.id}
                                image={item.image}
                                name={item.name}
                                brand={item.brand}
                                price={item.price}
                                discount={item.discount}
                                rating={item.rating}
                                hasDiscount={item.hasDiscount}
                                newPrice={item.newPrice}
                                id={item.id}
                            />
                        ))
                    }
                </div>
            </div>

            <div className="grid grid-rows-2 sm:grid-flow-col gap-4 w-[85%] mx-auto">
                <div className="h-[300px] row-span-2 col-span-2  md:h-[400px]  relative overflow-hidden">
                    <Category title="ON SALE" image="women-category.svg" />
                </div>
                <div className="h-[150px] col-span-2  md:h-[200px] relative overflow-hidden">
                    <Category title="NEW HOT STAFF" image="categorywatch.jpg" />
                </div>
                <div className="h-[150px] row-span-1 col-span-2 md:h-[200px] relative overflow-hidden">
                    <Category title="NEW HOT STAFF" image="categorywatch.jpg" />
                </div>
            </div>

            {/* Follow div */}
            <div className="flex flex-col items-center gap-2 mt-10 w-[90%] py-4 mb-5">
                <HighlightedHeading
                    title="DO YOU LIKE WHAT YOU SEE?"
                    bgColor="bg-red-600"
                    bgPosition="top-[30px]"
                    bgHeight="h-[30px]"
                    bgWidth="w-[90%]"
                    titleSize="text-main_title"
                />
                <div className="m-1">
                    LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR
                </div>
                <button type="submit" className="text-black py-2 md:ml-10 font-bold px-16 border-2 text-xs border-red-600 hover:bg-blue-600">
                    FOLLOW
                </button>
            </div>
        </>
    )

}