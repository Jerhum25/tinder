/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function FooterLinks() {
  return (
    <div className="bg-black text-white pb-10 sm:p-10 px-4 flex flex-wrap gap-5">
      <div className="w-full sm:max-w-52 pl-8">
        <h3 className="text-xl font-semibold mb-4 ">Mentions légales</h3>
        <ul className="flex flex-col gap-2">
          <Link href="a">Confidentialité</Link>
          <Link href="a">
            Politique de confidentialité relative aux données de santé des
            consommateurs/rice
          </Link>
          <Link href="a">Conditions d'utilisation</Link>
          <Link href="a">Politique relative aux cookies</Link>
          <Link href="a">Propriété intelelctuelle</Link>
          <Link href="a">Déclaration d'accessibilité</Link>
        </ul>
      </div>
      <div className="w-full sm:max-w-52 pl-8">
        <h3 className="text-xl font-semibold mb-4 ">Emploi</h3>
        <ul className="flex flex-col gap-2">
          <Link href="a">Espace emploi</Link>
          <Link href="a">Blog technique</Link>
        </ul>
      </div>
      <div className="w-full sm:max-w-52 pl-8">
        <h3 className="text-xl font-semibold mb-4 ">Réseaux sociaux</h3>
        <ul className="flex gap-2">
          <Link href="https://www.instagram.com/tinderfr" target="_blank" className="text-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              />
            </svg>
          </Link>
          <Link href="https://tiktok.com/@tinder.france" target="_blank" className="text-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
              />
            </svg>
          </Link>
          <Link href="https://www.youtube.com/@tinder_france" target="_blank" className="text-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M22.54 6.42a2.77 2.77 0 0 0-1.945-1.957C18.88 4 12 4 12 4s-6.88 0-8.595.463A2.77 2.77 0 0 0 1.46 6.42C1 8.148 1 11.75 1 11.75s0 3.602.46 5.33a2.77 2.77 0 0 0 1.945 1.958C5.121 19.5 12 19.5 12 19.5s6.88 0 8.595-.462a2.77 2.77 0 0 0 1.945-1.958c.46-1.726.46-5.33.46-5.33s0-3.602-.46-5.33M9.75 8.479v6.542l5.75-3.271z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link href="https://x.com/tinderfrance" target="_blank" className="text-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
              />
            </svg>
          </Link>
          <Link href="https://www.facebook.com/tinderfr" target="_blank" className="text-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
              />
            </svg>
          </Link>
        </ul>
      </div>
      <div className="w-full sm:max-w-52 pl-8">
        <Link href="a" className="text-xl font-semibold">FAQ</Link>
        <ul className="flex flex-col gap-2 mt-4">
          <Link href="a">Mes destinations</Link>
          <Link href="a">Espace presse</Link>
          <Link href="a">Contact</Link>
          <Link href="a">Code promotionnel</Link>
        </ul>
      </div>
    </div>
  );
}
