'use client'
import Image from 'next/image'
import { shopDataValidationSchema } from "@/validation/shopDataValidation";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { FiAnchor, FiEdit, FiGlobe, FiHome, FiMapPin, FiShoppingBag, FiTag, FiTrash } from "react-icons/fi";
import { useUpdateStoreMutation } from "@/hooks/useStore";
import useStore from "@/stores";
import { useRouter } from 'next/navigation';




export const EditStoreForm = () => {
    const { mutate: updateStoreMutate } = useUpdateStoreMutation();
    const [formError, setFormError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [previewImage, setpreviewImage] = useState<string | null>(null)
    
    const router = useRouter()
    const selectedShop = useStore((state) => state.selectedShop)


    const getInitialValues = (storeData: any) => ({
        shop_name: storeData?.shop_name || "",
        shop_city: storeData?.shop_city || '',
        shop_state: storeData?.shop_state || '',
        shop_country: storeData?.shop_country || '',
        shop_type: storeData?.shop_type || '',
        store_images: storeData?.store_images || [],
        shop_description: storeData?.shop_description || '',
        shop_address: storeData?.shop_address || '',
        shop_brand: storeData?.shop_brand || 0,
        shop_zip_code: storeData?.shop_zip_code || '',

    })

    const formik = useFormik({
        initialValues: getInitialValues(selectedShop),
        enableReinitialize: true,
        validationSchema: shopDataValidationSchema,
        validate: (values) => {
            const errors: Record<string, string> = {}
            if (!values.shop_name) errors.shop_name = "Store name is required";
            if (!values.shop_address) errors.shop_address = "Address is required";
            if (!values.shop_country) errors.shop_country = "Country is required";
            if (!values.shop_city) errors.shop_city = "City is required";
            if (!values.shop_state) errors.shop_state = "State is required";
            if (!values.shop_type) errors.shop_type = "Shop type is required";
            if (!values.shop_zip_code) errors.shop_zip_code = "Zip code is required";
            if (!values.shop_description)
                errors.shop_description = "Description is required";
            return errors;
        },

        onSubmit: (values) => {
            setFormError(null);
            setIsLoading(true)
            setSuccessMessage(null)

            const formData = new FormData();
            formData.append("shop_name", values.shop_name)
            formData.append("shop_city", values.shop_city)
            formData.append("shop_state", values.shop_state)
            formData.append("shop_country", values.shop_country)
            formData.append("shop_type", values.shop_type)
            if (values.store_images && typeof values.store_images !== "string") {
                formData.append("store_images", values.store_images); // Attach the new file
            }

            formData.append("shop_description", values.shop_description)
            formData.append("shop_address", values.shop_address)
            formData.append("shop_brand", values.shop_brand)
            formData.append("shop_zip_code", values.shop_zip_code)

            

            updateStoreMutate(
                
                { id: selectedShop?.id!, data: formData }, // Object containing id and formData
                {
                    onSuccess: () => {
                        console.log("Store updated successfully");
                        setpreviewImage(null); // Clear preview image
                        router.back();
                    },
                    onError: (error) => {
                        setFormError(error?.message || "Failed to update store."); // Display error
                        setIsLoading(false); // Stop loading state
                    },
                }
            );

        },
    });

    const [imageList, setImageList] = useState<{ id: number; image: string; name: string | null }[]>([]);

    useEffect(() => {
        if (Array.isArray(formik.values.store_images)) {
            const updatedImages = formik.values.store_images
                .map((file, index) => {
                    // Handle object with image URL
                    if (file && typeof file === 'object' && 'image' in file) {
                        return {
                            id: (file as any).id || index,
                            image: (file as any).image,
                            name: (file as any).name || `Image ${index + 1}`
                        };
                    }

                    // Handle File object
                    if (file instanceof File) {
                        return {
                            id: index,
                            image: URL.createObjectURL(file),
                            name: file.name
                        };
                    }

                    // Handle string URL
                    if (typeof file === 'string') {
                        return {
                            id: index,
                            image: file,
                            name: `Image ${index + 1}`
                        };
                    }

                    // Return null for any unhandled types, which will be filtered out
                    return null;
                })
                .filter((image): image is { id: number; image: string; name: string | null } => image !== null);

            setImageList(updatedImages);
        }
    }, [formik.values.store_images]);
    

    const handleRemovePhoto = (index: number) => {
        const updatedImages = formik.values.store_images.filter((_: any, i: number) => i !== index);
        formik.setFieldValue("store_images", updatedImages);

        const updatedPreview = imageList.filter((_, i) => i !== index);
        setImageList(updatedPreview);
    };


    

    const handleReplacePhoto = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Replace the specific index in the store_images array
            const updatedImages = [...formik.values.store_images];
            updatedImages[index] = { 
                ...updatedImages[index], 
                image: URL.createObjectURL(file), // Update with new image URL for preview
                name: file.name // Optionally update the name
            };
            formik.setFieldValue("store_images", updatedImages);
    
            // Update the preview image list
            const updatedPreview = [...imageList];
            updatedPreview[index] = {
                id: updatedPreview[index].id,
                image: URL.createObjectURL(file),
                name: file.name
            };
            setImageList(updatedPreview);
        }
    };
    

    

    const handleEditImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const newImages = [...formik.values.store_images, file];
            formik.setFieldValue("store_images", newImages);

            const previewUrl = URL.createObjectURL(file);
            setImageList((prev) => [
                ...prev,
                { image: previewUrl, name: file.name, id: prev.length } // Assigning an ID based on the length
            ]);
        }
    };

    return (
        <div className="flex flex-col bg-white p-4 md:flex-row">
            <div className="w-full md:w-[400px] ">
                <h1 className="text-3xl mb-6 font-din">Edit Your Store</h1>
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

                        <input
                            type="text"
                            name="shop_name"
                            value={formik.values.shop_name}
                            onChange={formik.handleChange}
                            placeholder="Shop Name"
                            className="border-b-2 border-lightGray outline-none w-full max-w-[700px] md:w-[350px] text-black text-xs placeholder-black py-2"
                        />

                        {/* {formik.touched.shop_name && formik.errors.shop_name ? (
                            <div className="text-red-500 text-sm">{formik.errors.shop_name}</div>
                        ) : null} */}

                    </div>

                    <div className="flex flex-col md:flex-row items-center mb-7">
                        <div className="flex items-center w-full md:w-auto mb-4 md:mb-0 md:mr-4">
                            <label className="text-gray-500 mr-4">
                                <FiMapPin />
                            </label>
                            <input
                                type="text"
                                name="shop_address"
                                value={formik.values.shop_address}
                                onChange={formik.handleChange}
                                placeholder="Address"
                                className="border-b-2 border-lightGray outline-none w-full text-black text-xs placeholder-black py-2"
                            />
                        </div>
                        <div className="flex items-center w-full md:w-auto">
                            <label className="text-gray-500 mr-4">
                                <FiTag />
                            </label>
                            <input
                                type="text"
                                name="shop_zip_code"
                                value={formik.values.shop_zip_code}
                                onChange={formik.handleChange}
                                placeholder="Zip Code"
                                className="border-b-2 border-lightGray outline-none w-full md:w-[150px] text-black text-xs placeholder-black py-2"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center mb-7">
                        <div className="flex items-center w-full md:w-auto mb-4 md:mb-0 md:mr-4">
                            <label className="text-gray-500 mr-4">
                                <FiGlobe />
                            </label>
                            <input
                                type="text"
                                name="shop_country"
                                value={formik.values.shop_country}
                                onChange={formik.handleChange}
                                placeholder="Country"
                                className="border-b-2 border-lightGray outline-none w-full md:w-[150px] text-black text-xs placeholder-black py-2"
                            />
                        </div>
                        <div className="flex items-center w-full md:w-auto">
                            <label className="text-gray-500 mr-4">
                                <FiHome />
                            </label>
                            <input
                                type="text"
                                name="shop_state"
                                value={formik.values.shop_state}
                                onChange={formik.handleChange}
                                placeholder="City"
                                className="border-b-2 border-lightGray outline-none w-full md:w-[150px] text-black text-xs placeholder-black py-2"
                            />
                            {/* {formik.touched.shop_state && formik.errors.shop_state ? (
                                <div className="text-red-500 text-sm">{formik.errors.shop_state}</div>
                            ) :null} */}
                        </div>

                    </div>
                    <div className="flex flex-col md:flex-row items-center mb-7">
                        <div className="flex items-center w-full md:w-auto">
                            <label className="text-gray-500 mr-4">
                                <FiHome />
                            </label>
                            <input
                                type="text"
                                name="shop_city"
                                value={formik.values.shop_city}
                                onChange={formik.handleChange}
                                placeholder="City"
                                className="border-b-2 border-lightGray outline-none w-full md:w-[150px] text-black text-xs placeholder-black py-2"
                            />
                            {/* {formik.touched.shop_city && formik.errors.shop_city ? (
                                <div className="text-red-500 text-sm">{formik.errors.shop_city}</div>
                            ) : null} */}
                        </div>
                        <div className="flex items-center w-full md:w-auto mb-4 md:mb-0 md:mr-4">
                            <label className="text-gray-500 mr-4">
                                <FiAnchor />
                            </label>
                            <input
                                type="text"
                                name="shop_type"
                                value={formik.values.shop_type}
                                onChange={formik.handleChange}
                                placeholder="Shop type"
                                className="border-b-2 border-lightGray outline-none w-full md:w-[150px] text-black text-xs placeholder-black py-2"
                            />
                            {/* {formik.touched.shop_type && formik.errors.shop_type ? (
                                <div className="text-red-500 text-sm">{formik.errors.shop_type}</div>
                            ) : null} */}
                        </div>
                    </div>


                    <div className="relative md: w-full md:w-[400px] mt-8 md:mt-0">
                        <h1 className="font-din text-xl mb-4">DESCRIPTION</h1>
                        <div>
                            <textarea
                                name="shop_description"
                                value={formik.values.shop_description}
                                onChange={formik.handleChange}
                                className="border border-gray p-2 w-full md:w-[400px] h-[100px] md:h-[140px] text-xs"
                                placeholder="Type shop description here"
                            />
                        </div>

                        <h2 className="font-din text-xl mt-2 mb-2">PHOTOS</h2>
                        <div className="grid grid-cols-3 mt-2 gap-4">
                            {imageList.map((imageObj, index) => (
                                <div key={imageObj.id} className="relative w-[110px] h-[105px] border-2 border-dashed border-[#8D8D8D]">
                                    <Image
                                        src={imageObj.image}
                                        alt={imageObj.name || `Image ${index + 1}`}
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
                                    onChange={handleEditImage}
                                />
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
    );
};
