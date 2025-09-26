import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-nav-slide ${
      scrolled 
        ? 'bg-gradient-nav backdrop-blur-xl shadow-nav border-b border-border/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo with enhanced animations */}
          <div 
            className="font-bold text-2xl cursor-pointer group relative overflow-hidden"
            onClick={() => scrollToSection('#home')}
          >
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-primary rounded-lg shadow-glow group-hover:shadow-accent-glow transition-all duration-300 animate-glow-pulse">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="bg-gradient-primary bg-clip-text text-transparent relative">
                <span className="relative z-10">GGST Innovations</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-text-shimmer bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  GGST Innovations
                </div>
              </span>
            </div>
          </div>

          {/* Desktop Navigation with enhanced animations */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium group animate-fade-in-down"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
              </button>
            ))}
            <Button 
              className="bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 relative overflow-hidden group animate-fade-in-down"
              style={{ animationDelay: '0.4s' }}
              onClick={() => scrollToSection('#contact')}
            >
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:scale-110 transition-all duration-300">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gradient-nav backdrop-blur-xl border-border/20">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-foreground/80 hover:text-primary transition-all duration-300 font-medium text-lg relative group animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
                  </button>
                ))}
                <Button 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 mt-4 animate-slide-in-right"
                  style={{ animationDelay: '0.4s' }}
                  onClick={() => scrollToSection('#contact')}
                >
                  Get Quote
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;