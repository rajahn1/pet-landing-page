import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <Image src={"/logo.png"} width={50} height={50} alt="cats paw logo" />
      <span className="text-lg">Ribeiro</span>
    </div>
  );
}
