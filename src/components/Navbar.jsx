import { useState } from 'react';
import { Hospital, Menu, X, Calendar, Phone } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Find a Doctor', href: '#find-doctor' },
    { label: 'Departments', href: '#departments' },
    { label: 'Diagnostics', href: '#diagnostics' },
    { label: 'Pharmacy', href: '#pharmacy' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
            <Hospital className="h-6 w-6 text-blue-600" />
            <span>MVPHOSPITAL</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              <Phone className="h-4 w-4" />
              Contact
            </a>
            <a href="#book" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700">
              <Calendar className="h-4 w-4" />
              Book Appointment
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a href="#contact" className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                <Phone className="h-4 w-4" />
                Contact
              </a>
              <a href="#book" className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700">
                <Calendar className="h-4 w-4" />
                Book
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
