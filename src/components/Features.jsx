import { Stethoscope, Microscope, ShieldCheck, Video, Pill, TestTube, Hospital, CreditCard } from 'lucide-react';

const features = [
  { icon: Stethoscope, title: 'Find a Doctor', desc: 'Search top specialists across 50+ departments.' },
  { icon: Video, title: 'Video Consult', desc: 'Secure telemedicine with instant booking.' },
  { icon: Microscope, title: 'Diagnostics', desc: 'Book lab tests with home sample collection.' },
  { icon: Pill, title: 'Pharmacy', desc: 'Order medicines with fast delivery.' },
  { icon: TestTube, title: 'Lab Reports', desc: 'Access reports securely in your portal.' },
  { icon: ShieldCheck, title: 'Insurance', desc: 'Cashless treatment with major insurers.' },
  { icon: Hospital, title: 'Hospitals & Centers', desc: 'Locate MVPHOSPITAL facilities near you.' },
  { icon: CreditCard, title: 'Billing & Payments', desc: 'Pay securely with digital invoices.' },
];

export default function Features() {
  return (
    <section className="py-16 bg-slate-50" id="departments">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Everything for your health</h2>
          <p className="mt-2 text-slate-600">Explore services designed to deliver seamless care across your journey.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition">
              <div className="mb-4 inline-flex rounded-lg bg-blue-50 p-3 text-blue-600 group-hover:bg-blue-100">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
              <a href="#book" className="mt-4 inline-block text-sm font-medium text-blue-700 hover:text-blue-800">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
