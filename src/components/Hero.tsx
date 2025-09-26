import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tech.jpg";

const FloatingShape = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <div 
    className={`absolute opacity-20 animate-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-20 h-20 bg-gradient-primary rounded-lg transform rotate-45 shadow-glow"></div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* 3D Floating Elements */}
      <FloatingShape className="top-20 left-10" delay={0} />
      <FloatingShape className="top-40 right-20" delay={1} />
      <FloatingShape className="bottom-32 left-1/4" delay={2} />
      <FloatingShape className="top-60 right-1/3" delay={0.5} />
      
      {/* Rotating 3D Background Element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 opacity-10 animate-rotate-3d">
          <div className="w-full h-full border-2 border-primary rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 border border-accent rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              GGST Innovations
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-4">
              Private Limited
            </p>
            <p className="text-lg lg:text-xl text-foreground/80 mb-8 leading-relaxed">
              Transforming businesses through cutting-edge IT systems and custom software development solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-3d">
              <img 
                src={heroImage} 
                alt="GGST Innovations - Modern Technology Solutions" 
                className="w-full h-auto"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-primary/20"></div>
            </div>
            {/* Floating accent element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full animate-pulse-glow opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;