import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@ggstinnovations.com",
    href: "mailto:contact@ggstinnovations.com"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Bangalore, Karnataka, India",
    href: "#"
  }
];

const Contact = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-1/4 w-28 h-28 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with innovative technology? Let's discuss your project requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-border/50 shadow-glow animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                <Send className="w-6 h-6 mr-3 text-primary" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                  <Input placeholder="Your full name" className="bg-background/50 border-border/50 focus:border-primary" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="your.email@company.com" className="bg-background/50 border-border/50 focus:border-primary" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Company</label>
                <Input placeholder="Your company name" className="bg-background/50 border-border/50 focus:border-primary" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                <Input placeholder="Project inquiry" className="bg-background/50 border-border/50 focus:border-primary" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your project requirements..." 
                  rows={6}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg py-6">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We're here to help you bring your technology vision to life. Reach out to discuss your requirements 
                and discover how GGST Innovations can accelerate your digital transformation journey.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-fade-in-up"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <CardContent className="p-6 flex items-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 group-hover:shadow-accent-glow transition-all duration-300">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {info.title}
                      </h4>
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-card rounded-2xl p-8 border border-border/50">
              <h4 className="text-xl font-bold text-foreground mb-4">Ready to Get Started?</h4>
              <p className="text-muted-foreground mb-6">
                Schedule a free consultation to discuss your project requirements and discover how we can help.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;