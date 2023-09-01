import Image from "next/image"

export const NameLogo = () =>(
    <>
        <div className="flex gap-2 flex-col text-center items-center justify-center p-4 mb-4">
          <span className=" text-cyan-800 p-2 text-7xl">
            Bernardo Ribeiro
            <br />
            Banho & Tosa
          </span>
        <div className="flex font-mono text-slate-500 text-md justify-center items-center w-4/6 p-2 mt-2">
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
            <span>Gatos & Cachorros</span>
          </div>
      </div>
    </div>

    </>
)