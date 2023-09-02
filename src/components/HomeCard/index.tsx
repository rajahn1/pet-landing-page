import Image from "next/image";
import { NameLogo } from "../NameLogo";
export const HomeCard = () => (
  <div className="flex justify-around items-center pt-6 px-12 mt-4">
    <Image
      className="image-doctor border-slate-50 shadow-sm drop-shadow-sm rounded-2xl border"
      src={"/pet-doctor.png"}
      width={350}
      height={200}
      alt="a young white pet doctor with mustache and a tattoo on the neck"
    />
    <NameLogo />
    <Image
      className="image-pets border-slate-50 shadow-sm drop-shadow-sm rounded-2xl border"
      src={"/two-dogs-bath.jpg"}
      width={350}
      height={200}
      alt="picture of three animals, dog, cat and hamster"
    />
  </div>
);
