// "use client";

// import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import { emailVerificationValidationSchema, forgotPasswordValidationSchema } from '@/validation/authValidation'
// import { useVerifyEmailMutation, useResendEmailMutation } from '../../../hooks/useAuthentication';
// import { useRouter } from 'next/navigation';



// export const EmailVerificationForm: React.FC = () => {

//     const { mutate: verify } = useVerifyEmailMutation();
//     const [formError, setFormError] = useState<string | null>(null);
//     const { mutate: resend } = useResendEmailMutation();
//     const [isResendVisible, setIsResendVisible] = useState(false);

//     const router = useRouter();



//     const formik = useFormik({
//         initialValues: {
//             code: '',
//             email: '',
//         },
//         validationSchema: isResendVisible ? forgotPasswordValidationSchema : emailVerificationValidationSchema,
//         onSubmit: (values) => {
//             if (Object.keys(formik.errors).length > 0) {
//                 console.log("Formik Errors:", formik.errors);
//             }
//             else {
//                 setFormError(null);
//                 if (isResendVisible) {
//                     resend(values.email, {
//                         onSuccess: () => {
//                             setIsResendVisible(false)
//                         },
//                         onError: (error: any) => {
//                             setFormError(error?.message);
//                         },
//                     }

//                     );
//                 } else {
//                     verify(values.code, {
//                         onSuccess: () => {
//                             router.push('/login');
//                         },
//                         onError: (error: any) => {
//                             setFormError(error?.message);
//                         },
//                     });
//                 }
//             }
//         }

//     });

//     return (
//         <div className='h-screen flex flex-col justify-center items-center'>
//             <div className=' flex flex-col items-center border-2  border-gray rounded p-8 md:p-12 justify-center'>
//                 {isResendVisible ?
//                     <h1 className="text-3xl mb-6 font-din">Resend Code</h1> :
//                     <h1 className="text-3xl mb-6 font-din">Verify your Email</h1>}
//                 {formError && (
//                     <div className="text-red-500 text-sm font-din">{formError}</div>
//                 )}

//                 <form className='font-din_medium flex flex-col gap-4 w-[95%]' onSubmit={formik.handleSubmit}>
//                     <div className="border-b border-gray-400">
//                         {isResendVisible ? <input
//                             type="email"
//                             name="email"
//                             value={formik.values.email}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             placeholder="Enter the email address"
//                             className="w-full border-none focus:border-none py-2 focus:outline-none placeholder-black m-2"
//                         /> :
//                             <input
//                                 type="code"
//                                 name="code"
//                                 value={formik.values.code}
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                                 placeholder="Enter the code"
//                                 className="w-full border-none focus:border-none py-2 focus:outline-none placeholder-black m-2"
//                             />

//                         }
//                     </div>
//                     {isResendVisible ? formik.touched.email && formik.errors.email ? (
//                         <div className="text-red-500 text-xs">{formik.errors.email}</div>
//                     ) : null : formik.touched.code && formik.errors.code ? (
//                         <div className="text-red-500 text-xs">{formik.errors.code}</div>
//                     ) : null}

//                     <div className="flex flex-col gap-4">

//                         <button type="submit"
//                             className="text-black py-2 mt-5 px-4 font-din bg-white border-2 border-blue hover:bg-blue-100 transition duration-300 ease-in-out w-full">
//                             {isResendVisible ? "Resend Code" : "Verify Code"}
//                         </button>

//                         <button onClick={() => setIsResendVisible(!isResendVisible)} className="text-xs text-[#4273F5] self-end cursor-pointer no-underline hover:underline">
//                             {isResendVisible ? "Back to Verify" : "Resend Code"}
//                         </button>
//                     </div>

//                 </form >
//             </div>


//         </div >
//     );
// };

"use client";

import React, { useState } from 'react';
import { useFormik } from 'formik';
import {
    emailVerificationValidationSchema,
    forgotPasswordValidationSchema
} from '@/validation/authValidation';
import {
    useVerifyEmailMutation,
    useResendEmailMutation
} from '../../../hooks/useAuthentication';
import { useRouter } from 'next/navigation';
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import { FiCheckCircle, FiAlertTriangle } from "react-icons/fi";

export const EmailVerificationForm: React.FC = () => {
    const { mutate: verify } = useVerifyEmailMutation();
    const { mutate: resend } = useResendEmailMutation();
    const [formError, setFormError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [isResendVisible, setIsResendVisible] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            code: '',
            email: '',
        },
        validationSchema: isResendVisible
            ? forgotPasswordValidationSchema
            : emailVerificationValidationSchema,
        onSubmit: (values) => {
            setFormError(null);
            setSuccessMessage(null);
            setSubmitting(true);

            if (isResendVisible) {
                resend(values.email, {
                    onSuccess: () => {
                        setSuccessMessage("A verification code has been resent to your email.");
                        setIsResendVisible(false);
                    },
                    onError: (error: any) => {
                        setFormError(error?.message || "An error occurred while resending the code.");
                    },
                    onSettled: () => {
                        setSubmitting(false);
                    },
                });
            } else {
                verify(values.code, {
                    onSuccess: () => {
                        setSuccessMessage("Email successfully verified!");
                        setTimeout(() => {
                            router.push('/login');
                        }, 3000);
                    },
                    onError: (error: any) => {
                        setFormError(error?.message || "Invalid verification code. Please try again.");
                    },
                    onSettled: () => {
                        setSubmitting(false);
                    },
                });
            }
        },
    });

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            {/* Alerts */}
            <div className="my-4 w-[80%] md:w-[36%]">
                {formError && (
                    <Alert variant="destructive" className="mt-4">
                        <FiAlertTriangle className="h-5 w-5 text-red-500" />
                        <div>
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription className="font-serif text-xs">
                                {formError}
                            </AlertDescription>
                        </div>
                    </Alert>
                )}
                {successMessage && (
                    <Alert variant="default" className="mt-4">
                        <FiCheckCircle className="h-5 w-5 text-green-500" />
                        <div>
                            <AlertTitle>Success</AlertTitle>
                            <AlertDescription className="font-serif text-xs">
                                {successMessage}
                            </AlertDescription>
                        </div>
                    </Alert>
                )}
            </div>
            {/* Form */}
            <div className="flex flex-col items-center border-2 border-gray rounded p-8 md:p-12 justify-center">
                <h1 className="text-3xl mb-6 font-din">
                    {isResendVisible ? "Resend Code" : "Verify your Email"}
                </h1>
                <form
                    className="font-din_medium flex flex-col gap-4 w-[95%]"
                    onSubmit={formik.handleSubmit}
                >
                    <div className="border-b border-gray-400">
                        {isResendVisible ? (
                            <input
                                type="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Enter the email address"
                                className="w-full border-none focus:border-none py-2 focus:outline-none placeholder-black m-2"
                            />
                        ) : (
                            <input
                                type="text"
                                name="code"
                                value={formik.values.code}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Enter the code"
                                className="w-full border-none focus:border-none py-2 focus:outline-none placeholder-black m-2"
                            />
                        )}
                    </div>
                    {isResendVisible
                        ? formik.touched.email && formik.errors.email && (
                              <div className="text-red-500 text-xs">
                                  {formik.errors.email}
                              </div>
                          )
                        : formik.touched.code && formik.errors.code && (
                              <div className="text-red-500 text-xs">
                                  {formik.errors.code}
                              </div>
                          )}

                    <div className="flex flex-col gap-4">
                        <button
                            type="submit"
                            className={`text-black py-2 mt-5 px-4 font-din bg-white border-2 border-blue hover:bg-blue-100 transition duration-300 ease-in-out w-full ${
                                submitting ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            disabled={submitting}
                        >
                            {submitting
                                ? "Submitting..."
                                : isResendVisible
                                ? "Resend Code"
                                : "Submit Code"}
                        </button>

                        <button
                            type="button"
                            onClick={() => setIsResendVisible(!isResendVisible)}
                            className="text-xs text-[#4273F5] self-end cursor-pointer no-underline hover:underline"
                        >
                            {isResendVisible ? "Back to Verify" : "Resend Code"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


