import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] pt-16">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/70 to-slate-900/40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Advanced Care. Human Touch.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-slate-200"
          >
            MVPHOSPITAL brings world-class healthcare with cutting-edge technology, compassionate doctors, and seamless digital experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#book" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700">
              Book an Appointment
            </a>
            <a href="#find-doctor" className="inline-flex items-center justify-center rounded-md bg-white/10 backdrop-blur px-6 py-3 text-white font-semibold ring-1 ring-white/20 hover:bg-white/20">
              Find a Doctor
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
