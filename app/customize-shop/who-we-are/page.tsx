import Button from "../../components/Button";
import { FaMapMarkerAlt, FaEye, FaHeart } from "react-icons/fa";
import Banner from "../../components/Banner";
import EditableText from "../../components/EditableText";
import Image from "next/image";
import Category from "@/app/components/Category";
import Heading from "@/app/components/Heading";
import Logo from "@/app/components/menus/Logo";
import CategoryHeading from "@/app/components/CategoryHeading";
import CategoryShopPage from "@/app/components/CategoryShop";

const AboutUsPage = () => {
  return (
    <>
      <div className="relative h-full w-full">

      <div className="h-[300px] row-span-2 col-span-2 md:h-[400px] relative overflow-hidden">
  <div className="relative h-full w-full md:ml-4 md:mr-8">
    <div className={`absolute inset-0`}>
      <Image
        src={`/images/who-we-are-img.png`}
        alt="Category Image"
        layout="fill"
        objectFit="cover"
      />
    </div>

    <div className="flex absolute bottom-0 left-0 px-4 bg-white gap-2 py-4 w-[90%] z-20 flex-col">
      <div className="flex flex-col ">
        <h1 className="relative flex flex-col mb-2">
          <span className="text-black font-din text-[61px] md:text-[20px] z-50">WHO WE ARE</span>
          <span className="hidden md:block absolute bg-red-600 left-[50px] right-[800px] top-[20px] h-[29px] w-auto" />
        </h1>
        <p className="text-sm  mt-8 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>
</div>


      </div>

      <div className="flex flex-col m-8">
        <div className="font-bold text-lg font-din text-[36px] leading-tight mb-4">
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt&quot;
        </div>
        <div className="text-sm text-[16.34px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>

      {/* Company Details */}
      <div className="bg-lightGray">
        <div className="flex flex-row text-center  ml-8 md:text-left">
          <Image className="rounded-full mr-4" src={`/images/Immagine 28.png`} alt={'logo'} width={92} height={92} />
          <div>
            <h2 className="text-4xl font-semibold text-gray-800 uppercase whitespace-nowrap">
              LACE AND LOFFAS
            </h2>
            <div className="text-xs flex items-center justify-center md:justify-start space-x-6 text-gray-500 mt-2">
              {/* Location */}
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt />
                <span>New York, NY</span>
              </div>

              {/* Views */}
              <div className="flex items-center space-x-2">
                <FaEye className="" />
                <span>2,476 Views</span>
              </div>

              {/* Followers */}
              <div className="flex items-center space-x-2">
                <FaHeart />
                <span>247 Followers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Follow Button */}
        <div className="flex justify-center md:mt-0">
          <Button label="FOLLOW" link="/discover" type="secondary" />
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
