'use client'
import React, { useEffect, useState } from "react";
import { FiChevronDown, FiCheck } from "react-icons/fi";
import { StoreForm } from "./forms/addStoreForm";
import { EditStoreForm } from "./forms/editStoreForm";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import Error from "@/app/components/Error";
import { Shop } from "@/types/shop";
import { useFetchAllStoresQuery } from "@/hooks/useStore";
import useStore from "@/stores";
import { deleteStore } from "@/api/storeAPI";

function MyStore() {
  const [loadingStoreId, setLoadingStoreId] = useState<number | null>(null); // Track loading state for each store
  const addShop = useStore((state) => state.addShop)
  const singleShop = useStore((state) => state.singleShop)
  const removeShop = useStore((state) => state.removeShop)
  const shops = useStore((state) => state.shops)
  const token = useStore((state) => state.token)


  const handleShopEdit = (id: number) => {
    singleShop(id)
  };

  // const handleShopDelete = (shopId:number) =>{
  //   removeShop(shopId)
  // }
  const handleShopDelete = async (shopId: number, token: string) => {
    console.log(token)
    try {
      // Call the backend API to delete the shop
      await deleteStore(shopId, token);
  
      // If successful, update the state to remove the shop
      removeShop(shopId);
    } catch (error) {
      console.error("Failed to delete shop from the backend:", error);
      // Optionally, you can add error handling to show a notification or rollback state
    }
  };
  


  if (!shops || shops.length === 0) {
    return (
      <div className="text-center mt-8">
        <p className="text-gray-500 mb-4 font-din_medium">No shops found. Create your first shop!</p>
        <div className="flex-1 min-w-[150px] md:w-[200px]">
          <Dialog >
            <div
              className="border border-gray bg-white mb-4 h-[310px] flex flex-col items-center justify-center cursor-pointer"
              // onClick={handleAddNewShopClick}
            >
              <DialogTrigger className="text-blue text-4xl font-bold">+</DialogTrigger>
              <div className="text-xs mt-2">Add new shop</div>
              <DialogContent className="w-full bg-white"><StoreForm /></DialogContent>
            </div>
          </Dialog>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center sm:flex-row mb-8">
      <div className="relative">
        <h1 className="flex justify-center font-din text-3xl my-5">MY SHOPS</h1>
        <div className="flex flex-row flex-wrap sm:grid grid-cols-3 gap-4">
          {/* Dynamic Shop Rendering */}
          {shops.map((shop: Shop, index: number) => (
            <div key={index} className="flex-1 min-w-[150px] md:w-[200px] mb-4 md:mr-4">
              <div className="border border-gray w-full p-4 relative h-[310px] flex flex-col items-center">
                <div className="w-full flex justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <span className="text-xs">{shop.shop_type}</span>
                    <FiChevronDown />
                  </div>
                  <FiCheck className="w-5 h-4 text-blue" />
                </div>
                <div className="mr-4 text-blue font-bold mt-2 text-3xl">
                  {shop.shop_name}
                </div>
                <div className="text-gray-500 text-xs mt-2">{shop.shop_city}</div>
                <Dialog>
                  <DialogTrigger
                    className="mt-6  bg-white border-2 border-blue text-black px-4 py-2 text-sm w-full md:w-[160px]"
                    onClick={() => handleShopEdit(shop.id)}
                  >
                    EDIT
                  </DialogTrigger>
                  <DialogContent>
                    <EditStoreForm 
                    />
                  </DialogContent>
                </Dialog>
                {/* <button className="mt-4 absolute bottom-2 bg-white px-4 py-2 font-semibold text-sm text-red-600 w-full md:w-[160px]">
                  REMOVE
                </button> */}
                <button
                  onClick={() => {
                    if (token) {
                      handleShopDelete(shop.id, token);
                    } else {
                      console.error("Token is null, cannot delete shop.");
                    }
                  }}
                  disabled={loadingStoreId === shop.id} // Disable button while deleting
                  className={`mt-4 bg-white px-4 py-2 font-semibold text-sm ${loadingStoreId === shop.id ? "text-gray-400" : "text-red-600"
                    } w-full md:w-[160px]`}
                >
                  {loadingStoreId === shop.id ? "Deleting..." : "Remove"}
                </button>

              </div>
            </div>
          ))}

          {/* Add new shop button */}
          <div className="flex-1 min-w-[150px] md:w-[200px]">
            <Dialog>
              <div
                className="border border-gray mb-4 h-[310px] flex flex-col items-center justify-center cursor-pointer"
                // onClick={handleAddNewShopClick}
              >
                <DialogTrigger className="text-blue text-4xl font-bold">+</DialogTrigger>
                <div className="text-sm mt-2 font-din_medium">Add new shop</div>
              </div>
              <div className="w-full max-w-lg">
                <DialogContent className="">
                  <StoreForm />
                </DialogContent>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyStore;
