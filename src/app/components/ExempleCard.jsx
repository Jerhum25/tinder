import Image from "next/image";
import Link from "next/link";

export default function ExempleCard({title, text, link, image}) {
  return (
    <div className="z-20 sm:w-65 h-65 flex w-full">
      <div className="w-1/2 p-3 border-t flex flex-col gap-5">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text-xs line-clamp-6 flex-1">
          {text}
        </p>
        <p className="font-semibold text-sm flex items-center hover:text-[#ff2358] cursor-pointer">{link} <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#ff2358" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z" /></svg></p>
      </div>
      <div className="h-65 relative w-1/2"><Image src={image} alt="img" fill unoptimized className="object-cover object-center"/></div>
    </div>
  );
}
