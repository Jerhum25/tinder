/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Header() {
  function visibleMenu(e) {
    e.target.style.display("none");
  }

  return (
    <div className=" sticky flex top-0 justify-between items-center z-10 h-22 bg-linear-to-t from-transparent to-black">
      <div className="flex gap-5 items-center ml-7">
        <div className="flex items-center">
          <h1 className="text-white flex  items-center font-bold text-4xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 14 14"
            >
              <path
                fill="white"
                d="M8.177.476a.5.5 0 0 0-.8.4c0 1.645-.396 3.797-2.406 4.657c-.272-.395-.532-1.063-.532-2.032a.5.5 0 0 0-.723-.447c-1.046.523-2.464 2.01-2.464 4.822c0 1.886.712 3.337 1.808 4.311c1.088.967 2.523 1.44 3.942 1.44s2.854-.473 3.942-1.44c1.096-.974 1.808-2.425 1.808-4.31c0-3.771-2.831-6.093-4.575-7.4"
              />
            </svg>
            <span className="text-5xl">tinder</span>
          </h1>
        </div>
        <nav className="text-white lg:flex gap-3 font-semibold hidden">
          <div
            className="underline underline-offset-5 text-xl 
             hover:text-black hover:bg-white hover:rounded-full hover:no-underline px-2 py-1 relative group"
          >
            Produits
            <ul className="absolute hidden bg-white text-black w-max p-4 mt-1 -ml-2 rounded-xl group-hover:flex flex-col gap-3 text-lg">
              <li>
                <Link href="a" className="">
                  Fonctions premium
                </Link>
              </li>
              <hr />
              <li>
                <Link href="a" className="flex gap-3 items-end">
                  Niveaux d'abonnement{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray="12"
                      strokeDashoffset="12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8l-7 7M12 8l7 7"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.3s"
                        values="12;0"
                      />
                    </path>
                  </svg>
                </Link>
              </li>
              <li className="ml-8 mr-6">
                <Link href="a" className="font-normal ">
                  Tinder Plus®
                </Link>
                <hr />
              </li>
              <li className="ml-8 mr-6">
                <Link href="a" className=" font-normal  block w-full">
                  Tinder Gold™
                </Link>
                <hr />
              </li>
              <li className="ml-8 mr-6">
                <Link href="a" className="font-normal ">
                  Tinder Platinium™
                </Link>
              </li>
            </ul>
          </div>
          <Link
            href="a"
            className="underline underline-offset-5 text-xl hover:text-black hover:bg-white hover:rounded-full hover:no-underline px-2 py-1"
          >
            En savoir plus
          </Link>
          <div
            className="underline underline-offset-5 text-xl hover:text-black hover:bg-white hover:rounded-full hover:no-underline px-2 py-1 group"
          >
            Sécurité
            <ul className="absolute hidden bg-white text-black w-max p-4 mt-1 -ml-2 rounded-xl group-hover:flex flex-col gap-1 text-lg">
              <li>
                <Link href="a">Règles de la communauté</Link>
              </li>
              <hr />
              <li>
                <Link href="a">Conseils de sécurité</Link>
              </li>
              <hr />
              <li>
                <Link href="a">Sécurité et Politique de Tinder</Link>
              </li>
              <hr />
              <li>
                <Link href="a">Sécurité et signalement</Link>
              </li>
              <hr />
              <li>
                <Link href="a">Protection des données</Link>
              </li>
            </ul>
          </div>
          <Link
            href="a"
            className="underline underline-offset-5 text-xl hover:text-black hover:bg-white hover:rounded-full hover:no-underline px-2 py-1"
          >
            Assistance
          </Link>
          <Link
            href="a"
            className="underline underline-offset-5 text-xl hover:text-black hover:bg-white hover:rounded-full hover:no-underline px-2 py-1"
          >
            Télécharger
          </Link>
        </nav>
      </div>
      <div className="text-white text-xl flex  gap-8 font-semibold mr-3">
        <button className="hidden md:flex gap-2 items-center cursor-pointer px-2 py-1 rounded-full hover:bg-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M320 24H16v304h176v168h304V192H320ZM148.305 96L98.093 239.3H132l8.166-23.3H192v80H48V56h240v136h-66.668L187.7 96Zm36.317 88h-33.244L168 136.562ZM464 224v240H224V224Z"
            />
            <path
              fill="currentColor"
              d="M317.432 368.48a137 137 0 0 0 10.089 14.12q-17.4 9.384-39.521 9.4v32c24.141 0 45.71-6.408 64-18.824C370.29 417.592 391.859 424 416 424v-32q-22.075 0-39.52-9.407a137 137 0 0 0 10.088-14.113A166.2 166.2 0 0 0 406.662 320H424v-32h-56v-24h-32v24h-56v32h17.338a166.2 166.2 0 0 0 20.094 48.48M373.53 320a133 133 0 0 1-14.1 31.52a104 104 0 0 1-7.43 10.448a104 104 0 0 1-6.93-9.651A132.4 132.4 0 0 1 330.466 320Z"
            />
          </svg>
          <p>Langue</p>
        </button>
        <button className="cursor-pointer text-black bg-white px-4 py-2 rounded-full tracking-wider">
          Connexion
        </button>
      </div>
    </div>
  );
}
