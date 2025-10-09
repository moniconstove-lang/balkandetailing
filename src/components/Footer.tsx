import { Card } from "@/components/ui/card";
export const Footer = () => {
  return <footer className="bg-gradient-hero border-t border-border/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center shadow-accent">
                <span className="text-lg font-bold text-primary-foreground font-playfair">B</span>
              </div>
              <div>
                <h3 className="font-bold font-playfair text-foreground">Balkan Detailing Co.</h3>
                <p className="text-xs text-muted-foreground">Heritage & Excellence</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Bringing Old-World Balkan craftsmanship to modern vehicle care with 
              precision, heritage, and excellence.
            </p>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Exterior Detailing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Interior Deep Clean</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Paint Correction</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ceramic Coating</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Complete Package</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📍 Auckland Central Area</li>
              
              <li>📞 021 266 3881</li>
              <li>📧 Balkandetailingco@gmail.com</li>
            </ul>
          </div>
          
          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 5:00 PM</li>
              <li>Sunday: By appointment</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <Card className="bg-card/20 backdrop-blur-sm border-border/20">
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © 2024 Balkan Detailing Co. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </footer>;
};