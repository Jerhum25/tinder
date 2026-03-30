/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

export default function DownloadApp() {
  return (
    <div className="relative  bg-black text-white px-8 md:px-18  ">
      <div className="border-t flex flex-col md:flex-row gap-2 md:gap-10 items-center py-8">
          <h2 className="text-xl font-semibold">Télécharger l'application !</h2>
          <Link href="https://go.tinder.com/web-ios-download?_gl=1*x3c863*_ga*NTA0MzI0NDQ3LjE3NzMzOTU3MDY.*_ga_CDPT3R4PG7*czE3NzQ2MjA1OTgkbzckZzEkdDE3NzQ2MjA3MDEkajYwJGwwJGgw" target="_blank" className="w-45 h-20 relative">
            <Image
              src="https://tinder.com/static/build/f4809ac9ae4d69ef6e153cef6d4c5ef1.webp"
              fill
              unoptimized
              alt="ios link"
              className="object-contain cursor-pointer"
            />
          </Link>
          <Link href="https://go.tinder.com/web-android-download?_gl=1*1hsqirk*_ga*NTA0MzI0NDQ3LjE3NzMzOTU3MDY.*_ga_CDPT3R4PG7*czE3NzQ2MjA1OTgkbzckZzEkdDE3NzQ2MjA3MDEkajYwJGwwJGgw" target="_blank" className="w-45 h-20 relative">
            <Image
              src="https://tinder.com/static/build/b4f325b7f826120775e91accf25cfd87.webp"
              fill
              unoptimized
              alt="android link"
              className="object-cover cursor-pointer"
            />
          </Link>
      </div>
    </div>
  );
}
