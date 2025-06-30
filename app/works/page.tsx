import { PROJECTS } from "@/constants";
import { WorkHero } from "@/components/sections/workHero";
import { WorkSection } from "@/components/sections/work-section";
import { ContactForm } from "@/components/sections/contact-form";
import { WorkSectionProject } from "@/components/sections/work-section-project";

export default function ServicesPage() {
  return (
    <main className="w-full overflow-x-hidden">
     <div className="flex flex-col 
                      gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 min-[2560px]:gap-24
                      px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 min-[2560px]:px-32
                      max-w-screen-2xl min-[2560px]:max-w-[2400px] mx-auto">

        <WorkHero />
        <WorkSectionProject/>
        <WorkSection/>
        <ContactForm/>
      </div>
    </main>
  );
}