"use client";

import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import Tabs from "../components/menus/tabs/Tabs";
import MyShop from "../MyShop";
import Order from "../components/Order";
import PersonalInfoShops from "../components/PersonalInfoShops";
import Insight from "../components/Insight";
import Message from "../components/Message";

const TabContent1: React.FC = () => {
  return <div> This is Table Content 1</div>;
};

const TabContent2: React.FC = () => {
  return <div>This is Tab Content 2.</div>;
};

const TabContent3: React.FC = () => {
  return <div>This is Tab Content 3.</div>;
};

const DashboardShops = () => {
  const tabData = [
    { key: "insights", label: "Insights(10)", content: <Insight /> },
    { key: "shop", label: "My Shop(s)", content: <MyShop /> },
    { key: "orders", label: "Orders(40)", content: <Order /> },
    { key: "messages", label: "Messages(20)", content: <Message /> },
    {
      key: "personal_info",
      label: "Personal Info",
      content: <PersonalInfoShops />,
    },
  ];

  return (
    <div className="">
      <div className="bg-lightGray p-6">
        <div className="flex flex-col md:flex-row items-center md:justify-between w-full md:w-[80%] m-auto space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:flex-row md:space-x-4">
            <div className="rounded mb-4 md:mb-0">
              <Image
                src="/images/profile.png"
                alt="profile"
                width={154}
                height={154}
                className="w-24 h-24 md:w-36 md:h-36"
              />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h1 className="font-din text-3xl md:text-2xl">
                KOJO
              </h1>

              <p className="text-sm text-[#8d8d8d]">
                Member Since November 2020
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <button
              type="submit"
              className=" mr-4 mt-8 flex items-center justify-center py-[2px] px-16 h-[40px] md:h-[50px] my-2 font-din border-[3px] border-blue bg-transparent text-black hover:bg-blue-600"
            >
              LOGOUT
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full bg-white p-4 md:p-6">
        <div className="w-full md:w-[80%] m-auto">
          {/* Ensure the Tabs component is responsive */}
          <Tabs tabs={tabData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardShops;
