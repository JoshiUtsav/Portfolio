"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SocialLinkItem } from "@/components/links/SocialLinkItem";
import { useAnimationConfig } from "@/hooks/useAnimationsconfig";
import { SOCIAL_LINKS } from "@/config/socialLinks";

export const SocialLinks: React.FC = () => {
  const { initial, animate, transition } = useAnimationConfig();

  return (
    <section className="relative flex flex-col items-center justify-center pt-10 h-full w-full mx-auto text-black dark:bg-[#111111] dark:text-white px-4 sm:px-6 lg:px-8 max-w-2xl">
      <motion.div
        className="flex flex-col items-center max-w-md"
        initial={initial}
        animate={animate}
        transition={transition}
      >
        <Image
          src="https://avatars.githubusercontent.com/u/98454866?v=4"
          alt="Utsav Joshi's profile picture"
          width={100}
          height={100}
          className="rounded-full border mb-5"
          quality={100}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/placeholder-avatar.png";
          }}
        />
        <motion.h1
          className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white"
          initial={initial}
          animate={animate}
          transition={{ ...transition, delay: 0.1 }}
        >
          Utsav Joshi
        </motion.h1>
        <motion.p
          className="text-lg text-center text-black dark:text-white mb-4"
          initial={initial}
          animate={animate}
          transition={{ ...transition, delay: 0.2 }}
        >
          Implements my thoughts in code. Find me elsewhere @joshiUtsav
        </motion.p>

        <nav className="mb-28 w-full" aria-label="Social links">
          <ul>
            {SOCIAL_LINKS.map((link, index) => (
              <SocialLinkItem
                key={link.name}
                {...link}
                animationDelay={0.3 + index * 0.1}
              />
            ))}
          </ul>
        </nav>
      </motion.div>
    </section>
  );
};
