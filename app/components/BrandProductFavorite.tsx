"use client";

import React from 'react'
import BrandCard from "./BrandCard";

interface ProductProps {
    name: string;
    image: string;
    price: number;
    discount?: null | number;
    rating: number;
    brand: string;
    hasDiscount: boolean;
    newPrice: string;
    id: number;
}

interface BrandProps {
    name: string;
    logo: string;
    image: string;
    city: string;
    cityCode: string; // Adjusted to match your JSON
    views?: number;
    followers?: number;
    isVerified: boolean;
    products?: ProductProps[];
    
}

const BrandProductFavorite: React.FC<BrandProps> = ({
    name,
    logo,
    image,
    city,
    cityCode,
    isVerified
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
                <div className="md:col-span-8">
                    <BrandCard
                        name={name}
                        logo={logo}
                        image={image}
                        city={city}
                        code={cityCode} 
                        isVerified={isVerified}
                      
                    />
                </div>

                
            </div>

        </>
    );
}

export default BrandProductFavorite;
