import React from 'react'
import Hero from './components/Hero';
import { DiscoverFirstImage, DiscoverLastImage } from './components/Discover';
import Heading from './components/Heading';
import ProductCard from './components/ProductCard'
import BrandProduct from './components/BrandProduct'
import cardData from '../configs/card_data.json'
import heroData from '../configs/home_slider_data.json'
import brandData from '../configs/brand_data.json'
import Button from './components/Button';
import { Viewport } from 'next'


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,


}

function page() {
  return (
    <>
      <Hero slideData=
        {
          heroData?.items}
        isSlider={true}
        autoPlay={true}
        autoPlaySpeed={30000}
      />


      <div className={`flex flex-col items-center gap-2 mt-10 mb-10`}>
        <h1 className={`relative flex  flex-col  md:'w-[490px]'} w-[100%] m-auto items-center`}>
          <span className="text-black font-din text-main_title z-50">{"TOP SELLERS"}</span>
          <span className={`absolute bg-blue  top-[30px] h-[30px] w-[350px] right-[8px] md:right-[380px]`}></span>
        </h1>
        <div className='m-1'>{"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR"}</div>
      </div>

      <div className="md:w-[100%]">
        <div className="md:w-[85%] w-[95%] m-auto grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-5">
          {
            cardData.items.map(item => (
              <ProductCard
                key={item.id}
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
            ))
          }
        </div>
      </div>
      <div className="flex mx-auto my-10  justify-center items-center">
        <Button label={"VIEW MORE"} link="/category" type="primary" />
      </div>

      <div>
        <DiscoverLastImage
          image={"home.png"}
          title={"DO YOU OWN AN INDIE BRAND?"}
          content={`Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
         nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in 
         voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat`}
          hasButton={true} />

        {/* <div className="flex w-[100%] justify-start md:text-center md:justify-center md:m-auto mb-2 md:mb-10 md:w[80%]">
          <div className={`flex flex-col mx-10 my-10 p-4 gap-4`}>
            <h1 className={`relative flex flex-col md:w-[560px]} `}>
              <span className="text-black w-full font-din  text-[40px] md:text-heading z-50 tracking-normal">{"TOP BRANDS"}</span>
              <span className={`absolute bg-blue  left-[30px] top-[20px] h-[49px] w-[100%] md:left-[70px] md:top-[50px] md:h-[49px] md:w-[593px]`}></span>
            </h1>
            <div className={`w-full" p-x-5`}>{"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR"}</div>
          </div>
        </div> */}
        <div className={`flex flex-col items-center gap-2 mt-10 mb-10`}>
          <h1 className={`relative flex  flex-col  md:'w-[490px]'} w-[100%] m-auto items-center`}>
            <span className="text-black font-din text-main_title z-50">{"TOP BRANDS"}</span>
            <span className={`absolute bg-blue  top-[30px] h-[30px] w-[330px] right-[8px] md:right-[386px]`}></span>
          </h1>
          <div className='m-1'>{"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR"}</div>
        </div>
      </div>

      <div className="w-[100%]" >
        {
          brandData.brands.slice(0, 2).map(item => (
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
              showLocation={true}
            />
          ))
        }
      </div>
      <div className="flex mx-auto my-10  justify-center items-center">
        <Button label={"VIEW MORE"} link="/categories" type="primary" />
      </div>
      <DiscoverFirstImage
        image={"patrobas.png"}
        title={"DO YOU OWN A CLOTHING SHOP?"}
        content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
        `}
        hasButton={true}
      />
      {/* <Heading title={"TOP BRANDS"} description={"LOREM IPSUM DOLOR SIT AMET,\
         CONSECTETUR ADIPISCING ELIT, \
         SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE \
         MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD " } /> */}
      {/* </div> */}
      {/* <ProductCard />
      <BrandCard />  */}
    </>
  )
}

export default page