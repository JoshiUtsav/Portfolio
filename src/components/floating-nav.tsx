"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  Icon
} from "@/components/icons.svgs";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Projects",
      icon: (
        <Icon name="briefcase" className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Content",
      icon: (
        <Icon name="tournament" className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/content",
    },
    {
      title: "Music",
      icon: (
        <Icon name="music" className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/music",
    },
    {
      title: "Twitter",
      icon: (
        <Icon name="x" className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://twitter.com/joshi__utsav/",
    },
    {
      title: "Github",
      icon: (
        <Icon name="github" className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/joshiUtsav/",
    },
    {
      title: "Me",
      icon: (
        <Icon name="user-circle" className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <FloatingDock items={links} />
    </div>
  );
}
