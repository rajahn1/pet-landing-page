// type NavBarProps = {
//   handleOpenServicesModal: () => void;
// };
export const NavBar = () => (
  <nav className="">
    <ul className="flex text-lg gap-2">
      <li className="px-4 py-2 hover:bg-dark-blue rounded">Home</li>
      <li className="px-4 py-2 hover:bg-dark-blue rounded">Agenda</li>
      <li className="px-4 py-2 hover:bg-dark-blue rounded">Contact</li>
      <li className="px-4 py-2 hover:bg-dark-blue rounded">About</li>
    </ul>
  </nav>
);
