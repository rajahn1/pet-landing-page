import Image from "next/image";
import { NameLogo } from "../NameLogo";
export const HomeCard = () => (
  <div className="flex justify-between items-center">
    <NameLogo />
    <div className="bg-dark-blue">
      <Image
        src={"/cute-dog crop.png"}
        width={350}
        height={50}
        alt="a cute black and white dog "
      />
    </div>
  </div>
);
