"use client";
import { Typewriter } from "react-simple-typewriter";

const TypeWriterComponent = () => {
  return (
    <div className="text-xl md:text-2xl my-4 font-bold px-5 p-3 flex flex-wrap text-color w-auto">
      <span className="min-w-[223px]">
        I Transform <span className="text-yellow-700">Caffeine</span>
      </span>
      <img
        src="/coffee-cup.png"
        className="mx-3 w-[30px] h-[30px]"
        alt="Coffee cup"
      />
      into
      <span className="text-green-500 ml-3">
        <Typewriter typeSpeed={60} words={[`<Code />`]} loop={1} />
      </span>
    </div>
  );
};

export default TypeWriterComponent;
