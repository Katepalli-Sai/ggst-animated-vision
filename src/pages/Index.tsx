import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary/20 border-t border-border/50 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent mb-2">
            GGST Innovations Private Limited
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 GGST Innovations. All rights reserved. | Transforming businesses through innovative technology solutions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
