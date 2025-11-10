import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle2, GraduationCap, Users, Shield, Sparkles, ArrowRight, Cpu, Rocket, Clock } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

function NavBar() {
  const [open, setOpen] = useState(false)
  const items = [
    { label: 'Home', href: '#home' },
    { label: 'Program', href: '#program' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Dates', href: '#dates' },
    { label: 'Apply', href: '#apply' },
  ]
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 shadow-lg" />
          <span className="font-semibold text-white tracking-wide">NovaTech College</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="text-sm text-white/80 hover:text-white transition">
              {it.label}
            </a>
          ))}
          <a href="#apply" className="px-4 py-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-medium shadow hover:opacity-90 transition">
            Apply Now
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">☰</button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="block text-white/80" onClick={() => setOpen(false)}>
              {it.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b16]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(120,119,198,0.15),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(168,85,247,0.15),transparent_35%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-36 pb-24 grid md:grid-cols-2 gap-10">
        <div className="text-white">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold tracking-tight">
            4-Year B.Tech built for the AI era
          </motion.h1>
          <p className="mt-5 text-white/80 max-w-xl">
            Join a future-forward program designed with industry leaders. Learn from FAANG engineers, build production projects, and graduate with a portfolio that gets offers.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#apply" className="pointer-events-auto inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 text-black font-semibold shadow-[0_10px_30px_rgba(56,189,248,0.35)] hover:opacity-90">
              Start Your Application <ArrowRight size={18} />
            </a>
            <a href="#program" className="pointer-events-auto inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/20 text-white">
              Explore Program
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: <Cpu className="text-cyan-300" />, title: 'AI-first Curriculum' },
              { icon: <Users className="text-fuchsia-300" />, title: '1:1 Mentorship' },
              { icon: <Shield className="text-indigo-300" />, title: 'Placement Support' },
              { icon: <Sparkles className="text-violet-300" />, title: 'Startup Studio' },
            ].map((f, idx) => (
              <div key={idx} className="/80 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="mb-2">{f.icon}</div>
                <div className="text-sm text-white/90">{f.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProgramDetails() {
  const bullets = [
    { title: 'Year 1: Foundations', desc: 'Strong base in CS, math, and systems with hands-on labs.' },
    { title: 'Year 2: Core Engineering', desc: 'Data structures, algorithms, OS, networks and databases.' },
    { title: 'Year 3: Specializations', desc: 'Pick AI/ML, Data Science, Cybersecurity, or Systems.' },
    { title: 'Year 4: Industry Capstone', desc: 'Work with partner companies on real products and research.' },
  ]
  return (
    <section id="program" className="relative bg-[#0a0a14] text-white py-24">
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(600px_200px_at_20%_10%,rgba(124,58,237,0.25),transparent),radial-gradient(700px_300px_at_80%_20%,rgba(6,182,212,0.2),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6 text-cyan-300"><GraduationCap /> Program Details</div>
        <h2 className="text-3xl md:text-4xl font-bold">A curriculum designed with FAANG engineers</h2>
        <p className="mt-3 text-white/70 max-w-2xl">We teach what the industry hires for — from computer science fundamentals to modern AI toolchains, cloud, and security.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {bullets.map((b) => (
            <div key={b.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="font-semibold text-white">{b.title}</div>
              <div className="text-white/70 text-sm mt-1">{b.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {[
            { icon: <CheckCircle2 className="text-cyan-300" />, title: 'Hackathons & Ship Weeks' },
            { icon: <Rocket className="text-fuchsia-300" />, title: 'Startup Incubation' },
            { icon: <Shield className="text-indigo-300" />, title: 'Security First' },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
              <div className="mb-3">{c.icon}</div>
              <div className="font-semibold">{c.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faculty() {
  const profs = [
    { name: 'Sr. Engineer, Google', area: 'Distributed Systems' },
    { name: 'Applied Scientist, Amazon', area: 'ML Systems' },
    { name: 'Staff Engineer, Meta', area: 'Infra & Security' },
    { name: 'Data Scientist, Apple', area: 'Data Platforms' },
  ]
  return (
    <section id="faculty" className="bg-[#0b0b16] text-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6 text-cyan-300"><Users /> Faculty from FAANG</div>
        <h2 className="text-3xl md:text-4xl font-bold">Mentored by leaders building the future</h2>
        <p className="mt-3 text-white/70 max-w-2xl">Our teaching council includes senior engineers and scientists from top tech companies, conducting masterclasses, critiques, and capstone reviews.</p>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {profs.map((p, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 mb-4" />
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-white/70">{p.area}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Admissions() {
  const steps = [
    { title: 'Step 1: Apply', desc: 'Fill the application form with your details and interests.' },
    { title: 'Step 2: Assessment', desc: 'Aptitude + communication round to evaluate readiness.' },
    { title: 'Step 3: Counseling', desc: 'One-on-one counseling session with program advisors.' },
    { title: 'Step 4: Offer & Enrollment', desc: 'Receive provisional offer and complete enrollment.' },
  ]
  return (
    <section id="admissions" className="bg-[#0a0a14] text-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6 text-cyan-300"><Shield /> Admission Process</div>
        <h2 className="text-3xl md:text-4xl font-bold">Transparent, student-first admissions</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {steps.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="font-semibold">{s.title}</div>
              <div className="text-white/70 text-sm mt-1">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ImportantDates() {
  const cards = [
    { title: 'Applications Open', date: 'Nov 20, 2025' },
    { title: 'Round 1 Deadline', date: 'Dec 15, 2025' },
    { title: 'Assessment Window', date: 'Dec 18-22, 2025' },
    { title: 'Orientation', date: 'Aug 1, 2026' },
  ]
  return (
    <section id="dates" className="bg-[#0b0b16] text-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6 text-cyan-300"><Calendar /> Dates</div>
        <h2 className="text-3xl md:text-4xl font-bold">Important timelines</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {cards.map((c) => (
            <div key={c.title} className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
              <div className="text-white/70 text-sm">{c.title}</div>
              <div className="text-xl font-semibold mt-1">{c.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ApplyForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    first_name: '', last_name: '', email: '', phone: '',
    city: '', state: '', country: 'India', grade_level: '11',
    parent_name: '', parent_email: '', stream_interest: 'CSE',
    consent: false
  })

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')
    try {
      const res = await fetch(`${API_BASE}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Submission failed')
      setSuccess('Application submitted! We will reach out soon.')
      setForm({
        first_name: '', last_name: '', email: '', phone: '',
        city: '', state: '', country: 'India', grade_level: '11',
        parent_name: '', parent_email: '', stream_interest: 'CSE',
        consent: false
      })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="apply" className="bg-[#0a0a14] text-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6 text-cyan-300"><Clock /> Apply Now</div>
        <h2 className="text-3xl md:text-4xl font-bold">Take the first step</h2>
        <p className="text-white/70 mt-2 max-w-2xl">This quick form helps us understand your interests. Our admissions team will guide you through next steps.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="First Name" value={form.first_name} onChange={(v)=>setForm({ ...form, first_name: v })} required />
              <Input label="Last Name" value={form.last_name} onChange={(v)=>setForm({ ...form, last_name: v })} required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input type="email" label="Email" value={form.email} onChange={(v)=>setForm({ ...form, email: v })} required />
              <Input label="Phone" value={form.phone} onChange={(v)=>setForm({ ...form, phone: v })} required />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <Input label="City" value={form.city} onChange={(v)=>setForm({ ...form, city: v })} />
              <Input label="State" value={form.state} onChange={(v)=>setForm({ ...form, state: v })} />
              <Input label="Country" value={form.country} onChange={(v)=>setForm({ ...form, country: v })} />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <Select label="Current Class" value={form.grade_level} onChange={(v)=>setForm({ ...form, grade_level: v })} options={[{label:'11', value:'11'},{label:'12', value:'12'}]} />
              <Select label="Preferred Stream" value={form.stream_interest} onChange={(v)=>setForm({ ...form, stream_interest: v })} options={[
                {label:'CSE', value:'CSE'},{label:'AI/ML', value:'AI/ML'},{label:'Data Science', value:'Data Science'},{label:'Cybersecurity', value:'Cybersecurity'},{label:'ECE', value:'ECE'},{label:'Mechanical', value:'Mechanical'},{label:'Civil', value:'Civil'},{label:'Other', value:'Other'}
              ]} />
              <Input label="Parent Name" value={form.parent_name} onChange={(v)=>setForm({ ...form, parent_name: v })} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input type="email" label="Parent Email" value={form.parent_email} onChange={(v)=>setForm({ ...form, parent_email: v })} />
              <div className="flex items-center gap-2 mt-2">
                <input id="consent" type="checkbox" checked={form.consent} onChange={(e)=>setForm({ ...form, consent: e.target.checked })} className="h-4 w-4" />
                <label htmlFor="consent" className="text-sm text-white/80">I agree to be contacted and accept the privacy policy.</label>
              </div>
            </div>
            {error && <div className="text-red-400 text-sm">{error}</div>}
            {success && <div className="text-emerald-400 text-sm">{success}</div>}
            <button disabled={loading} className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 text-black font-semibold hover:opacity-90 disabled:opacity-60">
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6">
            <h3 className="font-semibold text-lg">What happens next?</h3>
            <ul className="mt-4 space-y-3 text-white/80 text-sm">
              <li className="flex gap-2"><ArrowRight size={16} className="mt-1 text-cyan-300"/> You receive a confirmation email immediately.</li>
              <li className="flex gap-2"><ArrowRight size={16} className="mt-1 text-cyan-300"/> We schedule your assessment within a week.</li>
              <li className="flex gap-2"><ArrowRight size={16} className="mt-1 text-cyan-300"/> Counseling call with our advisors and faculty.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Input({ label, value, onChange, type='text', required=false }) {
  return (
    <label className="block">
      <span className="text-sm text-white/80">{label}{required && ' *'}</span>
      <input type={type} value={value} onChange={(e)=>onChange(e.target.value)} required={required}
        className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
    </label>
  )
}

function Select({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="text-sm text-white/80">{label}</span>
      <select value={value} onChange={(e)=>onChange(e.target.value)}
        className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400">
        {options.map((o)=> <option key={o.value} value={o.value} className="bg-[#0a0a14]">{o.label}</option>)}
      </select>
    </label>
  )
}

function Footer() {
  return (
    <footer className="bg-[#0b0b16] text-white/70 py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} NovaTech College. All rights reserved.</div>
        <div className="flex gap-6 text-sm">
          <a href="#program" className="hover:text-white">Program</a>
          <a href="#admissions" className="hover:text-white">Admissions</a>
          <a href="#apply" className="hover:text-white">Apply</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  useEffect(()=>{
    // Preload hello to warm-up backend
    fetch(`${API_BASE}/api/hello`).catch(()=>{})
  },[])

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <Hero />
      <ProgramDetails />
      <Faculty />
      <Admissions />
      <ImportantDates />
      <ApplyForm />
      <Footer />
    </div>
  )
}

export default App
