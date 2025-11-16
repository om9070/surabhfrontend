import React from 'react';
import Image from 'next/image';
import { BiSolidStar } from 'react-icons/bi';

interface CardProps {
    image: string;
    name: string;
    brand: string;
    price: number;
    hasDiscount: boolean;
    discount: any;
    newPrice: string;
    rating: number;
    id: number;
    width?: number;
    height?: number;


}


const ProductCardSlider: React.FC<CardProps> = ({ image,
    name,
    brand,
    price,
    hasDiscount,
    discount,
    newPrice,
    rating,
    id,
}) => {


    return (
        <>
            <div key={id} className="flex flex-col h-[300px] md:h-auto gap-6 relative">
                <div className="h-[260px] md:h-[261px] w-full overflow-hidden object-center relative">
                    <div className="absolute top-0 left-0 h-full w-full ">
                        <Image
                            src={`/images/db-images/${image}`}
                            alt="Product Image"
                            layout="fill"
                            objectFit="cover"
                            style={{objectPosition:"top"}}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-4 md:justify-between">
                        <div className="flex flex-col">
                            <div className="font-din">
                                {name}
                            </div>
                            <div className="text-sm">
                                {brand}
                            </div>
                        </div>
                        {hasDiscount && (
                            <div className="flex bg-blue text-white px-1 py-1 justify-center items-center p-2 text-sm w-[54px] h-[30px]">
                                -{discount}%
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-4 sm:mt-2 mt-0">
                    <div className="flex gap-4 font-din_medium">
                        {hasDiscount && (
                            <div className="line-through">
                                <span>$</span>
                                {newPrice}
                            </div>
                        )}
                        <div>
                            <span>$</span>
                            {price}
                        </div>
                    </div>
                    <div className="flex gap-1">
                        {Array(Math.floor(rating)).fill(<BiSolidStar className="text-black-400" />)}
                    </div>
                </div>
                <div className="flex absolute  w-[40px] h-[30px]  md:h-[40px] xl:h-[40px] bg-white justify-center items-center right-0">
                    <Image
                        src="/images/heart-empty.svg"
                        alt="Product Image"
                        width={22}
                        height={19}
                    />
                </div>
            </div>

        </>
    );
};

export default ProductCardSlider;