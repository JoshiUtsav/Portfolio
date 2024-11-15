"use client";

import React from "react";
import ImageGridSection from "@/components/image-grid";
import ConnectSection from "@/components/about/connect";
import { motion } from "framer-motion";
import Link from "next/link";
import { WorkExperience } from "@/components/about/work";

const AboutMe = () => {
  return (
    <div className="relative flex flex-col items-start justify-start mb-24 pt-14 h-full w-full mx-auto text-black dark:bg-[#111111] dark:text-[#E0E0E0] px-4 sm:px-6 lg:px-8 max-w-2xl space-y-10">
      {/* Image Grid Section */}
      <ImageGridSection />

      {/* About Section */}
      <motion.section
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
      >
        <h2 className="text-4xl font-extrabold mb-6 text-left text-[#2A2A2A] dark:text-[#FFFFFF]">
          Hey, I&apos;m Utsav!
        </h2>
        <p className="text-gray-600 text-lg mb-6 text-left leading-relaxed">
          <span className="font-semibold text-[#2A2A2A] dark:text-[#FFFFFF]">
            IPA /ʊt̪.səʋ/ •
          </span>
          <span className="mx-2 text-[#888888]">ಉತ್ಸವ •</span>
          <span className="mx-2 text-[#888888]">উৎসব •</span>
          <span className="mx-2 text-[#888888]">ウツァフ</span>
        </p>
        <p className="text-lg mb-4 text-left leading-relaxed">
          I&apos;m a{" "}
          <span className="font-semibold text-[#2A2A2A] dark:text-[#FFFFFF]">
            full-stack developer
          </span>{" "}
          specializing in backend—the brain of applications. I contribute to
          open-source, build scalable solutions, and am open to freelance
          opportunities.
        </p>

        <p className="text-lg mb-4 text-left leading-relaxed">
          I share my thoughts on technology, fiction, and life in my{" "}
          <Link
            href="/content"
            className="font-semibold underline text-blue-600 hover:text-blue-400"
          >
            Memoirs
          </Link>
          .
        </p>
        <p className="text-lg text-left leading-relaxed">
          When I&apos;m not coding, you&#39;ll find me immersed in music, a good
          book, or exploring new places. <span className="text-sm">🙂</span>
        </p>
      </motion.section>

      {/* Work Section */}
      <WorkExperience />

      {/* Connect Section */}
      <ConnectSection />
    </div>
  );
};

export default AboutMe;
