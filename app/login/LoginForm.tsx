"use client";

import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInValidationSchema } from "@/validation/authValidation";
import { useSignInMutation } from "../../hooks/useAuthentication";
import { API_URL } from "../join/JoinForm";
import { toast } from "react-toastify";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { mutate: signin, isLoading } = useSignInMutation();
  const [formError, setFormError] = useState<string | null>(null);
  const router = useRouter();

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInValidationSchema,
    onSubmit: async (values) => {
      let bodyData = {
        email: values.email,
        password: values.password,
      };
      try {
        const response: any = await fetch(`${API_URL}/v1/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData),
        });

        const getdata = await response.json();
        localStorage.setItem("user", JSON.stringify(getdata));
        toast("user login successfully.");
            window.dispatchEvent(new Event("auth"));


        router.push("/");
      } catch (er: any) {
        setFormError(er);
        toast(er);
      }
    },
  });

  return (
    <>
      <form
        className="font-din_medium flex flex-col gap-4"
        onSubmit={formik.handleSubmit}
      >
        {formError && (
          <div className="text-red-500 text-sm font-din" aria-live="polite">
            {formError}
          </div>
        )}
        <div className="border-b border-gray-400">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border-none focus:outline-none py-2 placeholder-black"
            aria-invalid={formik.touched.email && !!formik.errors.email}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-500 text-sm" aria-live="polite">
              {formik.errors.email}
            </span>
          )}
        </div>
        <div className="border-b border-gray-400">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border-none focus:outline-none py-2 placeholder-black"
            aria-invalid={formik.touched.password && !!formik.errors.password}
          />
          {formik.touched.password && formik.errors.password && (
            <span className="text-red-500 text-sm" aria-live="polite">
              {formik.errors.password}
            </span>
          )}
        </div>

        <div className="mt-4 text-right">
          <Link href="/forgot-password">
            <h4 className="text-sm text-gray-600 underline">
              Forgot password?
            </h4>
          </Link>
        </div>

        <div className="mt-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-4">
            <Link href="/join">
              <p className="font-din md:pr-10">I DON&apos;T HAVE AN ACCOUNT</p>
            </Link>
            <button
              type="submit"
              className={`text-black py-1 font-bold px-12 md:ml-4 border-2 border-blue hover:bg-blue-600 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "LOGIN"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
