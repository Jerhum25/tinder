import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function NotFound() {
  return (
    <div className="text-white bg-black h-screen w-screen flex justify-center items-center flex-col gap-5">
      <h1 className="text-[5vw] md:text-[2vw]">
        La page que vous cherchez n'existe pas
      </h1>
      <Link href="/" className="text-[4vw] md:text-[2vw] text-[#ff2358]">Retour à l'accueil</Link>
    </div>
  );
}
