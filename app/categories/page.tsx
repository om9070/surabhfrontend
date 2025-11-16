
"use client"
import { useEffect } from "react"
import Button from "../components/Button";
import Heading from "../components/Heading";
import Category from "../components/Category";
import ItemSlider from '../components/sliders/ItemSlider';
import data from "../../configs/card_data.json";
import { useAuthStore } from "@/hooks/useAuthStore";

const CategoryPage = () => {


    const token = useAuthStore((state) => state.token);
    const user = useAuthStore((state) => state.user);

    useEffect(() => {
        console.log('Token updated in component:', token);
        console.log('User updated in component:', user);
    }, [token, user]);


    return (
        <>
            <div className="flex flex-col relative ">
                <div className="bg-lightGray h-[550px] mt-0">
                    <div className={`flex flex-col mx-10 my-10 p-4 gap-4`}>
                        <h1 className={`relative flex  flex-col md:w-[490px] items-center justify-center md:justify-start`}>
                            <span className="text-black font-din text-[50px] md:text-2xl z-50">{"CATEGORIES"}</span>
                            <span className={`absolute bg-blue left-[40px]  top-[30px] h-[40px] w-[350px] md:top-[28px] md:h-[49px] md:w-[600px]`}></span>
                        </h1>
                        <div className={`w-auto m-auto" p-x-5`}>{"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR"}</div>
                    </div>
                </div>
                <div className="absolute top-[300px] w-[100%]">
                    <div className="grid gap-10 grid-col-1 md:grid-cols-2 md:gap-10 w-[90%] mx-auto">
                        <div className="relative  h-[300px] md:h-[400px] lg:h-[500px]">
                            <Category title="WOMEN" image="women-category.svg" />
                        </div>
                        <div className="relative  h-[300px] md:h-[400px] lg:h-[500px]">
                            <Category title="MEN" image="men-category.svg" />
                        </div>
                    </div>
                </div>

                <div className="md:mb-80 mb-[450px]"></div>

            </div>
            <div className="w-[100%] bg-lightGray mb-20">
                <ItemSlider
                    data={data.items}
                    heading={"SHOP EDITOR'S PICKS"}
                    slideNum={6}
                    autoplay={false}
                    autoplaySpeed={3000}
                />
            </div>

            <div className="grid grid-rows-2 sm:grid-flow-col gap-4 w-[85%] mx-auto">
                <div className="h-[300px] row-span-2 col-span-2  md:h-[400px]  relative overflow-hidden">
                    <Category title="ON SALE" image="women-category.svg" />
                </div>
                <div className="h-[150px] col-span-2  md:h-[200px] relative overflow-hidden">
                    <Category title="NEW HOT STAFF" image="categorywatch.jpg" />
                </div>
                <div className="h-[150px] row-span-1 col-span-2 md:h-[200px] relative overflow-hidden">
                    <Category title="NEW HOT STAFF" image="categorywatch.jpg" />
                </div>
            </div>

            <div className="w-[100% px-2">
                <ItemSlider
                    data={data.items}
                    heading={"SHOP JUST LANDED"}
                    slideNum={6}
                    autoplay={false}
                    autoplaySpeed={3000}
                />
            </div>


            <div className="bg-lightGray relatives pb-16">
                <div className="items-center flex text-center justify-center mt-0 mb-0">
                    <div className="flex flex-col mx-5 p-4 gap-4">
                        <h1 className="relative w-full">
                            <span className="text-black font-din text-heading z-50 relative  ">
                                {"DO YOU OWN A BRAND?"}
                            </span>
                            <span className={`hidden md:block absolute bg-blue left-[200px] top-[28px] h-[49px] w-[550px] z-0`}></span>
                        </h1>
                        <div className={`w-auto m-auto" p-x-5`}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</div>
                    </div>
                </div>
                <div className="items-center flex justify-center mb-0 mt-0">
                    <Button label={"DISCOVER"} link="/discover" type="primary" />
                </div>
            </div>

        </>
    )


}

export default CategoryPage