import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPencilAlt } from "react-icons/fa";
import { AiFillSave } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";



interface SliderProps {
    initialSlides: (string | null)[];
}

const EditableSlider: React.FC<SliderProps> = ({ initialSlides }) => {
    const totalSlides = 4;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState<(string | null)[]>(initialSlides);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const file = event.target.files?.[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            const updatedSlides = [...slides];
            updatedSlides[index] = fileUrl;
            setSlides(updatedSlides);
            setIsEditing(true); // Set editing mode when a file is uploaded
        }
    };

    const removeImage = () => {
        const updatedSlides = [...slides];
        updatedSlides[currentSlide] = null;
        setSlides(updatedSlides);
        setIsEditing(false);
    };

    const displaySlides = [...slides];
    while (displaySlides.length < totalSlides) {
        displaySlides.push(null); // Placeholder for empty slides
    }

    return (
        <div className="relative h-[75vh] w-full flex flex-col items-center justify-center">
            <div className="relative h-full w-full flex items-center justify-center">
                <FaChevronLeft
                    className="absolute left-4 text-white text-3xl cursor-pointer z-10"
                    onClick={prevSlide}
                />

                <div
                    className="h-full w-full flex items-center justify-center bg-cover bg-center"
                    style={{
                        backgroundColor: displaySlides[currentSlide] ? "transparent" : "#8d8d8d",
                        backgroundImage: displaySlides[currentSlide] && !displaySlides[currentSlide]?.includes("video")
                            ? `url(${displaySlides[currentSlide]})`
                            : "none",
                    }}
                >
                    {isEditing && displaySlides[currentSlide] && (
                        <>
                            <div className="absolute inset-0 bg-black opacity-40" /> {/* Overlay */}
                            <div className="flex gap-4">
                                <button className="flex items-center cursor-pointer gap-1 text-white opacity-70" onClick={() => setIsEditing(false)}>
                                    <AiFillSave /> Save
                                </button>
                                <button className="flex items-center cursor-pointer gap-1 text-red-600 opacity-70" onClick={removeImage}>
                                    <MdDelete /> Remove
                                </button>
                            </div>
                        </>
                    )}

                    {!displaySlides[currentSlide] ? (
                        <label className="text-white text-center cursor-pointer">
                            <div className="flex flex-col">
                                <IoMdAdd className="text-3xl self-center" />
                                <p>Add a video or a photo for this banner</p></div>
                            <input
                                type="file"
                                accept="image/*,video/*"
                                className="hidden"
                                onChange={(e) => handleFileChange(e, currentSlide)}
                            />
                        </label>
                    ) : displaySlides[currentSlide]?.includes("video") ? (
                        <video
                            controls
                            className="h-full w-full object-cover"
                            src={displaySlides[currentSlide] as string}
                        ></video>
                    ) : (
                        <>
                            <div className="absolute bottom-6 right-6 z-10">
                                <FaPencilAlt
                                    className="text-white text-2xl cursor-pointer"
                                    onClick={() => {
                                        const inputElement = document.querySelector(`input[type="file"]:nth-of-type(${currentSlide + 1})`) as HTMLInputElement;
                                        inputElement?.click();
                                    }}
                                />
                            </div>
                        </>
                    )}
                </div>

                <FaChevronRight
                    className="absolute right-4 text-white text-3xl cursor-pointer z-10"
                    onClick={nextSlide}
                />
            </div>

            <div className="absolute bottom-4 flex space-x-2">
                {displaySlides.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-2 rounded-full border border-white cursor-pointer ${currentSlide === index ? "bg-white" : "bg-gray-500"}`}
                        onClick={() => setCurrentSlide(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default EditableSlider;
