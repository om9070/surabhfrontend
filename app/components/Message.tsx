import React from "react";
import Image from "next/image"; // Ensure this import is present for Next.js Image component

function Message() {
  return (
    <div className="mt-8 border-t border-[#8D8D8D]">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-1/4 border-r border-[#8D8D8D]">
          <div className="text-xs overflow-y-auto">
            {/* List of Brands */}
            {[
              { name: "Brand Name", location: "Paris, France" },
              { name: "Brand Name", location: "London, UK" },
              { name: "Brand Name", location: "Berlin, Germany" },
              { name: "Brand Name", location: "New York, USA" },
              { name: "Brand Name", location: "Tokyo, Japan" },
            ].map((brand, index) => (
              <div
                key={index}
                className={`flex items-center p-1 border-b border-[#8D8D8D] ${
                  index === 1 ? "bg-gray-100" : ""
                }`}
              >
                {/* Brand Avatar */}
                <div className="w-5 h-5 mr-2">
                  <Image
                    src="/images/profile.png"
                    alt="profile"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                </div>
                {/* Brand Info */}
                <div className="ml-2">
                  <p className="font-bold text-xs">{brand.name}</p>
                  <p className="text-xs text-[#8D8D8D]">{brand.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="w-3/4 flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Message */}
            <div className="mb-4 flex items-start">
              <div className="w-5 h-5 mr-2">
                <Image
                  src="/images/profile.png"
                  alt="profile"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="font-bold text-xs">Brand Name</p>
                <p className="text-xs text-[#8D8D8D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                  lectus eu justo gravida.
                  <span className="ml-16 text-xs text-black">
                    3:41 PM
                  </span>
                </p>
                <p className="text-xs text-[#8D8D8D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                  lectus eu justo gravida.
                </p>
              </div>
            </div>

            <div className="mb-4 flex items-start">
              <div className="w-5 h-5 mr-2">
                <Image
                  src="/images/profile.png"
                  alt="profile"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="font-bold text-xs">Kojo</p>
                <p className="text-xs text-[#8D8D8D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                  lectus eu justo gravida.
                  <span className="ml-16 text-xs text-black">
                    3:37 PM
                  </span>
                </p>
              </div>
            </div>

            <div className="mb-4 flex items-start">
              <div className="w-5 h-5 mr-2">
                <Image
                  src="/images/profile.png"
                  alt="profile"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="font-bold text-xs">Brand Name</p>
                <p className="text-xs text-[#8D8D8D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                  lectus eu justo gravida.
                  <span className=" ml-16 text-xs text-black">
                    3:29 PM
                  </span>
                </p>
              </div>
            </div>

            {/* Date separator with gray lines */}
            <div className="text-left text-xs text-gray-500 my-2">
              <div className="border-t border-[#8D8D8D]"></div>
              <p className="py-1 text-[#8D8D8D]">Tuesday, March 21, 2020</p>
              <div className="border-b border-[#8D8D8D]"></div>
            </div>

            {/* Opened Message from Philip Smith */}
            <div className="mb-4 flex items-start">
              <div className="w-5 h-5 mr-2">
                <Image
                  src="/images/profile.png"
                  alt="profile"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="font-bold text-xs">Philip Smith</p>
                <p className="text-xs text-[#8D8D8D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                  lectus eu justo gravida.
                  <span className="ml-16 text-xs text-black">
                    3:41 PM
                  </span>
                </p>
                <p className="text-xs text-[#8D8D8D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                  lectus eu justo gravida.
                </p>
              </div>
            </div>

            {/* Message Input */}
            <div className="mt-8 flex flex-col items-start w-full">
              <div className="mt-16 flex items-start w-full">
                <div>
                  <textarea
                    className="border border-gray w-full md:w-[450px] h-[100px] md:h-[100px] text-xs"
                    placeholder="Type your message here"
                  />
                </div>

                <div className="flex flex-col ml-4 space-x-2">
                  <button
                    type="submit"
                    className="flex items-center justify-center py-[2px] px-8 h-[20px] md:h-[35px] my-2 font-din text-xs border-[3px] border-blue bg-transparent text-black hover:bg-blue-600"
                  >
                    SEND
                  </button>

                  <button
                    type="button"
                    className="flex items-center justify-center py-[2px] px-8 h-[20px] md:h-[35px] font-din text-xs border-[0px] border-gray bg-transparent text-black hover:bg-blue-600 whitespace-nowrap"
                  >
                    ADD ATTACHMENT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
