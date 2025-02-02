import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/hero";
import { SearchSection } from "@/components/search/search-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1A1A1A]">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <Header />
        <Hero />
        <SearchSection />
      </div>
    </div>
  );
}
