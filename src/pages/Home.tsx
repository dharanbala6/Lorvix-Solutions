import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-bg.jpg';
import { ArrowRight, Code, Zap, Shield, Users, CheckCircle, Star } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Our software solutions are optimized for speed and performance, ensuring your business operations run smoothly."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom Solutions",
      description: "Tailored web development services designed specifically for your business needs."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Support",
      description: "Personalized support directly from the creators — we're here whenever you need us."
    }
  ];

  const benefits = [
    "Increase productivity with intuitive software interfaces",
    "Enhance customer experience with professional web presence",
    "Tailored softwares for B2B",
    "Life time, Satisfying Support after purchace"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Empowering Bussiness with{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Software Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
            Transform your business operations with our innovative software solutions and professional web development services. 
            Built for growth, designed for success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="hero" size="lg" asChild className="text-lg px-8 py-4">
              <Link to="/software">
                Get Software
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="professional" size="lg" asChild className="text-lg px-8 py-4">
              <Link to="/contact">
                Get Your Business a Website
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Lorvix?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another software company. We're your technology partner, 
              committed to delivering solutions that drive real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-professional">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Transform Your Business Operations
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center lg:text-right">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Start Your Project Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From powerful business software to stunning web development, 
              we provide comprehensive solutions for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">InvMaster - Invoice Software</CardTitle>
                <CardDescription className="text-lg">
                  Streamline your billing process with our comprehensive invoice management solution
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Automated invoice generation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Payment Due Tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Financial reporting & analytics</span>
                  </li>
                </ul>
                <Button variant="default" asChild className="w-full">
                  <Link to="/software">
                    Learn More About InvMaster
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary">Web Development Services</CardTitle>
                <CardDescription className="text-lg">
                  Professional websites and web applications that drive business growth
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Custom website design & development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>E-commerce solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Mobile-responsive design</span>
                  </li>
                </ul>
                <Button variant="secondary" asChild className="w-full">
                  <Link to="/web-development">
                    Explore Web Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;