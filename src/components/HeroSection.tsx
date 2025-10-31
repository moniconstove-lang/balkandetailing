import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[93px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold font-inter text-foreground leading-tight"
              style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
            >
              Precision Car Detailing
              <span className="block text-primary"> with a Balkan Touch</span>
            </h1>
            <p 
              className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-inter"
              style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)' }}
            >
              Bringing Old-World Craftsmanship to Modern Vehicle Care
            </p>
          </div>
          
          {/* Social Proof */}
          <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto border border-primary/20">
            <p className="text-sm font-semibold text-primary mb-1.5">New Client Special: $199</p>
            <p className="text-xs text-foreground">Complete Interior & Exterior Detail — Save 20%</p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-accent shadow-accent hover:shadow-luxury transition-all duration-300 text-lg px-8 py-4"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Services →
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 transition-all duration-300"
              onClick={() => document.getElementById('heritage')?.scrollIntoView({ behavior: 'smooth' })}
            >
              About Us
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-primary opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
};