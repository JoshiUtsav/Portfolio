import HeroSection from "@/components/home/hero-section";

export default function Home() {
  return (
    <div className="w-screen h-screen relative flex flex-col items-start justify-start pt-10 mx-auto text-black dark:bg-[#111111] dark:text-[#E0E0E0] px-4 sm:px-6 lg:px-8 max-w-2xl mb-10">
      <HeroSection />
    </div>
  );
}
