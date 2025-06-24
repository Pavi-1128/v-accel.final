import React from "react";

interface ServiceSectionProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  image,
  link,
}) => (
  <section className="mb-12 flex flex-col md:flex-row items-center gap-8">
    {image && (
      <img
        src={image}
        alt={title}
        className="w-40 h-40 object-cover rounded-lg shadow-lg"
      />
    )}
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-300 mb-2">{description}</p>
      {link && (
        <a
          href={link}
          className="text-purple-400 underline hover:text-cyan-400 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      )}
    </div>
  </section>
);