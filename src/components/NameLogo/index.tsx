import Image from "next/image"

export const NameLogo = () =>(
        <div className="flex text-center gap-16 h-full flex-col justify-center items-center px-32 border-slate-400 border-x">
          <span className=" text-cyan-800 p-2 text-7xl">
            Bernardo Ribeiro
            <br />
            Banho & Tosa
          </span>
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
)