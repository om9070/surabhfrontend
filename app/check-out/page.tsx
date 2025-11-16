'use client'
import React from 'react';
import Steps from '../components/menus/tabs/Steps';
import WelcomeCheckout from '../components/WelcomeCheckout';
import CheckoutDelivery from '../components/CheckoutDelivery';
import CheckoutPayment from '../components/CheckoutPayment';
import CheckoutConfirmation from '../components/CheckoutConfirmation';

const Checkout = () => {

    const stepData = [
        { key: 'welcome', label: 'Welcome', content: <WelcomeCheckout /> },
        { key: 'delivery', label: 'Delivery', content: <CheckoutDelivery /> },
        { key: 'payment', label: 'Payment', content: <CheckoutPayment /> },
        { key: 'confirmation', label: 'Confirmation', content: <CheckoutConfirmation /> },
    ];

    return (
        <div className="bg-lightGray">
            <div className="bg-lightGray mx-10">
                <div className={`flex flex-col md:mx-10 mx-2 py-5 gap-4`}>
                    <h1 className={`relative flex flex-col  'w-[490px]'} `}>
                        <span className="text-black font-din text-main_title z-50">{"CHECKOUT"}</span>
                        <span className={`absolute bg-blue left-[32px] top-[32px] h-[32px] w-[320px]`}></span>
                    </h1>
                </div>
            </div>
            <div className="w-full py-4">
                <div className="md:w-[80%] m-auto">
                    <Steps steps={stepData} />
                </div>
            </div>
        </div>
    );
};

export default Checkout;
