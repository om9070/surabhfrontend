"use client";

import React, { useEffect } from "react";
import useStore from "@/stores";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Tabs from "../components/menus/tabs/Tabs";
import MyStore from "../components/MyStore";
import PersonalInfoStores from "../components/PersonalInfoStores";
import BrandInfoStores from "../components/BrandInfoStores";


const DashboardStores = () => {

  const user = useStore((state) => state.user);
  const logout = useStore((state) => state.logout);


  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };


  // Define the tabs to be displayed in the Dashboard
  const tabData = [
    { key: "store", label: "My Store(s)", content: <MyStore /> },
    // { key: "messages", label: "Messages(20)", content: <Message /> },
    { key: "brand_info", label: "Brand Info", content: <BrandInfoStores /> },
    { key: "personal_info", label: "Personal Info", content: <PersonalInfoStores /> },
  ];

  return (
    // <ProtectedComponent>
      <div>
        <div className="bg-lightGray p-6">
          <div className="flex flex-col md:flex-row items-center md:justify-between w-full md:w-[80%] m-auto space-y-4 md:space-y-0">
            <div className="flex flex-col items-center md:flex-row md:space-x-4">
              <div className="rounded mb-4 md:mb-0">
                <Image
                  src={user?.profile_pic || "/images/profile.png"}
                  alt="profile"
                  width={154}
                  height={154}
                  className="w-24 h-24 md:w-36 md:h-36"
                />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h1 className="font-din text-3xl md:text-2xl">
                  {user?.first_name || "KOJO"}
                </h1>
                <p className="text-sm text-[#8d8d8d]">
                  Member Since 12-12-2004
                </p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end w-full md:w-auto">
              <button
                type="button"
                onClick={handleLogout}
                className="mr-4 mt-8 flex items-center justify-center py-[2px] px-16 h-[40px] md:h-[50px] my-2 font-din border-[3px] border-blue bg-transparent text-black hover:bg-blue-600"
              >
                LOGOUT
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-white p-4 md:p-10">
          <div className="w-full md:w-[80%] m-auto">
            <Tabs tabs={tabData} />
          </div>
        </div>
      </div>
    // </ProtectedComponent>
    // <div>
    //   <p>{user?.first_name || "No name available"}</p>
    // </div>
  );
};

export default DashboardStores;
