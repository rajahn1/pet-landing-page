import { NameLogo } from "@/components/NameLogo";
import { NavBar } from "@/components/NavBar";
import { Social } from "@/components/Social";
import Image from "next/image";
export default function Home() {
  return (
    <div className="w-screen bg-blue-white h-screen flex flex-col items-center">
      <div className="flex w-full justify-between px-12 pt-6 items-center shadow-xl mt-4">
      <Image
          src={"/shower-dog.jpg"}
          width={400}
          height={200}
          alt="dog in a bath"
          className="rounded-3xl"
        />
      <NameLogo/>
      <Image
      src={"/pet-doctor-hero.jpg"}
      width={400}
      height={200}
      alt="pet doctor with a dog on a table being healed"
      className="rounded-3xl"
     />
      </div>
      <NavBar />
      <Social/>
    </div>
  );
}
