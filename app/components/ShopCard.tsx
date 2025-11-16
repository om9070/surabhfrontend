import React from 'react'
import Image from 'next/image';
import Button from './Button';
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'
import { FaCheckCircle } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'


interface ShopProps {
    name: string,
    image: string,
    city: string,
    code: string,
    followers: number,
    isVerified: boolean,
    description: string,
    address: string,

}



const ShopCard: React.FC<ShopProps> = ({
    name,
    image,
    city,
    code,
    description,
    followers,
    address
}) => {
    return (
        <div className="flex gap-4  flex-col w-[100%] mt-10 ">
            <div className="relative w-[100%] h-[300px] md:h-[531px]">
                <div className="flex absolute  bg-white  items-center right-0 px-5 gap-4 w-[160px] h-[40px] md:w-[160px] md:h-[56px] ">

                    <Image
                        src="/images/icons/heart.svg"
                        alt="Brand Image"
                        width={22}
                        height={19}
                    />
                    <div>FOLLOW</div>
                </div>

                <div className="w-full h-[300px] md:h-[531px] overflow-hidden">
                    <Image
                        src={`/images/${image}`}
                        alt="Shop Image"
                        width={694}
                        height={531}
                        layout="responsive"
                    /></div>
                <div className="flex absolute  h-[50px] w-[90%] md:w-[479px] bottom-0 left-0 bg-white py-4 gap-4">
                    <div className="flex flex-col">
                        <div className="font-din">{name}</div>

                        <span>{city},{code}</span>
                    </div>

                    <div className="hidden md:flex">
                        <div className='mr-2 text-blue '>
                            <FaCheckCircle size={22} />
                        </div>
                        <div className="text-blue font-din">
                            VERIFIED
                        </div>
                    </div>



                </div>



            </div>
            <div className="hidden md:block w-full text-mediumGray">
                {description}
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-0">
                <div className="flex flex-col md:flex-row md:gap-4 gap-2 ">
                    <div className="flex md:items-center md:gap-4 gap-2">
                        <div className="text-blue"><IoLocationOutline /></div>
                        <div>{address}</div>
                    </div>

                    <div className="flex items-center md:gap-4 gap-2">
                        <div>{<AiOutlineHeart />}</div>
                        <div>{followers} followers</div>
                    </div>
                </div>

                <div className="m-auto">
                    <Button label={"GET IN TOUCH"} link="/category" type="primary" width={250} />
                </div>

            </div>
        </div>
    )
}

export default ShopCard