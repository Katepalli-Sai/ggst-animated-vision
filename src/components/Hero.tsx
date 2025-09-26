import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Cpu, Zap } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";
import ParticleField from "./ParticleField";

const FloatingShape = ({ className, delay = 0, children }: { className?: string; delay?: number; children?: React.ReactNode }) => (
  <div 
    className={`absolute animate-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    {children || <div className="w-20 h-20 bg-gradient-primary rounded-2xl transform rotate-45 shadow-glow animate-morph"></div>}
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Particle Field Background */}
      <ParticleField />
      
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
      
      {/* Enhanced 3D Floating Elements */}
      <FloatingShape className="top-20 left-10 opacity-30" delay={0}>
        <div className="w-24 h-24 bg-gradient-primary rounded-2xl shadow-float animate-glow-pulse flex items-center justify-center">
          <Cpu className="w-8 h-8 text-primary-foreground" />
        </div>
      </FloatingShape>
      
      <FloatingShape className="top-40 right-20 opacity-25" delay={1}>
        <div className="w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full shadow-float animate-pulse-glow">
          <div className="w-full h-full rounded-full border-2 border-accent-glow animate-rotate-3d"></div>
        </div>
      </FloatingShape>
      
      <FloatingShape className="bottom-32 left-1/4 opacity-20" delay={2}>
        <div className="w-28 h-28 bg-gradient-primary rounded-3xl shadow-glow animate-float-reverse">
          <div className="w-full h-full bg-accent/20 rounded-3xl animate-morph"></div>
        </div>
      </FloatingShape>
      
      <FloatingShape className="top-60 right-1/3 opacity-30" delay={0.5}>
        <div className="w-20 h-20 bg-gradient-to-tr from-primary to-accent rounded-xl shadow-accent-glow animate-glow-pulse flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-primary-foreground animate-pulse" />
        </div>
      </FloatingShape>

      {/* Large Rotating 3D Background Element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] opacity-5 animate-rotate-3d">
          <div className="w-full h-full border-2 border-primary rounded-full relative">
            <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 border border-accent rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 border border-primary-glow rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
              <Zap className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Innovation Technology Partner</span>
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="block bg-gradient-primary bg-clip-text text-transparent relative">
                <span className="relative z-10">GGST</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-text-shimmer bg-clip-text text-transparent">
                  GGST
                </div>
              </span>
              <span className="block text-foreground animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                Innovations
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-accent mb-4 font-medium animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Private Limited
            </p>
            
            <p className="text-lg lg:text-xl text-foreground/90 mb-8 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              Transforming businesses through <span className="text-primary font-semibold">cutting-edge IT systems</span> and 
              <span className="text-accent font-semibold"> custom software development</span> solutions that drive innovation and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="group bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 text-lg px-8 py-6 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-glow hover:scale-105 transition-all duration-300 text-lg px-8 py-6 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Learn More
                  <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1 animate-glow-pulse">100+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1 animate-glow-pulse">50+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1 animate-glow-pulse">5+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-float group">
              <img 
                src={heroImage} 
                alt="GGST Innovations - Modern Technology Solutions" 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Enhanced overlay gradient */}
              <div className="absolute inset-0 bg-gradient-primary/30 group-hover:bg-gradient-primary/20 transition-all duration-500"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-primary p-[2px] group-hover:animate-pulse-glow">
                <div className="w-full h-full rounded-3xl bg-background/5"></div>
              </div>
            </div>
            
            {/* Multiple floating accent elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full animate-pulse-glow opacity-80 shadow-accent-glow"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/30 rounded-full animate-float blur-sm"></div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-primary rounded-lg animate-glow-pulse opacity-60 rotate-45"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;