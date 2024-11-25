import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const TestimoniosCard = ({ name, description }) => {
  return (
    <div className="flex flex-col w-full lg:w-2/6 border-2 border-DarkColor p-4 rounded-lg gap-3 cursor-pointer hover:bg-PrimaryColor transition duration-300 ease-in-out dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="flex items-center gap-2">
        <ImQuotesLeft size={25} className="text-ExtraDarkColor dark:text-white" />
        <h1 className="text-xl font-semibold text-ExtraDarkColor pt-2 dark:text-white">
          {name}
        </h1>
      </div>
      <p className="text-sm text-GrayColor dark:text-gray-300">{description}</p>
    </div>
  );
};

export default TestimoniosCard;
