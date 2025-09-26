import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
            GGST Innovations
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={() => scrollToSection('#contact')}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border/50">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-foreground/80 hover:text-primary transition-colors duration-300 font-medium text-lg"
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 mt-4"
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