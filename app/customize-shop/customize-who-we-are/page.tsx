import Button from "../../components/Button";
import { FaMapMarkerAlt, FaEye, FaHeart } from "react-icons/fa";
import Banner from "../../components/Banner";
import EditableText from "../../components/EditableText";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <>
    
      <Banner
        title="Who We Are"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacini"
        bannerText="Add a video or photo for this banner"
      />

      <div className="w-full mt-10 mb-10 px-4">
        <EditableText
          initialText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum."
          textStyle="text-lg font-semibold text-gray-800 mb-4 leading-relaxed text-left"
        />

        <EditableText
          initialText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          textStyle="text-xs text-gray-700 text-justify mt-8"
        />
      </div>

      {/* Company Information Section */}
      <div className="mt-20 relative pb-16 bg-lightGray flex flex-col md:flex-row items-center justify-between px-4 py-6">
        {/* Logo */}
        <div className="flex-none mb-4 md:mb-0">
          <div className="h-35 w-35 rounded-full border flex items-center justify-center overflow-hidden">
            <Image
              src="/images/db-images/brand-logo.png"
              alt="Logo"
              width={35}
              height={35}
              objectFit="contain"
            />
          </div>
        </div>

        {/* Company Details */}
        <div className="flex-1 text-center lg:text-left max-w-7xl mx-auto">
          <h2 className="ml-2 lg:ml-24 text-4xl font-semibold text-gray-800 uppercase whitespace-nowrap">
            LACE AND LOFFAS
          </h2>
          <div className="ml-2 lg:ml-24 text-xs flex items-center justify-center lg:justify-start space-x-6 text-gray-500 mt-2">
            {/* Location */}
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span>New York, NY</span>
            </div>

            {/* Views */}
            <div className="flex items-center space-x-2">
              <FaEye />
              <span>2,476 Views</span>
            </div>

            {/* Followers */}
            <div className="flex items-center space-x-2">
              <FaHeart />
              <span>247 Followers</span>
            </div>
          </div>
        </div>

        {/* Follow Button */}
        <button
          type="submit"
          className=" mr-4 mt-8 flex items-center justify-center py-[2px] px-16 h-[40px] md:h-[50px] my-2 font-din border-[3px] border-gray bg-transparent text-black hover:bg-blue-600"
        >
          Follow
        </button>
      </div>
    </>
  );
};

export default AboutUsPage;
