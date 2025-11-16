import React from 'react'
import Image from 'next/image';

function CheckoutConfirmation() {
    return (
        <div className='flex flex-col md:p-4 justify-center justify-items-center w-full'>
            <div className='bg-white flex flex-col items-center justify-center py-6 mb-6 mt-2 px-2 w-[100%]'>
                <p className='font-din md:text-checkout_title'> THANK YOU FOR YOUR ORDER</p>
                <div className="h-full overflow-hidden relative">
                    <Image
                        className='py-4'
                        src="/images/nik1.png"
                        alt="Tick"
                        height={200}
                        width={200}
                    />
                </div>
                <p className='text-sm'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center py-4'>
                <button
                    type="submit"
                    className="text-black py-2 font-bold px-8 md:px-12 text-xs md:ml-4 m-4 border-2 border-blue  hover:bg-blue-600"
                >
                    VIEW ORDER
                </button>
                <button
                    type="submit"
                    className="text-white py-2 font-bold px-2 md:px-8 bg-blue text-xs md:ml-4 border-2 border-blue  hover:bg-blue-600"
                >
                    CONTINUE SHOPPING
                </button>
            </div>



        </div>
    )
}

export default CheckoutConfirmation