import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Mail, MapPin, Phone, MessageCircle, Send } from 'lucide-react';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Contact form submitted:', data);
    reset();
    setIsSubmitting(false);
    // In a real app, you would send this to your backend
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'hushsense@gmail.com',
      action: 'Send Email',
    },
    {
      icon: MapPin,
      title: 'Office Location',
      description: 'Accra, Ghana',
      action: 'View Location',
    },
    {
      icon: Phone,
      title: 'Business Inquiries',
      description: 'Schedule a consultation',
      action: 'Book Call',
    },
  ];

  const inquiryTypes = [
    { label: 'General Inquiry', value: 'general' },
    { label: 'Business Partnership', value: 'business' },
    { label: 'Media Request', value: 'media' },
    { label: 'Technical Support', value: 'support' },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to join the noise monitoring revolution? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-card border border-border/20 rounded-xl shadow-soft"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground mb-2">
                        {info.description}
                      </p>
                      <Button variant="outline" size="sm">
                        {info.action}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Support Channels */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-xl p-6 shadow-soft">
                <h4 className="font-semibold text-foreground mb-4 flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-primary" />
                  Additional Support Channels
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>• Live chat support (9 AM - 5 PM GMT)</div>
                  <div>• Community forum for user questions</div>
                  <div>• Developer documentation and API support</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Send us a Message
              </h3>
              
              <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-8 shadow-medium">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input
                        {...register("firstName", { required: "First name is required" })}
                        placeholder="Your first name"
                        className={errors.firstName ? "border-destructive" : ""}
                      />
                      {errors.firstName && (
                        <p className="text-destructive text-sm mt-1">{errors.firstName.message as string}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input
                        {...register("lastName", { required: "Last name is required" })}
                        placeholder="Your last name"
                        className={errors.lastName ? "border-destructive" : ""}
                      />
                      {errors.lastName && (
                        <p className="text-destructive text-sm mt-1">{errors.lastName.message as string}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address"
                        }
                      })}
                      placeholder="your.email@example.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email.message as string}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Inquiry Type *
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      {...register("message", { required: "Message is required" })}
                      placeholder="Tell us about your inquiry..."
                      rows={5}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message.message as string}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button variant="success" size="lg" asChild>
              <a href="#community">Join the Network</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;