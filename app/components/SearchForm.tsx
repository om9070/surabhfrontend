import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiChevronDown } from "react-icons/bi";
import React from "react";
import Button from "./Button";

interface SearchFormProps {
  onSubmit: (event: React.FormEvent) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-12 p-10 gap-10 w-[90%] md:h-[244px] m-auto bg-white">
          <div className="md:col-span-5">
            <div className="flex mb-4">
              <div className="relative w-full">
                <input type="text" placeholder="Name of the brand" className="px-4 py-2 border-b-2 border-gray focus:outline-none focus:ring focus:border-blue-300 placeholder-black font-din_medium w-full" />
                <div className="absolute inset-y-0 right-0 flex items-center pl-3">
                  <FaSearch className="text-black-500" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="flex mb-4">
              <div className="relative w-full">
                <input type="text" placeholder="Name of the City" className="px-4 py-2 border-b-2 border-gray focus:outline-none focus:ring focus:border-blue-300 placeholder-black font-din_medium w-full" />
                <div className="absolute inset-y-0 right-0 flex items-center pl-3">
                  <FaLocationDot className="text-black-500" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 ">
            <div className="flex mb-4">
              <div className="relative w-full">
                <input type="text" placeholder="County" className="px-4 py-2 border-b-2 border-gray focus:outline-none focus:ring focus:border-blue-300 placeholder-black font-din_medium w-full" />
                <div className="absolute inset-y-0 right-0 flex items-center pl-3">
                  <BiChevronDown className="text-black-500" size={30} />
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="flex mb-4">
              <div className="relative w-full">
                <input type="text" placeholder="Select Brand" className="px-4 py-2 border-b-2 border-gray focus:outline-none focus:ring focus:border-blue-300 placeholder-black font-din_medium w-full" />
                <div className="absolute inset-y-0 right-0 flex items-center pl-3">
                  <BiChevronDown className="text-black-500" size={30} />
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 ........">
            <div className="flex mb-4">
              <div className="relative w-full">
                <input type="text" placeholder="Select Store" className="px-4 py-2 border-b-2 border-gray focus:outline-none focus:ring focus:border-blue-300 placeholder-black font-din_medium w-full" />
                <div className="absolute inset-y-0 right-0 flex items-center pl-3">
                  <BiChevronDown className="text-black-500" size={30} />
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 md:-mt-8">
            <Button label={"Search"} link={"post"} type={"primary"} width={250} />
          </div>
        </div>
      </div>
    </>
  )
};

export default SearchForm;
