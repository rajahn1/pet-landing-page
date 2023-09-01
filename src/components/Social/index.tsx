import Image from "next/image"
export const Social = () => (
    <div className="flex justify-center items-start pt-4 bg-[url('/bg-pet-color.jpg')] bg-cover bg-center w-full gap-2">
        <Image className="hover:scale-105 cursor-pointer hover:opacity-90" src={'/social/whatsapp.svg'} alt="whatsapp icon" width={64} height={64}/>
        <Image className="hover:scale-105 cursor-pointer hover:opacity-90" src={'/social/instagram.svg'} alt="whatsapp icon" width={64} height={64}/>
        <Image className="hover:scale-105 cursor-pointer hover:opacity-90" src={'/social/facebook.svg'} alt="whatsapp icon" width={64} height={64}/>
    </div>
)