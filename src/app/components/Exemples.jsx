import exempleData from "@/data/exemplesData";
import ExempleCard from "./ExempleCard";

export default function Exemples() {
  return (
    <div className="relative bg-black p-5 text-[#b9bfc8]  flex flex-wrap gap-5 sm:max-h-75 sm:overflow-hidden justify-center w-full">
      {exempleData.map((item, index) => (
        <ExempleCard
          key={index}
          title={item.title}
          text={item.text}
          link={item.link}
          image={item.image}
        />
      ))}
    </div>
  );
}
