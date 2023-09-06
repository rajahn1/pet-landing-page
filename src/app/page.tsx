"use client";
import Header from "@/components/Header";
import { HomeCard } from "@/components/HomeCard";
import { Social } from "@/components/Social";
export default function Home() {
  return (
    <div className="flex flex-col px-24">
      <HomeCard />
      <Social />
    </div>
  );
}
