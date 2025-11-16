import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import Image from "next/image";

interface CategoryShopPageProps {
  image?: string;
  title: string;
}

const CategoryShopPage: React.FC<CategoryShopPageProps> = ({
  image,
  title,
}) => {
  return (
    <div className="relative h-full w-full md:ml-4 md:mr-8"> {/* Adjust margins */}
      <div className={`absolute inset-0 ${!image ? "bg-gray-300" : ""}`}>
        {image ? (
          <Image
            src={`/images/${image}`}
            alt="Category Image"
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <div className="flex flex-col bg-gray justify-center items-center h-full w-full">
            <span className=" text-5xl text-white">+</span>
            <span className="text-sm text-white mt-2">
              Add a photo for this banner
            </span>
          </div>
        )}
      </div>

      <div className="flex absolute bottom-0 left-0 px-4 bg-white gap-2 py-4 justify-between w-[90%] h-[70px] z-20 flex-wrap">
        <div className="flex flex-col font-din text-[18px]">
          {title}
          <div className="hidden md:flex text-[13px] divide-x divide-gray font-din_medium">
            <p className=" text-gray px-2">ALL</p>
            <p className=" text-gray px-2">NEW</p>
          </div>
        </div>
        <div>
          <button className="flex items-center text-blue-600 hover:text-blue-800 focus:outline-none">
            <FaPencilAlt className=" text-black mr-2" />
          </button>
        </div>
        <div>
          <p className=" text-sm text-gray underline font-din">BROWSE</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryShopPage;
