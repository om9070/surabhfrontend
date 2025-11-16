import React, { useState } from "react";
import { useFormik } from "formik";
import Loading from "../Loading";
import {
  FiMapPin,
  FiTag,
  FiHome,
  FiGlobe,
  FiUser,
  FiEdit,

} from "react-icons/fi";
import { FaMapPin } from "react-icons/fa";
import { useUpdateBrandMutation } from "@/hooks/useBrand";
import useStore from "@/stores";
import Image from "next/image";

const EditBrandForm = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const { mutate: updateBrandMutate } = useUpdateBrandMutation();
  const brand = useStore((state) => state.user?.brand);

  const clearMessages = () => {
    setTimeout(() => {
      setFormError(null);
      setSuccessMessage(null);
    }, 3000);
  };

  const getInitialValues = (brandData: any) => ({
    brand_name: brandData?.brand_name || "",
    brand_logo: brandData?.brand_logo || null,
    brand_description: brandData?.brand_description || "",
    brand_address: brandData?.brand_address || "",
    brand_country: brandData?.brand_country || "",
    brand_state: brandData?.brand_state || "",
    brand_city: brandData?.brand_city || "",
    brand_zip_code: brandData?.brand_zip_code || "",
    brand_pic: null,
  });

  const formik = useFormik({
    initialValues: getInitialValues(brand),
    enableReinitialize: true,
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (!values.brand_name) errors.brand_name = "Brand name is required";
      if (!values.brand_address) errors.brand_address = "Address is required";
      if (!values.brand_country) errors.brand_country = "Country is required";
      if (!values.brand_city) errors.brand_city = "City is required";
      if (!values.brand_state) errors.brand_state = "State is required";
      if (!values.brand_zip_code)
        errors.brand_zip_code = "Zip code is required";
      if (!values.brand_description)
        errors.brand_description = "Description is required";
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleEditImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      formik.setFieldValue("brand_pic", file);
      const previewUrl = URL.createObjectURL(file);
      setPreviewImage(previewUrl);
    }
  };

  const handleEditLogo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      formik.setFieldValue("brand_logo", file);
      const previewUrl = URL.createObjectURL(file);
      setLogoPreview(previewUrl);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (Object.keys(formik.errors).length > 0) {
          console.log("Formik Errors:", formik.errors);
          setFormError("Please fix the highlighted errors.");
        } else {
          formik.handleSubmit(e);
        }
      }}
      className="flex flex-col md:flex-row gap-10"
    >
      {/* First Column */}
      <div className="flex-1">
        {/* Logo Section */}
        <div className="flex justify-center items-center">
          <div className="relative w-24 h-24 rounded-full bg-gray-200 border border-[#8D8D8D] overflow-hidden">
           
              <Image
                src={logoPreview || ""}
                alt="Brand Logo Preview"
                className="w-full h-full object-cover"
                fill={true}
              />
            
            <label
              htmlFor="brandLogoInput"
              className="absolute inset-0 flex items-center justify-center bg-gray-700 text-white rounded-full w-8 h-8 m-auto cursor-pointer"
            >
              <FiEdit className="text-blue-700 text-xl" />
            </label>
            <input
              id="brandLogoInput"
              type="file"
              accept="image/*"
              onChange={handleEditLogo}
              className="hidden"
            />
          </div>
        </div>

        <div className="mb-4 flex justify-center items-center">
          <label className="text-gray-500 mr-4">
            <FiUser />
          </label>
          <input
            type="text"
            name="brand_name"
            value={formik.values.brand_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Brand Name"
            className="border-b-2 border-lightGray outline-none w-full max-w-[700px] md:w-[350px] text-gray text-xs placeholder-gray py-2"
          />
          {formik.touched.brand_name && formik.errors.brand_name && (
            <div className="text-red-500 text-xs mt-1">
            </div>
          )}
        </div>

        {/* Address */}
        <div className="mb-4 flex justify-center items-center">
          <label className="text-gray-500 mr-4">
            <FiMapPin />
          </label>
          <input
            type="text"
            name="brand_address"
            value={formik.values.brand_address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Address"
            className="border-b-2 border-lightGray outline-none w-full  text-gray text-xs placeholder-gray py-2"
          />
          {formik.touched.brand_address && formik.errors.brand_address && (
            <div className="text-red-500 text-xs mt-1">
            </div>
          )}
        </div>
        {/* Zip Code and Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex justify-center items-center">
            <label className="text-gray-500 mr-4">
              <FiTag />
            </label>
            <input
              type="text"
              name="brand_zip_code"
              value={formik.values.brand_zip_code}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Zip Code"
              className="border-b-2 border-lightGray outline-none w-full  text-gray text-xs placeholder-gray py-2"
            />
            {formik.touched.brand_zip_code && formik.errors.brand_zip_code && (
              <div className="text-red-500 text-xs mt-1">
              </div>
            )}
          </div>
          <div className="flex justify-center items-center">
            <label className="text-gray-500 mr-4">
              <FiGlobe />
            </label>
            <input
              type="text"
              name="brand_country"
              value={formik.values.brand_country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Country"
              className="border-b-2 border-lightGray outline-none w-full  text-gray text-xs placeholder-gray py-2"
            />
            {formik.touched.brand_country && formik.errors.brand_country && (
              <div className="text-red-500 text-xs mt-1">
              </div>
            )}
          </div>
        </div>
        {/* City and State */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex justify-center items-center">
            <label className="text-gray-500 mr-4">
              <FiHome />
            </label>
            <input
              type="text"
              name="brand_city"
              value={formik.values.brand_city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="City"
              className="border-b-2 border-lightGray outline-none w-full  text-gray text-xs placeholder-gray py-2"
            />
            {formik.touched.brand_city && formik.errors.brand_city && (
              <div className="text-red-500 text-xs mt-1">
              </div>
            )}
          </div>
          <div className="flex justify-center items-center">
            <label className="text-gray-500 mr-4">
              <FaMapPin />
            </label>
            <input
              type="text"
              name="brand_state"
              value={formik.values.brand_state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="State"
              className="border-b-2 border-lightGray outline-none w-full  text-gray text-xs placeholder-gray py-2"
            />
            {formik.touched.brand_state && formik.errors.brand_state && (
              <div className="text-red-500 text-xs mt-1">
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Second Column */}
      <div className="flex-1">
        {/* Description */}
        <h1 className="font-din text-3xl mb-4">DESCRIPTION</h1>
        <textarea
          name="brand_description"
          value={formik.values.brand_description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border border-gray w-full md:w-[400px] h-[100px] md:h-[140px]  text-gray text-xs placeholder-gray pl-2 pt-2"
          placeholder="Type brand description here"
        />
        {formik.touched.brand_description &&
          formik.errors.brand_description && (
            <div className="text-red-500 text-xs mt-1">
            </div>
          )}

        {/* Photos */}
        <h2 className="font-din text-3xl mt-4 mb-2">PHOTOS</h2>
        <div className="relative w-32 h-32 bg-gray-200 border border-[#8D8D8D] rounded-md">
          {previewImage ? (
            <Image
              src={previewImage}
              alt="brand-pic"
              className="object-cover rounded-md"
              fill={true}
            />
          ) : (
            <div className="flex items-center justify-center h-full  text-gray text-xs placeholder-gray">
              No photo available
            </div>
          )}
          <label
            htmlFor="brandPicInput"
            className="absolute top-2 left-2 cursor-pointer"
          >
            <FiEdit className="text-blue-500 bg-white rounded-full p-1 w-8 h-8" />
          </label>
          <input
            id="brandPicInput"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleEditImage}
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-center w-full mt-8">
          <button
            type="submit"
         className=" mr-4 mt-8 flex items-center justify-center py-[2px] px-16 h-[40px] md:h-[50px] my-2 font-din border-[3px] border-blue bg-transparent text-black hover:bg-blue-600"
          >
            Update Brand
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditBrandForm;
