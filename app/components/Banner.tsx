"use client";

import React, { useState, useRef } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { AiFillSave } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { MdDelete, MdOutlineFindReplace } from "react-icons/md";
import EditableText from "./EditableText";

interface BannerProps {
  title: string;
  description: string;
  bannerText: string;
}

const Banner: React.FC<BannerProps> = ({ title, description, bannerText }) => {
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setBgImage(reader.result as string);
          setIsEditing(true);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleRemoveImage = () => {
    setBgImage(null);
    setIsEditing(false);
  };

  return (
    <div className="relative">
      <div
        className="w-full h-[480px] bg-darkGray flex items-center justify-center relative"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: bgImage ? "transparent" : "#8d8d8d",
        }}
      >
        {isEditing ? (
          <div className="absolute inset-0 bg-black opacity-70" />
        ) : (
          <div className="absolute inset-0 bg-black opacity-20" />
        )}

        {isEditing ? (
          <div className="flex flex-col items-center justify-center opacity-80">
            <div className="flex gap-4">
              <button
                className="flex items-center gap-2 text-white cursor-pointer"
                onClick={handleSaveClick}
              >
                <AiFillSave />
                Save
              </button>
              <button
                className="flex items-center gap-2 text-red-600 cursor-pointer"
                onClick={handleRemoveImage}
              >
                <MdDelete />
                Remove
              </button>
            </div>
          </div>
        ) : (
          <>
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              hidden
              ref={fileInputRef}
              onChange={handleInputChange}
            />
            <label
              htmlFor="fileInput"
              className="text-white text-base text-center relative inline-block cursor-pointer"
            >
              {bgImage ? (
                <>
                  <span className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 text-3xl">
                    <MdOutlineFindReplace />
                  </span>
                  <p>Replace Image</p>
                </>
              ) : (
                <>
                  <span className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 text-3xl">
                    <IoMdAdd />
                  </span>
                  {bannerText}
                </>
              )}
            </label>
          </>
        )}
      </div>

      <div className="relative md:absolute md:top-[320px] md:left-0 bg-white p-6 w-full md:w-[50%]">
        {/* Editable Title */}

        <div className="relative">
          <div className="absolute bg-gray left-1/4 transform -translate-x-1/2 top-[15px] h-[30px] w-[150px] sm:w-[300px] md:left-[8px] md:translate-x-0 md:w-[40%]"></div>
          <EditableText
            initialText={title}
            textStyle="text-3xl font-black uppercase mb-4 tracking-wide text-center md:text-left relative after:bg-gray-400 after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:-bottom-2 after:w-[100px] after:h-2 md:after:w-full z-10"
          />
        </div>

        {/* Editable Description */}
        <EditableText
          initialText={description}
          textStyle="text-xs text-gray-600 mb-4 space-y-4 md:text-left"
        />

        {/* <div className="flex justify-center md:justify-end">
        <FaPencilAlt 
            className="cursor-pointer text-gray-600 mt-2 md:mt-0" 
            onClick={() => setIsEditing(true)} 
        />
    </div> */}
      </div>
    </div>
  );
};

export default Banner;