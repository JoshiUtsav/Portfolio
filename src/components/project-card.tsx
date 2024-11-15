import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  year: number;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  year,
  description,
  imageUrl,
  projectUrl,
}) => {
  return (
    <Card className="flex flex-col gap-4 py-6 transition-opacity first:pt-0 last:pb-0 md:flex-row md:gap-6">
      <Link
        href={projectUrl}
        className="aspect-video w-full select-none overflow-clip rounded-lg border border-secondary bg-tertiary md:w-2/5"
      >
        <div className="relative w-full h-full overflow-hidden group">
          <div
            className="transition-opacity opacity-0 absolute inset-0 z-50 pointer-events-none group-hover:opacity-100"
            style={{
              width: "600px",
              height: "600px",
              background:
                "radial-gradient(rgb(255, 255, 255) 0%, rgba(188, 255, 219, 0) 60%)",
            }}
          />
          <Image
            alt={title}
            src={imageUrl}
            layout="fill"
            objectFit="cover"
            className="transition-transform group-hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="w-full space-y-2 md:w-3/5 p-0">
        <div>
          <Link
            href={projectUrl}
            className="font-medium text-primary hover:underline"
          >
            {title}
          </Link>
          <time className="text-secondary"> · {year}</time>
        </div>
        <p className="line-clamp-3 text-tertiary">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
