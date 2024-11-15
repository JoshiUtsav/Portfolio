"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons.svgs";

const LinkData = [
  {
    name: "Email(General)",
    url: "mailto:utsavjohshi602@gmail.com",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/joshi___utsav/",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/joshi-utsav/",
  },
];

const SocialLink = () => {
  return (
    <div className="relative flex flex-col items-center justify-center pt-10 h-full w-full mx-auto text-black dark:bg-[#111111] dark:text-white px-4 sm:px-6 lg:px-8 max-w-2xl">
      <motion.div
        className="flex flex-col items-center max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Image
          src="https://avatars.githubusercontent.com/u/98454866?v=4"
          alt="logo"
          width={100}
          height={100}
          className="rounded-full border mb-5"
          quality={100}
          loading="lazy"
        />
        <motion.div
          className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
        >
          Utsav Joshi
        </motion.div>
        <motion.span
          className="text-lg text-center text-black dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
        >
          Implements my thought on code. Find me elsewhere @joshiUtsav
        </motion.span>

        <div className="mb-28 w-full">
          {LinkData.map((link, index) => (
            <Link href={link.url} key={index} className="hover:underline">
              <motion.div
                className="flex items-center justify-between bg-gray-200 dark:bg-[#222222] rounded-md text-black dark:text-white m-4 p-5 hover:bg-gray-300 dark:hover:bg-[#333333] transition-colors duration-200"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: 0.3 + index * 0.1,
                }}
              >
                {link.name}
                <Icon name="external-link" />
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SocialLink;
