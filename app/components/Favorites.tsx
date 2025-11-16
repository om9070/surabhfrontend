import React from "react";
import ProductCardFavorites from "./ProductCardFavorites";
import BrandProductFavorite from "./BrandProductFavorite";
import cardData from "../../configs/consumer_card_data.json";
import brandData from "../../configs/consumer_brand_data.json";

function Favorite() {
  return (
    <>
      <h1 className="text-3xl tracking-widest font-extrabold  ml-0 sm:ml-20 text-left">
        WISHLIST(6)
      </h1>

      <div className="flex flex-col items-center gap-2 mt-0 mb-10">
        <h1 className="relative flex flex-col w-[100%] m-auto items-center md:w-[490px]">
          <span className="text-black font-din text-main_title z-50">
            {/* Add any heading text here if needed */}
          </span>
        </h1>
      </div>

      <div className="md:w-[100%]">
        <div className="md:w-[85%] w-[95%] m-auto grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-5">
        {cardData.items.slice(0, 6).map((item) => (
            <ProductCardFavorites
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
          ))}
        </div>
      </div>

      <div className="w-[100%]">
        {brandData.brands.slice(0, 2).map((item) => (
          <BrandProductFavorite
            name={item.name}
            logo={item.logo}
            image={item.image}
            city={item.city}
            cityCode={item.cityCode}
            isVerified={item.isVerified}
            key={item.id}
            views={item?.views}
            followers={item?.followers}
          />
        ))}
      </div>
    </>
  );
}

export default Favorite;
