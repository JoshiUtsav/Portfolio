import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@/components/icons.svgs";
import { useAnimationConfig } from "@/hooks/useAnimationsconfig";

interface SocialLinkItemProps {
  name: string;
  url: string;
  animationDelay: number;
}

export const SocialLinkItem: React.FC<SocialLinkItemProps> = ({
  name,
  url,
  animationDelay,
}) => {
  const { initial, animate, transition } = useAnimationConfig();

  return (
    <li>
      <Link href={url} className="hover:underline">
        <motion.div
          className="flex items-center justify-between bg-gray-200 dark:bg-[#222222] rounded-md text-black dark:text-white m-4 p-5 hover:bg-gray-300 dark:hover:bg-[#333333] transition-colors duration-200"
          initial={initial}
          animate={animate}
          transition={{ ...transition, delay: animationDelay }}
        >
          {name}
          <Icon name="external-link" aria-hidden="true" />
        </motion.div>
      </Link>
    </li>
  );
};
