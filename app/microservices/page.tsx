import { ContactForm } from "@/components/sections/contact-form";
import { MicroservicesHero } from "@/components/sections/microservices-hero";

import { WhyChooseUs } from "@/components/sub/why-choose-us";
import { Skills } from "@/components/main/skills";

export default function MicroservicesPage() {
  return (
    <main className="h-full w-full overflow-x-hidden">
      <div className="flex flex-col 
                      gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16
                      px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16
                      max-w-screen-2xl mx-auto">
        <MicroservicesHero/>

        <WhyChooseUs/>
        <Skills/>
        <ContactForm/>
      </div>
    </main>
  );
} 