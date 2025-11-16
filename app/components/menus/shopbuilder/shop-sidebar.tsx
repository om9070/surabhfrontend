"use client";
import Image from "next/image";
import { FiChevronDown, FiChevronUp, FiDollarSign } from "react-icons/fi";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { LiaToggleOnSolid } from "react-icons/lia";
import { BiSolidPencil } from "react-icons/bi";
import { HexColorPicker } from "react-colorful";
import Link from "next/link";

const categories = [
  "Activewear (234)",
  "Dresses (3617)",
  "Jackets & Coats (1246)",
  "Jumpsuits & Playsuits (292)",
  "Knitwear (901)",
  "Lingerie & Nightwear (964)",
  "Skirts & Shorts (854)",
  "Swimwear (697)",
  "Tops (2809)",
  "Trousers (909)"
];

const sizes = [
  "XXS (1818)",
  "XS (8726)",
  "S (14100)",
  "M (13954)",
  "L (11500)",
  "XL (4891)",
  "XXL (1272)",
  "XXXL (129)"
];

const designers = [
  "&SONS Trading Co (4)",
  "124ever (9)",
  "1986 (60)",
  "4649.REC (29)",
  "58 Lifestyle (1)",
  "A Perfect Nomad (24)",
  "A Weathered Penny (57)",
  "A-line Clothing (105)",
  "A.Cloud (8)",
  "A19 (5)"
];

const materials = [
  "Acetate (236)",
  "Acrylic (348)",
  "Antioxidants (4)",
  "Antler (11)",
  "Bamboo (158)",
  "Basket (99)"
];

const colors = [
  { name: "Black", count: 4968, hex: "#000000" },
  { name: "Blue", count: 4207, hex: "#0000FF" },
  { name: "Brown", count: 1159, hex: "#A52A2A" },
  { name: "Gold", count: 7685, hex: "#FFD700" },
  { name: "Green", count: 2448, hex: "#008000" },
  { name: "Grey", count: 1630, hex: "#808080" }
];

const ShopSidebar = () => {
  // State to manage dropdown visibility
  const [sizeOpen, setSizeOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [designerOpen, setDesignerOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [materialOpen, setMaterialOpen] = useState(false);
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
          <div className="border-t-2 my-4"></div>
          {/* CATEGORY Link */}
          <div className="relative my-8">
            <div
              className="flex flex-row cursor-pointer"
              onClick={() => setCategoriesOpen(!categoriesOpen)}
            >
              <span
                className={`font-semibold ${categoriesOpen ? "text-blue" : "text-black"
                  }`}
              >
                CATEGORY
              </span>
              {categoriesOpen ? (
                <FiChevronUp className="absolute top-1 right-2" />
              ) : (
                <FiChevronDown className="absolute top-1 right-2" />
              )}
            </div>
            {categoriesOpen && (
              <div className=" bg-lightGray  text-gray mt-2">

                <div className="mt-4 flex flex-col py-1">
                  {categories.map((category, index) => (
                    <p key={index} className="text-xs mt-2">
                      {category}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="border-t-2 my-4"></div>
          {/* SIZE Link */}
          <div className="relative my-8">
            <Link
              className="flex flex-row cursor-pointer"
              onClick={() => setSizeOpen(!sizeOpen)} href={""}            >
              <span
                className={`font-semibold ${sizeOpen ? "text-blue" : "text-black"
                  }`}
              >
                SIZE
              </span>
              {sizeOpen ? (
                <FiChevronUp className="absolute top-1 right-2" />
              ) : (
                <FiChevronDown className="absolute top-1 right-2" />
              )}
            </Link>
            {sizeOpen && (
              <div className=" bg-lightGray  text-gray mt-2 ">
                <div className="mt-4 flex flex-col py-1">
                  {sizes.map((size, index) => (
                    <p key={index} className="text-xs mt-2">
                      {size}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="border-t-2 my-4"></div>
          {/* DESIGNER Link */}
          <div className="relative my-8">
            <Link
              className="flex flex-row cursor-pointer"
              onClick={() => setDesignerOpen(!designerOpen)} href={""}            >
              <span
                className={`font-semibold ${designerOpen ? "text-blue" : "text-black"
                  }`}
              >
                DESIGNER
              </span>
              {designerOpen ? (
                <FiChevronUp className="absolute top-1 right-2" />
              ) : (
                <FiChevronDown className="absolute top-1 right-2" />
              )}
            </Link>
            {designerOpen && (
              <div className=" bg-lightGray  text-gray mt-2 ">
                <div className="mt-4 flex flex-col py-1">
                  {designers.map((designer, index) => (
                    <p key={index} className="text-xs mt-2">
                      {designer}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="border-t-2 my-4"></div>

          {/* COLOR Link */}
          <div className="relative my-8">
            <Link
              className="flex flex-row cursor-pointer"
              onClick={() => setColorOpen(!colorOpen)} href={""}            >
              <span
                className={`font-semibold ${colorOpen ? "text-blue" : "text-black"
                  }`}
              >
                COLOR
              </span>
              {colorOpen ? (
                <FiChevronUp className="absolute top-1 right-2" />
              ) : (
                <FiChevronDown className="absolute top-1 right-2" />
              )}
            </Link>
            {colorOpen && (
              <div className=" bg-lightGray  text-gray mt-2">
                <div className="mt-4 flex flex-col py-1">
                  {colors.map((color, index) => (
                    <div key={index} className="flex items-center mt-2">
                      <span
                        style={{
                          backgroundColor: color.hex,
                          width: '20px',  // width of the color box
                          height: '20px', // height of the color box
                          borderRadius: '3px', // optional: for rounded corners
                          marginRight: '8px' // space between box and text
                        }}
                      ></span>
                      <p className="text-xs">
                        {color.name} ({color.count})
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="border-t-2 my-4"></div>
          {/* PRICE Link */}
          <div className="relative my-8">
            <Link
              className="flex flex-row cursor-pointer"
              onClick={() => setPriceOpen(!priceOpen)} href={""}            >
              <span
                className={`font-semibold ${priceOpen ? "text-blue" : "text-black"
                  }`}
              >PRICE
              </span>
              {priceOpen ? (
                <FiChevronUp className="absolute top-1 right-2 " />
              ) : (
                <FiChevronDown className="absolute top-1 right-2" />
              )}
            </Link>
            {priceOpen && (
              <div className=" bg-lightGray text-gray mt-2">


                <div className="mt-4">
                  <div className="flex flex-row justify-between items-center space-x-8 py-4">
                    <p className="text-xs">Maximum</p>
                    <div className="w-5 h-3 text-black">
                      <FiDollarSign />
                    </div>
                  </div>
                  <div className="border-t-2"></div>

                  <div className="flex flex-row justify-between items-center space-x-8 pt-4">
                    <p className="text-xs ">Minimum</p>
                    <div className="w-5 h-3 text-black">
                      <FiDollarSign />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="border-t-2 mt-4"></div>
          {/* MATERIAL Link */}
          <div className="relative my-8">
            <Link
              className="flex flex-row cursor-pointer"
              onClick={() => setMaterialOpen(!materialOpen)} href={""}            >
              <span
                className={`font-semibold ${materialOpen ? "text-blue" : "text-black"
                  }`}
              >MATERIAL
              </span>
              {materialOpen ? (
                <FiChevronUp className="absolute top-1 right-2 " />
              ) : (
                <FiChevronDown className="absolute top-1 right-2" />
              )}
            </Link>
            {materialOpen && (
              <div className=" bg-lightGray text-gray mt-2">
                {materials.map((material, index) => (
                  <p key={index} className="text-xs mt-2">
                    {material}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className="border-t-2 mt-4"></div>
        </div>
      </div>

      <div className="flex flex-col items-center font-din mt-8">

        <button className="bg-blue text-white p-2 mt-2">CLEAR FILTER</button>
      </div>
    </div>
  );
};

export default ShopSidebar;
