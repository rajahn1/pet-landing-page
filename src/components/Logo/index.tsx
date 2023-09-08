"use client";
import Image from "next/image";
import { gsap } from "gsap";

export default function Logo() {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  return (
    <div className="flex flex-col gap-2 justify-center items-center px-16">
      <span
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className="text-4xl text-zinc-800"
      >
        Bernardo Ribeiro
      </span>
    </div>
  );
}
