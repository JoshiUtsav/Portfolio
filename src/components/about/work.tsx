"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  WorkExperienceItem,
  WorkExperienceItemProps,
} from "@/components/about/sections/WorkExperience/WorkExperienceItem";
import { ANIMATION_DELAY, ANIMATION_DURATION } from "@/config/animation";
import { WORK_EXPERIENCES } from "@/config/workExp";

export const WorkExperience: React.FC = () => {
  return (
    <motion.section
      className="mb-12 w-full text-black dark:text-[#E0E0E0]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: ANIMATION_DURATION,
        ease: "easeInOut",
        delay: ANIMATION_DELAY,
      }}
    >
      <h2 className="text-xl font-semibold mb-4 text-left">Work Experience</h2>
      <p className="mb-6 text-left">
        I started my career freelancing for clients, building web apps and have
        since gained experience in various roles.
      </p>
      <ul className="flex flex-col gap-4">
        {WORK_EXPERIENCES.map((work: WorkExperienceItemProps) => (
          <WorkExperienceItem key={work.id} {...work} />
        ))}
      </ul>
    </motion.section>
  );
};
