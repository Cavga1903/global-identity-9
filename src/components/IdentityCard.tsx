import React, { useState } from "react";
import LanguageIcon from "@mui/icons-material/LanguageRounded"; // MUI ikonu
import Barcode from "../components/assets/barcode_49681290_9185570.png"; // photo importu
// import cardHolder from "../components/assets/IDCardMockup.png"; // photo importu


const countries = [
  { label: "Germany", value: "GERMANY", flag: "🇩🇪" },
  { label: "Austria", value: "AUSTRIA", flag: "🇦🇹" },
  { label: "Estonia", value: "ESTONIA", flag: "🇪🇪" },
];

export default function IdentityCard() {
  const [targetCountry, setTargetCountry] = useState("AUSTRIA");

  return (
    
    <div className="flex flex-col lg:flex-row gap-5 justify-center items-center min-h-screen bg-gradient-to-r from-green-100 to-green px-4">
    {/* 📌 background image */}

    <div className="bg-white shadow-2xl rounded-xl w-full max-w-[90%] md:max-w-[700px] lg:max-w-[600px] h-auto flex flex-col sm:flex-row overflow-hidden relative border border-gray-200">
        {/* left side */}
        <div className="w-full sm:w-1/2 p-4 sm:p-6 relative bg-white">
          {/* The top part of the left side */}
            <h2 className="text-md font-semibold flex items-center">
                <LanguageIcon className="text-gray-700 mr-2" />
                GLOBAL IDENTITY
            </h2>

            {/* The bottom part of the left side */}
          <div className="mt-8 text-sm mb-8 ">
            <p className="mb-4 text-gray-700 flex flex-col">
                <span>Citizenship</span>
                <span className="mb-1 text-gray-800">******</span>
                </p>

            <p className="mb-4 text-gray-700  flex flex-col">
                <span className="text-sm font-weight">Target Country</span>
                <span className="text-lg font-bold">{targetCountry}</span>
            </p>
            <p className="mb-4 text-gray-700 flex flex-col">
                <span> Main Goal Moving Abroad</span> 
                <span>******</span>
                </p>
          </div>
        </div>

        {/* right side */}
        <div className="w-full sm:w-1/2 bg-gradient-to-b from-green-200 to-green-100 flex flex-col justify-center items-center py-6 px-4">
          <div className="flex items-center">
            {/* Profile Photo Container */}
            <div className="flex justify-center">
                  {/* Person Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#000000"><path d="M222-255q63-40 124.5-60.5T480-336q72 0 134 20.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.81-195q-57.81 0-97.31-39.69-39.5-39.68-39.5-97.5 0-57.81 39.69-97.31 39.68-39.5 97.5-39.5 57.81 0 97.31 39.69 39.5 39.68 39.5 97.5 0 57.81-39.69 97.31-39.68 39.5-97.5 39.5Zm-.21 370q-83.15 0-156.28-31.5t-127.22-86Q142-252 111-324.84 80-397.68 80-480.5t31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880t155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.74-31.5 155.5Q817-252 763-197.5t-127.13 86Q562.74-80 479.6-80Z"/></svg>
            </div>
          </div>
            {/* here is name-date-gender field */}
            <div className="grid grid-cols-2 gap-x-6 text-md w-full px-2">
            <p className="mb-4 text-gray-700 flex flex-col">
                <span>
                Name:
                </span>
                <span>******</span>
            </p>
            <div className=""></div>
            <p className="mb-4 text-gray-700 flex flex-col">
                <span>Date of birth:</span>
                <span>******</span>
            </p>
            <p className="mb-4 text-gray-700 flex flex-col">
                <span>Gender:</span>
                <span>******</span>
            </p>
            </div>
            {/* Barcode */}
            <div className="w-full flex flex-col justify-center items-center">
                <img 
                src={Barcode} 
                alt="Barcode" 
                className="absolute w-[163px] h-[100px] object-cover bottom-4" 
                />                
                <div className="mt-16 bottom-0">496812909185570</div>
            </div>
        </div>
        </div>

        {/* This is the country selection section side */}
        {/* Country Selection Section */}
        <div className="relative w-64 mx-auto lg:mx-0 lg:ml-6 mt-6 lg:mt-0">
  <select
    title="country-selecting"
    className="appearance-none w-full flex items-center px-4 py-2 border border-gray-100 rounded-lg shadow-sm bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    value={targetCountry}
    onChange={(e) => setTargetCountry(e.target.value)}
  >
    {countries.map((country) => (
      <option key={country.value} value={country.value} className="flex items-center">
        <span className="inline-block w-6 h-6 rounded-full overflow-hidden mr-2">
          {country.flag}
        </span>
        {country.label}
      </option>
    ))}
  </select>

  {/* Google Material Icon Dropdown Arrow */}
  <span className="material-symbols-outlined absolute right-3 top-2/4 transform -translate-y-2/4 pointer-events-none text-gray-600">
    keyboard_arrow_down
  </span>
        </div>
    </div>
  );
}