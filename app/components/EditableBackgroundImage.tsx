"use client";

import React, { useState, useEffect } from "react";

interface EditableBackgroundImageProps {
  title: string;
  description: string;
  bannerText: string;
}

const EditableBackgroundImage: React.FC<EditableBackgroundImageProps> = ({ bannerText }) => {
  const [bgImages, setBgImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newImage, setNewImage] = useState<string>("");

  // Automatically cycle through images every 3 seconds
  useEffect(() => {
    if (bgImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [bgImages]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (newImage) {
      const updatedImages = [...bgImages, newImage];
      setBgImages(updatedImages);
      setNewImage("");
    }
    setIsEditing(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewImage(event.target.value);
  };

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div
      className="w-full h-[480px] flex items-center justify-center relative"
      style={{
        backgroundImage: bgImages.length > 0 ? `url(${bgImages[currentImageIndex]})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: bgImages.length === 0 ? "#8d8d8d" : "transparent",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      {!isEditing ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <input
            type="text"
            value={newImage}
            onChange={handleInputChange}
            className="p-2 rounded border-2 border-[#FFA000]"
            placeholder="Enter image URL"
          />
          <button onClick={handleSaveClick} className="ml-2 p-2 bg-[#FFA000] text-white rounded">
            Add Image
          </button>
        </div>
      ) : (
        <div className="absolute top-2 right-2">
          <button onClick={handleEditClick}>
            <span className="text-white cursor-pointer">{bannerText}</span>
          </button>
        </div>
      )}

      {/* Display navigation dots only when images exist */}
      {bgImages.length > 0 && (
        <div className="absolute bottom-4 flex justify-center space-x-2">
          {bgImages.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${index === currentImageIndex ? "bg-[#FFA000]" : "bg-gray-300"
                }`}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EditableBackgroundImage;
