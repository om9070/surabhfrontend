import React from 'react'
import Image from 'next/image'
import { FiUser, FiCalendar, FiTrash, FiCreditCard } from 'react-icons/fi';


function CheckoutPayment() {
    return (
        <div className='flex flex-col items-center justify-center md:w-full w-[80%] md:mx-0 mx-10'>
            {/* payment */}
            <div className='flex justify-between space-x-3 md:mt-0 mt-5 w-full'>
                <div className='bg-white md:px-20 xl:px-32 cursor-pointer'>
                    <Image className='' src="/images/card.png" alt="Card" height={132} width={132} />
                </div>
                <div className='bg-white py-1 md:px-20 xl:px-32 cursor-pointer'>
                    <Image className='md:py-1' src="/images/paypal.png" alt="Paypal" height={120} width={120} />
                </div>
                <div className='bg-white py-1 px-2 md:px-24 xl:px-44 cursor-pointer'>
                    <Image className='px-2' src="/images/apple.png" alt="Apple" height={80} width={80} />
                </div>
            </div>
            {/* card and payment information */}
            <div className='flex  flex-col md:flex-row items-center justify-center space-x-2 w-full px-2 md:space-x-6'>
                {/* card info */}
                <div className="w-full md:w-[50%] mr-4 mb-2 md:mr-14 py-4">
                    <h2 className="font-din text-checkout_title mb-4">CARD INFO</h2>
                    <div>
                        <div className="flex  items-center mb-7">
                            <label className="text-gray-500 mr-4">
                                <FiUser />
                            </label>
                            <input
                                type="text"
                                placeholder="Cardholders name"
                                className="border-b border-black bg-lightGray outline-none w-full md:w-[300px] text-black text-xs placeholder-black py-2"
                            />
                        </div>

                        <div className="flex items-center mb-7">
                            <label className="text-gray-500 mr-4">
                                <FiCreditCard />
                            </label>
                            <input
                                type="text"
                                placeholder="Card number"
                                className="border-b border-black outline-none w-full  bg-lightGray max-w-[300px] text-black text-xs placeholder-black py-2"
                            />
                        </div>
                        <div className="flex items-center space-x-4 mb-7">
                            <label className="text-gray-500">
                                <FiCalendar />
                            </label>
                            <input
                                type="text"
                                placeholder="Expiry date [MM/YY]"
                                className="border-b border-black outline-none w-full  bg-lightGray max-w-[150px] text-black text-xs placeholder-black py-2"
                            />
                            <input
                                type="text"
                                placeholder="CVC/CVV"
                                className="border-b border-black outline-none w-full  bg-lightGray max-w-[150px] text-black text-xs placeholder-black py-2"
                            />
                        </div>
                    </div>
                </div>
                {/* payment info */}
                <div className='w-full md:w-[50%] mr-4 mb-4 md:mr-14 py-4'>
                    <h2 className="font-din text-checkout_title mb-2">PAYMENT DETAILS</h2>
                    <div className="p-4 bg-white  justify-center flex flex-col space-y-5">
                        <p className='text-xs xl:text-sm flex justify-between'><span>Item name-M</span><span className=''>$59.99</span></p>
                        <p className='text-xs xl:text-sm text-gray flex justify-between'><span>Estimated delivery</span><span className=''>$12</span></p>
                        <p className='text-xs xl:text-sm font-semibold flex justify-between'><span>Total</span><span className=''>$71.99</span></p>
                        <button className='border-2 border-blue text-xs px-16 py-2 w-[90%] mt-4 mx-4'>Pay</button>
                    </div>
                </div>
            </div>
            {/* order summary */}
            <div className='w-full flex flex-col md:px-2'>
                <h2 className="font-din text-checkout_title mb-2">ORDER SUMMARY</h2>
                <div className="p-4 bg-white  flex flex-col space-y-2 md:space-y-2 w-full">
                    <p className='text-xs xl:text-sm border-b-2 justify-between flex py-1 border-lightGray'><span>Delivery from</span><span className='text-right font-din'>New York-USA</span></p>
                    <div className='flex flex-col md:flex-row py-4 justify-start'>
                        <Image className='' src="/images/brand_one_image_2.png" alt="Paypal" height={200} width={200} />
                        <div className='flex flex-col  px-2 w-full'>
                            <p className='flex flex-col ml-2'><span className='font-din'>ITEM NAME -M</span><span className='text-gray text-xs'>Lace & Loffas</span></p>
                            <p className='flex ml-2 mt-8 md:mt-32 text-xs'>$59.99</p>
                            <p className='flex ml-2 justify-between  mt-4 md:mt-8'><span className='text-gray text-xs'>1x</span><span className='text-gray text-xs'><FiTrash className="text-lg" /></span></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPayment