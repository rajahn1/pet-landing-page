import Logo from "../Logo";
import { NavBar } from "../NavBar";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-12 px-16">
      <Logo />
      <NavBar />
    </header>
  );
}
