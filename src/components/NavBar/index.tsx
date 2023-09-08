// type NavBarProps = {
//   handleOpenServicesModal: () => void;
// };
"use client";
import { gsap } from "gsap";
const onEnter = ({ currentTarget }) => {
  gsap.to(currentTarget, {
    scale: 1.2,
    backgroundColor: "white",
  });
};

const onLeave = ({ currentTarget }) => {
  gsap.to(currentTarget, {
    scale: 1.0,
    backgroundColor: "#A9DEF9",
  });
};
export const NavBar = () => (
  <nav className=" h-full bg-dark-blue px-24 py-10 rounded-bl-full">
    <ul className="flex text-lg gap-4 px-16">
      <li
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className="px-4 py-2 hover:bg-dark-blue rounded-full"
      >
        Home
      </li>
      <li
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className="px-4 py-2 hover:bg-dark-blue rounded-full"
      >
        Agenda
      </li>
      <li
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className="px-4 py-2 hover:bg-dark-blue rounded-full"
      >
        Contact
      </li>
      <li
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className="px-4 py-2 hover:bg-dark-blue rounded-full"
      >
        About
      </li>
    </ul>
  </nav>
);
