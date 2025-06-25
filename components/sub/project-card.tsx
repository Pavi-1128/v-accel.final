import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-purple-500/30 hover:shadow-purple-500/20 transition-all duration-300"
    >
      <div className="flex flex-row">
        <div className="w-[500px] h-[400px] relative">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 p-12 flex flex-col justify-center">
          <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">{title}</h1>
          <p className="text-gray-300 text-lg">{description}</p>
        </div>
      </div>
    </Link>
  );
};
