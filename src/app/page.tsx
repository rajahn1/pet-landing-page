"use client";
import { NavBar } from "@/components/NavBar";
import { Social } from "@/components/Social";
import { HomeCard } from "@/components/HomeCard";
import ModalServices from "@/components/ModalServices";
import { useState } from "react";
export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpenServicesModal = () => setOpen(true);
  const handleCloseServicesModal = () => setOpen(false);
  return (
    <div className="w-screen h-screen flex flex-col">
      <HomeCard />
      <NavBar handleOpenServicesModal={handleOpenServicesModal} />
      <Social />
      <ModalServices
        open={open}
        handleCloseServicesModal={handleCloseServicesModal}
      />
    </div>
  );
}
