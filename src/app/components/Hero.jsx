'use client'
import { useEffect, useState } from "react";
import Header from "./Header";

/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
   useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 Ajuste la vitesse ici
  const opacity = Math.max(1 - scrollY / 400, 0);
  return (
    <div className="flex flex-col top-0 w-full h-screen relative">
      <Header />
      <div
        className="flex flex-col items-center m-auto gap-5 transition-all duration-75"
        style={{
          opacity: opacity,
        }}
      >
        <h2 className="text-white text-[8vw] font-semibold">Swipe Right™</h2>
        <button className="text-white w-fit px-6 py-2 bg-linear-to-tr from-[#fd267a] to-[#ff6036] rounded-full font-semibold cursor-pointer">
          Créer un compte
        </button>
      </div>
      <p className="text-white text-xs self-end p-1">
        Les photos mettent en scène des mannequins, et sont exclusivement
        utilisées à des fins d'illustration
      </p>
    </div>
  );
}
