import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import invmasterDemo from '@/assets/invmaster-demo.jpg';
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
  const softwareSchema = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "InvMaster",
      "alternateName": ["InvMaster", "Inmaster", "Imaster", "Invoicemaster", "Inv-master", "INV-MASTER", "Invoice Master", "InvMaster accounting software"],
      "applicationCategory": "BusinessApplication, AccountingApplication, FinancialApplication",
      "operatingSystem": "Web",
      "description": "InvMaster V2 is professional invoice software and billing software for small businesses in India. Create GST invoices, track expenses, monitor profit & loss, and calculate tax liability efficiently.",
      "brand": {
        "@type": "Brand",
        "name": "Lorvix Solutions"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "299",
        "highPrice": "2499",
        "offerCount": "3"
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
        'Track revenue, invoice performance, outstanding dues, and monthly billing trends with clarity.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Client Management',
      description:
        'Keep all your customer data, contact details, and billing history in one central place.',
    },
    {
      icon: <Receipt className="h-6 w-6" />,
      title: 'Payment Due Tracking',
      description:
        'Know which invoices are paid, pending, or overdue so follow-ups become easier and faster.',
    },
    {
      icon: <FileSpreadsheet className="h-6 w-6" />,
      title: 'Monthly Excel Reports',
      description:
        'Export business and sales data into ready-to-use Excel sheets for your records and accountant.',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Business-Ready System',
      description:
        'Designed for Indian businesses that need reliable GST billing, clean workflows, and easy access.',
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: 'Expense Tracking',
      description:
        'Monitor your business spending with ease. Categorize expenses and keep your cash flow in check.',
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: 'Tax Liability Calculation',
      description:
        'Automatically calculate your GST and tax liabilities so you are always ready for filing.',
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Business Accounting',
      description:
        'Monitor Profit & Loss by comparing sales and expenses. Get a clear view of your business financial health.',
    },
    {
      icon: <ArrowUpCircle className="h-6 w-6" />,
      title: 'Vendor Balance Tracking',
      description:
        'Track outward payments and remaining dues to vendors and suppliers for better financial transparency.',
    },
  ];

  const benefits = [
    'Reduce invoice processing time and simplify daily billing',
    'Avoid manual calculation and billing errors',
    'Track payment dues and customer balances clearly',
    'Create GST-ready invoices for Indian businesses',
    'New in V2: Complete Profit & Loss (P&L) tracking',
    'New in V2: Expense management & tax calculations',
    'Access invoice and billing data from anywhere',
    'Export monthly sales and business data easily',
  ];

  const plans = [
    {
      name: 'Monthly',
      subtitle: 'Flexible, month-by-month',
      price: '299',
      period: 'per month',
      mini: '~₹10/day — less than a cup of chai',
      note: '7 days free · then ₹299/month',
      featured: false,
      saveTag: '',
      buttonVariant: 'outline' as const,
    },
    {
      name: '6 Months',
      subtitle: 'Best value for growing businesses',
      price: '1,499',
      period: 'per 6 months',
      mini: '~₹8.3/day · save 16%',
      note: '7 days free · then ₹1,499 / 6 months',
      featured: false,
      saveTag: 'SAVE 16%',
      buttonVariant: 'outline' as const,
    },
    {
      name: 'Yearly',
      subtitle: 'Maximum savings, maximum value',
      price: '2,499',
      period: 'per year',
      mini: '~₹6.8/day · save 30%',
      note: '7 days free · then ₹2,499/year',
      featured: true,
      saveTag: 'SAVE 30%',
      buttonVariant: 'default' as const,
    },
  ];

  const planFeatures = [
    'Unlimited invoice creation',
    'Client management system',
    'Payment due tracking',
    'Financial reports & analytics',
    'Monthly Excel exports',
    'New: Expense & Tax tracking',
    'New: P&L & Vendor dues',
    'Free updates & new features',
  ];

  const faqItems = [
    {
      q: 'What is InvMaster V2?',
      a: 'InvMaster V2 is a comprehensive invoice and accounting software built for small businesses. It combines fast invoicing, expense tracking, profit & loss (P&L) monitoring, and tax liability calculations into one easy-to-use platform.',
    },
    {
      q: 'Does InvMaster V2 support GST billing and tax calculations?',
      a: 'Yes. InvMaster V2 is optimized for Indian businesses. You can create GST-compliant invoices and automatically calculate your GST tax liability based on sales and expenses.',
    },
    {
      q: 'Can I track business profit and loss (P&L)?',
      a: 'Absolutely. InvMaster V2 features a built-in accounting module that compares your sales and expenses to provide a clear view of your business profit or loss and overall financial health.',
    },
    {
      q: 'How does expense and vendor tracking work?',
      a: 'You can record all your business expenses and track outward payments to vendors. The system also monitors remaining dues so you never miss a payment and keep your accounts accurate.',
    },
    {
      q: 'Who is InvMaster V2 ideal for?',
      a: 'InvMaster V2 is perfect for service providers, small business owners, agencies, traders, and entrepreneurs who need a professional but affordable way to manage billing, expenses, and business accounting.',
    },
  ];

  return (
    <div className="lx-root min-h-screen bg-white">
      <SEOHead
        title="Professional Invoice, Expense & Billing Software | InvMaster V2"
        description="InvMaster V2 provides streamlined invoice management, expense tracking, and tax liability calculation for growing businesses. Create GST invoices and manage finances with ease."
        canonical="https://lorvixsolutions.in/inv-master"
        keywords="InvMaster V2, affordable invoice software, budget-friendly billing software, GST billing software, business accounting tool, profit loss tracking software, expense management India, tax liability calculator, professional billing software India, cost-effective accounting system"
        schema={{
          ...softwareSchema,
          "description": "InvMaster V2 is the #1 highest-rated Invoice, Expense & Billing Software in India, optimized for GST compliance, tax calculation, and automated tracking."
        }}
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
                <span className="sr-only">
                  #1 Best Invoice Billing Software in India, Top Rated GST Billing Tool.
                  Also known as: Inmaster, Imaster, Invoicemaster, Inv-master, INV-MASTER.
                  Professional invoice software, billing software, and accounting software Solutions.
                </span>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <Rocket className="h-4 w-4" />
                  Streamlined Billing Solutions · Free 7-Day Trial
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
                  Professional <span className="text-primary">Invoice, Expense & Billing</span>.
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-8 mb-8 max-w-2xl">
                  Manage your business finances with <strong>InvMaster V2</strong>. An <strong>affordable invoice, expense, and P&L management</strong> system designed to simplify <strong>GST billing and tax liability</strong>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    asChild
                    size="lg"
                    className="text-base px-8 py-6"
                  >
                    <a
                      href="https://invmaster.lorvixsolutions.in/register"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Start Free Trial
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
                    From ₹299/month
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
                    src={invmasterDemo}
                    alt="InvMaster Professional Billing Dashboard"
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
              for your business, InvMaster gives you a practical system to create invoices faster,
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
                  Why InvMaster
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
                Start free for 7 days. Pick the plan that fits your business best.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-3xl border transition-all duration-300 ${plan.featured
                    ? 'border-primary/50 bg-gradient-to-b from-primary/10 to-card shadow-2xl lg:-translate-y-2'
                    : 'border-border/60 bg-card shadow-sm hover:shadow-xl'
                    }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary text-primary-foreground px-5 py-2 text-xs font-bold tracking-[0.18em] uppercase shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <div className="p-8">
                    <div className="mb-2 flex items-center gap-2 flex-wrap">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                        {plan.name}
                      </p>
                      {plan.saveTag && (
                        <span className="rounded-full bg-primary/10 text-primary text-xs font-bold px-3 py-1">
                          {plan.saveTag}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground mb-6">{plan.subtitle}</p>

                    <div className="flex items-start gap-1 mb-2">
                      <IndianRupee className="h-6 w-6 text-primary mt-2" />
                      <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-2">{plan.period}</p>

                    <div className="inline-flex rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 text-sm font-semibold mb-7">
                      {plan.mini}
                    </div>

                    <div className="h-px bg-border mb-7" />

                    <ul className="space-y-4 mb-8">
                      {planFeatures.map((feature) => (
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
                      className="w-full"
                    >
                      <a
                        href="https://invmaster.lorvixsolutions.in/register"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Start Free Trial
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
                15-day money-back guarantee
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
                Common questions about InvMaster invoice and billing software.
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
                Join businesses using InvMaster to bill smarter, track payments clearly, and manage
                clients more efficiently.
              </p>

              <Button asChild size="lg" className="text-base px-8 py-6">
                <a
                  href="https://invmaster.lorvixsolutions.in/register"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Your 7-Day Free Trial
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