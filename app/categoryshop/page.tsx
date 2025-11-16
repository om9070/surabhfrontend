import Button from "../components/Button";
import CategoryShop from "../components/CategoryShop";
import { FaPlus } from "react-icons/fa";
import ItemSlider from "../components/sliders/ItemSlider";
import CategoryHeading from "../components/CategoryHeading";
import { FaPencilAlt } from "react-icons/fa";

const CategoryShopPage = () => {
  return (
    <>
      <div className="flex flex-col relative">
        <div className="bg-lightGray h-[550px] mt-0">
          <div className="flex flex-col ml-4 mr-8 my-10 p-4 gap-4">
            <h1 className="relative flex flex-col md:w-[490px] items-center justify-center md:justify-start">
              <span className="text-black font-din text-[50px] md:text-heading z-50">
                {"CATEGORIES"}
              </span>
              <span className="absolute bg-gray left-[40px] top-[30px] h-[40px] w-[350px] md:top-[50px] md:h-[49px] md:w-[600px]"></span>
            </h1>
            <div className="w-auto m-auto px-5 flex items-center justify-between">
              <div>
                {
                  "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR"
                }
              </div>
              <button className="flex items-center text-blue-600 hover:text-blue-800 focus:outline-none ml-4">
                <FaPencilAlt className="text-black mr-2" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-[300px] w-[100%]">
          <div className="grid gap-10 grid-col-1 md:grid-cols-2 md:gap-10 w-[90%] mx-auto ml-4 mr-8">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
              <CategoryShop title="1ST MAIN CATEGORY" />
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
              <CategoryShop title="2ND MAIN CATEGORY" />
            </div>
          </div>
        </div>

        <div className="md:mb-80 mb-[450px]"></div>
      </div>

      <div className="w-full bg-lightGray mb-10">
        <h2 className="text-lg font-semibold text-left text-gray-800 py-4 pl-4">
          SHOP EDITORS PICKS
        </h2>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-auto px-5">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="mb-10 flex-shrink-0 w-full h-[200px] bg-white flex flex-col items-center justify-center text-center"
              style={{
                border: '2px dashed gray', // Dashes for the border
                borderRadius: '5px', // Rounded corners
                borderColor: '#a0a0a0', // Gray color for the border
                borderWidth: '2px',
                borderStyle: 'dashed',
                borderImage: 'none',
              }}
            >
              <FaPlus className="text-gray-400 text-sm cursor-pointer" />
              <span className="text-gray-600 text-[10px] mt-4 mb-2 mx-2">
                Add a product and <br></br> flag it to see it on <br></br>this page
              </span>
            </div>
          ))}
        </div>


      </div>


      <div className="relative pb-16">
        <div className="items-center flex text-center justify-center mt-0 mb-0">
          <div className="relatives pb-16">
            <div className="items-center flex text-center justify-center mt-0 mb-0">
              <CategoryHeading
                title="DO YOU LIKE WHAT YOU SEE?"
                full={true}
                description="LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR"
              />
            </div>
            <div className="items-center flex justify-center mb-0 mt-0">
              <Button label={"FOLLOW"} link="/discover" type="secondary" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryShopPage;

