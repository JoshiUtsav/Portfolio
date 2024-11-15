import type { Metadata } from "next";
import { JsonLd } from "react-schemaorg";
import { Person, WithContext } from "schema-dts";
import { SITE_CONFIG } from "@/config/site";
import { getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata({
  title: "Utsav Joshi | Developer",
  description:
    "Learn about Utsav Joshi, a developer passionate about creating innovative web solutions.",
  path: "/about",
  keywords: ["backend developer", "web development", "portfolio"],
  openGraph: {
    images: [
      {
        url: `${SITE_CONFIG.url}/images/utsav-joshi-profile.jpg`,
        width: 1200,
        height: 630,
        alt: "Utsav Joshi - Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE_CONFIG.url}/images/utsav-joshi-profile.jpg`],
  },
});

interface AboutLayoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: Readonly<AboutLayoutProps>) {
  const jsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.author.name,
    url: SITE_CONFIG.url,
    jobTitle: SITE_CONFIG.author.jobTitle,
    sameAs: SITE_CONFIG.author.socialProfiles,
    description:
      "A developer with expertise in web development and a passion for creating innovative solutions.",
    image: `${SITE_CONFIG.url}/images/utsav-joshi-profile.jpg`,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Your University Name",
    },
    knowsAbout: ["Web Development", "JavaScript", "React", "Next.js", "SEO"],
  };

  return (
    <>
      <JsonLd<Person> item={jsonLd} />
      <main id="main-content">
        <h1 className="sr-only">Utsav Joshi</h1>
        {children}
      </main>
    </>
  );
}
