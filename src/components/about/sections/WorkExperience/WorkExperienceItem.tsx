import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";

export interface WorkExperienceItemProps {
  id: number;
  title: string;
  company: string;
  logo: string | StaticImageData;
  period: string;
}

export const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
  title,
  company,
  logo,
  period,
}) => {
  return (
    <li className="flex items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
      <div className="relative w-12 h-12 mr-4">
        <Image
          src={logo}
          alt={`${company} Logo`}
          layout="fill"
          objectFit="contain"
          className="rounded-full"
          onError={(e) => {
            e.currentTarget.src = "/placeholder-logo.svg";
          }}
        />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{company}</p>
      </div>
      <p
        className={cn(
          "text-sm text-gray-400 dark:text-gray-500",
          period.toLowerCase() === "present" &&
            "text-green-500 dark:text-green-400"
        )}
      >
        {period}
      </p>
    </li>
  );
};
