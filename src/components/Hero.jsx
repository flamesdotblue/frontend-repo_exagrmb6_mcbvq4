import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] md:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Precision Meets Automation
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-slate-700 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Titan Global Consultants is a technology-driven chartered accountancy firm for the UK, Ireland and global clients. We simplify accounting and compliance through automation, insight, and advisory excellence.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-white font-medium shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 transition-colors"
              >
                Book a Consultation
              </a>
              <a
                href="#insights"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-slate-800 font-medium hover:bg-slate-50"
              >
                Explore Insights
              </a>
            </motion.div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
              {["Accuracy", "Clarity", "Automation"].map((word) => (
                <div key={word} className="rounded-xl border border-emerald-100 bg-white/70 backdrop-blur p-4 text-center text-sm text-emerald-800 shadow-sm">{word}</div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5" />
        </div>
      </div>
    </section>
  );
}
