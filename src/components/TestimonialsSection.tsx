import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Thompson",
    location: "Belgrade, Serbia",
    rating: 5,
    text: "Incredible attention to detail. My BMW looks better than when I bought it! The Balkan touch really shows in the quality of work.",
    vehicle: "BMW M3"
  },
  {
    name: "Sarah Chen",
    location: "Novi Sad, Serbia",
    rating: 5,
    text: "Professional service with a personal touch. The team treated my car like their own family vehicle. Highly recommend!",
    vehicle: "Audi A4"
  },
  {
    name: "David Rodriguez",
    location: "Niš, Serbia",
    rating: 5,
    text: "The craftsmanship is outstanding. You can see the heritage and pride in every detail. Worth every dinar!",
    vehicle: "Mercedes C-Class"
  }
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-inter text-foreground mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from satisfied customers across the Balkans.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/20 shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Customer Info */}
                <div className="space-y-2">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial.vehicle} Owner
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-card/30 backdrop-blur-sm border-border/20">
            <CardContent className="p-8">
              <div className="grid sm:grid-cols-4 gap-8 items-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-inter mb-2">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-inter mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Google Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-inter mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Return Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-inter mb-2">10k+</div>
                  <div className="text-sm text-muted-foreground">Cars Detailed</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};