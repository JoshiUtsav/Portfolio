"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components/icons.svgs";

const Banner = ({ text }: { text: string }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className=" w-full bg-black text-white text-center flex items-center justify-center z-50"
      >
        <span className="flex-grow">{text}</span>
        <button
          onClick={handleClose}
          className="text-white bg-transparent border-none p-2 ml-4"
          aria-label="Close"
        >
          <Icon name="x" />
        </button>
      </motion.div>
    )
  );
};

export default Banner;
