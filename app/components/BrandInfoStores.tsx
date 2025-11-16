
"use client";
import React from "react";
import EditbrandForm from "./forms/editBrandForm";



function BrandInfoStores() {

  return (

    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-[400px] mr-4 mb-4 md:mr-14">
        {/* <div className="relative w-16 h-16 mx-auto my-4 rounded-full bg-gray-200 border border-[#8D8D8D] flex items-center justify-center cursor-pointer">
          <span className="text-[#8D8D8D] text-4xl font-bold">+</span>
        </div>     */}
        <EditbrandForm />
      </div>
    </div>

  );
}

export default BrandInfoStores;
