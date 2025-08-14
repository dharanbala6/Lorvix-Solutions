import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import webPortfolio from '@/assets/web-portfolio.jpg';
import { Link } from 'react-router-dom';

import { 
  CheckCircle, 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Zap, 
  Search,
  ShoppingCart,
  Palette,
  Code,
  Users,
  Clock,
  Star
} from 'lucide-react';

const WebDevelopment = () => {
  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Website Development",
      description: "Tailored websites built from scratch to match your brand identity and business objectives."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile-Responsive Design",
      description: "Websites that look and function perfectly on all devices, from desktop to mobile."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Lightning-fast loading times and optimized user experience for better conversions."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that engage your visitors and drive business results."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Interactive Features",
      description: "Engage visitors with interactive elements like sliders, galleries, and dynamic animations."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Website Maintenance & Support",
      description: "Ongoing updates, security checks, and technical assistance to keep your website running smoothly."
    }
  ];

  const portfolioExamples = [ 
    {
      title: "Corporate Website",
      description: "Professional business presence with company information and services",
      features: ["Company Profile", "Service Showcase", "Contact Forms"]
    },
    {
      title: "Portfolio Website",
      description: "Creative showcase for artists, photographers, and professionals",
      features: ["Image Gallery", "Project Showcase", "Client Testimonials"]
    }

  ];

  const benefits = [
    "Increase online visibility and brand awareness",
    "Generate more leads and convert visitors to customers",
    "Provide 24/7 accessibility to your business information",
    "Compete effectively in the digital marketplace"
  ];

  const process = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "We understand your business goals, target audience, and project requirements."
    },
    {
      step: "2",
      title: "Design & Prototyping",
      description: "Create wireframes and designs that align with your brand and user expectations."
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "Build your website with clean code, test thoroughly, and ensure optimal performance."
    },
    {
      step: "4",
      title: "Launch & Support",
      description: "Deploy your website and provide ongoing maintenance and support services."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-6xl font-bold text-foreground mb-6">
                Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Web Development</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your business with a stunning, high-performance website that drives results. 
                From concept to launch, we create digital experiences that engage your audience and grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  <Link to="/Contact">Get Your Business a Website</Link>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-professional p-4">
                <img 
                  src={webPortfolio} 
                  alt="Web Development Portfolio" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Complete Web Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From simple business websites 
              we provide end-to-end web development solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Portfolio Examples */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Portfolio Examples
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the variety of websites we've created for businesses across different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioExamples.map((example, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-xl text-secondary">{example.title}</CardTitle>
                  <CardDescription className="text-base">
                    {example.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {example.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
     <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9">
          <div className="flex justify-center">
            <div className="max-w-3xl w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Why Your Business Needs a Professional Website
              </h2>
              <div className="space-y-4 mx-auto max-w-xl text-left">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground text-lg leading-snug">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, 
              within budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-card rounded-2xl p-12 shadow-professional">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Get Your Business Online?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a website that drives real business results. 
              Our team is ready to bring your vision to life.
            </p>
            

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <Link to="/Contact">Start Your Web Project</Link>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">2-6 weeks delivery</span>
                </div>
                <div className="flex items-center space-x-1">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;