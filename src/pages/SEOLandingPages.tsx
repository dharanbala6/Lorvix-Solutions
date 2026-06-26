import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  ExternalLink,
  Globe,
  MessageCircle,
  Phone,
  Search,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
} from 'lucide-react';

const baseUrl = 'https://lorvixsolutions.in';
const phone = '+91 98849 48383';
const whatsapp = 'https://wa.me/919884948383';

const chennaiAreas = [
  'OMR',
  'Adyar',
  'Anna Nagar',
  'Guindy',
  'Velachery',
  'T Nagar',
  'Ambattur',
  'Tambaram',
  'Porur',
  'Perungudi',
  'Sholinganallur',
  'Nungambakkam',
];

const industries = [
  'travel agencies',
  'manufacturers',
  'engineering firms',
  'clinics and hospitals',
  'schools and colleges',
  'real estate and construction companies',
  'restaurants and catering businesses',
  'boutiques and jewellery stores',
  'logistics companies',
  'law firms and auditors',
  'gyms, salons, and spas',
  'startups and local service businesses',
];

const packages = [
  {
    name: 'Starter Business Website',
    price: 'Quote after scope',
    desc: 'Best for service businesses that need a sharp online presence, enquiry form, WhatsApp CTA, and fast mobile pages.',
    items: ['Home, services, about, contact', 'Mobile responsive design', 'Basic SEO setup', 'Contact and WhatsApp leads'],
  },
  {
    name: 'Growth Website',
    price: 'Quote after scope',
    desc: 'Best for companies that need portfolio sections, stronger content, landing pages, and better lead qualification.',
    items: ['Custom page structure', 'Portfolio or case study sections', 'SEO metadata and schema', 'Speed and conversion checks'],
  },
  {
    name: 'E-commerce / Catalogue',
    price: 'Quote after scope',
    desc: 'Best for retail, boutique, manufacturing, or product businesses that need catalogue pages or online selling.',
    items: ['Product/category structure', 'Enquiry or payment flow', 'Admin-friendly content setup', 'Performance optimization'],
  },
];

const faqs = [
  {
    q: 'How fast can Lorvix Solutions build a website?',
    a: 'Most business websites are delivered in 1 to 4 weeks after the content, brand details, and scope are confirmed.',
  },
  {
    q: 'Do you work only with Chennai businesses?',
    a: 'No. Lorvix Solutions serves Chennai, Tamil Nadu, India, and international clients, with remote delivery through calls, WhatsApp, and email.',
  },
  {
    q: 'Can you redesign an old website?',
    a: 'Yes. We can redesign old static websites, improve speed, modernize layouts, fix mobile issues, and rebuild enquiry flows.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes. Website clients get ongoing support for changes, fixes, guidance, and technical help after launch.',
  },
];

function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#organization`,
    name: 'Lorvix Solutions',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/logo.png`,
    email: 'support@lorvixsolutions.in',
    telephone: '+919884948383',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+919884948383',
      contactType: 'sales',
      areaServed: ['IN', 'US'],
      availableLanguage: ['en', 'ta'],
    },
    areaServed: [
      { '@type': 'City', name: 'Chennai' },
      { '@type': 'State', name: 'Tamil Nadu' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United States' },
    ],
    sameAs: [],
  };
}

function ctaSchema(name: string, description: string, path: string) {
  return [
    localBusinessSchema(),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name,
      serviceType: 'Website design and web development',
      provider: { '@id': `${baseUrl}/#organization` },
      areaServed: ['Chennai', 'Tamil Nadu', 'India', 'United States'],
      description,
      url: `${baseUrl}${path}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name, item: `${baseUrl}${path}` },
      ],
    },
  ];
}

function PageShell({
  title,
  description,
  canonical,
  keywords,
  schema,
  eyebrow,
  heading,
  lead,
  children,
}: {
  title: string;
  description: string;
  canonical: string;
  keywords: string;
  schema: Record<string, unknown>[];
  eyebrow: string;
  heading: ReactNode;
  lead: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={title}
        description={description}
        canonical={canonical}
        keywords={keywords}
        schema={schema}
      />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/60 to-violet-50 pt-24 pb-20">
          <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-blue-200/40 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center">
              <div>
                <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-[.15em] text-blue-700">
                  <Search className="h-3.5 w-3.5" /> {eyebrow}
                </p>
                <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
                  {heading}
                </h1>
                <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">{lead}</p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 px-8 text-base font-bold shadow-xl shadow-blue-200/70 hover:opacity-90">
                    <Link to="/contact">Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
                  </Button>
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-emerald-400 px-8 py-3 text-base font-bold text-emerald-700 transition-colors hover:bg-emerald-50">
                    <MessageCircle className="h-5 w-5" /> WhatsApp Now
                  </a>
                </div>
              </div>
              <aside className="rounded-3xl border border-blue-100 bg-white p-7 shadow-2xl shadow-blue-100/60">
                <p className="mb-4 text-xs font-bold uppercase tracking-[.15em] text-slate-400">Why clients trust us</p>
                <div className="space-y-4">
                  {[
                    ['Live portfolio', 'Real websites you can open and inspect.'],
                    ['Fast delivery', 'Most projects launch within 1 to 4 weeks.'],
                    ['Lead focused', 'Built around calls, WhatsApp, and enquiries.'],
                    ['Lifetime support', 'We stay available after launch.'],
                  ].map(([label, text]) => (
                    <div key={label} className="flex gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                      <div>
                        <p className="font-extrabold text-slate-900">{label}</p>
                        <p className="text-sm leading-relaxed text-slate-500">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-7 rounded-2xl bg-slate-950 p-5 text-white">
                  <p className="text-sm font-bold">Direct project discussion</p>
                  <a href="tel:+919884948383" className="mt-2 flex items-center gap-2 text-lg font-extrabold">
                    <Phone className="h-4 w-4 text-blue-300" /> {phone}
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  );
}

function ProofSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { icon: <Globe className="h-6 w-6" />, title: 'Portfolio you can verify', text: 'Pavithra Travels, Spectrum Cutting Tools, and JS Engineering are live client websites, not mockups.' },
            { icon: <TrendingUp className="h-6 w-6" />, title: 'Built for enquiries', text: 'Every page structure focuses on trust, proof, speed, calls, forms, and WhatsApp actions.' },
            { icon: <Shield className="h-6 w-6" />, title: 'Serious technical foundation', text: 'Responsive layouts, SEO metadata, schema, analytics readiness, and performance checks are part of delivery.' },
          ].map(item => (
            <div key={item.title} className="rounded-2xl border border-slate-100 bg-white p-7 shadow-lg shadow-slate-100">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white">{item.icon}</div>
              <h2 className="mb-2 text-xl font-extrabold text-slate-900">{item.title}</h2>
              <p className="leading-relaxed text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[.15em] text-blue-600">Questions clients ask</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">Clear answers before you start</h2>
        </div>
        <div className="space-y-4">
          {faqs.map(item => (
            <div key={item.q} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-extrabold text-slate-900">{item.q}</h3>
              <p className="leading-relaxed text-slate-500">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-violet-700 p-10 text-white shadow-2xl shadow-blue-200 md:p-14">
          <Star className="mx-auto mb-4 h-10 w-10 fill-yellow-300 text-yellow-300" />
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-5xl">Ready to turn searches into enquiries?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-blue-100">Tell us what your business sells, who you want to reach, and how soon you want to launch. We will suggest the right website structure before quoting.</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-white px-9 text-base font-extrabold text-blue-700 hover:bg-blue-50">
              <Link to="/contact">Request a Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-9 py-3 text-base font-extrabold text-white hover:bg-emerald-400">
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WebDesignCompanyChennai() {
  return (
    <PageShell
      title="Web Design Company in Chennai | Website Development Services"
      description="Lorvix Solutions is a Chennai web design and website development company building fast, mobile-first, SEO-ready business websites with live portfolio proof."
      canonical={`${baseUrl}/web-design-company-chennai`}
      keywords="web design company in Chennai, web development company in Chennai, website designers in Chennai, website development services Chennai, affordable web design services Chennai, corporate website design company Chennai"
      schema={ctaSchema('Web Design Company in Chennai', 'Professional website design and web development services for Chennai businesses that need fast, credible, enquiry-focused websites.', '/web-design-company-chennai')}
      eyebrow="Chennai web design agency"
      heading={<>Web design company in Chennai for businesses that need serious online credibility</>}
      lead="Lorvix Solutions builds clean, fast, mobile-first websites for Chennai, India, USA, and worldwide clients who want more trust, better enquiries, and a stronger digital presence."
    >
      <ProofSection />
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[.15em] text-blue-600">Local search coverage</p>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">Built for Chennai search intent without awkward keyword stuffing</h2>
            <p className="leading-relaxed text-slate-600">The page structure, headings, schema, portfolio proof, and service language are aligned with how Chennai business owners search for website design, development, redesign, maintenance, e-commerce, and quote requests.</p>
          </div>
          <div className="rounded-3xl bg-white p-7 shadow-xl shadow-slate-100">
            <h3 className="mb-4 text-xl font-extrabold text-slate-900">Chennai and global service coverage</h3>
            <div className="flex flex-wrap gap-2">
              {chennaiAreas.map(area => (
                <span key={area} className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">{area}</span>
              ))}
              <span className="rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">and more</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-500">We support businesses across Chennai's major commercial areas and also work remotely with clients across India, the USA, and worldwide markets.</p>
          </div>
        </div>
      </section>
      <FAQSection />
      <FinalCTA />
    </PageShell>
  );
}

export function WebsiteDesignCostChennai() {
  return (
    <PageShell
      title="Website Design Cost in Chennai | Web Development Packages"
      description="See how website design cost in Chennai is estimated. Lorvix Solutions explains business website, redesign, e-commerce, and custom web development package factors."
      canonical={`${baseUrl}/website-design-cost-chennai`}
      keywords="website design cost in Chennai, web development packages Chennai, ecommerce website price Chennai, web design charges in Chennai, web design quotation Chennai, affordable ecommerce website cost Chennai"
      schema={ctaSchema('Website Design Cost in Chennai', 'Website design cost guidance and web development package planning for Chennai businesses.', '/website-design-cost-chennai')}
      eyebrow="Website pricing and packages"
      heading={<>Website design cost in Chennai, explained clearly before you commit</>}
      lead="Every business website has a different scope. This page helps Chennai, India, USA, and worldwide clients understand what affects pricing, what is included, and how to request a practical quote without confusion."
    >
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[.15em] text-blue-600">Package direction</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">Choose the website scope that matches your next goal</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {packages.map(pkg => (
              <div key={pkg.name} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-xl shadow-slate-100">
                <h3 className="mb-2 text-xl font-extrabold text-slate-900">{pkg.name}</h3>
                <p className="mb-4 text-sm font-bold text-blue-600">{pkg.price}</p>
                <p className="mb-6 leading-relaxed text-slate-500">{pkg.desc}</p>
                <div className="space-y-3">
                  {pkg.items.map(item => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[.15em] text-blue-600">What affects cost</p>
              <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">A quote depends on scope, not guesswork</h2>
              <p className="leading-relaxed text-slate-600">The main cost drivers are page count, content depth, catalogue size, payment or enquiry flows, custom design complexity, admin features, integrations, migration, SEO requirements, and launch timeline.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {['New business website', 'Website redesign', 'E-commerce or catalogue', 'Speed optimization', 'Payment gateway setup', 'Domain and hosting setup'].map(item => (
                <div key={item} className="rounded-2xl bg-white p-5 font-bold text-slate-800 shadow-sm">
                  <Sparkles className="mb-3 h-5 w-5 text-blue-600" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FAQSection />
      <FinalCTA />
    </PageShell>
  );
}

export function BusinessWebsiteDesignChennai() {
  return (
    <PageShell
      title="Business Website Design Chennai | Industry Website Developers"
      description="Business website design in Chennai for travel, manufacturing, clinics, schools, real estate, restaurants, boutiques, logistics, law firms, gyms, and startups."
      canonical={`${baseUrl}/business-website-design-chennai`}
      keywords="business website design Chennai, travel agency website development Chennai, manufacturing industry web development Chennai, clinic website developers Chennai, restaurant online ordering website Chennai, startup website design packages Chennai"
      schema={ctaSchema('Business Website Design Chennai', 'Industry-focused business website design for Chennai companies across services, retail, healthcare, education, manufacturing, travel, and startups.', '/business-website-design-chennai')}
      eyebrow="Industry website development"
      heading={<>Business website design in Chennai for companies that need trust before the first call</>}
      lead="Different industries and markets need different proof. We plan websites for Chennai businesses and remote clients worldwide around what customers check before they call, enquire, book, request a quote, or visit your store."
    >
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[.15em] text-blue-600">Industry coverage</p>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">One strong page, many relevant business intents</h2>
            <p className="leading-relaxed text-slate-600">Instead of thin pages for every industry, this page helps Google and customers understand the kinds of Chennai businesses Lorvix Solutions can serve.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(industry => (
              <div key={industry} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <CheckCircle className="mb-3 h-5 w-5 text-emerald-500" />
                <h3 className="font-extrabold capitalize text-slate-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { icon: <Clock className="h-6 w-6" />, title: 'Fast trust', text: 'Clear service, product, or portfolio sections for quick buyer confidence.' },
            { icon: <MessageCircle className="h-6 w-6" />, title: 'Easy enquiries', text: 'Forms, phone links, and WhatsApp actions placed where visitors are ready.' },
            { icon: <ExternalLink className="h-6 w-6" />, title: 'Proof first', text: 'Project galleries, client examples, certifications, and outcomes where relevant.' },
            { icon: <Search className="h-6 w-6" />, title: 'Search ready', text: 'SEO titles, descriptions, schema, and structure matched to real service demand.' },
          ].map(item => (
            <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">{item.icon}</div>
              <h3 className="mb-2 text-lg font-extrabold text-slate-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <FAQSection />
      <FinalCTA />
    </PageShell>
  );
}
