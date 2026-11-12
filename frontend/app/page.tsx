import About from "@/components/About";
import ContactPage from "@/components/Contact";
import Education from "@/components/Education";
import ExperiencePage from "@/components/Experience";
import ProjectsPage from "@/components/Projects";
import SkillsPage from "@/components/Skills";

export default function RootPage() {
  return (
    <main>
        
        <About />
        <Education />
        <ExperiencePage />
        <SkillsPage />
        <ProjectsPage />
        <ContactPage />
    </main>
  );
}
    
