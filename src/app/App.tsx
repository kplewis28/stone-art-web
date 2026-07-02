import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { DesignPrototyping } from "./components/DesignPrototyping";
import { Workflow } from "./components/Workflow";
import { ValueProposition } from "./components/ValueProposition";
import { Gallery } from "./components/Gallery";
import { ContactCTA } from "./components/ContactCTA";
import { Navbar } from "./components/Navbar";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ContactModalProvider } from "./contexts/ContactModalContext";
import { ContactFormModal } from "./components/ContactFormModal";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <LanguageProvider>
      <ContactModalProvider>
        <div className="min-h-screen bg-white overflow-x-hidden">
          <Navbar />
          <Hero />
          <About />
          <Services />
          <DesignPrototyping />
          <Workflow />
          <ValueProposition />
          <Gallery />
          <ContactCTA />
          <ContactFormModal />
          <Toaster />
        </div>
      </ContactModalProvider>
    </LanguageProvider>
  );
}