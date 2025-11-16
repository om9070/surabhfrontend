'use client'
import { shopDataValidationSchema } from "@/validation/shopDataValidation"
import { useFormik } from "formik"
import router from "next/router"
import { useState } from "react"
import Image from 'next/image'
import { FiMapPin, FiTag, FiGlobe, FiHome, FiMail, FiShoppingBag, FiType, FiAnchor, FiTrash, FiEdit } from "react-icons/fi"
// import { usePostStoreMutation } from "@/hooks/useStore"
import useStore from "@/stores"
import { useRouter } from "next/navigation"


export const StoreForm: React.FC = () => {
    // const { mutate: storeData } = usePostStoreMutation()
    const user = useStore((state) => state.user);
    const [formError, setFormError] = useState<string | null>(null)
    const router = useRouter()

    const getInitialValues = (userData: any) => ({
        shop_name: '',
        shop_city: '',
        shop_state: '',
        shop_country: '',
        shop_type: '',
        store_images: [],
        shop_description: '',
        shop_address: '',
        shop_zip_code: '',
        user: userData?.id,
        shop_brand: userData?.brand?.id || null,
    });

    const formik = useFormik({
        initialValues: getInitialValues(user),
        validationSchema: shopDataValidationSchema,
        onSubmit: (values) => {
            if (Object.keys(formik.errors).length > 0) {
                console.log("Formik Errors:", formik.errors);
            }
            console.log("Formik submission triggered:", values)
            setFormError(null);

            const formData = new FormData();
            formData.append("shop_name", values.shop_name);
            formData.append("shop_city", values.shop_city);
            formData.append("shop_state", values.shop_state);
            formData.append("shop_country", values.shop_country);
            formData.append("shop_type", values.shop_type);
            formData.append("shop_description", values.shop_description);
            formData.append("shop_address", values.shop_address);
            formData.append("shop_zip_code", values.shop_zip_code);

            // Append user and brand IDs
            formData.append("user", values.user ? values.user.toString() : "");
            if (values.shop_brand) {
                formData.append("shop_brand", values.shop_brand.toString());
            }


            if (Array.isArray(values.store_images)) {
                values.store_images.forEach((file: File) => {
                    formData.append("store_images", file);
                });
            }

            // storeData(formData, {
            //     onSuccess: () => {
            //         router.back();
            //     },
            //     onError: (error: any) => {
            //         setFormError(error?.message || "Submission failed. Please try again.");
            //     },
            // });
        },
    })
    const [imageList, setImageList] = useState<{ src: string; alt: string }[]>([]);

    const handleAddPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Update Formik field
            formik.setFieldValue("store_images", [...formik.values.store_images, file]);

            // Generate a preview for the image
            const preview = { src: URL.createObjectURL(file), alt: file.name };
            setImageList([...imageList, preview]);
        }
    };

    const handleRemovePhoto = (index: number) => {
        // Remove the image from Formik field
        const updatedFormikImages = formik.values.store_images.filter((_, i) => i !== index);
        formik.setFieldValue("store_images", updatedFormikImages);

        // Remove the image preview
        const updatedImageList = imageList.filter((_, i) => i !== index);
        setImageList(updatedImageList);
    };

    const handleReplacePhoto = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newImageList = [...imageList];
                newImageList[index] = { src: reader.result as string, alt: file.name };
                setImageList(newImageList);
            };
            reader.readAsDataURL(file);
        }
    };


    return (

        <div className="flex flex-col bg-white p-4 md:flex-row">
            <div className="w-full md:w-[400px]">
                <h1 className="text-3xl mb-6 font-din">Create a New Store</h1>
                {formError && (
                    <div className="text-red-500 text-sm font-din">{formError}</div>
                )}
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if (Object.keys(formik.errors).length > 0) {
                        console.log("Formik Errors:", formik.errors);
                        setFormError("Please fix the highlighted errors.");
                    } else {
                        formik.handleSubmit(e);
                    }
                }}>
                    <div className="flex items-center mb-7">
                        <label className="text-gray-500 mr-4">
                            <FiShoppingBag />
                        </label>
                        <div className="flex flex-col">
                        <input
                            type="text"
                            name="shop_name"
                            value={formik.values.shop_name}
                            onChange={formik.handleChange}
                            placeholder="Name"
                            className="border-b-2 border-lightGray outline-none w-full max-w-[700px] md:w-[350px] text-black text-xs placeholder-black py-2"
                        />

                        {formik.touched.shop_name && formik.errors.shop_name ? (
                            <div className="text-red-500 text-xs">{formik.errors.shop_name}</div>
                        ) : null}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center mb-7">
                        <div className="flex items-center w-full md:w-auto mb-4 md:mb-0 md:mr-4">
                            <label className="text-gray-500 mr-4">
                                <FiMapPin />
                            </label>
                            <div className="flex flex-col">
                            <input
                                type="text"
                                name="shop_address"
                                value={formik.values.shop_address}
                                onChange={formik.handleChange}
                                placeholder="Address"
                                className="border-b-2 border-lightGray outline-none w-full text-black text-xs placeholder-black py-2"
                            />                            {formik.touched.shop_address && formik.errors.shop_address ? (
                                <div className="text-red-500 text-xs">{formik.errors.shop_address}</div>
                            ) : null}
                            </div>
                        </div>
                        <div className="flex items-center w-full md:w-auto mb-4 md:mb-0 md:mr-4">
                            <label className="text-gray-500 mr-4">
                                <FiTag />
                            </label>
                            <div className="flex flex-col">
                            <input
                                type="text"
                                name="shop_zip_code"
                                value={formik.values.shop_zip_code}
                                onChange={formik.handleChange}
                                placeholder="Zip Code"
                                className="border-b-2 border-lightGray outline-none w-full md:w-[150px] text-black text-xs placeholder-black py-2"
                            />
                            {formik.touched.shop_zip_code && formik.errors.shop_zip_code ? (
                                <div className="text-red-500 text-xs">{formik.errors.shop_zip_code}</div>
                            ) : null}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center mb-7">

                        <div className="flex items-center w-full md:w-auto mb-4 md:mb-0 md:mr-4">
                            <label className="text-gray-500 mr-4">
                                <FiHome />
                            </label>
                            <div className="flex flex-col">
                            <input
                                type="text"
                                name="shop_city"
                                value={formik.values.shop_city}
                                onChange={formik.handleChange}
                                placeholder="City"
                                className="border-b-2 border-lightGray outline-none w-full md:w-[150px] text-black text-xs placeholder-black py-2"
                            />
                            {formik.touched.shop_city && formik.errors.shop_city ? (
                                <div className="text-red-500 text-xs">{formik.errors.shop_city}</div>
                            ) : null}
                            </div>
                        </div>
                        <div className="flex items-center w-full md:w-auto mb-4 md:mb-0 md:mr-4">
                            <label className="text-gray-500 mr-4">
                                <FiGlobe />
                            </label>
                            <div className="flex flex-col">
                            <input
                                type="text"
                                name="shop_state"
                                value={formik.values.shop_state}
                                onChange={formik.handleChange}
                                placeholder="State"
                                className="border-b-2 border-lightGray outline-none w-full md:w-[150px] text-black text-xs placeholder-black py-2"
                            />
                            {formik.touched.shop_state && formik.errors.shop_state ? (
                                <div className="text-red-500 text-xs">{formik.errors.shop_state}</div>
                            ) : null}
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col md:flex-row items-center mb-7">
                        <div className="flex items-center w-full md:w-auto mb-4 md:mb-0 md:mr-4">
                            <label className="text-gray-500 mr-4">
                                <FiGlobe />
                            </label>
                            <div className="flex flex-col">
                            <input
                                type="text"
                                name="shop_country"
                                value={formik.values.shop_country}
                                onChange={formik.handleChange}
                                placeholder="Country"
                                className="border-b-2 border-lightGray outline-none w-full md:w-[150px] text-black text-xs placeholder-black py-2"
                            />
                            {formik.touched.shop_country && formik.errors.shop_country ? (
                                <div className="text-red-500 text-xs">{formik.errors.shop_country}</div>
                            ) : null}
                            </div>
                        </div>
                        <div className="flex items-center w-full md:w-auto mb-4 md:mb-0 md:mr-4">
                            <label className="text-gray-500 mr-4">
                                <FiAnchor />
                            </label>
                            <div className="flex flex-col">
                            <input
                                type="text"
                                name="shop_type"
                                value={formik.values.shop_type}
                                onChange={formik.handleChange}
                                placeholder="Shop Type"
                                className="border-b-2 border-lightGray outline-none w-full md:w-[150px] text-black text-xs placeholder-black py-2"
                            />
                            {formik.touched.shop_type && formik.errors.shop_type ? (
                                <div className="text-red-500 text-xs">{formik.errors.shop_type}</div>
                            ) : null}
                            </div>
                        </div>
                        {/* <div className="flex items-center w-full md:w-auto">
                                <label className="text-gray-500 mr-4">
                                    <FiShoppingBag />
                                </label>
                                <input
                                    type="text"
                                    name="shop_brand"
                                    value={formik.values.shop_brand || ""}
                                    onChange={formik.handleChange}
                                    placeholder="Shop Brand"
                                    className="border-b-2 border-lightGray outline-none w-full md:w-[150px] text-black text-xs placeholder-black py-2"
                                />
                            </div> */}
                    </div>


                    <div className="relative md: w-full md:w-[400px] mt-8 md:mt-0">
                        <h1 className="font-din text-xl mb-4">DESCRIPTION</h1>
                        <div className="flex flex-col">
                            <textarea
                                name="shop_description"
                                value={formik.values.shop_description}
                                onChange={formik.handleChange}
                                className="border border-gray p-2 w-full md:w-[400px] h-[100px] md:h-[140px] text-xs"
                                placeholder="Type shop description here"
                            />
                            {formik.touched.shop_description && formik.errors.shop_description ? (
                                <div className="text-red-500 text-xs">{formik.errors.shop_description}</div>
                            ) : null}
                        </div>

                        <h2 className="font-din text-xl mt-2 mb-2">PHOTOS</h2>
                        <div className="grid grid-cols-3 mt-2 gap-4">
                            {imageList.map((image, index) => (
                                <div key={index} className="relative w-[110px] h-[105px] border-2 border-dashed border-[#8D8D8D]">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={110}
                                        height={105}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Replace button */}
                                    <label className="absolute top-1 left-1 bg-green-500 text-white rounded-full p-1 z-10 cursor-pointer">
                                        <FiEdit size={14} />
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => handleReplacePhoto(index, e)}
                                        />
                                    </label>
                                    {/* Remove button */}
                                    <label
                                        onClick={() => handleRemovePhoto(index)}
                                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 z-10 cursor-pointer"
                                    >
                                        <FiTrash size={14} />
                                    </label>
                                </div>
                            ))}

                            {/* Add Image Box */}
                            <div className="relative w-[110px] h-[105px] border-2 border-dashed border-[#8D8D8D] flex flex-col items-center justify-center text-[#8D8D8D] cursor-pointer">
                                <div className="text-4xl font-bold">+</div>
                                <div className="text-xs mt-2">Add</div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    onChange={handleAddPhoto}
                                />
                                                            {formik.touched.store_images && formik.errors.store_images ? (
                                <div className="text-red-500 text-xs">{formik.errors.store_images}</div>
                            ) : null}
                            </div>
                        </div>

                    </div>
                    <button
                        type="submit"
                        className="text-black py-2 mt-5 px-4 font-din bg-white border-2 border-blue hover:bg-blue-100 transition duration-300 ease-in-out w-full"
                    >
                        Submit
                    </button>

                </form>
            </div>


        </div>
    )
}