import React, { ReactElement, ComponentType } from 'react';

const Tab = () => {
    return (
        <div className="w-[80%]">
            <div className="flex justify-around items-center border-b-[1px] border-[#EFEFEF] mb-10 m-auto">
                <button className="text-sm text-[#8d8d8d] bg-none border-none p-4 cursor-pointer font-din_medium">
                    Insights
                </button>
                <button className="text-sm text-[#8d8d8d] bg-none border-none p-4 cursor-pointer">
                    My Shops(2)
                </button>
                <button className="text-sm text-[#8d8d8d] bg-none border-none p-4 cursor-pointer">
                    Orders(500)
                </button>
                <button className="text-sm text-[#8d8d8d] bg-none border-none p-4 cursor-pointer">
                    Messages(3)
                </button>
            </div>
            <div className="">

            </div>
            <div className="p-4">
                <div className="">
                    <h1>
                        Insights
                    </h1>

                </div>
                <div className="">
                    <h1>
                        My Shops(2)

                    </h1>

                </div>
                <div className="">
                    <h1>
                        Orders(500)
                    </h1>

                </div>
                <div className="">
                    <h1>
                        Messages(3)
                    </h1>

                </div>
            </div>


        </div>
    )
}

export default Tab