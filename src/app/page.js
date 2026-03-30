import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FooterLinks from "./components/FooterLinks";
import Exemples from "./components/Exemples";
import DownloadApp from "./components/DownloadApp";
import DescriptionApp from "./components/DescriptionApp";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0">
        <Image
          src="/backgroundHome.webp"
          fill
          alt="background"
          unoptimized
          className="-z-10 object-cover fixed inset-0"
        />
        <div className="fixed inset-0 bg-black/40 z-5"></div>
      </div>
      <Hero/>
      <Exemples/>
      <Footer/>
    </div>
  );
}
