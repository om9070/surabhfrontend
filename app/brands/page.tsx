"use client";
import Heading from "../components/Heading";
import BrandProduct from "../components/BrandProduct";
import brandData from "../../configs/brand_data.json";
import SearchForm from "../components/SearchForm";
import { FormEvent } from "react"
import Button from "../components/Button";
import { FaChevronDown } from "react-icons/fa";
import Image from 'next/image'
import Link from "next/link";


const Brands = () => {
  
  return (
    <>
      <div className="flex flex-col">
        <div className="md:h-[1230px] bg-lightGray mb:10 md:mb:1">
          <div className={`flex flex-col mx-10 my-10 p-4 gap-4`}>
            <h1 className={`relative flex  flex-col  'w-[490px]'} `}>
              <span className="text-black font-din text-2xl z-50">{"BRANDS"}</span>
              <span className={`absolute bg-blue left-[44px] top-[28px] h-[49px] w-[350px]`}></span>
            </h1>
            <div className={`w-auto m-auto" p-x-5`}>{"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR"}</div>
          </div>
          <SearchForm onSubmit={function (event: FormEvent<Element>): void { }} />
          <div className="hidden md:flex md:items-center md:justify-center md:w-[70%] md:h-[600px] md:bg-lightGray md:ml-48 md:mt-16">

            <Image
              src={`/images/map2.png`}
              alt="Discover Image"
              layout="responsive"
              width={600}
              height={600}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-10 ">
          <div className="w-[80%] md:w-[100%] md:pr-20 md:pl-5 m-auto ">
            <h2 className="text-blue font-bold"> WORLDWIDE</h2>
          </div>

          <div className="md:flex gap-10 items-center w-[80%] justify-between md:w-[100%] md:pr-20 md:pl-5">
            <div>
              <h1 className="text-black font-din md:text-[60px] text-[30px]">TOP 50 BRANDS</h1>
            </div>
            <div className="hidden md:flex items-center">
              <span className="mr-2 text-black font-base font-semibold">SORT BY</span>
              <span className="text-lightgray-100">Best ratings</span>
              <FaChevronDown className=" text-black ml-2 top-1" />
            </div>
          </div>
        </div>


        <div className="w-full md:p-2">
          {brandData.brands.map((item) => (
            <BrandProduct
              name={item.name}
              logo={item.logo}
              image={item.image}
              city={item.city}
              code={item.cityCode}
              isVerified={item.isVerified}
              products={item.products}
              key={item.id}
              views={item?.views}
              followers={item?.followers}
              description={item?.description}
              showLocation={false}
              isBrandPage={true}
            />
          ))}
        </div>
        <div className="w-[80%] m-auto mb-10 md:w-[100%] md:pr-20 md:pl-5">
          <Button
            label={"VIEW MORE BRANDS"}
            link="/brands"
            type="tertiary"
            percentage={true}
            width={100}
          />
        </div>
        <div className=" bg-lightGray relatives pb-16">
          <div className="items-center flex text-center justify-center mt-0 mb-0">
            <Heading title="DO YOU OWN A BRAND?" full={true} description="LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR" />
          </div>
          <div className="items-center flex justify-center mb-0 mt-0">
            <Button label={"DISCOVER"} link="/discover" type="primary" />
          </div>
        </div>
      </div>

    </>
  );
};

export default Brands;