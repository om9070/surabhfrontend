"use client"

import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FiX, FiPlus } from 'react-icons/fi';
import SingleItem from "@/app/components/SingeItem"
import EditableText from '@/app/components/EditableText';
import { ShopCategoryOne, ShopCategoryTwo, ShopCategoryThree } from '@/app/components/ShopCategory';
import HighlightedHeading from '@/app/components/ui/HighlightedHeading';
import Slider from 'react-slick';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from '@/app/components/ui/pagination';





const CustomizeSale: React.FC = () => {

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
      <div className='flex flex-col '>

        <div className='flex  justify-between items-center mx-16'>
          <h1 className='text-black  font-din text-[35px] '>SALE</h1>
          <div className='flex gap-x-4'>
            <h2 className='text-black  font-din text-[18px]'>SORT BY</h2>
            <p className='text-gray  font-din text-[18px] flex'>Best ratings <ChevronDown /></p>
          </div>
        </div>

        <div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 w-[90%] py-4">
          {Array(16).fill(null).map((_, index) => (
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

        <div className='flex  justify-between items-center mx-16'>
          <div className='text-black  font-din text-[35px] '>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" size={undefined} />
                </PaginationItem>
                
                <PaginationItem>
                  <PaginationLink href="#" size={undefined}>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive size={undefined}>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" size={undefined}>3</PaginationLink>
                </PaginationItem>
              
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" size={undefined} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>

          <p className='text-gray  font-din text-[18px] flex'>BACK TO THE TOP <ChevronUp /></p>

        </div>

      </div>

    </>
  )
}

export default CustomizeSale