'use client'
import { useRef } from "react";
import { useResponsive } from '../hooks/useResponsive';
import Image from "next/image";
import { BiSolidStar } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
//import ProductCard from "../ProductCard";
import ProductCardSlider from "./ProductCardSlider";


interface CardProps {
    image: string;
    name: string;
    brand: string;
    price: number;
    hasDiscount: boolean;
    discount: number | null;
    newPrice: string;
    rating: number;
    id: number;
}
interface SliderProps {
    data: CardProps[],
    heading: string,
    slideNum: number,
    autoplay: boolean,
    autoplaySpeed: number,
}

const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div className="absolute -right-10 top-40 cursor-pointer" onClick={onClick}>
            <FaChevronRight size={24} />
        </div>
    );
};

const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div className="absolute -left-20 top-40 cursor-pointer" onClick={onClick}>
            <FaChevronLeft size={24} />
        </div>
    );
};


const ItemSlider: React.FC<SliderProps> = ({
    data,
    heading,
    slideNum,
    autoplay,
    autoplaySpeed
}) => {

    const { screenType } = useResponsive();

    const settings = {
        arrows: true,
        dots: false,
        swipeToSlide: true,
        infinite: true,
        autoplay: autoplay,
        autoplaySpeed: autoplaySpeed,
        slidesToShow: screenType === "MOBILE" ? 2 : screenType === "SMALL_DESKTOP" ? 5 : slideNum,
        slidesToScroll: screenType === "MOBILE" ? 2 : slideNum,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />

    };



    return (
        <>
            <div className="flex flex-col relative md:w-[90%] w-[100%] m-auto">
                <div className="md:p-5 w-full md:w-[100%]  mt-5">
                    <div className="font-din md:px-5 md:py-5 text-[30px] md:text-itemsHeading">{heading}</div>
                    <div>
                        <Slider {...settings} >
                            {data?.map(item => (
                                <div className="p-2" key={item.id}>
                                    <ProductCardSlider
                                        image={item.image}
                                        name={item.name}
                                        brand={item.brand}
                                        price={item.price}
                                        discount={item.discount}
                                        rating={item.rating}
                                        hasDiscount={false}
                                        newPrice={item.newPrice}
                                        id={item.id}
                                        key={item.id}

                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemSlider