'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { usePathname } from 'next/navigation';
import { AiOutlineMenuFold, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';


function CustomNavbar() {
    const pathname = usePathname();

    let [open, setOpen] = useState(false);
    
    const handleLinkClick = () => {
        setOpen(false);
      };

    return (
        <>
            <div className="hidden md:block">
                <div className="flex  items-center bg-white top-0 h-[100px] md:gap-20 justify-between w-full pl-20">
                        <div className="flex justify-center items-center mx-48 font-din text-[15px] gap-[63px] md:gap-[30px]">
                            <Link href="/customize-shop/categories">
                                <div className={`${pathname === "/customize-shop/categories" ? 'line-through decoration-blue decoration-[3px]' : ""} cursor-pointer`}>
                                   CATEGORIES
                                </div>
                            </Link>
                            <Link href="/customize-shop/sale">
                                <div className={`${pathname === '/customize-shop/sale' ? 'line-through decoration-blue decoration-[3px]' : ""} cursor-pointer`}>
                                    SALE
                                </div>
                            </Link>

                            <Link href="/customize-shop/home">
                                <div className={`${pathname === '/customize-shop' ? 'line-through decoration-blue decoration-[3px]' : ""} cursor-pointer`}>
                                  <Image src={`/images/Immagine 28.png`} alt={'logo'} width={92} height={92}/>
                                </div>
                            </Link>
                            <Link href="/customize-shop/who-we-are">
                                <div className={`${pathname === '/customize-shop/who-we-are' ? 'line-through decoration-blue decoration-[3px]' : ""} cursor-pointer`}>
                                    WHO WE ARE
                                </div>
                            </Link>
                            <Link href="/customize-shop/get-in-touch">
                                <div className={`${pathname === '/customize-shop/get-in-touch' ? 'line-through decoration-blue decoration-[3px]' : ""} cursor-pointer`}>
                                   LET`S GET IN TOUCH
                                </div>
                            </Link>
                        </div>

                    <div className="flex bg-blue w-[100px] h-[100px] max-w-[100px] max-h-[100px] items-center justify-center ml-4">
                        <Image src="/images/icons/bag.png" alt="Logo" width={27} height={32} />
                        
                    </div>
                </div>
            </div>
            <div className="flex ml-2 w-full justify-between p-5 h-[100px] m-0 md:hidden">
                <div><Image src="/images/icons/logo.svg" alt="Logo" width={52} height={42} />
                </div>
                <div className='flex gap-4' onClick={() => setOpen(!open)}>
                    {open ? <AiOutlineClose style={{ width: '32px', height: '32px', fontWeight: 'bold' }} />
                        :
                        <>
                            <AiOutlineSearch style={{ color: 'grey', width: '32px', height: '32px' }} />
                            <AiOutlineMenuFold style={{ width: '52px', height: '42px' }} />
                        </>
                    }
                </div>
            </div>

            {open && <div className="flex flex-col gap-5 font-din text-center justify-center text-[28px] md:hidden">
                <Link href="/customize-shop/categories" onClick={handleLinkClick}>
                    <div className={`${pathname === '/customize-shop/categories' ? 'line-through decoration-blue decoration-[3px]' : ""} cursor-pointer`}>
                        CATEGORIES
                    </div>
                </Link>
                <Link href="/customize-shop/sale" onClick={handleLinkClick}>
                    <div className={`${pathname === '/customize-shop/sale' ? 'line-through decoration-blue decoration-[3px]' : ""} cursor-pointer`}>
                        SALE
                    </div>
                </Link>

                <Link href="/customize-shop" onClick={handleLinkClick}>
                    <div className={`${pathname === '/customize-shop' ? 'line-through decoration-blue decoration-[3px]' : ""} cursor-pointer`}>
                    <Image className= "mx-auto" src={`/images/Immagine 28.png`} alt={'logo'} width={92} height={92}/>
                    </div>
                </Link>
                <Link href="/customize-shop/who-we-are" onClick={handleLinkClick}>
                    <div className={`${pathname === '/customize-shop/who-we-are' ? 'line-through decoration-blue decoration-[3px]' : ""} cursor-pointer`}>
                        WHO WE ARE
                    </div>
                </Link>
                <Link href="/customize-shop/get-in-touch" onClick={handleLinkClick}>
                    <div className={`${pathname === '/customize-shop/get-in-touch' ? 'line-through decoration-blue decoration-[3px]' : ""} cursor-pointer`}>
                    LET`S GET IN TOUCH
                    </div>
                </Link>


                <div className="flex gap-5 items-center justify-center bg-blue h-[100px] w-full">
                    <div><Image src="/images/icons/bag.png" alt="Logo" width={32} height={38} /></div>
                    <p className="font-din text-white pt-2">YOUR BAG (0)</p>
                </div>
            </div>
            }
        </>
    );
}

export default CustomNavbar;
