import { ContactForm } from "@/components/sections/contact-form";
import WhyChooseVAccel from "@/components/sub/why-choose-v-accel";
import { AboutHero } from "@/components/sections/about-hero";
import Team from "@/components/sub/our-technical-squad";

export default function AIPage() {
  return (
    <main className="h-full w-full overflow-x-hidden">
         <div className="flex flex-col 
                      gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 min-[2560px]:gap-24
                      px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 min-[2560px]:px-32
                      max-w-screen-2xl min-[2560px]:max-w-[2400px] mx-auto">
        <AboutHero/>
        <WhyChooseVAccel/>
        <Team/>
        {/* <LeadershipCEO /> */}
        <ContactForm/>
      </div>
    </main>
  );
}