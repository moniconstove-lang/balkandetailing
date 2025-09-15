import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, Sparkles, Shield, Paintbrush } from "lucide-react";

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
    popular: false
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
    popular: false
  },
  {
    icon: Paintbrush,
    title: "Paint Correction",
    description: "Professional swirl and scratch removal with precision techniques",
    features: [
      "Multi-step paint correction",
      "Swirl & scratch removal",
      "Paint enhancement & clarity",
      "Professional polishing compounds"
    ],
    price: "From $299",
    popular: true
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    description: "Long-lasting protection with incredible shine and durability",
    features: [
      "9H hardness ceramic protection",
      "Hydrophobic properties",
      "UV protection & gloss enhancement",
      "5-year warranty included"
    ],
    price: "From $599",
    popular: false
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each service reflects our commitment to excellence and attention to detail, 
            inspired by generations of Balkan craftsmanship.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <CardTitle className="text-xl font-playfair text-foreground">
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
                    <span className="text-2xl font-bold text-primary font-playfair">
                      {service.price}
                    </span>
                  </div>
                  <Button 
                    className="w-full bg-gradient-accent shadow-accent hover:shadow-luxury transition-all duration-300"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-card/30 backdrop-blur-sm border-border/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-playfair text-foreground mb-4">
                Complete Detailing Package
              </h3>
              <p className="text-muted-foreground mb-6">
                All Interior + Exterior Services Combined with exclusive Balkan touch
              </p>
              <div className="flex items-center justify-center space-x-4">
                <span className="text-3xl font-bold text-primary font-playfair">From $399</span>
                <Button size="lg" className="bg-gradient-accent shadow-accent">
                  Get Complete Package
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};