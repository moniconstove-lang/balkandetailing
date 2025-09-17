import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    vehicleDetails: '',
    serviceNeeded: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-quote-email', {
        body: formData,
      });

      if (error) {
        throw new Error(error.message || 'Failed to send quote request');
      }

      if (data) {
        toast({
          title: "Quote Request Sent!",
          description: "We'll get back to you within 2 hours during business hours.",
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          vehicleDetails: '',
          serviceNeeded: ''
        });
      }
    } catch (err: any) {
      console.error('Quote form submission error:', err);
      toast({
        title: "Error sending quote",
        description: err?.message || "Failed to send quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-inter text-foreground mb-6">
            Get Your Quote Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to experience the Balkan difference? Contact us for a personalized quote 
            and bring your vehicle to pristine condition.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/20 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-inter text-foreground">
                Request a Quote
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Marko" 
                      className="bg-background/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Petrović" 
                      className="bg-background/50"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="marko@email.com" 
                    type="email" 
                    className="bg-background/50"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone</label>
                  <Input 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="021 266 3881" 
                    className="bg-background/50"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Vehicle Details</label>
                  <Input 
                    name="vehicleDetails"
                    value={formData.vehicleDetails}
                    onChange={handleInputChange}
                    placeholder="e.g., 2020 BMW X5" 
                    className="bg-background/50"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Service Needed</label>
                  <Textarea 
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleInputChange}
                    placeholder="Describe the services you're interested in..."
                    className="bg-background/50 min-h-[100px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-gradient-accent shadow-accent hover:shadow-luxury transition-all duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Get My Quote →"}
                </Button>
              </form>
              
              <p className="text-sm text-muted-foreground text-center">
                We typically respond within 2 hours during business hours
              </p>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/20 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center shadow-accent">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Our Location</h3>
                    <p className="text-muted-foreground">
                      Auckland, New Zealand
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/20 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center shadow-accent">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      021 266 3881
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/20 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center shadow-accent">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      Balkandetailingco@gmail.com<br />
                      Balkandetailingco@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/20 shadow-card">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center shadow-accent">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: By appointment only</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};