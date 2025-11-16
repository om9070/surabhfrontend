import Button from "@/app/components/Button";
import EditableText from "@/app/components/EditableText";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";

export default function AddItem() {
    return (
        <>
            <div className="flex flex-col p-4">
                <div className="flex items-center justify-center gap-16 p-4">

                    <div className="relative h-[600px] w-[400px] bg-gray">
                        <div className="absolute top-[50%] left-[25%]  flex flex-col items-center text-lightGray">
                            <FaPlus />
                            <p>Add a photo of the product</p>
                        </div>

                    </div>
                    <div className="flex flex-col">
                        <div>
                            <EditableText
                                initialText={"ITEM NAME"}
                                textStyle="m-1 mt-2 text-2xl font-bold"
                            /></div>
                        <div className=" max-w-prose">
                            <EditableText
                                initialText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                textStyle=" text-gray-700 text-justify mt-8"
                            /></div>
                        <div className="flex gap-4 my-8">
                            <div className="w-16 h-6 bg-lightGray border border-gray-300 text-xs flex items-center justify-center">
                                TAG
                            </div>
                            <div className="w-16 h-6 bg-lightGray border border-gray-300 text-xs flex items-center justify-center">
                                TAG
                            </div>
                            <div className="w-16 h-6 bg-lightGray border border-gray-300 text-xs flex items-center justify-center">
                                TAG
                            </div>
                        </div>
                        <div className="flex flex-row gap-8 items-center my-8">
                            <div>
                                <div className="flex flex-row justify-between items-center text-darkGray space-x-8 py-4">
                                    <p className="">Choose a size</p>
                                    <div className="w-5 h-3">
                                        <FiChevronDown />
                                    </div>
                                </div>
                                <div className="border border-darkGray"></div>
                            </div>
                            <div>
                                <div className="flex flex-row justify-between items-center text-darkGray space-x-8 py-4">
                                    <p className="">Quantity</p>
                                    <div className="w-5 h-3">
                                        <FiChevronDown />
                                    </div>
                                </div>
                                <div className="border border-darkGray"></div>
                            </div>
                        </div>
                        <div className="flex gap-4 my-8">
                            <div className="relative w-[60px] h-[60px] bg-gray text-darkGray text-xs">
                                <div className="absolute inset-4 flex flex-col items-center ">
                                    <FaPencilAlt /><p>Color</p>
                                </div>

                            </div>
                            <div className="relative border border-gray mb-4 border-dashed w-[60px] h-[60px] text-darkGray text-xs">
                                <div className="absolute inset-4 flex flex-col items-center ">
                                    <FaPlus /><p>Add</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex flex-row justify-between items-center mt-8">
                    <div className="relative border border-gray mb-4 border-dashed w-[141px] h-[141px] text-darkGray">
                        <div className="absolute inset-7 flex flex-col items-center ">
                            <FaPlus /><p>Add photo</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-8">
                        <div className="font-bold font-din">ADD TO MY WISHLIST</div>
                        <Button type="secondary" label={"ADD TO CART"} link={""}/>
                    </div>
                </div>
            </div>
        </>
    )
}