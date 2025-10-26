import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#industries', label: 'Industries' },
    { href: '#insights', label: 'Insights' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-emerald-600/90 shadow-lg shadow-emerald-600/30" />
            <span className="font-semibold tracking-tight text-slate-900">Titan Global Consultants</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-700 hover:text-emerald-700 transition-colors">
                {item.label}
              </a>
            ))}
            <div className="h-6 w-px bg-slate-200" />
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 transition-colors">
              <Calendar className="h-4 w-4" /> Book Consultation
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700"
              >
                <Calendar className="h-4 w-4" /> Book Consultation
              </a>
              <div className="flex items-center justify-between pt-2 text-sm text-slate-600">
                <a href="mailto:hello@titanglobal.co" className="inline-flex items-center gap-2 hover:text-emerald-700"><Mail className="h-4 w-4" /> hello@titanglobal.co</a>
                <a href="tel:+442012345678" className="inline-flex items-center gap-2 hover:text-emerald-700"><Phone className="h-4 w-4" /> +44 20 1234 5678</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
