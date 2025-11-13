import HeroSection from "./components/sections/home/HeroSection";
import RolesSection from "./components/sections/home/RolesSection";
import EmpowerSection from "./components/sections/home/EmpowerSection";
import MachinesSection from "./components/sections/home/MachinesSection";
import ResourcesSection from "./components/sections/home/ResourcesSection";
import PortalSection from "./components/sections/home/PortalSection";
import TestimonialSection from "./components/sections/home/TestimonialSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <RolesSection />
      <EmpowerSection />
      <MachinesSection />
      <ResourcesSection />
      <PortalSection />
      <TestimonialSection />
    </main>
  );
}
