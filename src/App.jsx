import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AppointmentCTA from './components/AppointmentCTA';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="font-semibold text-slate-900">MVPHOSPITAL</h4>
            <p className="mt-2 text-sm text-slate-600">Delivering world-class healthcare with compassion, innovation, and trust.</p>
          </div>
          <div>
            <h5 className="font-semibold text-slate-900">Quick Links</h5>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li><a href="#find-doctor" className="hover:text-blue-700">Find a Doctor</a></li>
              <li><a href="#book" className="hover:text-blue-700">Book Appointment</a></li>
              <li><a href="#departments" className="hover:text-blue-700">Departments</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-slate-900">Support</h5>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li>Emergency: +1 (800) 000-0000</li>
              <li>Email: care@mvphospital.com</li>
              <li>Mon-Sun: 24x7</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-slate-900">Address</h5>
            <p className="mt-2 text-sm text-slate-600">123 Health Ave, Wellness District, MedCity</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} MVPHOSPITAL. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <AppointmentCTA />
      <Footer />
    </div>
  );
}
