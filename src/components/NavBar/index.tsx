type NavBarProps = {
  handleOpenServicesModal: () => void;
};
export const NavBar = ({ handleOpenServicesModal }: NavBarProps) => (
  <nav className="w-full bg-slate-800 flex items-center justify-center">
    <ul className="flex items-center justify-center gap-4 list-none text-white text-2xl font-mono font-bold ">
      <li
        onClick={handleOpenServicesModal}
        className="shadow-lg drop-shadow-lg p-10 cursor-pointer hover:bg-white hover:text-black"
      >
        {" "}
        SERVIÇOS
      </li>
      <li className="shadow-lg drop-shadow-lg p-10 cursor-pointer hover:bg-white hover:text-black">
        {" "}
        AGENDE SEU HORÁRIO
      </li>
      <li className="shadow-lg drop-shadow-lg p-10 cursor-pointer hover:bg-white hover:text-black">
        {" "}
        SOBRE MIM
      </li>
    </ul>
  </nav>
);
