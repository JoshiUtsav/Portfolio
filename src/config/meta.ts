import { Metadata } from "next";
import { SITE_CONFIG } from "./site";

export const META_DEFAULTS: Partial<Metadata> = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@joshi__utsav",
    creator: "@joshi__utsav",
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_ID",
    yandex: "YOUR_YANDEX_SITE_VERIFICATION_ID",
  },
};
