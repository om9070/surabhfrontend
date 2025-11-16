
"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { newPasswordValidationSchema } from "@/validation/authValidation";
import { useResetPasswordMutation } from "../../../hooks/useAuthentication";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import { FiCheckCircle, FiAlertTriangle } from "react-icons/fi";
import { useRouter } from "next/navigation";

export const NewPasswordForm: React.FC<{ uid: string; token: string }> = ({ uid, token }) => {
    const { mutate: resetPassword } = useResetPasswordMutation();
    const [formError, setFormError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();


    const formik = useFormik({
        initialValues: {
            newPassword: "",
            confirmPassword: "",
        },
        validationSchema: newPasswordValidationSchema,
        onSubmit: (values) => {
            setFormError(null);
            setSuccessMessage(null);
            setSubmitting(true);

            resetPassword(
                { ...values, uid, token },
                {
                    onSuccess: (response) => {
                        setSuccessMessage(
                            response.data.message || "Your password has been successfully reset."
                        );
                        setTimeout(() => {
                            router.push("/login"); 
                        }, 3000);
                    },
                    onError: (error) => {
                        if (error instanceof Error) {
                            setFormError(error.message || "An error occurred. Please try again.");
                        } else {
                            setFormError("An unexpected error occurred. Please try again.");
                        }
                    },
                    onSettled: () => {
                        setSubmitting(false);
                    },
                }
            );
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
                            <AlertTitle>Error</AlertTitle>
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
            {/* Form */}
            <div className="flex flex-col py-14 items-center justify-center border-2 border-gray w-[80%] md:w-[40%] rounded-md ">
                <h1 className="text-3xl mb-6 font-din">Reset Password</h1>
                <form
                    className="font-din_medium flex flex-col gap-4 w-4/5"
                    onSubmit={formik.handleSubmit}
                >
                    <div className="border-b border-gray-400">
                        <input
                            type="password"
                            name="newPassword"
                            placeholder="Password"
                            value={formik.values.newPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="w-full border-none focus:border-none border-b border-gray-400 focus:outline-none placeholder-black"
                        />
                        {formik.touched.newPassword && formik.errors.newPassword ? (
                            <div className="text-red-500 text-sm">{formik.errors.newPassword}</div>
                        ) : null}
                    </div>
                    <div className="border-b border-gray-400">
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="w-full border-none focus:border-none border-b border-gray-400 focus:outline-none placeholder-black"
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                            <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
                        ) : null}
                    </div>
                    <button
                        type="submit"
                        className={`text-black py-2 mt-5 px-4 font-din bg-white border-2 border-blue hover:bg-blue-100 transition duration-300 ease-in-out w-full ${submitting ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        disabled={submitting}
                    >
                        {submitting ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
};
