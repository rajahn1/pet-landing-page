"use client";
import { HomeCard } from "@/components/HomeCard";
import { Social } from "@/components/Social";
export default function Home() {
  return (
    <div className="flex flex-col bg-[url('/pet-bg-figma.svg')] bg-cover bg-center">
      <HomeCard />
      <Social />
    </div>
  );
}
