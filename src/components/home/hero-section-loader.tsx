import React from "react";

const HeroSectionLoader: React.FC = () => {
  return (
    <div className="space-y-5 animate-pulse">
      <div className="w-2/4 h-8 bg-gray-200 rounded-md dark:bg-gray-700" />

      <div className="flex flex-wrap items-center space-x-2">
        {[1, 2, 3].map((index) => (
          <React.Fragment key={index}>
            {index > 1 && (
              <span className="text-gray-300 dark:text-gray-600">•</span>
            )}
            <div className="w-20 h-4 bg-gray-200 rounded-md dark:bg-gray-700" />
          </React.Fragment>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-5 lg:space-y-0 lg:space-x-7">
        <div className="w-[100px] h-[100px] bg-gray-200 rounded-full dark:bg-gray-700" />
        <div className="space-y-3 flex-grow">
          <div className="flex items-center space-x-4">
            <div className="w-6 h-6 bg-gray-200 rounded-full dark:bg-gray-700" />
            <div className="w-1/2 h-4 bg-gray-200 rounded-md dark:bg-gray-700" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-6 h-6 bg-gray-200 rounded-full dark:bg-gray-700" />
            <div className="w-1/2 h-4 bg-gray-200 rounded-md dark:bg-gray-700" />
          </div>
        </div>
      </div>

      <div className="w-full h-16 bg-gray-200 rounded-md dark:bg-gray-700" />

      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-gray-200 rounded-full dark:bg-gray-700" />
        <div className="w-1/3 h-4 bg-gray-200 rounded-md dark:bg-gray-700" />
      </div>
    </div>
  );
};

export default HeroSectionLoader;
