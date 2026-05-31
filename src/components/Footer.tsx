import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';

const portfolio = [
  { name: 'Pavithra Travels', url: 'https://pavithratravels.com', tag: 'Travel & Tourism' },
  { name: 'Spectrum Cutting Tools', url: 'https://spectrumcuttingtools.com', tag: 'Manufacturing' },
  { name: 'JS Engineering', url: 'https://jsenggineering.in', tag: 'Engineering' },
];

const serviceLinks = [
  ['Web Design Chennai', '/web-design-company-chennai'],
  ['Website Cost', '/website-design-cost-chennai'],
  ['Business Websites', '/business-website-design-chennai'],
  ['Portfolio', '/web-development'],
];

export default function Footer() {
  return (
    <footer style={{ background: '#0f172a' }}>
      {/* Top strip — quick CTA */}
      <div style={{ background: 'linear-gradient(135deg,#1d4ed8,#6d28d9)' }} className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-extrabold text-xl mb-1">Ready to get your business online?</p>
            <p className="text-blue-200 text-sm">Empowering Businesses Using Software Solutions· Free consultation · 1–4 week delivery</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href="https://wa.me/919884948383" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all hover:scale-105">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <Link to="/contact"
              className="flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold text-sm px-5 py-2.5 rounded-xl transition-all hover:scale-105">
              Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center p-1 shadow-sm">
                <img
                  src="/logo.png"
                  alt="Lorvix Solutions Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                className="text-[17px] font-extrabold"
                style={{
                  background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Lorvix Solutions
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,.55)' }}>
              Professional website maker in Chennai, Tamil Nadu and the USA. We build fast, SEO-ready websites for businesses that want to grow online.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/919884948383" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
              </a>
              <a href="tel:+919884948383"
                className="inline-flex items-center gap-1.5 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
                <Phone className="h-3.5 w-3.5" /> Call Us
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2.5">
              {[['Home', '/'], ['Our Portfolio', '/web-development'], ['InvMaster Software', '/inv-master'], ['Contact Us', '/contact']].map(([l, h]) => (
                <li key={h}><Link to={h} className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,.55)' }}>{l}</Link></li>
              ))}
            </ul>
            <h3 className="text-white font-bold mt-7 mb-4 text-sm uppercase tracking-wider">Website Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map(([l, h]) => (
                <li key={h}><Link to={h} className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,.55)' }}>{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Live Portfolio */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Live Portfolio</h3>
            <ul className="space-y-3">
              {portfolio.map(site => (
                <li key={site.url}>
                  <a href={site.url} target="_blank" rel="noopener noreferrer"
                    className="group flex items-start gap-2 transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,.55)' }}>
                    <ExternalLink className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-blue-400 group-hover:text-blue-300" />
                    <div>
                      <div className="text-sm font-medium">{site.name}</div>
                      <div className="text-[11px]" style={{ color: 'rgba(255,255,255,.35)' }}>{site.tag}</div>
                      <div className="text-[11px] font-semibold text-blue-300">View Live Site</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:support@lorvixsolutions.in"
                className="flex items-start gap-2.5 text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,.55)' }}>
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-400" />
                support@lorvixsolutions.in
              </a>
              <a href="tel:+919884948383"
                className="flex items-start gap-2.5 text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,.55)' }}>
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-400" />
                <div><div>+91 98849 48383</div><div>+91 72001 59832</div></div>
              </a>
              <div className="flex items-center gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,.55)' }}>
                <MapPin className="h-4 w-4 flex-shrink-0 text-blue-400" />
                Chennai, Tamil Nadu, India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t flex flex-col sm:flex-row justify-between items-center gap-3 pt-6" style={{ borderColor: 'rgba(255,255,255,.1)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,.35)' }}>© 2025-2026 Lorvix Solutions. All rights reserved.</p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,.35)' }}>Website maker Chennai · Web development India · Website design USA</p>
        </div>
      </div>
    </footer>
  );
}
