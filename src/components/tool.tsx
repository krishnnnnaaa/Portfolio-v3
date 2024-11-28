import Image, { StaticImageData } from "next/image";

export default function Tool({
  tech,
  techName,
}: {
  tech: StaticImageData;
  techName: string;
}) {
  return (
    <div className="bg-[#1212129c] hover:scale-110 transition-all w-48 flex rounded-xl flex-col mb-8 justify-center items-center">
      <div
        className={`${techName == "Tailwind" ? "h-16" : "h-24"} ${
          techName == "Bootstrap" && "h-20"
        } ${
          techName == "CSS" ? "w-20" : "w-24"
        } relative mt-12 mb-8 cursor-pointer`}
      >
        <Image
          src={tech}
          fill={true}
          alt={techName}
          className="w-full h-full"
        />
      </div>
      <div className="mb-8">
        <p className="text-lg cursor-pointer">{techName}</p>
      </div>
    </div>
  );
}
