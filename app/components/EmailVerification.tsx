"use client";

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'; 

const EmailVerification: React.FC = () => {
    const [isResendVisible, setIsResendVisible] = useState(false);
    const router = useRouter();

    const formikVerify = useFormik({
        initialValues: {
            verificationCode: '',
        },
        validationSchema: Yup.object({
            verificationCode: Yup.string().required('Verification code is required'),
        }),
        onSubmit: async (values) => {
            const { verificationCode } = values;

            try {
                // const response = await axiosInstance.post('/api/account/verify-email/'
                const response = await axios.post('http://127.0.0.1:8000/api/account/verify-email/', {
                    code: verificationCode,
                });

                if (response.data.success === 'True') {
                    toast.success('Email verified successfully!');
                    setTimeout(() => {
                        router.push('/login'); 
                    }, 2000);
                } else {
                    toast.error('Failed to verify email. Please check the code and try again.');
                }
            } catch (error) {
                console.error('Error during email verification:', error);
                toast.error('An error occurred while verifying the email. Please try again.');
            }
        },
    });

    const formikResend = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
        }),
        onSubmit: async (values) => {
            const { email } = values;

            try {
                const response = await axios.post('http://127.0.0.1:8000/api/account/resend-email/', {
                    email,
                });

                if (response.data.success === 'True') {
                    toast.success('Verification email resent successfully!');
                    setIsResendVisible(false);
                } else {
                    toast.error('Failed to resend verification email. Please check your email and try again.');
                }
            } catch (error) {
                console.error('Error during resending email:', error);
                toast.error('An error occurred while resending the verification email. Please try again.');
            }
        },
    });

    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <h1 className="text-3xl mb-6 font-din">Email Verification</h1>

            {isResendVisible ? (
                <form className='font-din_medium flex flex-col gap-4' onSubmit={formikResend.handleSubmit}>
                    <div className="border-b border-gray-400">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formikResend.values.email}
                            onChange={formikResend.handleChange}
                            onBlur={formikResend.handleBlur}
                            className="w-full border-none focus:border-none py-2 focus:outline-none placeholder-black"
                        />
                        {formikResend.touched.email && formikResend.errors.email ? (
                            <div className="text-red-500 text-xs">{formikResend.errors.email}</div>
                        ) : null}
                    </div>
                    <button type="submit" className="text-black py-2 mt-5 px-4 font-din bg-white border-2 border-blue hover:bg-blue-100 transition duration-300 ease-in-out">
                        Resend Email
                    </button>
                </form>
            ) : (
                <>
                    <form className='font-din_medium flex flex-col gap-4 mb-10' onSubmit={formikVerify.handleSubmit}>
                        <div className="border-b border-gray-400">
                            <input
                                type="text"
                                name="verificationCode"
                                placeholder="Verification Code"
                                value={formikVerify.values.verificationCode}
                                onChange={formikVerify.handleChange}
                                onBlur={formikVerify.handleBlur}
                                className="w-full border-none focus:border-none py-2 focus:outline-none placeholder-black"
                            />
                            {formikVerify.touched.verificationCode && formikVerify.errors.verificationCode ? (
                                <div className="text-red-500 text-sm">{formikVerify.errors.verificationCode}</div>
                            ) : null}
                        </div>
                        <button type="submit" className="text-black py-2 mt-5 px-4 font-din bg-white border-2 border-blue hover:bg-blue-100 transition duration-300 ease-in-out">
                            Verify
                        </button>
                    </form>


                    <p className="text-xs font-bold font-din_sm mb-4">
                        Didn&apos;t receive the codes?{' '}
                        <button
                            type="button"
                            className="text-blue underline"
                            onClick={() => setIsResendVisible(true)}
                        >
                            Click here
                        </button>
                    </p>
                </>
            )}

            <ToastContainer />
        </div>
    );
};

export default EmailVerification;
