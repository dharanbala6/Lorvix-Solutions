import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import emailjs from "@emailjs/browser";
import {
  Send,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Users,
  Star,
  Globe
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    requirements: ''
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
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          businessName: formData.businessName,
          contactPerson: formData.contactPerson,
          email: formData.email,
          phone: formData.phone,
          requirements: formData.requirements
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours to discuss your project.",
        className: "bg-green-500 text-white",
      });

      setFormData({
        businessName: '',
        contactPerson: '',
        email: '',
        phone: '',
        requirements: ''
      });

    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Error",
        description: `Failed to send message: ${error?.text || error?.message || "Unknown error"}`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Fastest Response",
      value: "Submit the form above for your Chennai website quote",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 98849 48383, +91 72001 59832",
      link: "tel:+919884948383"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Office",
      value: "Chennai, Tamil Nadu",

    }
  ];

  const features = [
    "Free project consultation",
    "Custom development proposal",
    "Timeline and budget estimation",
    "Technology recommendations",
    "Ongoing support planning"
  ];

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Lorvix Solutions",
    "description": "Get a free quote for your website development project in Chennai, India, or remote markets. Share your scope and timeline for practical guidance.",
    "url": "https://lorvixsolutions.in/contact",
    "mainEntity": {
      "@id": "https://lorvixsolutions.in/#organization"
    }
  };

  return (
    <div className="lx-root min-h-screen bg-white">
      <SEOHead 
        title="Contact Lorvix Solutions | Chennai Website Quote"
        description="Submit your project requirements and get a Chennai website quote within 24 hours. We review your scope, timeline, and business goals before quoting."
        canonical="https://lorvixsolutions.in/contact"
        keywords="Chennai website quote, website design Chennai, emailjs contact form, hire web developer Chennai, web development quote Chennai"
        schema={contactSchema}
      />
      <Header />
      <main>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Get Your Business <span className="bg-gradient-primary bg-clip-text text-transparent">Online in Chennai</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Submit your project requirements for a practical quote. We review your goals, timeline, and budget before suggesting the right website structure.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-professional">
              <CardHeader>
                <CardTitle className="text-2xl">Project Details</CardTitle>
                <CardDescription className="text-base">
                  Tell us about your business and website requirements. We'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="Your business name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"

                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 12345-67890"
                        required
                        inputMode="numeric" // shows numeric keypad on mobile
                        pattern="[0-9]{10}" // only 10 digits allowed
                        maxLength={10} // prevent extra digits
                      />

                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requirements">Requirements *</Label>
                    <Textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      placeholder="Please describe your website requirements, including features, design preferences, timeline, and any specific functionality you need..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Submit for Fast Quote
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Required fields. We respect your privacy and never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Benefits */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">Get in Touch</CardTitle>
                  <CardDescription>
                    Have questions? We're here to help you succeed.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="font-medium text-foreground">{info.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* What You Get */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">What You Get</CardTitle>
                  <CardDescription>
                    Our comprehensive web development process includes:
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Happens Next?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Once you submit your Requirements, here's how we'll work together to bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <CardTitle className="text-xl">Initial Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We'll review your requirements and schedule a free consultation call to discuss your project in detail.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <CardTitle className="text-xl">Custom Proposal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Receive a detailed proposal with timeline, features, pricing, and mockups tailored to your business.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <CardTitle className="text-xl">Project Kickoff</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Once approved, we'll start development with regular updates and milestones until launch.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default Contact;
