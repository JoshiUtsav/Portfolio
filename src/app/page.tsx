"use client";

import { Suspense } from "react";
import HeroSection from "@/components/home/hero-section";
import { ProjectCard } from "@/components/project-card";
import { HeroSkeleton, ProjectCardSkeleton } from "@/components/skeleton/one";
import { GithubData } from "@/types/github";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-background to-background/80 text-foreground antialiased">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
        <Suspense fallback={<HeroSkeleton />}>
          <HeroSection />
        </Suspense>
      </div>
    </main>
  );
}

function FeaturedProjects({ githubData }: { githubData: GithubData | null }) {
  if (!githubData) return null;

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
      {githubData.pinned.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {githubData.pinned.map((repo, index) => (
            <Suspense fallback={<ProjectCardSkeleton />} key={index}>
              <ProjectCard
                title={repo.url.split("/").pop() || ""}
                year={new Date().getFullYear()}
                description="Description goes here."
                imageUrl={githubData.avatar || ""}
                projectUrl={`https://github.com${repo.url}`}
              />
            </Suspense>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No pinned repositories found.</p>
      )}
    </section>
  );
}
