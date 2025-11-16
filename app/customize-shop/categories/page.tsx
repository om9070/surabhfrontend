'use client'
import Button from "@/app/components/Button"
import Category from "@/app/components/Category"
import Loading from "@/app/components/Loading";
import Error from "@/app/components/Error";
import ItemSlider from "@/app/components/sliders/ItemSlider"
import { useCategoriesData } from "@/hooks/useCategoriesQuery";

const  CustomCategories = () => {
    const { isLoading, isError, data } = useCategoriesData()

  
    if (isLoading) return <div><Loading/></div>;
    if (isError) return <div><Error/></div>;
    return (
        <>
            <div className="flex flex-col relative ">
                <div className="bg-lightGray h-[550px] mt-0">
                    <div className={`flex flex-col mx-10 my-10 p-4 gap-4`}>
                        <h1 className={`relative flex  flex-col md:w-[490px] items-center justify-center md:justify-start`}>
                            <span className="text-black font-din text-[50px] md:text-heading z-50">{"CATEGORIES"}</span>
                            <span className={`absolute bg-red-600 left-[40px]  top-[30px] h-[40px] w-[350px] md:top-[50px] md:h-[49px] md:w-[600px]`}></span>
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





        </>
    )


}

export default  CustomCategories