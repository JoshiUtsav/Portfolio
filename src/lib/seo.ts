import type { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";
import { META_DEFAULTS } from "@/config/meta";
import { SITE_CONFIG } from "@/config/site";

interface SeoMetadataProps {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  openGraph?: Partial<OpenGraph>;
  twitter?: Partial<Twitter>;
}

export function getSeoMetadata({
  title,
  description,
  path,
  keywords = [],
  openGraph,
  twitter,
}: SeoMetadataProps): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;

  const metadata: Metadata = {
    title,
    description,
    keywords,
    authors: [{ name: SITE_CONFIG.author.name }],
    openGraph: {
      ...META_DEFAULTS.openGraph,
      title,
      description,
      url,
      ...openGraph,
    },
    twitter: {
      ...META_DEFAULTS.twitter,
      title,
      description,
      ...twitter,
    },
    alternates: {
      canonical: url,
    },
    robots: META_DEFAULTS.robots,
    category: "Technology",
    verification: META_DEFAULTS.verification,
  };

  return metadata;
}
