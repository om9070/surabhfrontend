import ItemSlider from "@/app/components/sliders/ItemSlider";
import data from "../../configs/card_data.json";
// import Button from "../../../components/Button";

import Button from "@/app/components/Button";

export default function Empty() {
  return (
    <div className="flex flex-col">
      <div className="bg-lightGray h-[550px] mt-0">
        <div className={`flex flex-col mx-10 my-10 p-4 gap-4`}>
          <h1 className={`relative flex  flex-col  'w-[490px]'} `}>
            <span className="text-black font-din text-heading z-50">
              {"YOUR BAG"}
            </span>
            <span
              className={`absolute bg-blue left-[50px] top-[50px] h-[49px] w-[350px]`}
            ></span>
          </h1>
          <div className="flex flex-col items-center space-y-4 sm:space-y-8 mt-16">
            <div className={`w-auto m-auto" p-x-5 font-din_medium`}>
              {
                "YOUR SHOPPING BAG IS CURRENTLY EMPTY. FIND SOMETHING EXCITING TO PUT IN IT!"
              }
            </div>
            <Button label="START SHOPPING" link="/" type="primary" />
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
    </div>
  );
}
