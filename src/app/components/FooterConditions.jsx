/* eslint-disable react/no-unescaped-entities */
export default function FooterConditions() {
  return (
    <div className="relative py-3 bg-black text-sm text-[#b9bfc8] ">
      <div className="border-t flex items-center justify-between mx-8 md:mx-18 pt-4">
          <div className="">
            <ul className="flex gap-2 flex-wrap">
              <li className="hover:text-[#ff2358]">
                <a href="a">FAQ</a>
              </li>
              <li>/</li>
              <li className="hover:text-[#ff2358]">
                <a href="a">Conseils de sécurité</a>
              </li>
              <li>/</li>
              <li className="hover:text-[#ff2358]">
                <a href="a">Conditions d'utilisation</a>
              </li>
              <li>/</li>
              <li className="hover:text-[#ff2358]">
                <a href="a">Politique relative aux cookies</a>
              </li>
              <li>/</li>
              <li className="hover:text-[#ff2358]">
                <a href="a">Réglages de confidentialité</a>
              </li>
            </ul>
          </div>
          <div className="">&copy; 2026 Tinder, LLC, Tous droits réservés.</div>
      </div>
    </div>
  );
}
