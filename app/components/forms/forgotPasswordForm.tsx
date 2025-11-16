"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { forgotPasswordValidationSchema } from "@/validation/authValidation";
import { useRequestPasswordResetMutation } from "../../../hooks/useAuthMutation";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import { FiCheckCircle, FiAlertTriangle } from "react-icons/fi";

export const ForgotPasswordForm: React.FC = () => {
    const { mutate: requestPasswordReset } = useRequestPasswordResetMutation();
    const [formError, setFormError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);
    const [showForm, setShowForm] = useState(true); 
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: forgotPasswordValidationSchema,
        onSubmit: (values) => {
            setFormError(null);
            setSuccessMessage(null);
            setSubmitting(true);

            requestPasswordReset(values.email, {
                onSuccess: (response) => {
                    setSuccessMessage(
                        response.data.message || "Password reset instructions sent to your email."
                    );
                    setShowForm(false); 
                },
                onError: (error) => {
                    if (error instanceof Error) {
                        setFormError(error.message || "An error occurred. Please try again.");
                    } else {
                        setFormError("An unexpected error occurred. Please try again.");
                    }
                    setShowForm(false); 
                },
                onSettled: () => {
                    setSubmitting(false);
                },
            });
        },
    });

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            {/* Alerts */}
            <div className="my-4 w-[80%] md:w-[40%]">
                {formError && (
                    <Alert variant="destructive" className="mt-4">
                        <FiAlertTriangle className="h-5 w-5 text-red-500" />
                        <div>
                            <AlertTitle className=" text-red-500" >Error</AlertTitle>
                            <AlertDescription className="font-serif text-xs">{formError}</AlertDescription>
                        </div>
                    </Alert>
                )}
                {successMessage && (
                    <Alert variant="default" className="mt-4">
                        <FiCheckCircle className="h-5 w-5 text-green-500" />
                        <div>
                            <AlertTitle>Success</AlertTitle>
                            <AlertDescription className="font-serif text-xs">{successMessage}</AlertDescription>
                        </div>
                    </Alert>
                )}
            </div>
            {/* Form or Try Again Button */}
            {showForm ? (
                <div className="flex flex-col py-20 items-center justify-center border-2 border-gray w-[80%] md:w-[40%] rounded-md">
                    <h1 className="md:text-3xl text-lg mb-6 font-din">Forgot Password</h1>
                    <form
                        className="font-din_medium flex flex-col gap-4 w-[80%]"
                        onSubmit={formik.handleSubmit}
                    >
                        <div className="border-b border-gray-400">
                            <input
                                type="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Enter your email"
                                className="w-full border-none focus:border-none focus:outline-none placeholder-black m-2"
                            />
                        </div>
                        <button
                            type="submit"
                            className={`text-black py-2 mt-5 px-4 font-din bg-white border-2 border-blue hover:bg-blue-100 transition duration-300 ease-in-out w-full ${
                                submitting ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            disabled={submitting}
                        >
                            {submitting ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                </div>
            ) : formError ? (
                <button
                    className="text-white py-2 px-10 font-serif  bg-blue-500 border-2 hover:bg-blue-600 border-blue transition duration-300 mt-5"
                    onClick={() => setShowForm(true)} 
                >
                    Try Again
                </button>
            ) : null}
        </div>
    );
};
