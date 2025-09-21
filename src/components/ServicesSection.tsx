import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Car, Sparkles, Shield, Paintbrush, X } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Car,
    title: "Exterior Detailing",
    description: "Complete wash, clay bar treatment, polish, and premium protection",
    features: [
      "Full rim, tire & exhaust cleaning",
      "Pre-wash foam bath & contact wash", 
      "Claybar treatment & iron decontamination",
      "Machine waxing & paint protection"
    ],
    price: "From $149",
    popular: false,
    detailedDescription: "Our exterior detailing service combines traditional Balkan craftsmanship with modern techniques to restore your vehicle's pristine appearance. We begin with a thorough inspection, followed by a multi-stage cleaning process that includes specialized treatments for different surfaces.",
    process: [
      "Initial inspection and photography",
      "Thorough wheel and tire cleaning with specialized brushes",
      "Pre-wash foam application to loosen dirt and grime",
      "Two-bucket contact wash method with premium microfiber mitts",
      "Clay bar treatment to remove embedded contaminants",
      "Iron decontamination to eliminate brake dust and fallout",
      "Machine polishing to restore paint clarity and depth",
      "Premium wax application for long-lasting protection",
      "Final quality inspection and detailing"
    ],
    duration: "3-4 hours",
    warranty: "30-day satisfaction guarantee"
  },
  {
    icon: Sparkles,
    title: "Interior Deep Clean",
    description: "Thorough cleaning and conditioning of all interior surfaces",
    features: [
      "Complete vacuuming & steam cleaning",
      "Fabric & leather conditioning",
      "Dashboard & trim restoration",
      "Odor elimination treatment"
    ],
    price: "From $129",
    popular: false,
    detailedDescription: "Transform your vehicle's interior with our comprehensive deep cleaning service. Using eco-friendly products and time-tested Balkan techniques, we restore every surface to like-new condition while preserving the integrity of original materials.",
    process: [
      "Complete removal of personal items and floor mats",
      "Thorough vacuuming of all surfaces including crevices",
      "Steam cleaning of fabric upholstery and carpets",
      "Leather cleaning and conditioning with premium products",
      "Dashboard and trim restoration using specialized cleaners",
      "Air vent cleaning and sanitization",
      "Window cleaning for crystal-clear visibility",
      "Odor elimination treatment with ozone technology",
      "Final protective conditioning and UV protection application"
    ],
    duration: "2-3 hours",
    warranty: "14-day odor-free guarantee"
  },
  {
    icon: Sparkles,
    title: "Complete Detailing Package",
    description: "All Interior + Exterior Services Combined with exclusive Balkan touch",
    features: [
      "Full exterior & interior detailing",
      "Paint correction & protection",
      "Premium ceramic coating",
      "Exclusive Balkan craftsmanship"
    ],
    price: "From $399",
    popular: true,
    detailedDescription: "Our flagship service combines generations of Balkan craftsmanship with cutting-edge detailing technology. This comprehensive package includes everything from our exterior and interior services, plus exclusive treatments that set your vehicle apart.",
    process: [
      "Comprehensive vehicle inspection and consultation",
      "Complete exterior wash and decontamination",
      "Paint correction using multiple polishing stages",
      "Premium ceramic coating application for ultimate protection",
      "Full interior deep cleaning and conditioning",
      "Engine bay detailing and protection",
      "Headlight restoration and protection",
      "Tire and wheel ceramic coating",
      "Final quality assurance and 48-hour curing period"
    ],
    duration: "6-8 hours (2-day service)",
    warranty: "90-day comprehensive warranty"
  }
];

export const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-inter text-foreground mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each service reflects our commitment to excellence and attention to detail, 
            inspired by generations of Balkan craftsmanship.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative bg-card/50 backdrop-blur-sm border-border/20 shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 ${
                service.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {service.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-accent text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4 shadow-accent">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-inter text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary font-inter">
                      {service.price}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="w-full border-primary/20 text-primary hover:bg-primary/10"
                          onClick={() => setSelectedService(service)}
                        >
                          Learn More
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-background border-border">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-inter text-foreground flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                              <service.icon className="w-6 h-6 text-primary-foreground" />
                            </div>
                            {service.title}
                          </DialogTitle>
                          <DialogDescription className="text-lg text-muted-foreground">
                            {service.detailedDescription}
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-6 mt-6">
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-3">Our Process</h4>
                            <ul className="space-y-2">
                              {service.process.map((step, idx) => (
                                <li key={idx} className="flex items-start text-sm text-muted-foreground">
                                  <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-semibold mr-3 mt-0.5 flex-shrink-0">
                                    {idx + 1}
                                  </span>
                                  {step}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-muted/50 rounded-lg">
                              <h5 className="font-semibold text-foreground mb-2">Service Duration</h5>
                              <p className="text-muted-foreground">{service.duration}</p>
                            </div>
                            <div className="p-4 bg-muted/50 rounded-lg">
                              <h5 className="font-semibold text-foreground mb-2">Warranty</h5>
                              <p className="text-muted-foreground">{service.warranty}</p>
                            </div>
                          </div>
                          
                          <div className="pt-4 border-t border-border/20">
                            <div className="flex items-center justify-between">
                              <span className="text-2xl font-bold text-primary font-inter">
                                {service.price}
                              </span>
                              <Button 
                                className="bg-gradient-accent shadow-accent hover:shadow-luxury transition-all duration-300"
                                onClick={() => {
                                  const contactSection = document.getElementById('contact');
                                  const serviceTextarea = document.querySelector('textarea[placeholder*="Describe the services"]') as HTMLTextAreaElement;
                                  if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                    if (serviceTextarea) {
                                      setTimeout(() => {
                                        serviceTextarea.value = `I'm interested in the ${service.title} package - ${service.description}`;
                                        serviceTextarea.focus();
                                      }, 500);
                                    }
                                  }
                                }}
                              >
                                Book This Service
                              </Button>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <Button 
                      className="w-full bg-gradient-accent shadow-accent hover:shadow-luxury transition-all duration-300"
                      onClick={() => {
                        const contactSection = document.getElementById('contact');
                        const serviceTextarea = document.querySelector('textarea[placeholder*="Describe the services"]') as HTMLTextAreaElement;
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                          if (serviceTextarea) {
                            setTimeout(() => {
                              serviceTextarea.value = `I'm interested in the ${service.title} package - ${service.description}`;
                              serviceTextarea.focus();
                            }, 500);
                          }
                        }
                      }}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};