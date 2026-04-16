import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const nav = [
    { label: 'Home', href: '/' },
    { label: 'Our Portfolio', href: '/web-development' },
    { label: 'Software', href: '/inv-master' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(20px)',
        boxShadow: scrolled ? '0 2px 30px rgba(37,99,235,0.10)' : '0 1px 0 rgba(0,0,0,0.06)',
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <img
              src="/logo.png"
              alt="Lorvix Solutions Logo"
              className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
            />
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
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {nav.map(item => (
              <Link key={item.href} to={item.href}
                className="text-sm font-semibold transition-all duration-200 relative pb-0.5"
                style={{ color: isActive(item.href) ? '#2563eb' : '#64748b' }}>
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg,#2563eb,#7c3aed)' }} />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://wa.me/919884948383" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 text-sm font-semibold transition-colors">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <Button asChild size="sm"
              className="font-bold text-sm px-5 shadow-md transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)', border: 'none' }}>
              <Link to="/contact">Get Your Website →</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
            onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-100 pb-4 pt-2">
            {nav.map(item => (
              <Link key={item.href} to={item.href}
                className="flex items-center px-3 py-3 rounded-lg text-base font-semibold transition-colors"
                style={{ color: isActive(item.href) ? '#2563eb' : '#475569', background: isActive(item.href) ? '#eff6ff' : 'transparent' }}>
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 px-3">
              <a href="https://wa.me/919884948383" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 rounded-xl transition-colors text-sm">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
              <Link to="/contact"
                className="flex items-center justify-center font-bold text-white py-3 rounded-xl text-sm transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg,#2563eb,#7c3aed)' }}>
                Get Your Website →
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}