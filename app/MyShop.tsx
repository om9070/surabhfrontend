import React from 'react';
import { FiChevronDown, FiCheck } from 'react-icons/fi';

function MyShop() {
  const shopsData = [
    { name: "LACE AND LOFFA'S", visibility: 'Public', lastEdit: '7 Dec, 2023' },
    { name: "LACE AND LOFFA'S", visibility: 'Public', lastEdit: '7 Dec, 2023' },
    { name: "LACE AND LOFFA'S", visibility: 'Public', lastEdit: '7 Dec, 2023' }
  ];

  return (
    <div className='flex flex-col md:flex-row lg:flex-row mb-8'>
    <div className='relative'>
      <h1 className='font-din text-3xl mb-3'>MY SHOPS</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-4'>
        {/* Dynamic Shop Rendering */}
        {shopsData.map((shop, index) => (
          <div key={index} className='w-full sm:w-[250px] mb-4 xl:mr-4'>
            <div className="border border-gray w-full p-4 relative h-[310px] flex flex-col items-center">
              <div className="w-full flex justify-between mb-4">
                <FiCheck className="w-5 h-4 text-blue" />
                <div className="flex items-center text-gray-600">
                  <span className="text-xs">{shop.visibility}</span>
                  <FiChevronDown />
                </div>
              </div>
              <div className="text-blue font-bold text-center mt-2 text-3xl">{shop.name}</div>
              <div className="text-gray-500 text-xs mt-2">Last edit {shop.lastEdit}</div>
              <button className="mt-6 bg-white border-2 border-blue text-black px-4 py-2 text-sm w-full sm:w-[180px]">
                EDIT
              </button>
              <button className="mt-4 bg-white text-black px-4 py-2 text-sm w-full sm:w-[180px]">REMOVE</button>
            </div>
          </div>
        ))}
  
        {/* Add new shop */}
        <div className="w-full sm:w-[250px]">
          <div className="border border-gray mb-4 h-[310px] flex flex-col items-center justify-center">
            <div className="text-blue text-4xl font-bold">+</div>
            <div className="text-xs mt-2">Add new shop</div>
          </div>
        </div>
      </div>
    </div>
  
    {/* Referrals */}
    <div className='relative md:ml-4 lg:ml-10 w-full lg:w-[400px] mt-8 md:mt-0'>
      <h1 className='font-din text-3xl mb-4'>REFERRALS</h1>
      <div>
        <textarea
          className="border border-gray w-full lg:w-[400px] h-[200px] lg:h-[240px] text-xs"
          placeholder="Type email address here, divide by a comma"
        />
      </div>
      <div className='mt-4 lg:absolute lg:right-0'>
        <button className="bg-white border-2 border-blue text-black px-4 py-2 text-sm w-full lg:w-[160px]">
          SEND
        </button>
      </div>
    </div>
  </div>
  
  );
}

export default MyShop;
