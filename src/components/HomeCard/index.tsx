import Image from "next/image";
import { NameLogo } from "../NameLogo";
export const HomeCard = () => (
  <div className="flex justify-between px-24 py-12">
    <NameLogo />
    <Image
      src={"/cute-dog-with-blue-bg.svg"}
      width={450}
      height={600}
      alt="a cute black and white dog "
      className="border-red-500"
    />
  </div>
);
