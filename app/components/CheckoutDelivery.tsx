"use client"
import React, { useState } from 'react';
import { FiUser, FiCalendar, FiMapPin, FiMail, FiLock, FiChevronDown, FiCheck, FiX, FiArrowRight } from 'react-icons/fi';
import { FaPaperPlane } from 'react-icons/fa';




function CheckoutDelivery() {


    const [isAddressFormVisible, setIsAddressFormVisible] = useState(false);

    const handleAddAddressClick = () => {
        setIsAddressFormVisible(!isAddressFormVisible);
    };
    const handleCloseButtonClick = () => {
        setIsAddressFormVisible(false);
    };

    const addressData = [
        { type: "Home Address", name: "KOJO", address: "247 WentWorth circle, Bronx, NY 10451" },
        // { type: "Home Address", name: "KOJO", address: "247 WentWorth circle, Bronx, NY 10451" },
        // { type: "Home Address", name: "KOJO", address: "247 WentWorth circle, Bronx, NY 10451" },
        // { type: "Home Address", name: "KOJO", address: "247 WentWorth circle, Bronx, NY 10451" },


    ];
    return (

        <div>
            <div className='flex flex-col md:flex-row  justify-center  '>
                {/* Personal Info form  */}
                <div className="w-[80%] md:w-[400px] mr-4 md:mt-0 mt-5 mb-4 md:mr-14 md:mx-0 mx-10">
                    <h2 className="font-din text-checkout_title mb-8">BILLING INFO</h2>

                    <form>
                        <div className="flex flex-col md:flex-row items-center mb-7">
                            <div className="flex">
                                <label className="text-gray-500 mr-4">
                                    <FiUser />
                                </label>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="border-b border-black bg-lightGray outline-none w-full md:w-[150px] text-black text-xs placeholder-black py-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="border-b border-black bg-lightGray outline-none w-full md:w-[150px] ml-2 text-black text-xs placeholder-black py-2"
                                />
                            </div>
                        </div>

                        <div className="flex items-center mb-7">
                            <label className="text-gray-500 mr-4">
                                <FiCalendar />
                            </label>
                            <input
                                type="text"
                                placeholder="Date of Birth"
                                className="border-b border-black outline-none w-full  bg-lightGray max-w-[300px] text-black text-xs placeholder-black py-2"
                            />
                        </div>
                        <div className="flex items-center mb-7">
                            <label className="text-gray-500 mr-4">
                                <FiMapPin />
                            </label>
                            <input
                                type="text"
                                placeholder="Address"
                                className="border-b border-black outline-none w-full  bg-lightGray max-w-[300px] text-black text-xs placeholder-black py-2"
                            />
                        </div>

                        <div className="flex items-center mb-7">
                            <label className="text-gray-500 mr-4">
                                <FiMail />
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="border-b border-black bg-lightGray outline-none w-full max-w-[300px] text-black text-xs placeholder-black py-2"
                            />
                        </div>
                        <div className="flex items-center mb-7">
                            <label className="text-gray-500 mr-4">
                                <FaPaperPlane />
                            </label>
                            <select className="border-b border-black  outline-none flex-grow text-black text-xs max-w-[300px] placeholder-black py-2">
                                <option value="" disabled selected hidden>Delivery Type</option>

                            </select>
                        </div>
                    </form>
                </div>

                {/* my address */}
                <div className='relative md:w-full w-[98%]'>
                    <h1 className='font-din text-checkout_title mb-6'>DELIVERY ADDRESS</h1>
                    <div className='grid grid-cols-2 md:gap-4 gap-2 mt-4'>
                        {/* Dynamic Shop Rendering */}

                        {addressData.map((address, index) => (
                            <div key={index} className='w-full  mb-4 md:mr-4'>
                                <div className="border border-lightGray bg-white items-center md:w-[200px] justtify-center w-full px-4 py-4 relative">
                                    <div className="absolute top-4 right-4 text-sm">
                                        <FiCheck className="w-5 h-4 text-blue font-din" />
                                    </div>
                                    <div className="absolute top-4 left-4">
                                        <div className="flex items-center text-gray-600">
                                            <span className="text-xs">{address.type}</span>
                                            <FiChevronDown />
                                        </div>
                                    </div>
                                    <div className="text-black font-din  mt-12 text-3xl">{address.name}</div>
                                    <div className="text-gray-500 xl:text-sm text-xs mt-2">{address.address} </div>
                                    <div className='flex flex-col'>
                                        <button className="mt-10 bg-white border-2 border-blue text-black px-4 py-2 text-sm font-din">
                                            EDIT
                                        </button>
                                        <button className="mt-4 bg-white text-black px-4 py-2 text-sm font-din">REMOVE</button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Add new address */}
                        <div className="w-[100%] " onClick={handleAddAddressClick}>
                            <div className="border border-lightGray mb-4 bg-white md:w-[200px]">
                                <div className="flex flex-col justify-center items-center py-28">
                                    <div className="text-blue text-4xl font-bold">+</div>
                                    <div className="text-xs mt-2">Add address</div>
                                </div>
                            </div>
                        </div>



                        {/* Overlay */}
                        {isAddressFormVisible && (
                            <div
                                className="fixed inset-0 bg-lightGray opacity-50"
                                onClick={handleCloseButtonClick}
                            />
                        )}

                        {/* {my address form} */}
                        {isAddressFormVisible && (
                            <div className="absolute md:top-[-50px] top-0 md:left-[-100px] md:w-[400px] bg-white p-10 border-gray">
                                <div className="flex justify-end mt-5">
                                    <button onClick={handleCloseButtonClick} className="text-black font-bold">
                                        <FiX />
                                    </button>
                                </div>
                                <h2 className="font-din text-3xl mb-8">NEW ADDRESS</h2>

                                <form className="flex flex-col">
                                    <div className="flex items-center mb-7">
                                        <label htmlFor="address" className="sr-only">Address</label>
                                        <input
                                            type="text"
                                            id="address"
                                            placeholder="Address"
                                            className="border-b-2 border-lightGray outline-none w-full max-w-[300px] text-black text-xs placeholder-black py-2"
                                        />
                                    </div>

                                    <div className="flex items-center mb-7">
                                        <label htmlFor="city" className="sr-only">City</label>
                                        <select
                                            id="city"
                                            className="border-b-2 bg-white border-lightGray outline-none flex-grow max-w-[150px] text-black text-xs placeholder-black py-2"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>City</option>
                                            {/* City options */}
                                        </select>
                                        <label htmlFor="addressType" className="sr-only">Zipcode</label>
                                        <select
                                            id="addressType"
                                            className="border-b-2 border-lightGray bg-white outline-none flex-grow ml-2 max-w-[150px] text-black text-xs placeholder-black py-2"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Zipcode</option>
                                            {/* Zipcode Type options */}
                                        </select>
                                    </div>

                                    <div className="flex items-center mb-7">
                                        <label htmlFor="state" className="sr-only">State</label>
                                        <select
                                            id="state"
                                            className="border-b-2 border-lightGray bg-white outline-none flex-grow max-w-[150px] text-black text-xs placeholder-black py-2"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>State</option>
                                            {/* State options */}
                                        </select>
                                        <label htmlFor="country" className="sr-only">Country</label>
                                        <select
                                            id="country"
                                            className="border-b-2 border-lightGray bg-white outline-none flex-grow ml-2 max-w-[150px] text-black text-xs placeholder-black py-2"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Country</option>
                                            {/* Country options */}
                                        </select>
                                    </div>
                                    <button className="mt-2 bg-white border-2 border-blue text-black px-2 py-2 text-sm font-din w-[120px] mx-auto">
                                        ADD
                                    </button>
                                </form>
                            </div>
                        )}

                    </div>
                </div>
            </div>
            <div className='items-center justify-center w-full flex mt-2'>
                <button className="mt-2 bg-blue border-2 border-blue text-white px-12 py-2 text-sm font-din  mx-auto">
                    CONTINUE
                </button>
            </div>
        </div>
    )
}

export default CheckoutDelivery



