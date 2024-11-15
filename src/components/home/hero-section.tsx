"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/icons.svgs";
import fetchGithubData from "@/components/githubProfile";
import { GithubData } from "@/types/github";
import HeroSectionLoader from "@/components/home/hero-section-loader";

const HeroSection: React.FC = () => {
  const [githubData, setGithubData] = useState<GithubData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchGithubData({ username: "joshiutsav" });
        setGithubData(data);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <HeroSectionLoader />;
  }

  return (
    <div className="space-y-5">
      <h1 className="text-2xl md:text-3xl font-bold">{githubData?.name || "GitHub User"}</h1>

      <div className="flex flex-wrap items-center space-x-2 text-sm md:text-base">
        {["Diligent", "Developer", "Dynamism"].map((trait, index) => (
          <React.Fragment key={trait}>
            {index > 0 && <span aria-hidden="true">•</span>}
            <span>{trait}</span>
          </React.Fragment>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-5 lg:space-y-0 lg:space-x-7">
        {githubData?.avatar ? (
          <Image
            src={githubData.avatar}
            alt="Avatar"
            width={100}
            height={100}
            className="rounded-full"
            quality={100}
            priority
          />
        ) : (
          <div className="w-[100px] h-[100px] bg-gray-200 rounded-full flex items-center justify-center text-gray-500 dark:bg-gray-700 dark:text-gray-400">
            No Image
          </div>
        )}
        <div className="space-y-3">
          <StatItem
            icon={<Icon name="github" />}
            text={`${githubData?.repos || 0} repositories on GitHub`}
          />
          <StatItem icon={<Icon name="graph" />} text="500 views on blogs" />
        </div>
      </div>

      <blockquote className="text-lg italic border-l-4 pl-4 border-gray-300 dark:border-gray-700 p-3">
        Coding since birth, now, till death.
      </blockquote>
      <Link
        href="/links"
        className="inline-flex items-center gap-2 mt-5 text-base md:text-lg transition-colors duration-300 hover:text-blue-500"
      >
        <Icon name="external-link" />
        <span>More ways to connect</span>
      </Link>
    </div>
  );
};

const StatItem: React.FC<{ icon: React.ReactNode; text: string }> = ({
  icon,
  text,
}) => (
  <div className="flex items-center space-x-4 text-sm md:text-base">
    {icon}
    <span>{text}</span>
  </div>
);

export default HeroSection;