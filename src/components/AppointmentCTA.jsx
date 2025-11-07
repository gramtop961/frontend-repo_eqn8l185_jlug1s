import { useState } from 'react';
import { CalendarDays, User, Mail, Phone, Stethoscope } from 'lucide-react';

export default function AppointmentCTA() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', dept: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="book" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Book an appointment</h2>
            <p className="mt-2 text-slate-600">Connect with our specialists across Cardiology, Orthopedics, Oncology, Neurology, and more.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-center gap-2"><CalendarDays className="h-5 w-5 text-blue-600" /> Same-day or scheduled visits</li>
              <li className="flex items-center gap-2"><Stethoscope className="h-5 w-5 text-blue-600" /> In-person or video consults</li>
              <li className="flex items-center gap-2"><Phone className="h-5 w-5 text-blue-600" /> 24x7 emergency support</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            {!submitted ? (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input name="name" required value={form.name} onChange={onChange} placeholder="Full name" className="w-full rounded-md border border-slate-300 pl-9 pr-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input type="email" name="email" required value={form.email} onChange={onChange} placeholder="Email address" className="w-full rounded-md border border-slate-300 pl-9 pr-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input name="phone" required value={form.phone} onChange={onChange} placeholder="Phone number" className="w-full rounded-md border border-slate-300 pl-9 pr-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div className="relative">
                    <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <select name="dept" required value={form.dept} onChange={onChange} className="w-full appearance-none rounded-md border border-slate-300 pl-9 pr-10 py-2 focus:ring-2 focus:ring-blue-500 outline-none">
                      <option value="">Select department</option>
                      <option>Cardiology</option>
                      <option>Orthopedics</option>
                      <option>Oncology</option>
                      <option>Neurology</option>
                      <option>Pediatrics</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full rounded-md bg-blue-600 py-2.5 text-white font-semibold hover:bg-blue-700">Continue</button>
                <p className="text-xs text-slate-500">By continuing, you agree to receive notifications regarding your appointment.</p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-700">✓</div>
                <h3 className="text-xl font-semibold text-slate-900">Request received</h3>
                <p className="mt-1 text-slate-600">Our team will reach out shortly to confirm your booking.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
