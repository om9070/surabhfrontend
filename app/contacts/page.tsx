import Button from "../components/Button";
import Heading from "../components/Heading";

const Contacts = () => {
  return (
    <>
      <div className="flex flex-col relative ">
        <div className="bg-lightGray h-[550px] mt-0">
          {/* <div className="w-[100%]">
            <Heading title="CONTACTS" description="LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA" />
          </div> */}
          <div className={`flex flex-col mx-10 my-10 p-4 gap-4`}>
            <h1 className={`relative flex  flex-col  'w-[490px]'} `}>
              <span className="text-black font-din text-2xl z-50">{"CONTACTS"}</span>
              <span className={`absolute bg-blue left-[50px] top-[28px] h-[40px] w-[350px]`}></span>
            </h1>
            <div className={`w-auto m-auto" p-x-5`}>{"LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR"}</div>
          </div>
        </div>
        <div className="absolute top-[300px] w-full">
          <form className="w-[80%] m-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 font-din_medium">
              <div>
                <input
                  type="text"
                  className="w-full h-16 bg-white shadow appearance-none border-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="w-full h-16 bg-white shadow appearance-none border-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mt-4">
              <textarea
                className="w-full h-60 bg-white shadow appearance-none border-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="message"
                placeholder="Type your message here...."
              ></textarea>
            </div>
            <div className="mt-4 flex flex-col md:flex-row items-center justify-between">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="form-checkbox text-primary h-6 w-6 rounded"
                  name="agree"
                  value="agree"
                />
                <span className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
              </label>
              <Button label="SEND" link="" type="primary" />
            </div>
          </form>
        </div>
        <div className="mb-96"></div>
      </div>


    </>

  );
};

export default Contacts;
