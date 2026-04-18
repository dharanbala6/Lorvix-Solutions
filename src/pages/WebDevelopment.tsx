import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, Globe, Smartphone, Zap,
  Palette, Code, Clock, ExternalLink, MessageCircle,
  Phone, TrendingUp, Shield, Search, Star, ChevronRight
} from 'lucide-react';
import ptlogo from '../assets/pt.png';
import sclogo from '../assets/sc.png';
import jslogo from '../assets/js.png';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.classList.remove('lx-hidden');
        el.classList.add('lx-revealed');
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const portfolio = [
  {
    name: 'Pavithra Travels',
    url: 'https://pavithratravels.com',
    industry: 'Travel & Tourism',
    location: 'Chennai, Tamil Nadu',
    desc: 'A travel agency website that showcases tour packages, captures visitor details, and drives booking enquiries — 24 hours a day, without manual effort.',
    outcome: 'Online presence generating enquiries around the clock',
    built: ['Responsive tour package listings','Multi-destination image showcase','WhatsApp one-tap integration','Mobile-first, fast-loading pages','Google-indexed content structure'],
    grad: 'linear-gradient(135deg,#1d4ed8 0%,#0ea5e9 100%)',
    accent: '#2563eb', check: '#60a5fa', init: 'PT',
    logo: ptlogo,
  },
  {
    name: 'Spectrum Cutting Tools',
    url: 'https://spectrumcuttingtools.com',
    industry: 'Industrial Manufacturing · B2B',
    location: 'Tamil Nadu',
    desc: 'A B2B product catalogue website for a precision cutting tools manufacturer — professional, credible, and built to attract wholesale buyers across India.',
    outcome: 'B2B platform driving wholesale buyer enquiries across India',
    built: ['Full product catalogue with categories','Professional brand identity design','B2B enquiry & quote request forms','Optimised for industry search terms','Trust-building about & certification sections'],
    grad: 'linear-gradient(135deg,#6d28d9 0%,#a855f7 100%)',
    accent: '#7c3aed', check: '#c084fc', init: 'SC',
    logo: sclogo,
  },
  {
    name: 'JS Engineering',
    url: 'https://jsenggineering.in',
    industry: 'Engineering Services',
    location: 'Tamil Nadu',
    desc: 'An authority-building website for an engineering firm — showcasing expertise, project history, and technical credentials to convert visitors into clients.',
    outcome: 'Authority website that turns visitors into qualified leads',
    built: ['Services & expertise showcase','Project portfolio with outcomes','Client lead capture forms','Professional typography & layout','Location & contact integration'],
    grad: 'linear-gradient(135deg,#1e40af 0%,#3b82f6 100%)',
    accent: '#1d4ed8', check: '#93c5fd', init: 'JS',
    logo: jslogo,
  },
];

const services = [
  { icon: <Globe className="h-6 w-6"/>,    title:'Custom Website Design',      desc:'Tailored to your brand, industry, and business goals. Every element designed to convert — not just look good.' },
  { icon: <Smartphone className="h-6 w-6"/>,title:'Mobile-First Development',   desc:'Over 70% of your clients will visit on a phone. Every page is pixel-perfect on every screen.' },
  { icon: <Zap className="h-6 w-6"/>,       title:'Speed Optimised',            desc:'Fast-loading pages rank higher on Google and keep visitors engaged instead of bouncing away.' },
  { icon: <Search className="h-6 w-6"/>,    title:'SEO Ready from Day One',     desc:'Proper structure, meta tags, and content so Google finds your business and puts you in front of clients.' },
  { icon: <MessageCircle className="h-6 w-6"/>,title:'WhatsApp & Lead Forms',  desc:'One-tap WhatsApp buttons and smart enquiry forms that actually get filled in by real prospects.' },
  { icon: <Clock className="h-6 w-6"/>,     title:'Lifetime Maintenance',       desc:'Updates, changes, security — all handled by us so you can focus entirely on running your business.' },
];

const process = [
  { step:'01', title:'Free Consultation',   desc:'We learn your business goals, industry, and what you need from your website. No cost, no pressure.' },
  { step:'02', title:'Design & Approval',   desc:'We design your website and share it for your feedback before writing a single line of code.' },
  { step:'03', title:'Build & Test',        desc:'Clean development, tested on all devices, fully QA-checked — ready to impress on day one.' },
  { step:'04', title:'Launch & Support',    desc:"We go live and stay with you. Changes, updates, issues — we handle it. That's the Lorvix promise." },
];

export default function WebDevelopment() {
  const h1Ref    = useReveal();
  const port1    = useReveal();
  const port2    = useReveal();
  const port3    = useReveal();
  const svcRef   = useReveal();
  const procRef  = useReveal();
  const ctaRef   = useReveal();

  const webDevSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "World-Class Website Development & Digital Transformation",
      "provider": { "@id": "https://lorvixsolutions.in/#organization" },
      "description": "High-performance website development services for a global market. We specialize in enterprise-grade web applications, world-class UX design, and scalable digital solutions.",
      "areaServed": ["Worldwide"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Global Web Solutions",
        "itemListElement": services.map((s, i) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": s.title,
            "description": s.desc
          }
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Global Web Development Portfolio",
      "numberOfItems": portfolio.length,
      "itemListElement": portfolio.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": p.name,
        "url": p.url,
        "description": p.desc
      }))
    }
  ];

  return (
    <div className="lx-root min-h-screen bg-white">
      <SEOHead 
        title="World-Class Website Development | Professional Global Web Agency"
        description="Lorvix Solutions delivers world-class website development and scalable digital platforms for businesses globally. High-performance design meets precision engineering."
        canonical="https://lorvixsolutions.in/web-development"
        keywords="world-class web development, international website design, enterprise web applications, global digital agency, professional web services"
        schema={webDevSchema}
      />
      <Header />
      <main>

      {/* ════ HERO ════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/60 to-violet-50 pt-24 pb-20">
        <div className="absolute -top-40 -right-40 w-[580px] h-[580px] rounded-full opacity-25 pointer-events-none"
          style={{ background:'radial-gradient(circle,#93c5fd,#c4b5fd 60%,transparent 80%)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={h1Ref} className="lx-hidden max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
              <span className="relative lx-pulse-dot w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
              Scalable Digital Solutions
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.08] mb-6 tracking-tight">
              World-Class <span className="lx-grad-text">Web Engineering</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 mb-8 max-w-[480px] leading-relaxed">
              We deliver enterprise-grade digital experiences that bridge the gap between imagination and technical reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button asChild size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 font-extrabold text-base px-10  transition-all hover:scale-105 rounded-xl">
                <Link to="/contact">Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <a href="https://wa.me/919884948383" target="_blank" rel="noopener noreferrer"
                className="lx-wa-btn inline-flex items-center justify-center gap-2 border-2 border-emerald-400 text-emerald-700 hover:bg-emerald-50 font-bold text-base px-8 py-3 rounded-lg transition-all">
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap gap-5 text-sm text-slate-500">
              {['Free consultation','1–4 weeks delivery','Lifetime support included'].map(t => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-emerald-500" /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ PORTFOLIO ════ */}
      <section className="py-24 bg-white" aria-label="Portfolio of delivered websites">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[.15em] text-blue-600 mb-3">Our Portfolio · All Live & Verified</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              See Exactly What We Deliver
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Click "Visit Site" on any card — you'll land on the real, live website we built.
              Every feature listed below is actually there.
            </p>
          </div>

          <div className="space-y-10">
            {portfolio.map((p, i) => {
              const ref = [port1, port2, port3][i];
              return (
                <div key={i} ref={ref} className="lx-hidden group rounded-3xl border-2 border-slate-100 overflow-hidden bg-white transition-all duration-300 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/50">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    {/* Visual */}
                    <div className="lg:col-span-2 min-h-[240px] flex flex-col items-center justify-center relative overflow-hidden p-10"
                      style={{ background: p.grad }}>
                      <div className="absolute inset-0 opacity-15"
                        style={{ backgroundImage:'radial-gradient(circle at 1.5px 1.5px,rgba(255,255,255,.9) 1.5px,transparent 0)', backgroundSize:'18px 18px' }} />
                      <div className="w-20 h-20 rounded-2xl bg-white p-3 flex items-center justify-center mb-4 z-10 shadow-lg shadow-white/30">
                        <img
                          src={p.logo}
                          alt={p.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-white font-extrabold text-2xl text-center z-10">{p.name}</p>
                      <p className="text-white/70 text-sm z-10 mt-1 text-center">{p.industry}</p>
                      <p className="text-white/50 text-xs z-10 mt-0.5">{p.location}</p>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 p-8 md:p-10 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-5 flex-wrap">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: p.accent }}>{p.industry}</p>
                            <h3 className="text-2xl font-extrabold text-slate-900">{p.name}</h3>
                          </div>
                          <a href={p.url} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-bold border-2 rounded-xl px-5 py-2.5 transition-all hover:scale-105 flex-shrink-0"
                            style={{ color: p.accent, borderColor: p.accent + '55', background: p.accent + '0a' }}>
                            Visit Live Site <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>

                        <p className="text-slate-500 leading-relaxed mb-5">{p.desc}</p>

                        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl px-4 py-2 text-sm font-semibold mb-6">
                          <TrendingUp className="h-4 w-4 flex-shrink-0" /> {p.outcome}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
                          {p.built.map((f, fi) => (
                            <div key={fi} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: p.check }} />
                              <span className="text-sm text-slate-700">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-14">
            <p className="text-lg text-slate-500 mb-5">Ready to join our portfolio?</p>
            <Button asChild size="lg"
              className="lx-btn-shine text-base font-bold px-12 bg-gradient-to-r from-blue-600 to-violet-600 hover:opacity-90 shadow-xl shadow-blue-200/60 transition-all hover:scale-105">
              <Link to="/contact">Let's Build Your Website <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ════ SERVICES ════ */}
      <section className="py-24" style={{ background:'linear-gradient(135deg,#f0f7ff,#f5f3ff)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={svcRef} className="lx-hidden">
            <div className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[.15em] text-violet-600 mb-3">What's Included</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
                Everything Your Website Needs to Succeed
              </h2>
              <p className="text-slate-500 text-lg max-w-xl mx-auto">Every service below is included — not an upsell.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div key={i} className="lx-why-card bg-white rounded-2xl p-7 border border-blue-50 shadow-md"
                  style={{ animationDelay:`${i*.08}s` }}>
                  <div className="why-icon w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5"
                    style={{ background:'linear-gradient(135deg,#2563eb,#7c3aed)' }}>
                    {s.icon}
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ PROCESS ════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={procRef} className="lx-hidden">
            <div className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[.15em] text-blue-600 mb-3">How It Works</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
                From First Call to Live Website
              </h2>
              <p className="text-slate-500 text-lg max-w-xl mx-auto">Transparent, simple, no surprises — you're involved at every step.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p, i) => (
                <div key={i} className="lx-why-card relative rounded-2xl p-7 border border-blue-100 shadow-md"
                  style={{ background:'linear-gradient(135deg,#eff6ff,#f5f3ff)', animationDelay:`${i*.1}s` }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-xl mb-5 shadow-lg shadow-blue-200"
                    style={{ background:'linear-gradient(135deg,#2563eb,#7c3aed)' }}>
                    {p.step}
                  </div>
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-3 z-10">
                      <ChevronRight className="h-5 w-5 text-blue-300" />
                    </div>
                  )}
                  <h3 className="font-extrabold text-slate-900 text-lg mb-3">{p.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ CTA ════ */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ctaRef} className="lx-hidden">
            <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center shadow-2xl"
              style={{ background:'linear-gradient(135deg,#1d4ed8,#6d28d9)' }}>
              <div className="absolute inset-0 opacity-[.07]"
                style={{ backgroundImage:'radial-gradient(circle at 1px 1px,white 1.5px,transparent 0)', backgroundSize:'28px 28px' }} />
              <div className="relative">
                <Star className="h-10 w-10 mx-auto mb-4" style={{ color:'#fde68a', fill:'#fde68a' }} />
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
                  Ready to Get Online?
                </h2>
                <p className="text-lg text-blue-100 mb-3 max-w-2xl mx-auto leading-relaxed">
                  Our slots fill fast. Get a free consultation today — we'll tell you exactly what your website will look like, what it'll cost, and when it'll be live.
                </p>
                <p className="text-blue-300 text-sm mb-10">No jargon. No hidden fees. Straight answers.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg"
                    className="bg-white text-blue-700 hover:bg-blue-50 font-extrabold text-base px-10  transition-all hover:scale-105 rounded-xl">
                    <Link to="/contact">Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
                  </Button>
                  <a href="https://wa.me/919884948383" target="_blank" rel="noopener noreferrer"
                    className="lx-wa-btn inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-base px-10 py-3 rounded-lg shadow-xl transition-colors">
                    <MessageCircle className="h-5 w-5" /> WhatsApp Now
                  </a>
                </div>
                <p className="text-blue-300 text-sm mt-7">
                  <Phone className="inline h-3.5 w-3.5 mr-1" />+91 98849 48383 · +91 72001 59832 · Chennai, Tamil Nadu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}