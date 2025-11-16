'use client'
import Loading from "@/app/components/Loading";
import ProductCard from "@/app/components/ProductCard";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "@/app/components/ui/pagination";
import cardData from '@/configs/card_data.json';
import { useProductsData } from "@/hooks/useProductsQuery";
import { ChevronDown, ChevronUp } from "lucide-react";
import Error from "@/app/components/Error"
import { Suspense } from "react";
import LoadingSkeleton from "@/app/components/LoadingSkeleton";

export default function CustomSale() {
  const { isLoading, isError, data } = useProductsData()
  const totalCards = 16;
  const items = cardData.items;
  console.log(data)
  // const items = data

  if (isLoading) return <div><LoadingSkeleton/></div>;
  if (isError) return <div><Error/></div>;

  return (
    <>
      <div className='flex flex-col '>
        <div className='flex  justify-between items-center mx-24'>
          <h1 className='text-black  font-din text-[35px] '>SALE</h1>
          <div className='flex gap-x-4'>
            <h2 className='text-black  font-din text-[18px]'>SORT BY</h2>
            <p className='text-gray  font-din text-[18px] flex'>Best ratings <ChevronDown /></p>
          </div>
        </div>
        <div className="md:w-[100%]">
          <div className="md:w-[85%] w-[95%] m-auto grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-5">
            
            {
              Array.from({ length: totalCards }).map((_, index) => {
                const item = items[index % items.length];
                return (
                  <ProductCard
                    key={`${item.id}-${index}`}
                    image={item.image}
                    name={item.name}
                    brand={item.brand}
                    price={item.price}
                    discount={item.discount}
                    rating={item.rating}
                    hasDiscount={item.hasDiscount}
                    newPrice={item.newPrice}
                    id={item.id}
                  />
                 
                );
              })
            },
            {/* {
              Array.from({ length: totalCards }).map((_, index) => {
                const item = items[index % items.length];
                return (
                  <ProductCard
                  key={`${item.id}-${index}`}                 
                  image={item?.product_pic || "/default.jpg"}   
                  name={item?.product_name}                     
                  brand={item?.brand}                           
                  price={item?.product_price || 0}              
                  discount={item?.product_sale_amount || 0}     
                  rating={item?.rating || 0}                    
                  hasDiscount={item?.is_sale || false}          
                  newPrice={item?.product_sale_amount ? (item.product_price - item.product_sale_amount) : item.product_price} 
                  id={item?.id} 
                  />
                );
              })
            } */}
            
          </div>
        </div>
        <div className='flex  justify-between items-center mx-24'>
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
  );
}
