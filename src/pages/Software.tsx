import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import invmasterDemo from '@/assets/invmaster-demo.jpg';
import { 
  CheckCircle, 
  ArrowRight, 
  BarChart3, 
  FileText, 
  Calendar, 
  DollarSign,
  Users,
  Shield,
  Zap,
  Download
} from 'lucide-react';

const Software = () => {
  const features = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Smart Invoice Creation",
      description: "Generate professional invoices in seconds with customizable templates and automated calculations."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Track your business performance with comprehensive reports, revenue insights, and payment analytics."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Payment Scheduling",
      description: "Set up automatic reminders, recurring invoices, and track payment due dates effortlessly."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Multi-Currency Support",
      description: "Handle international clients with support for multiple currencies and automatic exchange rates."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client Management",
      description: "Organize client information, payment history, and communication logs in one central location."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Compliant",
      description: "Bank-level security with automatic backups and compliance with industry standards."
    }
  ];

  const benefits = [
    "Reduce invoice processing time by 80%",
    "Improve cash flow with faster payments",
    "Eliminate manual data entry errors",
    "Access your data from anywhere, anytime",
    "Scale with your growing business needs",
    "Integrate with popular accounting software"
  ];

  const pricingFeatures = [
    "Unlimited invoice creation",
    "Client management system",
    "Payment Due Tracking",
    "Financial reports & analytics",
    "Multi-currency support",
    "Cloud storage & backup",
    "Mobile app access",
    "24/7 customer support",
    "Free updates & new features"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Meet <span className="bg-gradient-primary bg-clip-text text-transparent">InvMaster</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                The most intuitive invoice management software designed for modern businesses. 
                Streamline your billing process, track payments, and grow your revenue with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={() => window.open('#', '_blank')}
                  className="text-lg px-8 py-4"
                >
                  Get InvMaster Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="professional" size="lg" className="text-lg px-8 py-4">
                  <Download className="mr-2 h-5 w-5" />
                  Free Trial
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-professional p-4">
                <img 
                  src={invmasterDemo} 
                  alt="InvMaster Software Demo" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">
                New Version 2.0
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Powerful Features for Your Business
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              InvMaster comes packed with everything you need to manage your invoicing, 
              track payments, and analyze your business performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground mb-4">
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Transform Your Invoice Management
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-card rounded-2xl p-8 shadow-professional">
              <div className="text-center mb-6">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Boost Productivity</h3>
                <p className="text-muted-foreground">
                  Join thousands of businesses that have streamlined their operations with InvMaster
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">80%</div>
                  <div className="text-sm text-muted-foreground">Time Saved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50%</div>
                  <div className="text-sm text-muted-foreground">Faster Payments</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5K+</div>
                  <div className="text-sm text-muted-foreground">Happy Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to manage your business invoicing, all in one powerful package.
            </p>
          </div>

          <Card className="shadow-professional border-2 border-primary/20 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold">
              Most Popular
            </div>
            <CardHeader className="text-center pb-8 pt-12">
              <CardTitle className="text-3xl font-bold">InvMaster Pro</CardTitle>
              <CardDescription className="text-lg">Perfect for growing businesses</CardDescription>
              <div className="mt-6">
                <span className="text-5xl font-bold text-primary">$49</span>
                <span className="text-xl text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground mt-2">or $490/year (save 17%)</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pricingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="flex-1"
                  onClick={() => window.open('#', '_blank')}
                >
                  Get InvMaster Pro
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="professional" size="lg" className="flex-1">
                  Start Free Trial
                </Button>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                30-day money-back guarantee • No setup fees • Cancel anytime
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Software;