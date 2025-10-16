import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-[29px] left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-0.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center shadow-accent">
              <span className="text-lg font-bold text-primary-foreground font-playfair">B</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Balkan Detailing Co.</h1>
              <p className="text-xs text-muted-foreground">Precision • Heritage • Excellence</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Testimonials
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden sm:block text-sm text-muted-foreground">
              📞 021 266 3881
            </span>
            <Button 
              variant="default" 
              className="bg-gradient-accent shadow-accent"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};