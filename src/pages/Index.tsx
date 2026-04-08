import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import GitHubSection from "@/components/GitHubSection";
import CurrentlyWorkingSection from "@/components/CurrentlyWorkingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
      <GitHubSection />
      <CurrentlyWorkingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
