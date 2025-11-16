"use client"
import Button from "../components/Button";
import Heading from "../components/Heading";
import Hero from "../components/Hero";
import Image from "next/image";
import group3 from "@/public/images/group3.png";
import group2 from "@/public/images/group2.png";
import group from "@/public/images/group.png";
import group4 from "@/public/images/group4.png";
import { DiscoverLastImage } from "../components/Discover";
import ImageContent from "../components/ImageContent";
import frb1 from "@/public/images/frb1.png";
import { IoThermometer } from "react-icons/io5";


const ForBrands = () => {
  const brandsHeroData = {
    image: "3rd@2x.png",
    title: "SHOW US WHAT YOU HAVE AND JOIN TODAY",
    brand: "brand-logo.png",
  };


  return (
    <>
      <Hero slideData={[brandsHeroData]} isSlider={false} isForBrand={true} />
      <div className={`flex flex-col items-center gap-2 mt-10`}>
        <h1 className={`relative flex  flex-col  md:'w-[490px]'} w-[100%] m-auto items-center`}>
          <span className="text-black font-din text-main_title z-50">{"WHY JOIN ?"}</span>
          <span className={`absolute bg-blue  top-[30px] h-[30px] w-[280px]`}></span>
        </h1>
        <div className='m-1'>{"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR"}</div>
      </div>

      <div className="w-[100%] md:px-20">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 my-20">
          <div className={`md:order-first`}>
            <Image src={`/images/forbrands1.png`} height={700} width={700} alt={"for brands image"} className="px-3" />
          </div>
          <div className="px-2">
            <h2 className="text-[20px] font-din mb-4">WORLDWIDE EXPOSURE</h2>
            <p className="text-base pr-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 my-20">
          <div className={`md:order-last`}>
            <Image src={`/images/forbrands2.png`} height={700} width={700} alt={"for brands image"} className="px-3" />
          </div>
          <div className="px-2">
            <h2 className="text-[20px] font-din mb-4">CUSTOMIZE YOUR E-SHOP</h2>
            <p className="text-base pr-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 my-20">
          <div className={`md:order-first`}>
            <Image src={`/images/forbrands3.png`} height={700} width={700} alt={"for brands image"} className="px-3" />
          </div>
          <div className="px-2">
            <h2 className="text-[20px] font-din mb-4">IMPROVE YOUR BUSINESS</h2>
            <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Button label={"JOIN NOW"} link={"#"} type="primary" />
        </div>
      </div>

      <div className="">
        <DiscoverLastImage
          image={"clay-imac-27-mockup-right-view_@2x.png"}
          title={"CREATE YOUR OWN INDIE ESHOP"}
          content={`Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
         nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in 
         voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat`}
        />
      </div>


      <div>
        <div className="m-auto mb-10">
          <Heading
            title="CONTROL YOUR BUSINESS"
            full={true}
            description="LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA"
          />
          <div>
            <div className="flex flex-col lg:flex-row lg:ml-40 lg:mr-60">
              {/* <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                <Image
                  src={group4}
                  height={900}
                  width={900}
                  alt={"dashboard 1"}
                />
              </div> */}
              <div className="mt-4">
                <Image
                  src={group4}
                  height={800}
                  width={1400}
                  alt={"dashboard 2"}
                />
              </div>
              {/* <div className="mt-10">
                <Image
                  src={group2}
                  height={800}
                  width={700}
                  alt={"dashboard 3"}
                />
              </div> */}
            </div>
          </div>
        </div>

        <div className=" bg-lightGray relatives pb-10">
          <div className="items-center flex text-center justify-center mt-0 mb-0">
            <Heading
              title="WHAT ARE YOU WAITING FOR?"
              full={true}
              description="LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR"
            />
          </div>
          <div className="items-center flex justify-center">
            <Button label={"JOIN NOW"} link="/join" type="primary" />
          </div>
        </div>


      </div>
    </>
  );
};

export default ForBrands;
