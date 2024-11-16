import Image from "next/image";
import {Sora} from "next/font/google"

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
})

export default function MinimalCard() {
  return (
    <div className={ `${sora.className} w-[336] rounded-xl  pb-5 bg-[#FAFAF9] shadow-lg  `}>
      <div className=" p-4 rounded-sm pb-0">
        <div className="flex w-full relative h-[152px] mb-4  ">
            <Image 
            src="/789247.webp" 
            alt={"imagen de card"} 
            width={700}
            height={700}
            className="object-none rounded-md"
            />
        </div>
        <div>
          <div className="mb-4 bg-[#E5EAF0] rounded-2xl flex max-w-min justify-center p-4 pt-1 pb-1">
            <p className=" text-[10px] tracking-wide  text-[#7C19EE] font-bold ">Design</p>
          </div>
          <h2 className="mb-[6px] text-lg -tracking-tight font-bold">Embracing Minimalism</h2>
          <p className="mb-[20px] text-[13px] text-[#20293A] font-light leading-6">
            From minimalist sculptures to minimalist paintings, this blog will
            inspire you to appreciate the beauty that lies in simplicity.
          </p>
        </div>
      </div>
      <div className=" pt-5 pl-4 border-t-2 border-[#F2EAFD] ">
        <p className="text-[12px]" >Annie Spratt</p>
      </div>
    </div>
  );
}
