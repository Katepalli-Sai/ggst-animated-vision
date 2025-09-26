import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Server, Zap, Shield, Cloud, Cog } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "IT Systems Integration",
    description: "Comprehensive IT infrastructure setup and integration services to streamline your business operations.",
    features: ["Network Architecture", "System Migration", "Infrastructure Optimization"]
  },
  {
    icon: Code,
    title: "Custom Software Development", 
    description: "Tailored software solutions built from the ground up to meet your specific business requirements.",
    features: ["Web Applications", "Mobile Apps", "Enterprise Software"]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to enhance your business agility and efficiency.",
    features: ["Cloud Migration", "DevOps Setup", "Scalable Architecture"]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure business continuity.",
    features: ["Security Audits", "Threat Protection", "Compliance Management"]
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "End-to-end digital transformation services to modernize your business processes and workflows.",
    features: ["Process Automation", "Digital Strategy", "Technology Consulting"]
  },
  {
    icon: Cog,
    title: "System Maintenance",
    description: "Ongoing support and maintenance services to ensure optimal performance of your IT systems.",
    features: ["24/7 Support", "Performance Monitoring", "Regular Updates"]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT solutions designed to drive innovation and accelerate your business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-accent-glow transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2 text-sm text-foreground/70">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;