import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import {
  ArrowRight, CheckCircle, Star, Globe, ExternalLink,
  Phone, MessageCircle, TrendingUp, Clock, Award,
  Users, Zap, Shield, ChevronRight
} from 'lucide-react';
import ptlogo from '../assets/pt.png';
import sclogo from '../assets/sc.png';
import jslogo from '../assets/js.png';

/* ─── Animation styles injected once ─── */
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.lx-root * { font-family: 'Plus Jakarta Sans', sans-serif; }

@keyframes lx-float {
  0%,100% { transform: translateY(0px); }
  50%      { transform: translateY(-14px); }
}
@keyframes lx-floatB {
  0%,100% { transform: translateY(0px) rotate(0deg); }
  50%      { transform: translateY(-9px) rotate(3deg); }
}
@keyframes lx-pulse-ring {
  0%   { transform: scale(1); opacity: .6; }
  100% { transform: scale(2.2); opacity: 0; }
}
@keyframes lx-shimmer {
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}
@keyframes lx-fadeUp {
  from { opacity:0; transform:translateY(32px); }
  to   { opacity:1; transform:translateY(0); }
}
@keyframes lx-slideLeft {
  from { opacity:0; transform:translateX(40px); }
  to   { opacity:1; transform:translateX(0); }
}
@keyframes lx-gradient {
  0%,100% { background-position: 0% 50%; }
  50%      { background-position: 100% 50%; }
}
@keyframes lx-countup {
  from { opacity:0; transform:scale(.7); }
  to   { opacity:1; transform:scale(1); }
}

.lx-revealed { animation: lx-fadeUp .65s cubic-bezier(.22,1,.36,1) both; }
.lx-revealed-right { animation: lx-slideLeft .65s cubic-bezier(.22,1,.36,1) both; }
.lx-hidden { opacity:0; transform:translateY(32px); }
.lx-hidden-right { opacity:0; transform:translateX(40px); }

.lx-float  { animation: lx-float  4s ease-in-out infinite; }
.lx-floatB { animation: lx-floatB 5s ease-in-out infinite; }

.lx-btn-shine {
  position: relative; overflow: hidden;
}
.lx-btn-shine::after {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 60%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.25), transparent);
  animation: lx-shimmer 2.4s infinite;
}

.lx-grad-text {
  background: linear-gradient(135deg, #2563eb, #7c3aed, #2563eb);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: lx-gradient 4s linear infinite;
}

.lx-card-hover {
  transition: transform .3s cubic-bezier(.22,1,.36,1),
              box-shadow .3s ease, border-color .3s ease;
}
.lx-card-hover:hover {
  transform: translateY(-8px) scale(1.01);
  box-shadow: 0 24px 60px rgba(37,99,235,.18);
  border-color: #93c5fd !important;
}

.lx-port-card {
  transition: transform .35s cubic-bezier(.22,1,.36,1),
              box-shadow .35s ease, border-color .3s ease;
  cursor: pointer;
}
.lx-port-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 70px rgba(37,99,235,.2);
}
.lx-port-card .port-shine {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,.06) 0%, transparent 60%);
  opacity: 0; transition: opacity .3s;
}
.lx-port-card:hover .port-shine { opacity: 1; }
.lx-port-card .port-arrow {
  transform: translateX(0); transition: transform .3s;
}
.lx-port-card:hover .port-arrow { transform: translateX(5px); }

.lx-wa-btn {
  transition: transform .2s, box-shadow .2s;
}
.lx-wa-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(34,197,94,.35);
}

.lx-why-card {
  transition: transform .3s cubic-bezier(.22,1,.36,1),
              box-shadow .3s ease;
}
.lx-why-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 50px rgba(37,99,235,.15);
}
.lx-why-card:hover .why-icon {
  transform: scale(1.1) rotate(-3deg);
}
.why-icon {
  transition: transform .3s cubic-bezier(.22,1,.36,1);
}

.lx-pulse-dot::before {
  content: '';
  position: absolute;
  width: 100%; height: 100%;
  border-radius: 50%;
  background: #3b82f6;
  animation: lx-pulse-ring 1.6s ease-out infinite;
}
`;

/* ─── Scroll reveal hook ─── */
function useReveal(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.remove('lx-hidden', 'lx-hidden-right');
        el.classList.add('lx-revealed');
        obs.disconnect();
      }
    }, { threshold: 0.12, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function useRevealRight() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.remove('lx-hidden-right');
        el.classList.add('lx-revealed-right');
        obs.disconnect();
      }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── Animated counter ─── */
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const duration = 1400;
      const step = (ts: number, startTs: number) => {
        const p = Math.min((ts - startTs) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(ease * to));
        if (p < 1) requestAnimationFrame(ts2 => step(ts2, startTs));
      };
      requestAnimationFrame(ts => step(ts, ts));
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const portfolio = [
  {
    name: 'Pavithra Travels',
    url: 'https://pavithratravels.com',
    industry: 'Travel & Tourism',
    desc: 'A travel agency website that showcases packages and captures booking enquiries — 24/7, without lifting a phone.',
    result: 'Online 24/7 — enquiries while you sleep',
    features: ['Tour package listings', 'Online enquiry forms', 'Mobile optimised', 'SEO ready'],
    grad: 'linear-gradient(135deg,#1d4ed8,#0ea5e9)',
    accent: '#2563eb',
    check: '#60a5fa',
    init: 'PT',
    logo: ptlogo,
  },
  {
    name: 'Spectrum Cutting Tools',
    url: 'https://spectrumcuttingtools.com',
    industry: 'Industrial Manufacturing',
    desc: 'B2B product catalogue helping a TamilNadu manufacturer reach wholesale buyers across India.',
    result: 'B2B buyers find them on Google now',
    features: ['Product catalogue', 'B2B enquiry forms', 'Brand authority', 'Fast pages'],
    grad: 'linear-gradient(135deg,#6d28d9,#a855f7)',
    accent: '#7c3aed',
    check: '#c084fc',
    init: 'SC',
    logo: sclogo,
  },
  {
    name: 'JS Engineering',
    url: 'https://jsenggineering.in',
    industry: 'Engineering Services',
    desc: 'Authority website for an engineering firm — builds trust, showcases projects, converts visitors to clients.',
    result: 'Clients call before they even enquire',
    features: ['Services showcase', 'Project portfolio', 'Lead generation', 'Pro design'],
    grad: 'linear-gradient(135deg,#1e40af,#3b82f6)',
    accent: '#1d4ed8',
    check: '#93c5fd',
    init: 'JS',
    logo: jslogo,
  },
];

const whyUs = [
  { icon: <TrendingUp className="h-6 w-6" />, title: 'Built to Get You Clients', desc: 'Every decision — layout, copy, buttons — is made to turn visitors into paying customers. Not just a pretty page.' },
  { icon: <Award className="h-6 w-6" />, title: 'Proven Live Portfolio', desc: 'Click through to our portfolio sites right now. Real websites, real businesses, real results — not Figma mockups.' },
  { icon: <Shield className="h-6 w-6" />, title: 'Lifetime Support Included', desc: "We don't disappear after launch. Updates, fixes, and guidance — whenever you need us, for life." },
  { icon: <Users className="h-6 w-6" />, title: 'You Talk to the Developer', desc: 'No account managers. No middlemen. Direct WhatsApp access to your developer from day one.' },
];

export default function Home() {
  useEffect(() => {
    const el = document.getElementById('lx-styles');
    if (!el) {
      const s = document.createElement('style');
      s.id = 'lx-styles'; s.textContent = STYLES;
      document.head.appendChild(s);
    }
  }, []);

  const heroRef = useReveal();
  const heroRight = useRevealRight();
  const portRef = useReveal();
  const whyRef = useReveal();
  const svcRef = useReveal();
  const ctaRef = useReveal();

  const homeSchema = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Lorvix Solutions Portfolio – Live Websites Delivered",
      "description": "Real, live websites built by Lorvix Solutions for businesses in Chennai and India",
      "numberOfItems": 3,
      "itemListElement": portfolio.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": p.name,
        "url": p.url,
        "description": p.desc,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Website Development",
      "provider": { "@id": "https://lorvixsolutions.in/#organization" },
      "name": "Professional Website Development in Chennai & USA",
      "description": "Custom, mobile-first, SEO-ready website development for businesses in Chennai, Tamil Nadu, and the USA. Delivered in 1–4 weeks with lifetime support.",
      "areaServed": [
        { "@type": "City", "name": "Chennai" },
        { "@type": "State", "name": "Tamil Nadu" },
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United States" },
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development Packages",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Website", "description": "Professional website for businesses with enquiry forms, WhatsApp integration, and SEO" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce Website", "description": "Online store with product catalogue, payment integration, and order management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Portfolio Website", "description": "Showcase your work, projects, and professional credentials online" } },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take Lorvix Solutions to build a website?",
          "acceptedAnswer": { "@type": "Answer", "text": "We deliver professional, fully functional websites in 1–4 weeks depending on the complexity and requirements of the project." },
        },
        {
          "@type": "Question",
          "name": "What is the cost of building a website with Lorvix Solutions?",
          "acceptedAnswer": { "@type": "Answer", "text": "Our pricing is customised based on your project requirements. We offer affordable packages for businesses in Chennai, India, and the USA. Contact us for a free quote." },
        },
        {
          "@type": "Question",
          "name": "Does Lorvix Solutions provide ongoing website support?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide lifetime support for all our website clients. Updates, fixes, security patches, and guidance — whenever you need us." },
        },
        {
          "@type": "Question",
          "name": "Can I see examples of websites built by Lorvix Solutions?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes! Visit our portfolio page to see live websites we've built for businesses like Pavithra Travels, Spectrum Cutting Tools, and JS Engineering." },
        },
        {
          "@type": "Question",
          "name": "Does Lorvix Solutions serve clients outside Chennai?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We serve clients across Tamil Nadu, India, and the United States. All communication is handled via WhatsApp, email, and video calls." },
        },
      ],
    },
  ];

  return (
    <div className="lx-root min-h-screen bg-white">
      <SEOHead
        title="Lorvix Solutions – World-Class Web Development & Digital Strategy"
        description="Lorvix Solutions is a global digital agency delivering world-class website development and custom software. Serving international clients with precision engineering from our offices in India and the USA."
        canonical="https://lorvixsolutions.in/"
        keywords="affordable website maker, affordable web development, cost-effective website design, world-class website development, international web agency, professional web design India, web development company USA, custom enterprise software, Lorvix Solutions"
        schema={{
          ...homeSchema,
          "description": "Lorvix Solutions is a premier global website development agency. We provide world-class and affordable digital solutions to businesses across the United States, Europe, and Asia."
        }}
      />
      <Header />

      <main>
        {/* ════ HERO ════ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/60 to-violet-50 pt-24 pb-20">

        {/* Decorative blobs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none"
          style={{ background: 'radial-gradient(circle,#93c5fd #c4b5fd 60%,transparent 80%)' }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle,#bfdbfe,transparent 70%)' }} />

        {/* Floating badges (decorative) */}
        <div className="lx-float absolute top-28 right-[5%] hidden lg:flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-lg shadow-blue-100 border border-blue-100 text-sm font-semibold text-slate-700 z-10">
          <span className="text-green-500">✓</span> Global Delivery Standards
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <div ref={heroRef} className="lx-hidden">
              <span className="sr-only">World-Class Website Development Agency, Top Rated Global Digital Solutions Provider</span>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
                <span className="relative lx-pulse-dot w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                World-Class Digital Experiences
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.08] mb-6 tracking-tight">
                Global Standards. <br />
                <span className="lx-grad-text">Digital Perfection.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 mb-8 max-w-[520px] leading-relaxed">
                Lorvix Solutions is a <strong>world-class and affordable website development agency</strong>. We combine global design standards with <strong>cost-effective engineering</strong> to build high-performance digital platforms for businesses everywhere.
              </p>

              {/* SEO keywords hidden for crawlers */}
              <p className="sr-only">
                Website maker in Chennai, web development company Chennai Tamil Nadu,
                affordable website maker in USA, professional website design India,
                business website development, custom website Chennai.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button asChild size="lg"
                  className="lx-btn-shine text-base font-bold px-8 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-xl shadow-blue-200/60 border-0 transition-all duration-300 hover:scale-105 hover:shadow-blue-300/70">
                  <Link to="/contact">Get Your Website Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg"
                  className="text-base font-semibold px-8 border-2 hover:border-blue-400 hover:text-blue-600 transition-all duration-200">
                  <Link to="/web-development">See Live Portfolio <ExternalLink className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-5 text-sm text-slate-500">
                {['Free consultation', 'No hidden charges', 'Lifetime support'].map(t => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-emerald-500" /> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — stats + contact card */}
            <div ref={heroRight} className="lx-hidden-right flex flex-col gap-4">
              {/* Stats */}
              <div className="bg-white rounded-2xl border border-blue-100 shadow-xl shadow-blue-100/40 p-6">
                <p className="text-[10px] font-bold uppercase tracking-[.15em] text-slate-400 mb-4">Our Track Record</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: <Globe className="h-5 w-5" />, label: 'Websites Delivered', val: 3, suf: '+' },
                    { icon: <Star className="h-5 w-5" />, label: 'Client Satisfaction', val: 100, suf: '%' },
                    { icon: <Clock className="h-5 w-5" />, label: 'Support Response', val: 24, suf: 'h' },
                    { icon: <Zap className="h-5 w-5" />, label: 'Weeks to Launch', val: '1–4', suf: 'wk' },
                  ].map((r, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-xl p-4"
                      style={{ background: 'linear-gradient(135deg,#eff6ff,#f5f3ff)' }}>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)' }}>
                        {r.icon}
                      </div>
                      <div>
                        <div className="text-2xl font-extrabold text-slate-900 leading-none" style={{ animation: 'lx-countup .5s ease both', animationDelay: `${i * .1}s` }}>
                          {typeof r.val === 'number' ? (
                            <Counter to={r.val} suffix={r.suf} />
                          ) : (
                            <span>
                              {r.val}
                              <span className="text-sm ml-1 text-slate-500">{r.suf}</span>
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-1 leading-tight">{r.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact card */}
              <div className="rounded-2xl p-5 text-white" style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)' }}>
                <p className="font-bold text-base mb-1">Talk to us directly</p>
                <p className="text-sm text-blue-100 mb-4">Chennai &amp; USA enquiries welcome — we respond within hours</p>
                <div className="flex flex-wrap gap-3">
                  <a href="tel:+919884948383"
                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 hover:scale-105">
                    <Phone className="h-4 w-4" /> +91 98849 48383
                  </a>
                  <a href="https://wa.me/919884948383" target="_blank" rel="noopener noreferrer"
                    className="lx-wa-btn flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 rounded-lg px-4 py-2.5 text-sm font-bold transition-colors">
                    <MessageCircle className="h-4 w-4" /> WhatsApp Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ PORTFOLIO ════ */}
      <section className="py-24 bg-white" aria-label="Our portfolio of delivered websites">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={portRef} className="lx-hidden">
            <div className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[.15em] text-blue-600 mb-3">Real Results · Verified Live Websites</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Websites We've Already Delivered
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Not mockups. Not demos. Real businesses in Chennai — now online, ranking on Google, and getting enquiries every single day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {portfolio.map((p, i) => (
                <a key={i} href={p.url} target="_blank" rel="noopener noreferrer"
                  className="lx-port-card group relative rounded-2xl border-2 border-slate-100 overflow-hidden bg-white block"
                  style={{ animationDelay: `${i * .12}s` }}>
                  <div className="port-shine" />

                  {/* Header */}
                  <div className="h-52 flex flex-col items-center justify-center relative pb-10" style={{ background: p.grad }}>
                    <div className="absolute inset-0 opacity-20"
                      style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px,rgba(255,255,255,.8) 1.5px,transparent 0)', backgroundSize: '20px 20px' }} />
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-3 z-10 shadow-md p-2">
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-white font-bold text-lg z-10">{p.name}</p>
                    <p className="text-white/70 text-xs z-10 mt-0.5">{p.industry}</p>

                    {/* Result badge */}
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-1.5 flex items-center gap-2">
                        <TrendingUp className="h-3.5 w-3.5 text-emerald-300 flex-shrink-0" />
                        <span className="text-white text-[11px] font-semibold">{p.result}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <p className="text-sm text-slate-500 leading-relaxed mb-5">{p.desc}</p>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-3 mb-5">
                      {p.features.map((f, fi) => (
                        <div key={fi} className="flex items-center gap-1.5">
                          <CheckCircle className="h-3.5 w-3.5 flex-shrink-0" style={{ color: p.check }} />
                          <span className="text-[12px] text-slate-700 font-medium">{f}</span>
                        </div>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: p.accent }}>
                      Visit Live Website
                      <span className="port-arrow"><ChevronRight className="h-4 w-4" /></span>
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-slate-500 text-lg mb-5">Your business could be our next success story.</p>
              <Button asChild size="lg"
                className="lx-btn-shine text-base font-bold px-12 bg-gradient-to-r from-blue-600 to-violet-600 hover:opacity-90 shadow-xl shadow-blue-200/60 transition-all hover:scale-105">
                <Link to="/contact">Start Your Project — Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ════ WHY US ════ */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg,#f0f7ff 0%,#f5f3ff 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={whyRef} className="lx-hidden">
            <div className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[.15em] text-violet-600 mb-3">Why Lorvix Solutions</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                We Care About Your Business,<br className="hidden md:block" /> Not Just Your Website
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((w, i) => (
                <div key={i} className="lx-why-card bg-white rounded-2xl p-7 border border-blue-50 shadow-md"
                  style={{ animationDelay: `${i * .1}s` }}>
                  <div className="why-icon w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5"
                    style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)' }}>
                    {w.icon}
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg mb-3 leading-tight">{w.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ SERVICES ════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={svcRef} className="lx-hidden">
            <div className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[.15em] text-blue-600 mb-3">Our Services</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">Two Ways We Help Your Business</h2>
              <p className="text-slate-500 text-lg max-w-xl mx-auto">Whether you need a powerful website or smarter invoicing software — we've got you covered.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Web dev */}
              <div className="lx-card-hover relative overflow-hidden rounded-3xl border-2 border-blue-100 p-9 bg-gradient-to-br from-blue-50 to-white group">
                <div className="absolute top-0 right-0 w-60 h-60 rounded-full -translate-y-1/2 translate-x-1/2 opacity-40 pointer-events-none"
                  style={{ background: 'radial-gradient(circle,#bfdbfe,transparent 70%)' }} />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200"
                    style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)' }}>
                    <Globe className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Website Development</h3>
                  <p className="text-slate-500 mb-6 leading-relaxed">
                    <strong>Affordable website design</strong> and professional development for businesses in Chennai, Tamil Nadu, and the USA.
                    Travel agencies, manufacturers, engineering firms — every industry, built to convert at the <strong>best value</strong>.
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {['Custom design for your industry & brand', 'Mobile-first, blazing fast, Google-ready',
                      'WhatsApp & enquiry form integration', 'Delivered in 1–4 weeks, not months'].map(f => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-slate-700">
                          <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" /> {f}
                        </li>
                      ))}
                  </ul>
                  <Button asChild className="font-bold bg-gradient-to-r from-blue-600 to-violet-600 hover:opacity-90 transition-all hover:scale-105">
                    <Link to="/web-development">See Portfolio & Pricing <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>

              {/* Software */}
              <div className="lx-card-hover relative overflow-hidden rounded-3xl border-2 border-violet-100 p-9 bg-gradient-to-br from-violet-50 to-white group">
                <div className="absolute top-0 right-0 w-60 h-60 rounded-full -translate-y-1/2 translate-x-1/2 opacity-40 pointer-events-none"
                  style={{ background: 'radial-gradient(circle,#ddd6fe,transparent 70%)' }} />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-violet-200"
                    style={{ background: 'linear-gradient(135deg,#7c3aed,#2563eb)' }}>
                    <Zap className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3">InvMaster V2 — Invoicing & Accounting</h3>
                  <p className="text-slate-500 mb-6 leading-relaxed">
                    The complete billing and accounting system. InvMaster V2 automates invoicing, tracks expenses, 
                    calculates tax liability, and monitors profit & loss for your business.
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {['GST invoicing & expense tracking', 'Profit & Loss (P&L) monitoring',
                      'Tax liability & vendor dues', 'Built for Indian B2B businesses'].map(f => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-slate-700">
                          <CheckCircle className="h-4 w-4 text-violet-500 flex-shrink-0" /> {f}
                        </li>
                      ))}
                  </ul>
                  <Button asChild variant="outline" className="font-bold border-2 border-violet-300 text-violet-700 hover:bg-violet-50 transition-all hover:scale-105 hover:border-violet-500">
                    <Link to="/inv-master">Learn About InvMaster <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ FINAL CTA ════ */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ctaRef} className="lx-hidden">
            <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center shadow-2xl"
              style={{ background: 'linear-gradient(135deg,#1d4ed8,#6d28d9)' }}>
              <div className="absolute inset-0 opacity-[.07]"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px,white 1.5px,transparent 0)', backgroundSize: '28px 28px' }} />
              <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full opacity-20"
                style={{ background: 'radial-gradient(circle,#60a5fa,transparent)' }} />
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-bold px-4 py-2 rounded-full mb-5 uppercase tracking-wider">
                  <span className="relative lx-pulse-dot w-2 h-2 rounded-full bg-white flex-shrink-0" />
                  Limited Slots Available This Month
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 tracking-tight leading-tight">
                  Your Business Deserves a Website That Works
                </h2>
                <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Every day without a professional website is a day your competitors get the clients that should be yours.
                  Talk to us today — completely free, zero commitment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg"
                    className="bg-white text-blue-700 hover:bg-blue-50 font-extrabold text-base px-10  transition-all hover:scale-105 rounded-xl">
                    <Link to="/contact">
                      Get a Free Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <a href="https://wa.me/919884948383" target="_blank" rel="noopener noreferrer"
                    className="lx-wa-btn inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-base px-10 py-3 rounded-lg transition-colors shadow-xl">
                    <MessageCircle className="h-5 w-5" /> WhatsApp Now
                  </a>
                </div>
                <p className="text-blue-200 text-sm mt-7">
                  <Phone className="inline h-3.5 w-3.5 mr-1" />+91 98849 48383 &nbsp;·&nbsp; +91 72001 59832 &nbsp;·&nbsp; Free consultation
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