"use client";

import React from 'react'
import BrandCard from "./BrandCard";
import ProductCard from './ProductCard';
import Button from './Button';
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'


interface ProductProps {
    name: string
    image: string
    price: number
    discount?: null | number,
    rating: number,
    brand: string,
    hasDiscount: boolean,
    newPrice: string,
    id: number


}

interface BrandProps {
    name: string
    logo: string
    image: string
    city: string
    code: string
    views?: number
    followers?: number
    isVerified: boolean
    products: ProductProps[]
    description?: string,
    showLocation?: boolean
    isBrandPage?: boolean
}



const BrandProduct: React.FC<BrandProps> = ({
    name,
    logo,
    image,
    city,
    code,
    isVerified,
    products,
    views,
    followers,
    description,
    showLocation,
    isBrandPage
}) => {
    return (
        <>
            <div className="
            p-4 
            grid grid-cols-1 
            gap-5 md:grid-cols-4
            md:gap-5
            md:w-[100%]
            md:m-auto
            md:pr-20 md:pl-5">
                <div className="md:col-span-2">
                    <BrandCard
                        name={name}
                        logo={logo}
                        image={image}
                        city={city}
                        code={code}
                        isVerified={isVerified}
                        showLocation={showLocation}
                        isBrandPage={isBrandPage}
                    />
                </div>

                <div className="col-span-1 md:col-span-2">
                    <div className="grid grid-cols-2 gap-4">
                        {products.map((item) => (
                            <ProductCard
                                image={item.image}
                                brand={item.brand}
                                price={item.price}
                                hasDiscount={item?.hasDiscount}
                                discount={item?.discount}
                                newPrice={item.newPrice}
                                rating={item.rating}
                                id={item.id}
                                key={item.id}
                                name={item.name}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="hidden md:block px-4 text-mediumGray w-[100%] md:pr-20 md:pl-5">
                {description}
            </div>

            {isBrandPage && (<div className="flex flex-col md:flex-row items-center justify-between w-[100%] md:w-[100%] m-auto md:pr-20 md:pl-5">
                <div className="flex mt-4 mb-16 gap-4 text-[14px] text-mediumGray md:justify-between">
                    <div className="flex items-center">
                        <div className="text-blue font-27" style={{ fontSize: '27px' }}><IoLocationOutline /></div>
                        <div className="ml-1">{city}, {code}</div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-blue ml-1" style={{ fontSize: '27px' }}><AiOutlineEye /></div>
                        <div className="ml-1 text-gray-500">{views} views</div>
                    </div>
                    <div className="flex items-center">
                        <div className=" text-blue" style={{ fontSize: '27px' }}>{<AiOutlineHeart />}</div>
                        <div className="ml-1 text-gray-500">{followers} followers</div>
                    </div>
                </div>

                <div className="relative md:mt-4 mb-16 flex  flex-col md:flex-row gap-4">
                    <Button label={"GET IN TOUCH"} link="/category" type="secondary" width={250} />
                    <Button label={"VIEW SHOP"} link="/category" type="primary" width={250} />
                </div>
            </div>
            )
            }

        </>



    )
}

export default BrandProduct