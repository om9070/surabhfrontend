import React, { useState } from "react";
import { useFormik } from "formik";
import Input from "../components/ui/Input";
import Image from "next/image";
import { FiTrash } from "react-icons/fi";
import { useRegisterMutation } from "../../hooks/useAuthentication";
import { useRouter } from "next/navigation";
import { registerValidationSchema } from "@/validation/authValidation";
import Link from "next/link";
import { toast } from "react-toastify";
// export const API_URL = "http://localhost:4000";
export const API_URL = "http://127.0.0.1:4000";

interface FormValues {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  user_type: "Brand" | "Shop" | "Consumer";
  profile_pic?: string | null;
  brand_name?: string;
}

const JoinForm: React.FC = () => {
  const [logo, setLogo] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const router = useRouter();
  const { mutate: register } = useRegisterMutation();

  const formik = useFormik<FormValues>({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      user_type: "Consumer", // Default user type
      profile_pic: null,
      brand_name: "",
    },
    validationSchema: registerValidationSchema,

    onSubmit: async (values) => {
      try {
        // Log values for debugging
        console.log(values);

        // Use mutation to register
        // register(values, {

        //   onSuccess: () => router.push("/verify"),
        //   onError: (error: any) =>
        //     setFormError(error?.message || "Registration failed."),
        // });

        const bodyData = {
          firstName: values.first_name,
          lastName: values.last_name,
          email: values.email,
          password: values.password,
          userType: values.user_type, // ✅ fixed: you were appending this under 'password'
          role: "user",
        };

        const response: any = await fetch(`${API_URL}/v1/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData),
        });

        const data = await response.json();
        if (response.ok) {
          toast(data.message);
          router.push("/");
        } else {
          toast.error(data.message);
        }
      } catch (error: any) {
        toast.error(error);
        setFormError(
          `${error} An unexpected error occurred. Please try again `
        );
      }
    },
  });

  const handleCheckboxChange = (value: string) => {
    formik.setFieldValue("user_type", value);
  };

  const handleAddPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
      formik.setFieldValue("profile_pic", file);
    }
  };

  const handleRemovePhoto = () => {
    setLogo(null);
    formik.setFieldValue("profile_pic", null);
  };

  return (
    <form
      className="font-din_medium flex flex-col gap-4"
      onSubmit={formik.handleSubmit}
    >
      {formError && <div className="text-red-500 text-xs m-4">{formError}</div>}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4">
        {["Consumer", "Shop", "Brand"].map((type) => (
          <div key={type} className="flex items-center space-x-2">
            <input
              type="radio"
              id={type}
              name="user_type"
              value={type}
              onChange={() => handleCheckboxChange(type)}
              checked={formik.values.user_type === type}
              className="peer hidden" // Hide the actual radio input
            />
            <div
              className="w-6 h-6 border border-gray-300 flex items-center justify-center cursor-pointer 
                         peer-checked:bg-blue-500 peer-checked:border-blue-500"
              onClick={() => handleCheckboxChange(type)}
            >
              {formik.values.user_type === type && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="white"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <label
              htmlFor={type}
              className="text-sm text-gray-600 cursor-pointer"
            >
              I&apos;m a {type.toLowerCase()}
            </label>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formik.values.first_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formik.values.last_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      {formik.values.user_type === "Brand" && (
        <div className="flex flex-col items-center justify-center mt-4">
          <div className="relative">
            {logo ? (
              <div className="relative">
                <Image
                  src={logo}
                  alt="Uploaded logo"
                  className="w-32 h-32 object-cover border border-gray-300 rounded-full" // Circular image
                  width={128}
                  height={128}
                />
                <button
                  onClick={handleRemovePhoto}
                  className="absolute top-0 right-0 bg-red-500 text-white p-1 flex items-center justify-center rounded-full"
                  style={{ width: "24px", height: "24px" }}
                >
                  <FiTrash size={14} />
                </button>
              </div>
            ) : (
              <label
                htmlFor="file-input"
                className="w-32 h-32 flex flex-col items-center justify-center cursor-pointer text-gray-600 border border-gray-300 rounded-full shadow-sm"
                style={{ backgroundColor: "#f5f5f5" }} // Light gray background
              >
                <span className="text-center text-xs font-bold uppercase tracking-wide leading-tight">
                  UPLOAD <br /> YOUR LOGO <br /> HERE
                </span>
              </label>
            )}
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleAddPhoto}
              className="hidden"
            />
          </div>

          {/* Brand Name Input Field */}
          <div className="mt-4 w-full">
            <div className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <Input
                type="text"
                name="brand_name"
                placeholder="Brand Name"
                value={formik.values.brand_name || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-4">
        <Link href="/login">
          <p className="font-din md:pr-10">I HAVE AN ACCOUNT</p>
        </Link>
        <button
          type="submit"
          className="`text-black py-1 font-bold px-12 md:ml-4 border-2 border-blue hover:bg-blue-600"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default JoinForm;
