import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission Driven",
    description: "Delivering innovative technology solutions that drive real business value and growth."
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Staying ahead of technology trends to provide cutting-edge solutions for our clients."
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "Building long-term partnerships through exceptional service and dedicated support."
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Maintaining the highest standards in every project we undertake and deliver."
  }
];

const About = () => {
  return (
    <section className="py-20 bg-secondary/20 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 border border-primary/20 rounded-full animate-rotate-3d opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-accent/20 rounded-full animate-rotate-3d opacity-30" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-4 text-sm bg-primary/10 text-primary border-primary/20">
              About GGST Innovations
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Pioneering the Future of
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Technology</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              GGST Innovations Private Limited stands at the forefront of technological advancement, 
              specializing in comprehensive IT systems and bespoke software development solutions. 
              Our team of expert engineers and consultants work tirelessly to transform your digital vision into reality.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With years of experience in the industry, we've helped businesses across various sectors 
              streamline their operations, enhance productivity, and achieve sustainable growth through innovative technology solutions.
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-fade-in-up"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-accent-glow transition-all duration-300">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;