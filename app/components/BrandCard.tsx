import React from 'react'
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa'


interface BrandProps {
    name: string,
    logo: string,
    image: string,
    city: string,
    code: string,
    followers?: number,
    isVerified: boolean,
    description?: string,
    address?: string,
    likes?: number,
    showLocation?: boolean,
    isBrandPage?: boolean

}



const BrandCard: React.FC<BrandProps> = ({ name, image, logo, city, code, showLocation, isVerified, isBrandPage }) => {
    return (
        <div className="relative w-[100%] max-h-[300px] h-[400px]  md:h-[481px] md:max-h-[481px]">
            <div className="absolute top-2 left-2 overflow-hidden z-50">
                <Image
                    className="rounded-full"
                    src={`/images/${logo}`}
                    alt="Brand Image"
                    width={88}
                    height={88}
                    layout="responsive"
                /></div>
            <div className="flex absolute  bg-white  items-center right-0 pl-2 gap-2 w-[100px] h-[40px] z-50">
                <Image
                    src="/images/icons/heart.svg"
                    alt="Brand Image"
                    width={22}
                    height={19}
                />
                <div className="font-din">FOLLOW</div>
            </div>

            <div className="h-[300px] max-h-[300px] md:h-[481px] md:max-h-[481px] w-full overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full w-full">

                    <Image
                        src={`/images/${image}`}
                        alt="Brand Image"
                        layout="fill"
                        objectFit="cover"
                        style={{objectPosition:"top"}}
                    /></div>
            </div>
            <div className="
            flex 
            absolute 
            h:[100px] w-[300px]
            md:w-[90%] bottom-0
            left-0 bg-white
             gap-10 py-4 pr-5"
            >
                <div className="flex flex-col">
                    <div className="font-din">{name}</div>

                    {showLocation && <span>{city},{code}</span>}
                </div>

                {isVerified ?
                    <>
                        <div className='mr-2 text-blue '>
                            <FaCheckCircle size={22} />
                        </div>

                        <div className='hidden md:block text-blue font-din underline'>BROWSE</div>
                    </>
                    :
                    <div className='text-blue font-din underline'>BROWSE</div>
                }

            </div>
        </div>
    )
}

export default BrandCard