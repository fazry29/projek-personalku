import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-current rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-current rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-current rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Professional Avatar */}
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto rounded-full bg-accent flex items-center justify-center text-6xl font-bold text-accent-foreground shadow-custom-card">
            FA
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Fazry Akhmar
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-medium mb-6 text-primary-foreground/90">
          Full-Stack Web Developer
        </h2>
        
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed text-primary-foreground/80">
          Membangun solusi web yang dapat diukur dan berkinerja tinggi untuk 
          memenuhi kebutuhan bisnis Anda dengan teknologi modern dan pendekatan yang inovatif.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => scrollToSection('portfolio')}
            className="text-lg px-8 py-3 transition-smooth hover:shadow-custom-hover"
          >
            Lihat Portfolio
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth"
          >
            Hubungi Saya
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a 
            href="https://github.com/fazryakhmar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/fazryakhmar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:fazry.akhmar@email.com"
            className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-smooth"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary-foreground/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;