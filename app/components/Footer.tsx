import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
    return (
        <div className="bg-black  text-white w-full p-4">
            <div className="flex flex-col md:flex-row w-[100%] gap-10">
                <div className='m-auto md:w-[10%]'>
                    <Image src="/images/icons/white-logo.png" alt="Logo" width={93} height={88} />
                </div>
                <div className=" md:flex  md:flex-col md:gap-10 pt-10">
                    <div className=" hidden md:flex md:flex-row font-din gap-5 text-[16px]">
                        <Link href="/">HOME</Link>
                        <Link href="/">FOR BUSINESS</Link>
                        <Link href="/">CATEGORIES</Link>
                        <Link href="/">BRANDS</Link>
                        <Link href="/">STORES</Link>
                        <Link href="/">CONTACTS</Link>
                        <Link href="/">JOIN</Link>
                        <Link href="/">TERMS OF USE</Link>
                        <Link href="/">PRIVACY POLICY</Link>
                    </div>
                    <div className="font-din_medium items-center justify-items-center text-base">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 pt-5 justify-center items-center">
                <div className="font-din">10 QUARTERS</div>
                <div>All Rights Reserved</div>
            </div>
        </div>
    );
}

export default Footer;
