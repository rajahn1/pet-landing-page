import { NameLogo } from "@/components/NameLogo";
import { NavBar } from "@/components/NavBar";
import { Social } from "@/components/Social";
import Image from "next/image";
export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex w-full justify-center items-center pt-6 mt-4">
      <Image
      className=""
          src={"/pet-doctor.png"}
          width={350}
          height={200}
          alt="a young white pet doctor with mustache and a tattoo on the neck"
        />
      <NameLogo/>
      <Image
      src={"/three-animals-render.png"}
      width={350}
      height={0}
      alt="a dog in a bath"
      className=""
     />
      </div>
      <NavBar />
      <Social/>
    </div>
  );
}
