import { ContactForm } from "@/components/sections/contact-form";
import { SaasHero } from "@/components/sections/saas-hero";
import { SaasContent } from "@/components/sub/saas-content";
import { WhyChooseUs } from "@/components/sub/why-choose-us";
import { Skills } from "@/components/main/skills";
import { SaasSolutionsContent } from "@/components/sub/saas-solutions-content";

export default function SaasPage() {
  return (
     <main className="w-full overflow-x-hidden">
      <div className="flex flex-col 
                      gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16
                      px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16
                      max-w-screen-2xl mx-auto">
      <SaasHero />

      <SaasSolutionsContent />
      <WhyChooseUs />
      <Skills />
      <ContactForm />
      </div>
    </main>
  );
} 