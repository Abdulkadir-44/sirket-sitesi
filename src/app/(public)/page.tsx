import HeroSection from '../components/homepage/HeroSection';
import ClientsSection from '../components/homepage/ClientsSection';
import MissionVisionSection from '../components/homepage/MissionVisionSection';
import ProjectsSection from '../components/homepage/ProjectsSection';
import ServicesSection from '../components/homepage/ServicesSection';
import TeamSection from '../components/homepage/TeamSection';
import ContactSection from '../components/homepage/ContactSection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <ProjectsSection />
      <MissionVisionSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
}
