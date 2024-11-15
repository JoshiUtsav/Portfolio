import React, { memo } from "react";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type IconName = 
  | "github"
  | "graph"
  | "external-link"
  | "x"
  | "briefcase"
  | "tournament"
  | "user-circle"
  | "music"
  | "home"
  | "brand-twitch"
  | "brand-instagram"
  | "mail"
  | "brand-linkedin"
  | "sun"
  | "moon"
  | "layout-navbar-collapse"
  | "check"
  | "chevron-right"
  | "circle";

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
  title?: string;
}

const iconPaths: Record<IconName, React.ReactNode> = {
  github: (
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.2 4.2 0 00-.1 3.2 4.6 4.6 0 00-1.3 3.2c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2v3.5" />
  ),
  graph: (
    <>
      <path d="M4 19h16" />
      <path d="M4 15l4-6 4 2 4-5 4 4" />
    </>
  ),
  "external-link": (
    <>
      <path d="M11 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-5" />
      <path d="M10 14l10-10" />
      <path d="M15 4h5v5" />
    </>
  ),
  x: (
    <>
      <path d="M4 4l11.733 16h4.267L8.267 4z" />
      <path d="M4 20l6.768-6.768m2.46-2.46L20 4" />
    </>
  ),
  briefcase: (
    <>
      <path d="M3 9a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
    </>
  ),
  tournament: (
    <>
      <path d="M5 4h4a1 1 0 011 1v4a1 1 0 01-1 1H5V4z" />
      <path d="M5 14h4a1 1 0 011 1v4a1 1 0 01-1 1H5v-6z" />
      <path d="M10 7h4a1 1 0 011 1v8a1 1 0 01-1 1h-4V7z" />
      <path d="M15 12h4a1 1 0 011 1v6a1 1 0 01-1 1h-4v-8z" />
      <path d="M5 5v3M5 15v3M10 8v6M15 13v5" />
      <path d="M5 9h5M5 19h5M10 14h5M15 19h5" />
    </>
  ),
  "user-circle": (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="10" r="3" />
      <path d="M6.168 18.849A4 4 0 0110 16h4a4 4 0 013.834 2.855" />
    </>
  ),
  music: (
    <>
      <circle cx="6" cy="17" r="3" />
      <circle cx="16" cy="17" r="3" />
      <path d="M9 17V4h10v13" />
      <path d="M9 8h10" />
    </>
  ),
  home: (
    <path d="M5 12H3l9-9 9 9h-2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
  ),
  "brand-twitch": (
    <path d="M4 5v11a1 1 0 001 1h2v4l4-4h5.584c.266 0 .52-.105.707-.293l2.415-2.414c.187-.188.293-.442.293-.708V5a1 1 0 00-1-1h-14a1 1 0 00-1 1zm12 3v4M9 8v4" />
  ),
  "brand-instagram": (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3" />
      <path d="M16.5 7.5v.001" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  "brand-linkedin": (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 11v5M8 8v.01M12 16v-5" />
      <path d="M16 16v-3a2 2 0 00-4 0" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7" />
    </>
  ),
  moon: (
    <path d="M12 3h.393a7.5 7.5 0 007.92 12.446A9 9 0 1112 2.992z" />
  ),
  "layout-navbar-collapse": (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M4 9h16M10 16L6 12l4-4M14 16l4-4-4-4" />
    </>
  ),
  check: (
    <polyline points="20 6 9 17 4 12" />
  ),
  "chevron-right": (
    <polyline points="9 18 15 12 9 6" />
  ),
  circle: (
    <circle cx="12" cy="12" r="10" />
  ),
};

export const Icon: React.FC<IconProps> = memo(({ name, className, size = 24, title }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("inline-block", className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? "false" : "true"}
      role={title ? "img" : "presentation"}
    >
      {title && <title>{title}</title>}
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      {iconPaths[name]}
    </svg>
  );
});

Icon.displayName = "Icon";

export default Icon;