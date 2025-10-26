import { motion } from 'framer-motion';
import { Briefcase, Building2, LineChart, Shield, Calculator, BookOpen, Users, Cpu, Globe, Search, Calendar } from 'lucide-react';
import { useMemo, useState } from 'react';

export default function Sections() {
  return (
    <div className="scroll-smooth">
      <About />
      <Services />
      <Industries />
      <Insights />
      <Contact />
      <InsightsHub />
    </div>
  );
}

function SectionShell({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && <p className="text-sm font-medium uppercase tracking-widest text-emerald-700">{eyebrow}</p>}
          {title && <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">{title}</h2>}
          {subtitle && <p className="mt-3 text-slate-700">{subtitle}</p>}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <SectionShell
      id="about"
      eyebrow="About Us"
      title="Bridging traditional accounting with modern technology"
      subtitle="We combine chartered expertise with automation to deliver clarity, speed and confidence to ambitious teams."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-slate-700 leading-relaxed">
            Under the theme “Precision Meets Automation,” our people-first approach keeps your finance function human, insightful and proactive. From day one, we align tools and workflows to your goals—reducing manual effort and surfacing the metrics that matter.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            {[
              { label: 'Making Tax Digital Ready' },
              { label: 'ICAEW & UK GAAP' },
              { label: 'Data-led Advisory' },
            ].map((item) => (
              <li key={item.label} className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-emerald-900">
                <Shield className="h-4 w-4" /> {item.label}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6">
          <dl className="grid grid-cols-2 gap-6">
            {[
              { label: 'On-time filings', value: '100%' },
              { label: 'Process automation', value: '60%+' },
              { label: 'Client satisfaction', value: '4.9/5' },
              { label: 'Countries served', value: '20+' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-emerald-100 bg-white/70 p-4 backdrop-blur">
                <dt className="text-sm text-slate-600">{stat.label}</dt>
                <dd className="mt-1 text-2xl font-semibold text-emerald-700">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </SectionShell>
  );
}

function Services() {
  const services = [
    { icon: Calculator, title: 'Accounting', desc: 'Financial statements, management accounts, and statutory reporting with spotless accuracy.' },
    { icon: BookOpen, title: 'Bookkeeping', desc: 'Real-time transaction processing, reconciliations and month-end close built for speed.' },
    { icon: LineChart, title: 'Advisory', desc: 'Board-ready insights, forecasting, and decision support that drive growth.' },
    { icon: Shield, title: 'Compliance', desc: 'HMRC, Companies House and regulatory filings—handled on schedule, every time.' },
    { icon: Users, title: 'Payroll', desc: 'Seamless payroll, RTI submissions and benefits administration with employee self-serve.' },
    { icon: Cpu, title: 'Automation Solutions', desc: 'Workflow design and integrations with leading finance tools to eliminate manual work.' },
  ];

  return (
    <SectionShell
      id="services"
      eyebrow="Services"
      title="Full-stack finance built for modern business"
      subtitle="From daily bookkeeping to board-level advisory, we deliver reliable outcomes with automation at the core."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc }) => (
          <motion.div key={title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-emerald-600/10 p-2 text-emerald-700"><Icon className="h-5 w-5" /></span>
              <h3 className="font-medium text-slate-900">{title}</h3>
            </div>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">{desc}</p>
            <div className="absolute -bottom-8 right-0 h-24 w-24 rounded-full bg-emerald-200/40 blur-2xl transition-all group-hover:scale-125" />
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}

function Industries() {
  const industries = [
    { icon: Briefcase, title: 'Professional Services' },
    { icon: Building2, title: 'Real Estate' },
    { icon: Globe, title: 'Retail & Global Commerce' },
    { icon: Cpu, title: 'Technology' },
    { icon: Users, title: 'Startups' },
  ];

  return (
    <SectionShell
      id="industries"
      eyebrow="Industries"
      title="Focused on sectors where precision and speed matter"
      subtitle="We tailor our frameworks to the nuances of your industry so you can move with confidence."
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {industries.map(({ icon: Icon, title }) => (
          <motion.div key={title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-emerald-900">
            <Icon className="h-5 w-5" />
            <span className="text-sm font-medium">{title}</span>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}

function Insights() {
  const allPosts = useMemo(
    () => [
      { id: 1, title: 'Making Tax Digital: 2025 Readiness', cat: 'Taxation', img: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1200&auto=format&fit=crop', excerpt: 'What UK businesses need to prepare for the next phase of MTD.' },
      { id: 2, title: 'Automating Your Month-End Close', cat: 'Technology', img: 'https://images.unsplash.com/photo-1551281044-8d8d0d8b6a5d?q=80&w=1200&auto=format&fit=crop', excerpt: 'A practical approach to cutting close time by 50%.' },
      { id: 3, title: 'Companies House: Reform Updates', cat: 'Regulation', img: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1200&auto=format&fit=crop', excerpt: 'Key changes and how they impact your filings.' },
      { id: 4, title: 'CFO Dashboards That Matter', cat: 'Accounting', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop', excerpt: 'From vanity metrics to board-ready KPIs.' },
      { id: 5, title: 'Risk and Controls in Scale-ups', cat: 'Compliance', img: 'https://images.unsplash.com/photo-1518186233392-c232efbf2373?q=80&w=1200&auto=format&fit=crop', excerpt: 'Designing controls without killing speed.' },
      { id: 6, title: 'Other Notes from the Field', cat: 'Other Updates', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop', excerpt: 'Short updates and perspectives.' },
    ],
    []
  );
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');

  const categories = ['All', 'Accounting', 'Taxation', 'Compliance', 'Technology', 'Regulation', 'Other Updates'];

  const posts = allPosts.filter(
    (p) => (cat === 'All' || p.cat === cat) && p.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <SectionShell
      id="insights"
      eyebrow="Insights"
      title="Clarity that helps you decide faster"
      subtitle="Updates across accounting, taxation, compliance and technology—curated for decision makers."
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-700">
          <Search className="h-4 w-4" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search insights"
            className="w-48 sm:w-72 border-none outline-none text-sm placeholder:text-slate-400"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-3 py-1 text-sm ${
                cat === c ? 'border-emerald-600 bg-emerald-50 text-emerald-700' : 'border-slate-200 bg-white text-slate-700'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md"
          >
            <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
              <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <span className="text-xs font-medium text-emerald-700">{p.cat}</span>
              <h3 className="mt-2 text-base font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.excerpt}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}

function Contact() {
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate async submit
    await new Promise((r) => setTimeout(r, 900));
    setStatus('success');
  };

  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Let’s talk about smarter finance"
      subtitle="Tell us a little about your needs and we’ll come back with a clear plan."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div>
              <label className="text-sm text-slate-600">Full name</label>
              <input required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-emerald-600" />
            </div>
            <div>
              <label className="text-sm text-slate-600">Email</label>
              <input type="email" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-emerald-600" />
            </div>
            <div>
              <label className="text-sm text-slate-600">Company</label>
              <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-emerald-600" />
            </div>
            <div>
              <label className="text-sm text-slate-600">Industry</label>
              <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-emerald-600">
                <option>Professional Services</option>
                <option>Real Estate</option>
                <option>Retail</option>
                <option>Technology</option>
                <option>Startups</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-600">How can we help?</label>
              <textarea rows={5} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-emerald-600" placeholder="Briefly describe your requirements" />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-2.5 text-white font-medium shadow-sm hover:bg-emerald-700 disabled:opacity-60"
              >
                <Calendar className="h-4 w-4" /> {status === 'loading' ? 'Sending...' : 'Request Consultation'}
              </button>
              {status === 'success' && (
                <p className="text-sm text-emerald-700">Thanks! We’ll be in touch shortly.</p>
              )}
            </div>
          </form>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6">
            <h4 className="font-medium text-slate-900">Book a call</h4>
            <p className="mt-1 text-sm text-slate-700">Prefer to pick a time? Use our live calendar.</p>
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block rounded-md border border-emerald-600 px-4 py-2 text-emerald-700 hover:bg-emerald-50"
            >
              Open Calendly
            </a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 className="font-medium text-slate-900">Contact</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              <li>Email: hello@titanglobal.co</li>
              <li>Phone: +44 20 1234 5678</li>
              <li>London, Dublin, Remote Worldwide</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function InsightsHub() {
  return (
    <SectionShell
      id="hub"
      eyebrow="Business Insights Hub"
      title="A quick view of finance that actually moves the needle"
      subtitle="Dashboards that surface revenue, cost and cash trends—so leadership can act with clarity."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="text-sm font-medium text-slate-700">Revenue vs. Costs</h4>
          <div className="mt-4 h-40 flex items-end gap-2">
            {[60, 70, 55, 85, 90, 75, 95].map((v, i) => (
              <div key={i} className="w-full rounded-t bg-emerald-600/80" style={{ height: `${v}%` }} />
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="text-sm font-medium text-slate-700">Cash runway</h4>
          <div className="mt-4 h-40 w-full rounded-xl bg-gradient-to-r from-emerald-200 to-emerald-500" />
          <p className="mt-2 text-xs text-slate-600">12.5 months runway at current burn</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="text-sm font-medium text-slate-700">Top KPIs</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ['Gross Margin', '63%'],
              ['AR Days', '28'],
              ['Net Burn', '£82k'],
              ['MRR Growth', '+4.1%'],
            ].map(([k, v]) => (
              <li key={k} className="flex items-center justify-between rounded-lg bg-emerald-50 px-3 py-2 text-emerald-900">
                <span>{k}</span>
                <span className="font-medium">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
