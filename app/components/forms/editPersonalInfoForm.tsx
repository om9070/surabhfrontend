import React, { useEffect, useState } from "react";
import { FiUser, FiCalendar, FiMapPin, FiMail, FiLock } from "react-icons/fi";
import { useFormik } from "formik";
import useStore from "@/stores";
import {
  useUpdateUserMutation,
  useCountriesQuery,
  useStatesQuery,
  useCitiesByStateQuery,
} from "@/hooks/usePersonalInfo";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Country {
  isoCode: string;
  name: string;
}

interface State {
  isoCode: string;
  name: string;
}

interface City {
  name: string;
}

export default function EditPersonalinfoForm() {
  const user = useStore((state) => state.user);
  console.log(user)
  const updateUserMutation = useUpdateUserMutation();

  const [selectedCountry, setSelectedCountry] = useState<string>(
    user?.country || ""
  );
  const [selectedState, setSelectedState] = useState<string>(user?.state || "");

  const { data: countries } = useCountriesQuery();
  const { data: states } = useStatesQuery(selectedCountry);
  const { data: cities } = useCitiesByStateQuery(selectedCountry, selectedState);

  const handleDateChange = (date: Date | null) => {
    formik.setFieldValue("dob", date ? format(date, "yyyy-MM-dd") : "");
  };

  const formik = useFormik({
    initialValues: {
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      dob: user?.dob || "",
      country: selectedCountry,
      state: selectedState,
      city: user?.city || "",
      email: user?.email || "",
      password: "",
    },
    validationSchema: false,
    onSubmit: (values) => {
      if (!user?.id) {
        console.error("User ID is required to update information.");
        return;
      }

      updateUserMutation.mutate(
        { id: user.id, data: values },
        {
          onSuccess: () => console.log("User successfully updated"),
          onError: (error) =>
            console.error("Error updating user:", error.message),
        }
      );
    },
  });

  useEffect(() => {
    if (selectedCountry) formik.setFieldValue("country", selectedCountry);
    if (selectedState) formik.setFieldValue("state", selectedState);
  }, [selectedCountry, selectedState,formik]);

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col md:flex-row w-full"
      >
        <div className="w-full md:w-[400px] mr-4 mb-4 md:mr-14">
          <h2 className="font-din text-3xl mb-8">MY INFO</h2>

          {/* First and Last Name */}
          <div className="flex flex-col md:flex-row items-center mb-7">
            <div className="flex items-center w-full">
              <label className="text-gray-500 mr-4">
                <FiUser />
              </label>
              <div className="flex w-full">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  className="border-b-2 border-lightGray outline-none w-full md:w-[150px] text-gray text-xs placeholder-gray py-2"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  className="border-b-2 border-lightGray outline-none w-full md:w-[150px] ml-2 text-gray text-xs placeholder-gray py-2"
                />
              </div>
            </div>
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col items-start mb-7">
            <div className="flex items-center w-full">
              <label className="text-gray-500 mr-4 flex-shrink-0">
                <FiCalendar />
              </label>
              <DatePicker
                selected={
                  formik.values.dob ? new Date(formik.values.dob) : null
                }
                onChange={handleDateChange}
                placeholderText="Date of Birth"
                dateFormat="MMMM d, yyyy"
                className="outline-none w-full  text-gray text-xs placeholder-gray py-2"
              />
            </div>
            <div className="ml-4 w-[80%] border-b-2 border-lightGray mt-2"></div>
          </div>

          {/* Country, State, and City */}
          <div className="flex items-center mb-7">
            <label className="text-gray-500 mr-4">
              <FiMapPin />
            </label>
            {/* Country Dropdown */}
            <select
              name="country"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="border-b-2 border-lightGray outline-none w-[150px]  text-gray text-xs placeholder-gray py-2"
            >
              <option value="">Select Country</option>
              {countries?.map((country: any) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>

            {/* State Dropdown */}
            <select
              name="state"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              disabled={!selectedCountry}
              className="border-b-2 border-lightGray outline-none w-[150px]  text-gray text-xs placeholder-gray py-2 ml-2"
            >
              <option value="">Select State</option>
              {states?.map((state: any) => (
                <option key={state.isoCode} value={state.isoCode}>
                  {state.name}
                </option>
              ))}
            </select>

           
            <select
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              disabled={!selectedState}
              className="border-b-2 border-lightGray outline-none w-[150px]  text-gray text-xs placeholder-gray py-2 ml-2"
            >
              <option value="">Select City</option>
              {cities?.map((city: any) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Email and Password */}
        <div className="mt-0 md:mt-16 w-full md:w-[400px]">
          <div className="flex items-center mb-7">
            <label className="text-gray-500 mr-4">
              <FiMail />
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="border-b-2 border-lightGray outline-none w-full  text-gray text-xs placeholder-gray py-2"
            />
          </div>
          <div className="flex items-center mb-7">
            <label className="text-gray-500 mr-4">
              <FiLock />
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password (leave blank to keep current password)"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="border-b-2 border-lightGray outline-none w-full  text-gray text-xs placeholder-gray py-2"
            />
          </div>
          <button
            type="submit"
         className=" mr-4 mt-8 flex items-center justify-center py-[2px] px-16 h-[40px] md:h-[50px] my-2 font-din border-[3px] border-blue bg-transparent text-black hover:bg-blue-600"
            disabled={updateUserMutation.isLoading}
          >
            {updateUserMutation.isLoading ? "Updating..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
}
