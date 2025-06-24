import { ServiceSection } from "@/components/sections/ServiceSection";
import { ServiceHero } from "@/components/sections/serviceHero";
import { PROJECTS } from "@/constants";

export default function ServicesPage() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">

      <ServiceHero />


      {PROJECTS.map((service) => (
        <ServiceSection
          key={service.title}
          title={service.title}
          description={service.description}
          image={service.image}
          link={service.link}
        />
      ))}
      </div>
    </main>
  );
}