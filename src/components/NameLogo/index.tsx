import Image from "next/image";

export const NameLogo = () => (
  <div className="middle-card flex text-center h-full flex-col justify-center items-center gap-12 px-24">
    <div className="flex flex-col items-center text-cyan-800 text-7xl">
      <span className="">Bernardo Ribeiro</span>
      <div className="flex items-center justify-center gap-4">
        <span>Pet Shop</span>
        <Image
          src={"/icon-pet.png"}
          alt="dog and cat face icon"
          width={68}
          height={48}
        />
      </div>
      <a className="text-xs"> CRM: xxxx-xxxx</a>
    </div>
    <div className="flex font-mono text-slate-500 text-md w-4/6 font-bold p-2">
      <div className="w-1/3 flex gap-2 flex-col items-center justify-center">
        <Image
          src={"/icon-petsho.png"}
          alt="pet localization icon with a cat"
          width={64}
          height={64}
        />
        <span>Ijuí, RS</span>
      </div>
      <div className=" w-1/3 flex gap-2 flex-col items-center justify-center">
        <Image
          src={"/escova.png"}
          alt="escova de cabelo"
          width={64}
          height={64}
        />
        <span>Escovação</span>
      </div>
      <div className=" w-1/3 flex gap-2 flex-col items-center justify-center">
        <Image
          src={"/icon-cat.png"}
          alt="egypt black cat"
          width={64}
          height={64}
        />
        <span>Gatos & Cães</span>
      </div>
    </div>
  </div>
);
