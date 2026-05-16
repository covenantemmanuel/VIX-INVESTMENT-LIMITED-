"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import {
  ArrowUp,
  BadgeCheck,
  Building2,
  BarChart3,
  ChevronRight,
  CircuitBoard,
  Factory,
  FileText,
  Home,
  Hospital,
  Mail,
  MapPin,
  Monitor,
  Menu,
  MessageCircle,
  Phone,
  Pill,
  Play,
  PlugZap,
  ShieldCheck,
  SolarPanel,
  Video,
  Truck,
  X,
  Zap,
  Wifi
} from "lucide-react";
import { useRef } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Subsidiaries", href: "#subsidiaries" },
  { label: "VIX Energy", href: "#energy" },
  { label: "Virtual", href: "#virtual" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

const subsidiaries = [
  {
    name: "VIX Energy",
    status: "Active",
    description: "Renewable power systems, CCTV security, smart homes, and electrical engineering for modern Africa.",
    icon: Zap
  },
  { name: "VIX Pharmacy", status: "Coming Soon", description: "A future healthcare retail network focused on access, trust, and digital convenience.", icon: Pill },
  { name: "VIX Homes", status: "Coming Soon", description: "Premium residential developments and smart living communities for growing cities.", icon: Home },
  { name: "VIX Oil & Gas", status: "Coming Soon", description: "Strategic energy trading, downstream infrastructure, and petroleum services.", icon: Factory },
  { name: "VIX Hospitals", status: "Coming Soon", description: "Integrated medical facilities designed around patient care and technology.", icon: Hospital },
  { name: "VIX Technologies", status: "Coming Soon", description: "Enterprise software, connected devices, and automation platforms.", icon: CircuitBoard },
  { name: "VIX Logistics", status: "Coming Soon", description: "Fleet, warehousing, and supply-chain solutions for national commerce.", icon: Truck }
];

const energyServices = [
  { title: "Solar Panel Installation", icon: SolarPanel, text: "Premium rooftop, ground-mount, and commercial solar systems engineered for long-term yield." },
  { title: "Inverter Systems", icon: PlugZap, text: "Reliable hybrid and off-grid inverter deployments with batteries, monitoring, and maintenance." },
  { title: "CCTV Installation", icon: ShieldCheck, text: "High-definition surveillance, remote viewing, access control, and security coverage planning." },
  { title: "Smart Security Systems", icon: BadgeCheck, text: "Connected alarms, motion detection, perimeter protection, and integrated response workflows." },
  { title: "Electrical Engineering", icon: Zap, text: "Power audits, wiring, load balancing, protection systems, and professional commissioning." },
  { title: "Renewable Energy Solutions", icon: Factory, text: "Bespoke energy infrastructure for homes, offices, estates, schools, hospitals, and industries." },
  { title: "Smart Home Integration", icon: Home, text: "Automation for lighting, climate, security, power management, and connected living." },
  { title: "Energy Consultation", icon: Building2, text: "Feasibility studies, system sizing, ROI modeling, and energy transition roadmaps." }
];

const processSteps = ["Consultation & Audit", "Smart System Design", "Professional Installation", "Testing & Handover", "Support & Optimization"];

const virtualContents = [
  {
    title: "Virtual Site Assessment",
    label: "Remote Audit",
    icon: Video,
    text: "Book a guided video walkthrough where VIX Energy specialists review rooftops, load points, inverter rooms, and CCTV coverage zones before dispatch."
  },
  {
    title: "Digital Energy Proposal",
    label: "Smart Report",
    icon: FileText,
    text: "Receive a polished digital proposal with system sizing, estimated backup hours, project scope, budget tiers, and recommended installation phases."
  },
  {
    title: "Live Monitoring Preview",
    label: "Dashboard",
    icon: Monitor,
    text: "Preview how solar output, battery status, inverter performance, and security device health can be monitored from one executive dashboard."
  },
  {
    title: "Connected Support Room",
    label: "Client Portal",
    icon: Wifi,
    text: "Access maintenance schedules, support tickets, project documents, and post-installation recommendations through a premium virtual service room."
  }
];

const dashboardMetrics = [
  { label: "Solar Yield", value: "86%", icon: SolarPanel },
  { label: "Battery Reserve", value: "12.4h", icon: PlugZap },
  { label: "Security Uptime", value: "99.8%", icon: ShieldCheck },
  { label: "Site Health", value: "Live", icon: BarChart3 }
];

const gallery = [
  { title: "Utility Solar Arrays", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80" },
  { title: "Engineers at Work", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80" },
  { title: "Smart CCTV Coverage", image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80" },
  { title: "Modern Power Rooms", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80" },
  { title: "Infrastructure Projects", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80" },
  { title: "Renewable Communities", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80" }
];

const whyUs = ["Professional Team", "Modern Technology", "Affordable Solutions", "Sustainable Energy", "Reliable Support", "Nationwide Services"];

const stats = [
  { label: "Projects Completed", value: 120, suffix: "+" },
  { label: "Happy Clients", value: 85, suffix: "+" },
  { label: "Energy Solutions Installed", value: 240, suffix: "+" },
  { label: "Support Availability", value: 24, suffix: "/7" }
];

function VixLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gold-gradient text-black shadow-[0_0_28px_rgba(214,166,67,0.45)]">
        <span className="font-display text-xl font-black tracking-tight">V</span>
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-white" />
      </div>
      {!compact && (
        <div>
          <p className="font-display text-xl font-bold uppercase tracking-[0.18em] text-white">VIX</p>
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-gold">Investment Limited</p>
        </div>
      )}
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-14 max-w-3xl text-center"
    >
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.32em] text-gold">{eyebrow}</p>
      <h2 className="font-display text-4xl font-bold text-white md:text-6xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-white/[0.68]">{text}</p>}
    </motion.div>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const startTime = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1300);
    return () => clearTimeout(timer);
  }, []);

  const schema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Corporation",
      name: "VIX Investment Limited",
      description: "Diversified investment holding company with VIX Energy as the primary active subsidiary.",
      email: "info@vixinvestment.com",
      telephone: "+234 000 000 0000",
      department: { "@type": "Organization", name: "VIX Energy" }
    }),
    []
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-black"
        >
          <div className="text-center">
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="mx-auto mb-8 h-24 w-24 rounded-[2rem] border border-yellow-300/30 p-3">
              <div className="grid h-full w-full place-items-center rounded-[1.35rem] bg-gold-gradient font-display text-4xl font-black text-black">V</div>
            </motion.div>
            <p className="text-sm font-bold uppercase tracking-[0.5em] text-gold">VIX Investment Limited</p>
          </div>
        </motion.div>
      )}

      <motion.div style={{ scaleX }} className="fixed left-0 top-0 z-[90] h-1 w-full origin-left bg-gold-gradient" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/[0.55] backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" aria-label="VIX Investment Limited home"><VixLogo /></a>
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-semibold text-white/70 transition hover:text-gold">{link.label}</a>
            ))}
          </div>
          <a href="#contact" className="hidden rounded-full bg-gold-gradient px-6 py-3 text-sm font-bold text-black shadow-[0_0_28px_rgba(214,166,67,0.35)] transition hover:scale-105 lg:inline-flex">Get a Quote</a>
          <button className="lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-white/10 bg-black/95 px-5 py-6 lg:hidden">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block py-3 text-white/80">{link.label}</a>
            ))}
          </div>
        )}
      </header>

      <section id="home" className="relative min-h-screen overflow-hidden pt-28 hero-grid">
        <Image src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1800&q=85" alt="Solar panels and modern energy infrastructure" fill priority className="object-cover opacity-[0.42]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(214,166,67,0.28),transparent_24rem)]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-yellow-300/25 bg-white/10 px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-gold-gradient shadow-[0_0_20px_rgba(255,217,120,0.8)]" />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-gold">African Energy & Investment Holdings</span>
            </div>
            <VixLogo />
            <h1 className="mt-8 font-display text-5xl font-black leading-tight text-white md:text-7xl xl:text-8xl">
              Powering Africa Through <span className="text-gold">Smart Energy</span> Solutions
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/[0.74] md:text-xl">
              Innovative Renewable Energy, CCTV Security, and Smart Power Infrastructure for homes, businesses, and national-scale growth.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="group rounded-full bg-gold-gradient px-8 py-4 text-center font-bold text-black transition hover:scale-105">Get a Quote <ChevronRight className="ml-2 inline h-5 w-5 transition group-hover:translate-x-1" /></a>
              <a href="#energy" className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-center font-bold text-white backdrop-blur-xl transition hover:border-yellow-300/50 hover:text-gold">Explore Services</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25, duration: 0.9 }} className="relative hidden lg:block">
            <div className="float-slow rounded-[2.5rem] border border-yellow-300/20 bg-black/[0.35] p-5 shadow-[0_0_80px_rgba(214,166,67,0.18)] backdrop-blur-xl">
              <Image src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1000&q=85" width={720} height={840} alt="Electrical and renewable energy engineer" className="h-[560px] rounded-[2rem] object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section-padding relative">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card gold-glow rounded-[2rem] p-8">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.32em] text-gold">About VIX</p>
            <h2 className="font-display text-4xl font-bold md:text-5xl">A diversified holding company built for Africa&apos;s next growth era.</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6 text-lg leading-9 text-white/70">
            <p>VIX Investment Limited is a diversified investment and infrastructure company developing a portfolio of operating businesses across energy, healthcare, real estate, technology, logistics, and essential services.</p>
            <p>VIX Energy is the leading active subsidiary, delivering practical solar power, inverter systems, CCTV security, smart homes, and electrical engineering solutions that help customers reduce downtime and build resilient operations.</p>
            <p>Across the group, the company focuses on sustainable development, smart technology, renewable energy, and infrastructure growth with a premium corporate standard.</p>
          </motion.div>
        </div>
      </section>

      <section id="subsidiaries" className="section-padding bg-white/[0.025]">
        <SectionHeading eyebrow="Group Portfolio" title="Subsidiaries Under One Vision" text="VIX Energy leads operations today while the wider VIX ecosystem is positioned for phased expansion." />
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {subsidiaries.map((item, index) => {
            const Icon = item.icon;
            const active = item.status === "Active";
            return (
              <motion.div key={item.name} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className={`group rounded-[1.75rem] p-6 transition duration-500 ${active ? "glass-card gold-glow lg:col-span-2" : "border border-white/10 bg-white/[0.035] opacity-72 hover:opacity-100"}`}>
                <div className="mb-6 flex items-center justify-between">
                  <div className={`${active ? "bg-gold-gradient text-black" : "bg-white/10 text-white/70"} grid h-14 w-14 place-items-center rounded-2xl transition group-hover:scale-110`}><Icon /></div>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${active ? "bg-green-400/15 text-green-300" : "bg-white/10 text-white/50"}`}>{item.status}</span>
                </div>
                <h3 className="font-display text-2xl font-bold">{item.name}</h3>
                <p className="mt-3 leading-7 text-white/[0.62]">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="energy" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(214,166,67,0.16),transparent_35rem)]" />
        <SectionHeading eyebrow="Primary Operating Company" title="VIX Energy" text="The strongest visual and operational focus of the VIX group: renewable power, CCTV security, smart infrastructure, and electrical excellence." />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {energyServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article key={service.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="group glass-card rounded-[1.5rem] p-6 transition duration-500 hover:-translate-y-2 hover:border-yellow-300/40 hover:shadow-[0_0_45px_rgba(214,166,67,0.16)]">
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gold-gradient text-black"><Icon className="transition group-hover:rotate-6" /></div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/[0.62]">{service.text}</p>
                </motion.article>
              );
            })}
          </div>

          <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-card rounded-[2rem] p-8 md:p-10">
              <div className="mb-8 flex items-center gap-4"><Play className="text-gold" /><h3 className="font-display text-3xl font-bold">Installation Process</h3></div>
              <div className="space-y-5">
                {processSteps.map((step, index) => (
                  <motion.div key={step} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="flex items-center gap-5 rounded-2xl border border-white/10 bg-black/[0.35] p-5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-gradient font-bold text-black">{index + 1}</span>
                    <span className="font-semibold text-white/[0.86]">{step}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#contact" className="rounded-full bg-gold-gradient px-7 py-4 text-center font-bold text-black">Start a Project</a><a href="#projects" className="rounded-full border border-white/15 px-7 py-4 text-center font-bold text-white/80">View Showcase</a></div>
            </div>
            <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-yellow-300/20">
              <Image src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=85" alt="Solar installation project showcase" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/[0.35] to-transparent" />
              <div className="absolute bottom-0 p-8"><p className="text-sm font-bold uppercase tracking-[0.28em] text-gold">Project Showcase</p><h3 className="mt-3 font-display text-4xl font-bold">Solar, security, and smart energy systems delivered with precision.</h3></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/[0.025]">
        <SectionHeading eyebrow="Why Choose Us" title="Engineered for Confidence" />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, index) => (
            <motion.div key={item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-6 transition hover:border-yellow-300/[0.35]">
              <BadgeCheck className="text-gold" /><span className="text-lg font-bold">{item}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="virtual" className="section-padding relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(214,166,67,0.12),transparent_35%,rgba(255,255,255,0.04))]" />
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-300/10 blur-3xl" />
        <SectionHeading eyebrow="Virtual Contents" title="Digital Energy Experience" text="Premium virtual tools that help clients understand, approve, monitor, and support VIX Energy projects before and after physical installation." />
        <div className="relative mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card gold-glow rounded-[2rem] p-6 md:p-8">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.32em] text-gold">VIX Energy Command Centre</p>
                <h3 className="mt-3 font-display text-3xl font-bold md:text-4xl">Virtual project dashboard for smart power estates.</h3>
              </div>
              <span className="hidden rounded-full border border-green-300/30 bg-green-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-green-300 sm:inline-flex">Live Preview</span>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-[#060606] p-4 shadow-2xl">
              <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-auto text-xs uppercase tracking-[0.25em] text-white/[0.45]">vix.energy/portal</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {dashboardMetrics.map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                      <div className="mb-5 flex items-center justify-between"><Icon className="text-gold" /><span className="text-xs text-green-300">Online</span></div>
                      <p className="font-display text-4xl font-black text-white">{metric.value}</p>
                      <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/[0.52]">{metric.label}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 rounded-2xl border border-yellow-300/20 bg-gold-gradient p-[1px]">
                <div className="rounded-2xl bg-black p-5">
                  <div className="mb-3 flex items-center justify-between text-sm"><span className="font-bold text-white">Estate Load Optimization</span><span className="text-gold">72%</span></div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/10"><motion.div initial={{ width: 0 }} whileInView={{ width: "72%" }} viewport={{ once: true }} transition={{ duration: 1.4 }} className="h-full rounded-full bg-gold-gradient" /></div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {virtualContents.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article key={item.title} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 transition duration-500 hover:-translate-y-2 hover:border-yellow-300/40 hover:bg-white/[0.07]">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-gradient text-black"><Icon /></div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gold">{item.label}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/[0.62]">{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="section-padding">
        <SectionHeading eyebrow="Project Gallery" title="Energy, Security & Infrastructure in Motion" text="A premium visual gallery representing VIX Energy installations, engineering work, surveillance projects, and smart energy systems." />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="group relative h-80 overflow-hidden rounded-[1.75rem] border border-white/10">
              <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <h3 className="absolute bottom-6 left-6 font-display text-2xl font-bold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] border border-yellow-300/20 bg-gold-gradient p-2 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] bg-black/[0.88] p-8 text-center">
              <div className="font-display text-5xl font-black text-gold"><Counter value={stat.value} suffix={stat.suffix} /></div>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/[0.62]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section-padding bg-white/[0.025]">
        <SectionHeading eyebrow="Contact" title="Build Your Next Power Project With VIX Energy" text="Request a quote, book an energy audit, or speak with our team about renewable power and security infrastructure." />
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-card rounded-[2rem] p-8">
            <form className="space-y-5">
              <input aria-label="Full name" placeholder="Full name" className="w-full rounded-2xl border border-white/10 bg-black/[0.45] px-5 py-4 outline-none transition focus:border-yellow-300/50" />
              <input aria-label="Email address" type="email" placeholder="Email address" className="w-full rounded-2xl border border-white/10 bg-black/[0.45] px-5 py-4 outline-none transition focus:border-yellow-300/50" />
              <input aria-label="Phone number" placeholder="Phone number" className="w-full rounded-2xl border border-white/10 bg-black/[0.45] px-5 py-4 outline-none transition focus:border-yellow-300/50" />
              <select aria-label="Service interest" className="w-full rounded-2xl border border-white/10 bg-black/[0.45] px-5 py-4 outline-none transition focus:border-yellow-300/50">
                <option>Solar Panel Installation</option><option>Inverter Systems</option><option>CCTV Installation</option><option>Energy Consultation</option>
              </select>
              <textarea aria-label="Project message" placeholder="Tell us about your project" rows={5} className="w-full rounded-2xl border border-white/10 bg-black/[0.45] px-5 py-4 outline-none transition focus:border-yellow-300/50" />
              <button type="button" className="w-full rounded-full bg-gold-gradient px-8 py-4 font-bold text-black transition hover:scale-[1.02]">Submit Enquiry</button>
            </form>
          </div>
          <div className="space-y-5">
            {[{ icon: Phone, label: "Phone", value: "+234 000 000 0000" }, { icon: Mail, label: "Email", value: "info@vixinvestment.com" }, { icon: MapPin, label: "Office", value: "Lagos, Nigeria — Nationwide services" }, { icon: MessageCircle, label: "WhatsApp", value: "Chat with VIX Energy" }].map((item) => {
              const Icon = item.icon;
              return <div key={item.label} className="glass-card flex items-center gap-5 rounded-2xl p-6"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold-gradient text-black"><Icon /></div><div><p className="text-sm uppercase tracking-[0.22em] text-gold">{item.label}</p><p className="mt-1 font-semibold text-white/[0.82]">{item.value}</p></div></div>;
            })}
            <div className="relative h-72 overflow-hidden rounded-[2rem] border border-white/10 bg-black">
              <iframe title="VIX Investment Limited office location map" src="https://www.google.com/maps?q=Lagos%2C%20Nigeria&output=embed" className="h-full w-full opacity-75 grayscale invert" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-5 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div><VixLogo /><p className="mt-6 leading-7 text-white/[0.58]">VIX Investment Limited is a premium holding company building sustainable energy and infrastructure businesses for Africa&apos;s future.</p></div>
          <div><h4 className="mb-5 font-display text-xl font-bold">Quick Links</h4>{navLinks.map((link) => <a key={link.href} href={link.href} className="block py-2 text-white/[0.58] transition hover:text-gold">{link.label}</a>)}</div>
          <div><h4 className="mb-5 font-display text-xl font-bold">Subsidiaries</h4>{subsidiaries.map((item) => <p key={item.name} className="py-1.5 text-white/[0.58]">{item.name}</p>)}</div>
          <div><h4 className="mb-5 font-display text-xl font-bold">Contact</h4><p className="text-white/[0.58]">info@vixinvestment.com</p><p className="mt-2 text-white/[0.58]">+234 000 000 0000</p><div className="mt-6 flex gap-3"><span className="rounded-full border border-white/10 px-3 py-2 text-xs">LinkedIn</span><span className="rounded-full border border-white/10 px-3 py-2 text-xs">X</span><span className="rounded-full border border-white/10 px-3 py-2 text-xs">Instagram</span></div></div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-7 text-center text-sm text-white/[0.45]">© {new Date().getFullYear()} VIX Investment Limited. All rights reserved.</div>
      </footer>

      <a href="https://wa.me/2340000000000" aria-label="Chat on WhatsApp" className="fixed bottom-6 left-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-green-500 text-white shadow-[0_0_28px_rgba(34,197,94,0.45)] transition hover:scale-110"><MessageCircle /></a>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full border border-yellow-300/30 bg-black/80 text-gold backdrop-blur-xl transition hover:scale-110"><ArrowUp /></button>
    </main>
  );
}
