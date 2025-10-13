import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import interiorImage from "@/assets/interior-detail.jpg";
export const HeritageSection = () => {
  return <section id="heritage" className="bg-background py-[66px]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <img src={interiorImage} alt="Luxury car interior detailing" className="w-full h-[600px] object-cover" />
              <div className="absolute inset-0 bg-gradient-overlay opacity-20"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6">
              <Card className="bg-gradient-accent shadow-accent border-0">
                <CardContent className="p-6 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary-foreground font-playfair">B</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                Our Heritage
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold font-inter text-foreground">
                Family Heritage Meets Modern Excellence
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Founded on the principles of dedication, precision, and authentic care that have been 
                passed down through generations in the Balkans.
              </p>
            </div>
            
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-inter text-foreground">
                Why Choose Balkan Detailing Co.?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Generational Craftsmanship</h4>
                    <p className="text-muted-foreground">Our techniques are rooted in Old-World attention to detail and pride in workmanship.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Personal Touch</h4>
                    <p className="text-muted-foreground">We treat every vehicle like it belongs to family, ensuring unmatched care and attention.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Quality Guarantee</h4>
                    <p className="text-muted-foreground">We stand behind our work with a satisfaction guarantee on all services.</p>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};