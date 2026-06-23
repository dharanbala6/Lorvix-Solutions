import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import lorvixBillingDemo from '@/assets/lorvix-billing-demo.jpg';
import {
  CheckCircle,
  ArrowRight,
  BarChart3,
  FileText,
  Users,
  Shield,
  Clock3,
  Receipt,
  FileSpreadsheet,
  Rocket,
  IndianRupee,
  Wallet,
  Calculator,
  TrendingUp,
  ArrowUpCircle,
} from 'lucide-react';

const Software = () => {
  const registerUrl =
    'https://billing.lorvixsolutions.in/register?source=lorvix&backlink=https%3A%2F%2Florvixsolutions.in%2Florvix-billing';

  const softwareSchema = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Lorvix Billing",
      "alternateName": ["Lorvix Billing", "Lorvix Billing Software", "Lorvix Billing accounting software", "Lorvix invoice software", "Lorvix GST billing software"],
      "applicationCategory": "BusinessApplication, AccountingApplication, FinancialApplication",
      "operatingSystem": "Web",
      "description": "Lorvix Billing is professional invoice software and billing software for small businesses in India. Create GST invoices, track expenses, monitor profit & loss, and calculate tax liability efficiently.",
      "brand": {
        "@type": "Brand",
        "name": "Lorvix Solutions"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "0",
        "highPrice": "2499",
        "offerCount": "4"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "12"
      }
    }
  ];

  const features = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: 'Smart Invoice Creation',
      description:
        'Generate professional GST invoices in seconds with automated calculations and clean document layouts.',
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Advanced Analytics',
      description:
        'Track revenue, invoice performance, outstanding dues, and monthly billing trends at a glance.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Client Management',
      description:
        'Keep all your customer data, contact details, and billing history organized in one place.',
    },
    {
      icon: <Receipt className="h-6 w-6" />,
      title: 'Payment Tracking',
      description:
        'Know exactly which invoices are paid, pending, or overdue so you can follow up faster.',
    },
    {
      icon: <FileSpreadsheet className="h-6 w-6" />,
      title: 'No Spreadsheets Needed',
      description:
        'Export your business data into ready-to-use Excel sheets when you need to share them with your accountant.',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Secure Cloud Storage',
      description:
        'Your data is safely backed up in the cloud, accessible only to you from any device, anywhere.',
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: 'Expense Tracking',
      description:
        'Monitor your business spending effortlessly. Categorize expenses and keep your cash flow positive.',
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: 'Tax & GST Ready',
      description:
        'Automatically calculate your GST so you are always prepared for tax filing season.',
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Performance Reports',
      description:
        'Compare sales and expenses to get a clear, honest view of your business\'s financial health.',
    },
    {
      icon: <ArrowUpCircle className="h-6 w-6" />,
      title: 'Vendor Tracking',
      description:
        'Keep track of outward payments and dues to suppliers to maintain great vendor relationships.',
    },
  ];

  const benefits = [
    'Create invoices in seconds, not minutes',
    'Track expenses without dealing with spreadsheets',
    'Get GST-ready reports exactly when you need them',
    'See your business performance at a glance',
    'Know instantly which invoices are pending or paid',
    'Access your business data securely from anywhere',
    'Generate professional PDF invoices for every client',
    'Built specifically for Indian small businesses',
  ];

  const plans = [
    {
      name: 'Free Forever',
      subtitle: 'Everything you need to get started',
      price: '0',
      period: '',
      mini: 'For freelancers and new businesses.',
      note: '',
      featured: false,
      secondary: false,
      saveTag: '',
      features: [
        '15 invoices/month',
        '15 expenses/month',
        'Client management',
        'Professional PDF invoices',
        'GST-ready reports',
        'Dashboard insights',
        'Cloud access',
      ],
      buttonText: 'Start Free',
      buttonVariant: 'outline'
    },
    {
      name: 'Premium Monthly',
      subtitle: 'Flexible monthly access',
      price: '299',
      period: '',
      mini: 'For businesses that want flexibility.',
      note: '',
      featured: false,
      secondary: false,
      saveTag: '',
      features: [
        'Invoices in seconds',
        'Effortless expense tracking',
        'Unlimited clients',
        'GST-ready reports',
        'Paid and pending tracking',
        'Professional PDFs',
        'Any-device access',
        'Secure cloud storage'
      ],
      buttonText: 'Choose Monthly',
      buttonVariant: 'default'
    },
    {
      name: 'Premium Yearly',
      subtitle: 'Lowest effective monthly cost',
      price: '2,499',
      period: '',
      mini: 'Best value for growing businesses.',
      note: '',
      featured: false,
      secondary: true,
      saveTag: 'BEST VALUE',
      features: [
        'Everything in Premium',
        'Unlimited records',
        'Maximum yearly savings',
        'Lowest monthly cost',
        'Save ₹1,089',
        'For long-term growth',
      ],
      buttonText: 'Choose Yearly',
      buttonVariant: 'default'
    },
    {
      name: 'Premium Half-Yearly',
      subtitle: 'Best balance of savings and flexibility',
      price: '1,499',
      period: '',
      mini: 'Our most popular plan.',
      note: '',
      featured: true,
      secondary: false,
      saveTag: 'MOST POPULAR',
      features: [
        'Everything in Premium',
        'Unlimited invoices and expenses',
        'No spreadsheets needed',
        'Faster record management',
        'Save ₹295',
        'Small business favorite',
      ],
      buttonText: 'Choose Half-Yearly',
      buttonVariant: 'default'
    },
  ];

  const faqItems = [
    {
      q: 'What is Lorvix Billing?',
      a: 'Lorvix Billing is a comprehensive invoice and accounting software built for small businesses. It combines fast invoicing, expense tracking, profit & loss (P&L) monitoring, and tax liability calculations into one easy-to-use platform.',
    },
    {
      q: 'Does Lorvix Billing support GST billing and tax calculations?',
      a: 'Yes. Lorvix Billing is optimized for Indian businesses. You can create GST-compliant invoices and automatically calculate your GST tax liability based on sales and expenses.',
    },
    {
      q: 'Can I track business profit and loss (P&L)?',
      a: 'Absolutely. Lorvix Billing features a built-in accounting module that compares your sales and expenses to provide a clear view of your business profit or loss and overall financial health.',
    },
    {
      q: 'How does expense and vendor tracking work?',
      a: 'You can record all your business expenses and track outward payments to vendors. The system also monitors remaining dues so you never miss a payment and keep your accounts accurate.',
    },
    {
      q: 'Who is Lorvix Billing  ideal for?',
      a: 'Lorvix Billing is perfect for service providers, small business owners, agencies, traders, and entrepreneurs who need a professional but affordable way to manage billing, expenses, and business accounting.',
    },
  ];

  return (
    <div className="lx-root min-h-screen bg-white">
      <SEOHead
        title="Free GST Billing Software with Expense & Due Tracking | Lorvix Billing | Lorvix Billing"
        description="Lorvix Billing provides streamlined invoice management, expense tracking, and tax liability calculation for growing businesses. Create GST invoices and manage finances with ease."
        canonical="https://lorvixsolutions.in/lorvix-billing"
        keywords="Lorvix Billing, affordable invoice software, budget-friendly billing software, GST billing software, business accounting tool, profit loss tracking software, expense management India, tax liability calculator, professional billing software India, cost-effective accounting system"
        schema={softwareSchema}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/60 to-violet-50 pt-24 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_top_right,hsl(var(--primary)/0.14),transparent_25%),radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.1),transparent_30%)]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <Rocket className="h-4 w-4" />
                  Streamlined Billing Solutions · Free Forever Plan
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
                  Professional <span className="text-primary">Invoice, Expense & Billing</span>.
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-8 mb-8 max-w-2xl">
                  Manage your business finances with <strong>Lorvix Billing</strong>. An <strong>affordable invoice, expense, and P&L management</strong> system designed to simplify <strong>GST billing and tax liability</strong>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    asChild
                    size="lg"
                    className="text-base px-8 py-6"
                  >
                    <a
                      href={registerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Start for Free
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="text-base px-8 py-6"
                    onClick={() =>
                      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    View Pricing
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    GST-ready invoices
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Free Forever available
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Cancel anytime
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-3xl border border-border/60 bg-card shadow-2xl p-4">
                  <img
                    src={lorvixBillingDemo}
                    alt="Lorvix Billing Professional Billing Dashboard"
                    width={1200}
                    height={800}
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    className="w-full h-auto rounded-2xl"
                    title="Invoice Billing Software Dashboard"
                  />
                </div>
                <div className="absolute -top-4 -right-4 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-lg">
                  Enterprise-Ready Billing
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-14 text-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Invoice Software That Makes Billing Easy
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-8">
              If you are searching for invoice software, billing software, or GST billing software
              for your business, Lorvix Billing gives you a practical system to create invoices faster,
              manage clients better, and stay on top of payments.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                Features
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Everything Your Business Needs
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Built for Indian businesses that want clear invoicing, structured billing, and
                smarter payment tracking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border-border/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card"
                >
                  <CardContent className="p-7">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-7">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                  Why Lorvix Billing
                </p>
                <h3 className="text-3xl md:text-5xl font-bold mb-6">
                  Transform Your Invoice Management
                </h3>
                <p className="text-xl text-muted-foreground leading-8">
                  Everything you need to manage business invoicing, payment tracking, and client
                  billing in one focused system.
                </p>
              </div>

              <div className="space-y-5">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <span className="text-lg text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                Pricing
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Simple, Transparent Plans
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Start free forever. Upgrade only when your business grows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-3xl border transition-all duration-300 flex flex-col ${plan.featured
                    ? 'border-primary/50 bg-gradient-to-b from-primary/10 to-card shadow-2xl lg:-translate-y-2'
                    : plan.secondary
                      ? 'border-sky-400/50 bg-gradient-to-b from-sky-500/10 to-card shadow-lg'
                      : 'border-border/60 bg-card shadow-sm hover:shadow-xl'
                    }`}
                >
                  {plan.saveTag && (
                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-5 py-2 text-xs font-bold tracking-[0.18em] uppercase shadow-lg ${plan.featured ? 'bg-primary text-primary-foreground' : 'bg-sky-500 text-white'}`}>
                      {plan.saveTag}
                    </div>
                  )}

                  <div className="p-7 flex h-full flex-col">
                    <div className="mb-2 flex items-center gap-2 flex-wrap">
                      <p className="text-lg font-semibold tracking-tight">
                        {plan.name}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground mb-6">{plan.subtitle}</p>

                    <div className="flex items-start gap-1 mb-2">
                      <IndianRupee className="h-5 w-5 text-primary mt-2" />
                      <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-2">{plan.period}</p>

                    <div className="inline-flex rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 text-sm font-semibold mb-7">
                      {plan.mini}
                    </div>

                    <div className="h-px bg-border mb-7" />

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      size="lg"
                      variant={plan.featured ? 'default' : 'outline'}
                      className="w-full mt-auto"
                    >
                      <a
                        href={registerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Choose Plan
                      </a>
                    </Button>

                    <p className="text-center text-sm text-muted-foreground mt-4">{plan.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                Free Forever plan
              </div>
              <div className="flex items-center gap-2">
                <Receipt className="h-4 w-4 text-primary" />
                No setup fees
              </div>
              <div className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-primary" />
                Cancel anytime
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                FAQ
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about Lorvix Billing invoice and billing software.
              </p>
            </div>

            <div className="space-y-6">
              {faqItems.map((item) => (
                <Card key={item.q} className="border-border/60 bg-card shadow-sm">
                  <CardContent className="p-7">
                    <h3 className="text-xl font-semibold mb-3">{item.q}</h3>
                    <p className="text-muted-foreground leading-7">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card px-8 py-14 md:px-14 text-center shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                Get Started Today
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Take Control of Your Invoicing?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Join businesses using Lorvix Billing to bill smarter, track payments clearly, and manage
                clients more efficiently.
              </p>

              <Button asChild size="lg" className="text-base px-8 py-6">
                <a
                  href={registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Choose Plan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <p className="mt-4 text-sm text-muted-foreground">
                No setup fees · Cancel anytime
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Software;
