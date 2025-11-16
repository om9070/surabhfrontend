"use client";
import React, { useState } from "react";
import {
  FiPlus,
  FiTruck,
  FiUser,
  FiCalendar,
  FiMapPin,
  FiMail,
  FiLock,
  FiChevronDown,
  FiCheck,
  FiX,
} from "react-icons/fi";

function PersonalInfoShops() {
  const [isAddressFormVisible, setIsAddressFormVisible] = useState(false);

  const handleAddAddressClick = () => {
    setIsAddressFormVisible(!isAddressFormVisible);
  };
  const handleCloseButtonClick = () => {
    setIsAddressFormVisible(false);
  };

  const addressData = [
    {
      type: "Home Address",
      name: "KOJO",
      address: "247 WentWorth circle, Bronx, NY 10451",
    },
    // { type: "Home Address", name: "KOJO ", address: "247 WentWorth circle, Bronx, NY 10451" },
    // { type: "Home Address", name: "KOJO ", address: "247 WentWorth circle, Bronx, NY 10451" },
  ];
  return (
    <div className="flex flex-col md:flex-row ">
      {/* Personal Info form  */}
      <div className="w-full md:w-[400px] mr-4 mb-4 md:mr-14">
        <h2 className="font-din text-3xl mb-8">MY INFO</h2>

        <form>
          <div className="flex flex-col md:flex-row items-center mb-7">
            <div className="flex">
              <label className="text-gray-500 mr-4">
                <FiUser />
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="border-b-2 border-lightGray outline-none w-full md:w-[150px] text-black text-xs placeholder-black py-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-b-2 border-lightGray outline-none w-full md:w-[150px] ml-2 text-black text-xs placeholder-black py-2"
              />
            </div>
          </div>

          <div className="flex items-center mb-7">
            <label className="text-gray-500 mr-4">
              <FiCalendar />
            </label>
            <input
              type="text"
              placeholder="Date of Birth"
              className="border-b-2 border-lightGray outline-none w-full max-w-[300px] text-black text-xs placeholder-black py-2"
            />
          </div>

          {/* Address Field for Mobile View */}
          <div className="flex items-center mb-7 md:hidden">
            <label className="text-gray-500 mr-4">
              <FiMapPin />
            </label>
            <input
              type="text"
              placeholder="Address"
              className="border-b-2 border-lightGray outline-none w-full text-black text-xs placeholder-black py-2"
            />
            <button
              type="button"
              onClick={handleAddAddressClick}
              className="ml-2 text-blue-500"
            >
              <FiPlus />
            </button>
          </div>

          <div className="hidden md:flex items-center mb-7">
            <label className="text-gray-500 mr-4">
              <FiMapPin />
            </label>
            <select className="border-b-2 border-lightGray outline-none flex-grow max-w-[150px] text-black text-xs placeholder-black py-2">
              <option value="" disabled selected hidden>
                Country
              </option>
            </select>
            <select className="border-b-2 border-lightGray outline-none flex-grow ml-2 max-w-[150px] text-black text-xs placeholder-black py-2">
              <option value="" disabled selected hidden>
                City
              </option>
            </select>
          </div>

          <div className="flex items-center mb-7">
            <label className="text-gray-500 mr-4">
              <FiMail />
            </label>
            <input
              type="email"
              placeholder="Email"
              className="border-b-2 border-lightGray outline-none w-full max-w-[300px] text-black text-xs placeholder-black py-2"
            />
          </div>

          <div className="flex items-center mb-7 md:hidden">
            <label className="text-gray-500 mr-4">
              <FiTruck />
            </label>
            <input
              type="text"
              placeholder="Delivery Type"
              className="border-b-2 border-lightGray outline-none w-full text-black text-xs placeholder-black py-2"
            />
          </div>
          <div className="hidden md:flex items-center mb-7">
            <label className="text-gray-500 mr-4">
              <FiLock />
            </label>
            <input
              type="password"
              placeholder="Password"
              className="border-b-2 border-lightGray outline-none w-full max-w-[300px] text-black text-xs placeholder-black py-2"
            />
          </div>
        </form>
      </div>

      {/* my address */}
      <div className="relative">
        <h1 className="font-din text-3xl mb-3">MY ADDRESSES</h1>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-2 md:gap-4">
          {/* Dynamic Shop Rendering */}
          {addressData.map((address, index) => (
            <div key={index} className="w-full mb-4">
              <div className="border border-gray w-full p-4 relative h-[310px] flex flex-col items-center">
                <div className="absolute top-4 right-4 text-sm">
                  <FiCheck className="w-5 h-4 text-blue font-din" />
                </div>
                <div className="absolute top-4 left-4">
                  <div className="flex items-center text-gray-600">
                    <span className="text-xs">{address.type}</span>
                    <FiChevronDown />
                  </div>
                </div>
                <div className="flex flex-col justify-start ml-2 mt-12">
                  <div className="text-blue font-bold text-3xl">
                    {address.name}
                  </div>
                  <div className="text-gray-500 text-xs mt-2">
                    {address.address}
                  </div>
                </div>

                <div className="mt-auto flex flex-col items-center">
                  <button className="bg-white border-2 border-blue text-black px-4 py-2 text-sm font-din w-[160px] mb-2">
                    EDIT
                  </button>
                  <button className="bg-white text-black px-4 py-2 text-sm font-din w-[160px]">
                    REMOVE
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Add new address */}
          <div className="w-full" onClick={handleAddAddressClick}>
            <div className="border border-gray h-[310px]">
              <div className="flex flex-col items-center mt-28">
                <div className="text-blue text-4xl font-bold">+</div>
                <div className="text-xs mt-2">Add address</div>
              </div>
            </div>
          </div>

          {/* Overlay */}
          {isAddressFormVisible && (
            <div
              className="fixed inset-0 bg-lightGray opacity-50 "
              onClick={handleCloseButtonClick}
            />
          )}

          {/* {my address form} */}
          {isAddressFormVisible && (
            <div className="absolute md:top-[-50px] top-0 md:left-[-100px] md:w-[400px] bg-white p-10 border-gray">
              <div className="absolute top-4 left-8">
                <button
                  onClick={handleCloseButtonClick}
                  className="text-black font-bold"
                >
                  <FiX />
                </button>
              </div>
              <h2 className="font-din text-3xl mb-8">NEW ADDRESS</h2>

              <form className="flex flex-col">
                <div className="flex items-center mb-7">
                  <label htmlFor="address" className="sr-only">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Address"
                    className="border-b-2 border-lightGray outline-none w-full max-w-[300px] text-black text-xs placeholder-black py-2"
                  />
                </div>

                <div className="flex items-center mb-7">
                  <label htmlFor="city" className="sr-only">
                    City
                  </label>
                  <select
                    id="city"
                    className="border-b-2 bg-white border-lightGray outline-none flex-grow max-w-[150px] text-black text-xs placeholder-black py-2"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      City
                    </option>
                    {/* City options */}
                  </select>
                  <label htmlFor="addressType" className="sr-only">
                    Zipcode
                  </label>
                  <select
                    id="addressType"
                    className="border-b-2 border-lightGray bg-white outline-none flex-grow ml-2 max-w-[150px] text-black text-xs placeholder-black py-2"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Zipcode
                    </option>
                    {/* Zipcode Type options */}
                  </select>
                </div>

                <div className="flex items-center mb-7">
                  <label htmlFor="state" className="sr-only">
                    State
                  </label>
                  <select
                    id="state"
                    className="border-b-2 border-lightGray bg-white outline-none flex-grow max-w-[150px] text-black text-xs placeholder-black py-2"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      State
                    </option>
                    {/* State options */}
                  </select>
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    className="border-b-2 border-lightGray bg-white outline-none flex-grow ml-2 max-w-[150px] text-black text-xs placeholder-black py-2"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Country
                    </option>
                    {/* Country options */}
                  </select>
                </div>
                <button className="mt-2 bg-white border-2 border-blue text-black px-2 py-2 text-sm font-din w-[120px] mx-auto">
                  ADD
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PersonalInfoShops;
