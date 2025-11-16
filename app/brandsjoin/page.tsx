"use client"
import React, { useState } from 'react';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';





const brandsjoin = () => {
    return (
        <>
            <div className="flex flex-col relative bg-lightGray">
                <div className={`flex flex-col mx-10 my-10 p-4 gap-4`}>
                    <h1 className={`relative flex  flex-col  'w-[490px]'} `}>
                        <span className="text-black font-din text-2xl z-50">{"JOIN"}</span>
                        <span className={`absolute bg-blue left-[40px] top-[28px] h-[40px] w-[180px]`}></span>
                    </h1>
                    <div className={`w-auto m-auto" p-x-5`}>{"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR"}</div>
                </div>

                <div className="w-[90%] m-auto relative">
                    <div className="hidden md:flex flex-col gap-2 m-auto absolute top-40">
                        <div className="text-blue">
                            <FaArrowRightLong style={{ width: "30px", height: "22px", fontWeight: "bold" }} />
                        </div>
                        <div className="font-din_medium">THIS MODEL WEARS</div>
                        <Image
                            src="/images/db-images/brand-logo.png"
                            alt="Arrow"
                            width={92}
                            height={92}
                            objectFit="cover"
                        />
                    </div>

                    <div className="grid md:grid-cols-6 grid-cols-1 items-center justify-items-center gap-2">
                        <div className="col-span-3 md:order-last">
                            <div className=" bg-white md:p-10 md:w-[600px] w-[100%] md:m-auto p-6">
                                <div className="font-din md:text-heading text-[40px]">SIGN UP</div>
                                <form className='font-din_medium flex flex-col gap-4'>
                                    {/* logo upload */}
                                    <div className="flex flex-col items-center justify-center mt-4">
                                        <label htmlFor="logoUpload" className="w-32 h-32 rounded-full flex items-center justify-center bg-lightGray cursor-pointer">
                                            <span className="text-darkGray font-bold text-sm p-4 flex flex-col items-center">
                                                UPLOAD
                                                <span className="my-1">YOUR LOGO</span>
                                                <span>HERE</span>
                                            </span>
                                            <input type="file" id="logoUpload" name="logo" className="hidden" accept="image/jpeg, image/png" />
                                        </label>
                                        <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Upload Logo
                                        </button>
                                    </div>
                                    {/* brand Name */}
                                    <div className="border-b border-gray-400 mt-8">
                                        <input
                                            type="brandname"
                                            name="brandname"
                                            placeholder="Brand name"
                                            className="w-full border-none focus:border-none border-b border-gray-400 py-2 focus:outline-none placeholder-black"
                                        />
                                    </div>

                                    <div className="mt-10 flex items-center justify-end">
                                        <Link href="/brandspage">
                                            <Button label="Continue" link="/dashboard" type="primary" width={250} />
                                        </Link>
                                    </div>

                                </form>
                                <div className="mt-12 mb-2 text-center">
                                    <p className="text-xs text-gray-100 mb-8 font-normal">or sign in with</p>
                                    <div className="flex justify-between items-center mt-2">
                                        <Link href="/instagram-link" className="text-black cursor-pointer">
                                            <div className="text-black ml-20">
                                                <FaInstagram size={24} />
                                            </div>
                                        </Link>
                                        <Link href="/twitter-link" className="text-black cursor-pointer">
                                            <div className="text-black">
                                                <FaTwitter size={24} />
                                            </div>
                                        </Link>
                                        <Link href="/facebook-link" className="text-black cursor-pointer">
                                            <div className="text-black mr-20">
                                                <FaFacebookF size={24} />
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-span-3 md:order-first">
                            <div className="h-full overflow-hidden z-50 relative">
                                <Image
                                    src="/images/db-images/bg-auth-svg-svg.svg"
                                    alt="Sign Up"
                                    height={1000}
                                    width={1000}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default brandsjoin;
