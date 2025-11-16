import React from "react";
import ProductCardFavorites from "./ProductCardFavorites";
import cardData from "../../configs/consumer_card_data.json";

function MyOrders() {
  return (
    <>
      <div className="flex justify-between items-center mt-4 mb-4 ml-0 sm:ml-16">
        <h1 className="text-3xl tracking-widest font-extrabold text-left">
          NOVEMBER 2020
        </h1>
        <div className="hidden sm:flex text-xs font-medium space-x-2">
          <span className="text-[#8d8d8d]">Delivered on 12, 2020</span>
          <span className="text-[#1d4ed8] cursor-pointer">Return an Item</span>
        </div>
      </div>

      <div className="md:w-[100%]">
        <div className="md:w-[85%] w-[95%] m-auto grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-5">
          {cardData.items.slice(0, 2).map((item) => (
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

        {/* Display the text below cards in mobile view */}
        <div className="mt-8 flex sm:hidden text-xs font-medium space-x-2 justify-center">
          <span className="text-[#8d8d8d]">Delivered on 12, 2020</span>
          <span className="text-[#1d4ed8] cursor-pointer">Return an Item</span>
        </div>

        <div className="flex justify-between items-center mt-4 mb-4 ml-0 sm:ml-16">
          <h1 className="text-3xl tracking-widest font-extrabold text-left">
            SEPTEMBER 2020
          </h1>
          <div className="hidden sm:flex text-xs font-medium space-x-2">
            <span className="text-[#8d8d8d]">Delivered on 12, 2020</span>
            <span className="text-[#1d4ed8] cursor-pointer">
              Return an Item
            </span>
          </div>
        </div>

        <div className="md:w-[85%] w-[95%] m-auto grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-5">
          <ProductCardFavorites
            key={cardData.items[6].id} // Index 6 for the 7th item
            image={cardData.items[6].image}
            name={cardData.items[6].name}
            brand={cardData.items[6].brand}
            price={cardData.items[6].price}
            discount={cardData.items[6].discount}
            rating={cardData.items[6].rating}
            hasDiscount={cardData.items[6].hasDiscount}
            newPrice={cardData.items[6].newPrice}
            id={cardData.items[6].id}
          />
        </div>

        {/* Display the text below cards in mobile view */}
        <div className="mt-8 flex sm:hidden text-xs font-medium space-x-2 justify-center">
          <span className="text-[#8d8d8d]">Delivered on 12, 2020</span>
          <span className="text-[#1d4ed8] cursor-pointer">Return an Item</span>
        </div>
      </div>
    </>
  );
}

export default MyOrders;
