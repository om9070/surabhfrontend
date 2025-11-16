"use client"

import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ShopCategoryOne, ShopCategoryTwo, ShopCategoryThree } from '../../components/ShopCategory';
import Slider from "../../components/sliders/EditableSlider";
import EditableText from "../../components/EditableText";
import { FiX, FiPlus } from 'react-icons/fi';
import HighlightedHeading from "../../components/ui/HighlightedHeading";
import SingleItem from "@/app/components/SingeItem"
import ItemSlider from '../../components/sliders/ItemSlider';





const CustomizeShopPage: React.FC = () => {

  const initialSlides = [null, null, null, null];
  const [images, setImages] = useState<{ [key: string]: string | null }>({
    onSale: null,
    newHotStaff: null,
    whoWeAre: null,
  });

  const [isModalVisible, setIsModalVisible] = useState(false);


  const handleImageChange = (key: string, file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        setImages((prevImages) => ({
          ...prevImages,
          [key]: reader.result as string,
        }));
      }
    };
    reader.readAsDataURL(file);
  };



  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <Slider initialSlides={initialSlides} />

        {/* Top sellers div */}
        <div className="flex flex-col items-center gap-2 mt-10 w-[90%] py-4">
          <HighlightedHeading
            title="TOP SELLERS"
            bgColor="bg-gray"
            bgPosition="top-[20px] md:top-[30px]"
            bgHeight="h-[30px]"
            bgWidth="w-[90%] md:w-[35%]"
            titleSize="text-2xl md:text-main_title"
          />
          <EditableText
            initialText={"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR"}
            textStyle="m-1 mt-2 text-sm"
          />
        </div>

        {/* products */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-[90%] py-4">
          {Array(4).fill(null).map((_, index) => (
            <div key={index} className="w-full">
              <div className="border border-gray mb-4 border-dashed xl:h-[450px] h-[310px]" onClick={() => setIsModalVisible(true)} >
                <div className="flex flex-col items-center xl:mt-40 mt-28">
                  <div className="text-black text-4xl font-bold cursor-pointer"><FiPlus className="w-4 h-4" strokeWidth={4} /></div>
                  <div className="text-xs text-center font-serif mt-2 md:px-4">
                    Add a product and flag it<br /> to see it on the homepage
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

                  {/* Top sellers div */}
        <div className="flex flex-col items-center gap-2 mt-10 w-[90%] py-4">
          <HighlightedHeading
            title="SHOP EDITOR'S PICKS"
            bgColor="bg-gray"
            bgPosition="top-[20px] md:top-[30px]"
            bgHeight="h-[30px]"
            bgWidth="w-[90%] md:w-[35%]"
            titleSize="text-2xl md:text-main_title"
          />
          <EditableText
            initialText={"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR"}
            textStyle="m-1 mt-2 text-sm"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-[90%] py-4">
          {Array(4).fill(null).map((_, index) => (
            <div key={index} className="w-full">
              <div className="border border-gray mb-4 border-dashed xl:h-[450px] h-[310px]" onClick={() => setIsModalVisible(true)} >
                <div className="flex flex-col items-center xl:mt-40 mt-28">
                  <div className="text-black text-4xl font-bold cursor-pointer"><FiPlus className="w-4 h-4" strokeWidth={4} /></div>
                  <div className="text-xs text-center font-serif mt-2 md:px-4">
                    Add a product and flag it<br /> to see it on the homepage
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-rows-2 sm:grid-flow-col gap-4 w-[85%] mx-auto py-5 h-full">
          <div className="h-[150px] row-span-2 col-span-2 md:h-[400px] relative overflow-hidden">
            <ShopCategoryOne
              title="ON SALE"
              bgImage={images.onSale}
              onImageChange={(file) => handleImageChange('onSale', file)}
            />        </div>
          <div className="h-[150px] col-span-2 md:h-[200px] relative overflow-hidden">
            <ShopCategoryTwo
              title="NEW HOT STAFF"
              bgImage={images.newHotStaff}
              onImageChange={(file) => handleImageChange('newHotStaff', file)}
            />        </div>
          <div className="h-[150px] row-span-1 col-span-2 md:h-[200px] relative overflow-hidden">
            <ShopCategoryThree
              title="WHO WE ARE"
              bgImage={images.whoWeAre}
              onImageChange={(file) => handleImageChange('whoWeAre', file)}
            />        </div>
        </div>

        {/* Follow div */}
        <div className="flex flex-col items-center gap-2 mt-10 w-[90%] py-4 mb-5">
          <HighlightedHeading
            title="DO YOU LIKE WHAT YOU SEE?"
            bgColor="bg-gray"
            bgPosition="top-[30px]"
            bgHeight="h-[30px]"
            bgWidth="w-[90%]"
            titleSize="text-main_title"
          />
          <div className="m-1">
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR
          </div>
          <button type="submit" className="text-black py-2 md:ml-10 font-bold px-16 border-2 text-xs border-gray hover:bg-blue-600">
            FOLLOW
          </button>
        </div>
      </div>

      {/* modal */}
      {isModalVisible && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 p-4">
          <div className="relative w-full max-w-5xl h-[80vh] bg-white rounded-lg overflow-y-auto shadow-lg">
            <button
              onClick={() => setIsModalVisible(false)}
              className="absolute top-4 right-4 z-50 text-gray-600 hover:text-black cursor-pointer"
            >
              <FiX className="w-6 h-6" />
            </button>
            <SingleItem isCustomizable={true} />

          </div>
        </div>
      )}



    </>
  )
}

export default CustomizeShopPage