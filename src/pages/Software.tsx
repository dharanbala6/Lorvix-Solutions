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
      description: "Generate professional invoices in seconds with  automated calculations."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Track your business performance with comprehensive reports, revenue insights, and payment analytics."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client Management",
      description: "Organize client information in one central location."
    }
  ];

  const benefits = [
    "Reduce invoice processing time by 80%",
    "Eliminate manual data entry errors",
    "Access your data from anywhere, anytime",
    "Get monthly sales data extracted as excel sheets to your desk"
  ];

  const pricingFeatures = [
    "Unlimited invoice creation",
    "Client management system",
    "Payment Due Tracking",
    "Financial reports & analytics",
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
                The most intuitive invoice management software designed for B2B businesses. 
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
                Version 1.0
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
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-left">
        Transform Your Invoice Management
      </h2>
      <p className="text-xl text-muted-foreground mb-6 text-left">
        Everything you need to manage your business invoicing, all in one powerful package.
      </p>
      <div className="space-y-4">
        {benefits.map((benefit, index) => (
      <div key={index} className="flex items-start space-x-3">
        <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
        <span className="text-muted-foreground text-lg text-left">{benefit}</span>
        </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Basic Plan */}
          <Card className="shadow-professional border-2 border-primary/20 relative">
            <CardHeader className="text-center pb-8 pt-12">
              <CardTitle className="text-2xl font-bold">InvMaster Basic</CardTitle>
              <CardDescription className="text-lg">Ideal for small businesses</CardDescription>
              {/* Price Layout Same as Pro Plan */}
              <div className="mt-6 flex items-center justify-center space-x-3">
                <span className="text-5xl font-bold text-primary">₹1499</span>
                <span className="text-xl text-muted-foreground">/year</span>
                {/* Transparent placeholder for badge to keep height same */}
                
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2"><CheckCircle className="h-5 w-5 text-primary" /> <span>Unlimited invoice creation</span></div>
                <div className="flex items-center space-x-2"><CheckCircle className="h-5 w-5 text-primary" /> <span>Client management system</span></div>
                <div className="flex items-center space-x-2"><CheckCircle className="h-5 w-5 text-primary" /> <span>Payment Due Tracking</span></div>
                <div className="flex items-center space-x-2"><CheckCircle className="h-5 w-5 text-primary" /> <span>Financial reports & analytics</span></div>
                <div className="flex items-center space-x-2"><CheckCircle className="h-5 w-5 text-primary" /> <span>Free updates & new features</span></div>
              </div>

              <Button variant="hero" size="lg" className="w-full">Get InvMaster <ArrowRight className="ml-2 h-5 w-5" /></Button>
              <p className="text-center text-sm text-muted-foreground">
                15-day money-back guarantee • No setup fees • Cancel anytime
              </p>
            </CardContent>
          </Card>


          {/* Pro Plan */}
          <Card className="shadow-professional border-2 border-primary/20 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold">
              Most Popular
            </div>

            <CardHeader className="text-center pb-8 pt-12">
              <CardTitle className="text-2xl font-bold">InvMaster Pro</CardTitle>
              <CardDescription className="text-lg">Perfect for growing businesses</CardDescription>

              {/* Price + Gradient Save Badge */}
              <div className="mt-6 flex items-center justify-center space-x-3">
                <span className="text-5xl font-bold text-primary">₹3499</span>
                <span className="text-xl text-muted-foreground">/3 years</span>
                <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                  Save 22%
                </span>
              </div>

            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2"><CheckCircle className="h-5 w-5 text-primary" /> <span>Unlimited invoice creation</span></div>
                <div className="flex items-center space-x-2"><CheckCircle className="h-5 w-5 text-primary" /> <span>Client management system</span></div>
                <div className="flex items-center space-x-2"><CheckCircle className="h-5 w-5 text-primary" /> <span>Payment Due Tracking</span></div>
                <div className="flex items-center space-x-2"><CheckCircle className="h-5 w-5 text-primary" /> <span>Financial reports & analytics</span></div>
                <div className="flex items-center space-x-2"><CheckCircle className="h-5 w-5 text-primary" /> <span>Free updates & new features</span></div>
              </div>

              <Button variant="hero" size="lg" className="w-full">Get InvMaster <ArrowRight className="ml-2 h-5 w-5" /></Button>
              <p className="text-center text-sm text-muted-foreground">
                15-day money-back guarantee • No setup fees • Cancel anytime
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