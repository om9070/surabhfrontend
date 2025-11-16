
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

function WelcomeCheckout() {
    const [showLogin, setShowLogin] = useState(true);

    const handleSwitch = () => {
        setShowLogin(!showLogin);
    };

    return (
        <div className='flex flex-col md:flex-row w-full md:space-x-4 items-center justify-center'>
            {/* login form */}
            {showLogin && (
                <div className='bg-white p-6 md:mb-0 w-[80%] mt-2 mb-6 md:w-[60%]'>
                    <h1 className="text-black font-din text-3xl z-50 py-6 mb-4">{"LOGIN"}</h1>
                    <form className='font-din_medium flex flex-col gap-4'>
                        <div className="border-b border-gray-400">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full border-none focus:border-none border-b border-gray-400 py-2 focus:outline-none placeholder-black"
                            />
                        </div>
                        <div className="border-b border-gray-400">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="w-full border-none focus:border-none border-b border-gray-400 py-2 focus:outline-none placeholder-black"
                            />
                        </div>
                        <div className="mt-10 mb-5">
                            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                                <p className="font-din text-xs md:pr-2 cursor-pointer" onClick={handleSwitch}>
                                    I DON&apos;T HAVE AN ACCOUNT
                                </p>
                                <button
                                    type="submit"
                                    className="text-black py-1.5 font-bold px-12 md:px-20 text-xs md:ml-4 border-2 border-blue hover:bg-blue-600"
                                >
                                    LOGIN
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="mt-2 mb-5 text-center">
                        <p className="text-xs text-gray-100 mb-4 font-normal">or sign in with</p>
                        <div className="flex justify-between items-center mt-2 px-8">
                            <Link href="/instagram-link" className="text-black cursor-pointer">
                                <div className="text-black">
                                    <FaInstagram size={24} />
                                </div>
                            </Link>
                            <Link href="/twitter-link" className="text-black cursor-pointer">
                                <div className="text-black">
                                    <FaTwitter size={24} />
                                </div>
                            </Link>
                            <Link href="/facebook-link" className="text-black cursor-pointer">
                                <div className="text-black">
                                    <FaFacebookF size={24} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* New user Sign up form */}
            {!showLogin && (
                <div className='bg-white p-6 w-[80%] mt-2 md:w-[60%]'>
                    <h1 className="text-black font-din text-3xl mt-2 z-50 mb-6">{"SIGN UP"}</h1>
                    <form className='font-din_medium flex flex-col gap-4'>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="border-b border-gray-400">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    className="md:w-full border-none focus:border-none py-2 focus:outline-none placeholder-black"
                                />
                            </div>
                            <div className="border-b border-gray-400">
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    className="w-full border-none focus:border-none py-2 focus:outline-none placeholder-black"
                                />
                            </div>
                        </div>
                        <div className="border-b border-gray-400 ">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full border-none focus:border-none border-b border-gray-400 py-2 focus:outline-none placeholder-black"
                            />
                        </div>
                        <div className="border-b border-gray-400">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="w-full border-none focus:border-none border-b border-gray-400 py-2 focus:outline-none placeholder-black"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="consumer"
                                    name="userType"
                                    value="consumer"
                                    className="form-checkbox text-primary h-6 w-6"
                                />
                                <label htmlFor="consumer" className="text-xs text-gray-600">I&apos;m a consumer</label>
                            </div>
                            {/* < */}
                        </div>
                        <div className="mt-10 mb-4">
                            <div className="flex flex-col items-end justify-end gap-4 md:gap-4">
                                <button
                                    type="submit"
                                    className="text-black py-1.5 font-bold px-12 text-xs md:ml-4 border-2 border-blue hover:bg-blue-600"
                                >
                                    SIGN UP
                                </button>
                                <p className="text-xs cursor-pointer underline hover:bg-blue-300" onClick={handleSwitch}>
                                    Back to Login
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default WelcomeCheckout;




