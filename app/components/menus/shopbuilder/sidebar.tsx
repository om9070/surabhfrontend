"use client";
import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { LiaToggleOnSolid } from "react-icons/lia";
import { BiSolidPencil } from "react-icons/bi";
import { HexColorPicker } from "react-colorful";
import Link from "next/link";

const CustomSidebar = () => {
  // State to manage dropdown visibility
  const [styleOpen, setStyleOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [onSaleOpen, setOnSaleOpen] = useState(false);
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-40 h-screen w-[244px] bg-lightGray p-4 flex flex-col">
      <div className="flex items-center">
        {/* Logo */}
        <Image src="/images/icons/logo.svg" alt="Logo" width={72} height={68} />
        <div className="ml-6 mt-6 font-din">
          <h1>SHOP</h1>
          <h1>BUILDER</h1>
        </div>
      </div>
      <div className="flex flex-col p-4 mt-4  overflow-y-auto no-scrollbar">
        <div>
          <div className="border my-4"></div>
          {/* STYLE Link */}
          <div className="relative my-8">
            <Link
              className="flex flex-row cursor-pointer"
              onClick={() => setStyleOpen(!styleOpen)} href={"/customize-shop/customize-product"}            >
              <span
                className={`font-semibold ${
                  styleOpen ? "text-blue" : "text-black"
                }`}
              >
                STYLE
              </span>
              {styleOpen ? (
                <FiChevronUp className="absolute top-1 right-2" />
              ) : (
                <FiChevronDown className="absolute top-1 right-2" />
              )}
            </Link>
            {styleOpen && (
              <div className=" bg-lightGray  text-gray mt-2">
                <div>
                  <div className="flex flex-row justify-between items-center space-x-8 py-1">
                    <p className="text-xs">Site background</p>
                    <div
                      className="w-5 h-3 border border-gray-300"
                      style={{ backgroundColor: bgColor }}
                      onClick={() => setShowColorPicker(!showColorPicker)}
                    ></div>
                  </div>
                  {/* Color Picker */}
                  {showColorPicker && (
                    <div className="bg-white flex flex-col items-center">
                      <div className="text-black text-xs mt-2 self-start ml-2">{bgColor}</div>
                      <div className="border-t-2 my-2 w-[165px]"></div>
                      <HexColorPicker className="color-picker" color={bgColor} onChange={setBgColor}/>
                         <button
                        className="flex items-center justify-center py-[2px] h-[33px] w-[165px] md: my-2 font-din border-[1px] border-blue bg-transparent"
                        onClick={() => setShowColorPicker(false)}
                      >
                        <p className="text-blue text-xs">DONE</p>
                      </button>
                    </div>
                  )}

                  <div className="flex flex-row justify-between items-center space-x-8 py-1">
                    <p className="text-xs">Main color</p>
                    <div className="w-5 h-3 bg-gray border border-gray-300"></div>
                  </div>

                  <div className="flex flex-row justify-between items-center space-x-8">
                    <p className="text-xs">Text color</p>
                    <div className="w-5 h-3 bg-black border border-gray-300"></div>
                  </div>

                  <div className="flex flex-row justify-between items-center space-x-8 py-1">
                    <p className="text-xs">2nd background color</p>
                    <div className="w-5 h-3 bg-white border border-gray-300"></div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex flex-row justify-between items-center space-x-8 py-1">
                    <p className="text-xs">Top nav background</p>
                    <div className="w-5 h-3 bg-white border border-gray-300"></div>
                  </div>

                  <div className="flex flex-row justify-between items-center space-x-8 py-1">
                    <p className="text-xs">Top nav texts</p>
                    <div className="w-5 h-3 bg-white border border-gray-300"></div>
                  </div>
                </div>
                <div className="mt-4 flex flex-row justify-between items-center space-x-8 py-1">
                  <p className="text-xs">Parallax effect</p>{" "}
                  <LiaToggleOnSolid />
                </div>

                <div className="mt-4 flex flex-row justify-between items-center space-x-8 py-1">
                  <p className="text-xs">Logo</p>{" "}
                  <p className="text-xs text-blue">Replace</p>
                </div>
              </div>
            )}
          </div>
          <div className="border-t-2 my-4"></div>
          {/* CATEGORIES Link */}
          <div className="relative my-8">
            <Link
              className="flex flex-row cursor-pointer"
              onClick={() => setCategoriesOpen(!categoriesOpen)} href={"/customize-shop/customize-categories"}            >
              <span
                className={`font-semibold ${
                  categoriesOpen ? "text-blue" : "text-black"
                }`}
              >
                CATEGORIES
              </span>
              {categoriesOpen ? (
                <FiChevronUp className="absolute top-1 right-2" />
              ) : (
                <FiChevronDown className="absolute top-1 right-2" />
              )}
            </Link>
            {categoriesOpen && (
              <div className=" bg-lightGray  text-gray mt-2 ">
                <div>
                  <div className="flex flex-row justify-between items-center space-x-8 py-1">
                    <p className="text-xs">1st Main category</p>
                    <div className="w-5 h-3 ">
                      <BiSolidPencil />
                    </div>
                  </div>

                  <div className="flex flex-row justify-between items-center space-x-8 py-1">
                    <p className="text-xs">2nd Main category</p>
                    <div className="w-5 h-3 ">
                      <BiSolidPencil />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row justify-between items-center space-x-8 mt-4">
                  <p className="text-xs">Add sub-category</p>
                  <div className="w-5 h-3">
                    <FaPlus />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4 mx-auto">
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
              </div>
            )}
          </div>
          <div className="border-t-2 my-4"></div>
          {/* PRODUCTS Link */}
          <div className="relative my-8">
            <Link
              className="flex flex-row cursor-pointer"
              onClick={() => setProductsOpen(!productsOpen)} href={"/customize-shop/customize-product"}            >
              <span
                className={`font-semibold ${
                  productsOpen ? "text-blue" : "text-black"
                }`}
              >
                PRODUCTS
              </span>
              {productsOpen ? (
                <FiChevronUp className="absolute top-1 right-2" />
              ) : (
                <FiChevronDown className="absolute top-1 right-2" />
              )}
            </Link>
            {productsOpen && (
              <div className=" bg-lightGray text-gray mt-2 ">
                <div className="flex flex-row justify-between items-center space-x-8 py-1">
                  <div className="w-5 h-3 text-black">
                    <FaPlus />
                  </div>
                  <p className="text-xs text-black">Add a new item</p>
                </div>

                <div className="mt-4">
                  <div className="flex flex-row justify-between items-center space-x-8 py-1">
                    <p className="text-xs">First item</p>
                    <div className="w-5 h-3">
                      <BiSolidPencil />
                    </div>
                  </div>

                  <div className="flex flex-row justify-between items-center space-x-8 py-1">
                    <p className="text-xs">Second item</p>
                    <div className="w-5 h-3">
                      <BiSolidPencil />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="border-t-2 my-4"></div>
          {/* ON SALE Link */}
          <div className="relative my-8">
            <Link
              className="flex flex-row cursor-pointer"
              onClick={() => setOnSaleOpen(!onSaleOpen)} href={"/customize-shop/customize-sale"}            >
              <span
                className={`font-semibold ${
                  onSaleOpen ? "text-blue" : "text-black"
                }`}
              >
                ON SALE
              </span>
              {onSaleOpen ? (
                <FiChevronUp className="absolute top-1 right-2" />
              ) : (
                <FiChevronDown className="absolute top-1 right-2" />
              )}
            </Link>
            {/* {onSaleOpen && (
              <div className=" bg-lightGray  text-gray mt-2">
                <div className="flex flex-row justify-between items-center space-x-8 py-1">
                  <p className="text-xs">First item</p> <LiaToggleOnSolid />
                </div>

                <div className="flex flex-row justify-between items-center space-x-8 py-1">
                  <p className="text-xs">100%</p>
                  <p className="text-xs">$25.99</p>
                </div>
                <div className="flex flex-row justify-between items-center space-x-8 py-1">
                  <p className="text-xs">Second item</p> <LiaToggleOnSolid />
                </div>
                <div className="flex flex-row justify-between items-center space-x-8 py-1">
                  <p className="text-xs">10%</p>
                  <p className="text-xs">$25.99</p>
                </div>
                <div className="mt-4 flex flex-row justify-between items-center space-x-8 py-1">
                  <p className="text-xs">Third item</p> <LiaToggleOnSolid />
                </div>

                <div className="flex flex-row justify-between items-center space-x-8 py-1">
                  <p className="text-xs">100%</p>
                  <p className="text-xs">$25.99</p>
                </div>
              </div>
            )} */}
          </div>
          <div className="border-t-2 my-4"></div>
          {/* WHO WE ARE Link */}
          <div className="relative my-8">
            <Link
              className="flex flex-row cursor-pointer"
              onClick={() => setWhoWeAreOpen(!whoWeAreOpen)} href={"/customize-shop/customize-who-we-are"}            >
              <span
                className={`font-semibold ${
                  whoWeAreOpen ? "text-blue" : "text-black"
                }`}
              >
                WHO WE ARE
              </span>
              {whoWeAreOpen ? (
                <FiChevronUp className="absolute top-1 right-2 " />
              ) : (
                <FiChevronDown className="absolute top-1 right-2" />
              )}
            </Link>
            {whoWeAreOpen && (
              <div className=" bg-lightGray text-gray mt-2">
                <div>
                  <div className="flex flex-row justify-between items-center space-x-8 py-1">
                    <p className="text-xs">First paragraph</p>
                    <div className="w-5 h-3">
                      <BiSolidPencil />
                    </div>
                  </div>

                  <div className="flex flex-row justify-between items-center space-x-8 py-1">
                    <p className="text-xs">Highlighted text</p>
                    <div className="w-5 h-3">
                      <BiSolidPencil />
                    </div>
                  </div>

                  <div className="flex flex-row justify-between items-center space-x-8 py-1">
                    <p className="text-xs">Second paragraph</p>
                    <div className="w-5 h-3">
                      <BiSolidPencil />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex flex-row justify-between items-center space-x-8 py-4">
                    <p className="text-xs">Country</p>
                    <div className="w-5 h-3">
                      <FiChevronDown />
                    </div>
                  </div>
                  <div className="border-t-2"></div>

                  <div className="flex flex-row justify-between items-center space-x-8 py-4">
                    <p className="text-xs">City</p>
                    <div className="w-5 h-3">
                      <FiChevronDown />
                    </div>
                  </div>
                  <div className="border-t-2"></div>
                  <div className="flex flex-row justify-between items-center space-x-8 pt-4">
                    <p className="text-xs">Address</p>
                    <div className="w-5 h-3">
                      <BiSolidPencil />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="border-t-2 mt-4"></div>
        </div>
      </div>

      <div className="flex flex-col items-center font-din mt-8">
        <h1>SAVE AS DRAFT</h1>
        <button className="bg-blue text-white p-2 mt-2">PUBLISH</button>
      </div>
    </div>
  );
};

export default CustomSidebar;
