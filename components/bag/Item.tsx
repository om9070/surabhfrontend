import ItemSlider from "@/app/components/sliders/ItemSlider";
import data from "../../configs/card_data.json";
import Button from "@/app/components/Button";
import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { API_URL } from "@/app/join/JoinForm";

export default function Item({ data }: { data: any }) {
  const [itemdata, setItemdata] = useState<any>([]);

  const handleClick = (id: number) => {
    const getdata = itemdata.filter((e: any) => e.id != id);
    setItemdata(getdata);
    console.log(id, "handleClick", getdata);
  };

  useEffect(() => {
    setItemdata(data);
  }, [data]);

   const getFunction = () => {
    const userData: any = JSON.parse(
      localStorage.getItem("user") || "[]"
    ) as any[];
    return userData;
  };


    const getMoney = () => {
   return itemdata.reduce((sum: any, item: any) => {
      return sum + item.price;
    }, 0);
  };

  const handleOrder = async () => {
    // const getprice=data.map((e:any)=>({productId:e.id,price:e.price})
    try {
      // const data={role:"user", products=data.map(e=>e.id), totalPrice, userId};
      let formdata = {
        role: "user",
        products: data.map((e: any) => ({
          productId: parseInt(e.id),
          price: Math.floor(e.price),
        })),
        totalPrice: getMoney(),
        userId: getFunction().userId,
      };

      const res: any = await fetch(
        `${API_URL}/v1/stripe/createCheckoutSession`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getFunction().token}`,
          },
          body: JSON.stringify(formdata),
        }
      );

      const getdata = await res.json();
      console.log(getdata, "getdatagetdata");
      window.open(getdata.paymentUrl, "_blank"); // opens in new window/tab
    } catch (error) {
      alert(error);
    }
  };



  return (
    <>
      <div className="flex flex-col">
        <div className="bg-lightGray mt-0">
          <div className="flex flex-col mx-10 my-10 p-4 gap-4">
            <h1 className={`relative flex flex-col w-[490px]`}>
              <span className="text-black font-din text-heading z-50">
                {"YOUR BAG (1)"}
              </span>
              <span className="absolute bg-blue left-[50px] top-[5px] h-[49px] w-[350px]"></span>
            </h1>
            <div className="flex flex-col items-start  md:flex-row">
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center space-x-8 py-1">
                  <p className="text-xs text-gray"> Delivery from</p>
                  <div className="text-xs font-bold">New York - USA</div>
                </div>
                {itemdata.map((d: any, i: number) => {
                  return (
                    <div
                      key={i}
                      className="bg-white w-full md:w-[940px] mb-4 md:mr-4"
                    >
                      <div className="w-full p-4 relative h-[398px]">
                        <div className="border-t-2 font-thin"></div>
                        <div className="flex flex-row mt-8 space-x-4">
                          <div className="w-1/4">
                            <Image
                              src={`/images/db-images/${d?.image}`}
                              width={198}
                              height={259}
                              alt={"product-image"}
                            />
                          </div>
                          <div className="flex flex-col justify-between w-3/4">
                            <div>
                              <div className="font-bold sm:text-[28.34px]">
                                {d.name}
                              </div>
                              <div className="text-gray sm:text-[18.34px]">
                                Lace and Loffas
                              </div>
                              <div className="sm:text-[18.34px]">$ 59.99</div>
                            </div>
                            <div className="flex flex-row justify-between items-center space-x-8">
                              <div className="text-gray sm:text-[18.34px]">
                                1x
                              </div>
                              <div
                                className="sm:w-[29.32px] h-[36.12px]"
                                onClick={() => handleClick(d.id)}
                              >
                                <FaRegTrashAlt />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-white w-full md:w-[452px] mb-4 md:mr-4">
                <div className="w-full p-4 relative h-[398px] flex flex-col justify-center items-center">
                  <div className="w-full">
                    <div className="flex flex-row justify-between items-center space-x-8 my-4">
                      <p className="text-xs">Item Name</p>
                      <div className="text-xs">$ 59.99</div>
                    </div>
                    <div className="flex flex-row justify-between items-center space-x-8 my-4">
                      <p className="text-xs text-gray">Estimated delivery</p>
                      <div className="text-xs text-gray">$ 12</div>
                    </div>
                    <div className="flex flex-row justify-between items-center space-x-8 my-4">
                      <p className="text-xs font-bold">Total</p>
                      <div className="text-xs font-bold">{getMoney()}</div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center mt-6">
                    <button
                      className="bg-white border-2 border-blue text-black px-4 py-2 text-sm font-din w-[200px]"
                      onClick={handleOrder}
                    >
                      CHECKOUT
                    </button>
                    <button className="mt-4 bg-white text-black px-4 py-2 text-sm font-din w-[200px]">
                      CONTINUE SHOPPING
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-white mb-20">
        <ItemSlider
          data={data.items}
          heading={"TOP SELLERS"}
          slideNum={6}
          autoplay={false}
          autoplaySpeed={3000}
        />
      </div>
    </>
  );
}
