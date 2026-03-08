import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Camera, Cpu, Box, Zap, Shield, Settings, ChevronDown, Check, Plus, ArrowLeft, WifiOff, Clock, BadgeCheck, Eye, Thermometer, Flame } from "lucide-react";
import ScrollReveal from "@/components/landing/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const specs = [
  { label: "Resolution", value: "2MP / 4MP options" },
  { label: "Processing", value: "Built-in AI chipset" },
  { label: "Connectivity", value: "Ethernet / Wi-Fi" },
  { label: "Power", value: "12V DC / PoE" },
  { label: "Weather Rating", value: "IP67 outdoor rated" },
  { label: "Night Vision", value: "IR up to 30m" },
  { label: "AI Models", value: "Essential safety models" },
  { label: "Latency", value: "< 300ms on-device" },
];

const benefits = [
  { icon: <Cpu className="w-5 h-5" />, title: "AI Built Into Camera", desc: "No external box or server needed — intelligence runs on the camera itself." },
  { icon: <Box className="w-5 h-5" />, title: "Plug & Play Setup", desc: "Mount, connect, and start detecting within minutes." },
  { icon: <Shield className="w-5 h-5" />, title: "Fully Offline", desc: "No internet required. All data stays on your local network." },
  { icon: <Zap className="w-5 h-5" />, title: "Instant Alerts", desc: "Real-time push notifications and alarm triggers." },
  { icon: <Camera className="w-5 h-5" />, title: "HD Surveillance", desc: "High-definition recording with AI-powered event tagging." },
  { icon: <Settings className="w-5 h-5" />, title: "Easy Configuration", desc: "Simple web interface for model selection and alert setup." },
];

const addOns = [
  { name: "Professional Installation", price: "৳2,000", desc: "On-site mounting and network setup" },
  { name: "On-Site Training", price: "৳1,500", desc: "Walkthrough of features and alert config" },
  { name: "Extended Warranty", price: "৳2,000/yr", desc: "Additional 1-year device warranty" },
  { name: "Mounting Kit (Pole/Wall)", price: "৳500", desc: "Heavy-duty mount bracket included" },
];

const faqs = [
  { q: "What AI models come pre-loaded?", a: "Essential safety models including intrusion detection, fire/smoke detection, and motion tracking are pre-installed." },
  { q: "Can I add more AI models later?", a: "Yes — firmware updates can add new models as they become available." },
  { q: "Does it need internet to work?", a: "No. The camera processes everything locally. Internet is only needed for optional firmware updates." },
  { q: "Can I use this with the Edge Engine?", a: "Yes — the standalone camera can also act as a standard RTSP source for the Edge Engine for centralized processing." },
];

const videos = [
  { id: "rSQWDez6wbA", title: "Standalone Camera Demo" },
];

const trustPoints = [
  { icon: <WifiOff className="w-4 h-4" />, label: "100% Offline" },
  { icon: <Shield className="w-4 h-4" />, label: "IP67 Outdoor" },
  { icon: <Clock className="w-4 h-4" />, label: "< 300ms On-Device" },
  { icon: <BadgeCheck className="w-4 h-4" />, label: "1 Year Warranty" },
];

const highlights = [
  { num: "4MP", label: "Max Resolution" },
  { num: "30m", label: "Night Vision" },
  { num: "<300", label: "ms Latency" },
  { num: "0", label: "Monthly Fees" },
];

const aiModels = [
  { icon: <Eye className="w-4 h-4" />, name: "Intrusion Detection", desc: "Perimeter breach alerts" },
  { icon: <Flame className="w-4 h-4" />, name: "Fire & Smoke", desc: "Early fire warning" },
  { icon: <Thermometer className="w-4 h-4" />, name: "Motion Tracking", desc: "Smart motion zones" },
];

const ProductStandaloneCamera = () => {
  const [selectedAddOns, setSelectedAddOns] = useState<number[]>([]);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleAddOn = (i: number) => {
    setSelectedAddOns(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="SOHUB Vision AI Camera – Standalone Smart Camera | From ৳8,000"
        description="All-in-one AI camera with built-in intelligence. No external hardware needed. IP67 outdoor rated, 30m night vision. Starting from ৳8,000."
        path="/products/standalone-camera"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sohub-orange/[0.02] via-transparent to-background" />
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-sohub-orange/[0.03] blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 md:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sohub-orange/[0.07] border border-sohub-orange/15 text-xs font-semibold text-sohub-orange uppercase tracking-[0.15em] mb-8">
                <Camera className="w-3.5 h-3.5" /> All-in-One AI Camera
              </span>
              <h1 className="text-4xl md:text-[3.5rem] font-extrabold tracking-tight text-foreground mb-5 leading-[1.08]">
                SOHUB Vision
                <br />
                <span className="bg-gradient-to-r from-sohub-orange to-[hsl(189,100%,55%)] bg-clip-text text-transparent">AI Camera</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                A standalone smart camera with AI built right in. No external hardware, no complex setup — just intelligent surveillance out of the box.
              </p>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-sm text-muted-foreground">Starting from</span>
                <span className="text-4xl md:text-5xl font-extrabold text-foreground">৳8,000</span>
              </div>

              {/* Trust points */}
              <div className="flex flex-wrap gap-3 mb-10">
                {trustPoints.map((t, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/60 border border-border/60 text-xs font-medium text-muted-foreground"
                  >
                    <span className="text-sohub-orange">{t.icon}</span>
                    {t.label}
                  </motion.span>
                ))}
              </div>

              <Button variant="hero" size="lg" className="rounded-xl text-base px-10 py-6 shadow-[0_8px_30px_-6px_hsl(199,100%,50%,0.4)]">
                Order Now
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-md relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sohub-orange/[0.06] to-transparent rounded-3xl blur-2xl scale-110" />
                <div className="relative p-10 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-secondary/30 to-secondary/10 shadow-[0_20px_60px_-15px_hsl(0,0%,0%,0.06)]">
                  <AICameraSVGLarge />
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-sohub-orange text-primary-foreground text-[10px] font-bold tracking-wide uppercase shadow-lg"
                  >
                    Plug & Play
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-10 border-y border-border/60 bg-secondary/20">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <span className="text-3xl md:text-4xl font-extrabold text-foreground">{h.num}</span>
                <p className="text-xs text-muted-foreground mt-1 font-medium uppercase tracking-wider">{h.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Built-in AI Models */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 md:px-8">
          <ScrollReveal>
            <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-sohub-orange mb-5">Pre-Loaded</p>
            <h2 className="text-section-mobile md:text-[3rem] text-center text-foreground mb-5 font-extrabold">Built-in AI Models</h2>
            <p className="text-center text-muted-foreground text-body-lg mb-16 max-w-lg mx-auto">Ready to detect from the moment you power on.</p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {aiModels.map((model, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-7 rounded-2xl border border-border/80 bg-background text-center hover:border-sohub-orange/25 hover:shadow-[0_12px_40px_-10px_hsl(0,0%,0%,0.06)] transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-sohub-orange/[0.07] flex items-center justify-center text-sohub-orange mx-auto mb-5 group-hover:bg-sohub-orange/[0.12] group-hover:shadow-[0_4px_16px_-4px_hsl(199,100%,50%,0.15)] transition-all duration-300">
                    {model.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{model.name}</h3>
                  <p className="text-xs text-muted-foreground">{model.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 md:py-32 bg-sohub-gray-50">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 md:px-8">
          <ScrollReveal>
            <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-sohub-orange mb-5">Benefits</p>
            <h2 className="text-section-mobile md:text-[3rem] text-center text-foreground mb-5 font-extrabold">Why Standalone Camera?</h2>
            <p className="text-center text-muted-foreground text-body-lg mb-20 max-w-xl mx-auto">Perfect for small setups, single entry points, or rapid deployment.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-7 rounded-2xl border border-border/80 bg-background hover:border-sohub-orange/25 hover:shadow-[0_12px_40px_-10px_hsl(0,0%,0%,0.06)] transition-all duration-300 group h-full"
                >
                  <div className="w-12 h-12 rounded-2xl bg-sohub-orange/[0.07] flex items-center justify-center text-sohub-orange mb-5 group-hover:bg-sohub-orange/[0.12] group-hover:shadow-[0_4px_16px_-4px_hsl(199,100%,50%,0.15)] transition-all duration-300">{b.icon}</div>
                  <h3 className="font-bold text-foreground mb-2 text-[15px]">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 md:px-8">
          <ScrollReveal>
            <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-sohub-orange mb-5">Specs</p>
            <h2 className="text-section-mobile md:text-[3rem] text-center text-foreground mb-20 font-extrabold">Technical Specifications</h2>
          </ScrollReveal>
          <div className="max-w-2xl mx-auto bg-background rounded-3xl border border-border/80 overflow-hidden shadow-[0_4px_20px_-8px_hsl(0,0%,0%,0.05)]">
            {specs.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`flex justify-between items-center py-5 px-7 ${i < specs.length - 1 ? "border-b border-border/50" : ""} ${i % 2 === 0 ? "bg-secondary/15" : ""}`}
              >
                <span className="text-sm font-semibold text-foreground">{s.label}</span>
                <span className="text-sm text-muted-foreground font-medium">{s.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      {videos.length > 0 && (
        <section className="py-24 md:py-32 bg-sohub-gray-50">
          <div className="mx-auto max-w-[1300px] px-4 sm:px-6 md:px-8">
            <ScrollReveal>
              <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-sohub-orange mb-5">Demo</p>
              <h2 className="text-section-mobile md:text-[3rem] text-center text-foreground mb-16 font-extrabold">See It In Action</h2>
            </ScrollReveal>
            <div className="max-w-3xl mx-auto">
              {videos.map(v => (
                <div key={v.id} className="rounded-3xl overflow-hidden border border-border shadow-[0_20px_60px_-15px_hsl(0,0%,0%,0.08)]">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1&loop=1&playlist=${v.id}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Checkout */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 md:px-8">
          <ScrollReveal>
            <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-sohub-orange mb-5">Order</p>
            <h2 className="text-section-mobile md:text-[3rem] text-center text-foreground mb-5 font-extrabold">Configure Your Order</h2>
            <p className="text-center text-muted-foreground text-body-lg mb-20 max-w-xl mx-auto">Add optional services for a seamless setup.</p>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            <div className="p-7 rounded-2xl border-2 border-sohub-orange/30 bg-gradient-to-br from-sohub-orange/[0.04] via-sohub-orange/[0.02] to-transparent mb-5 shadow-sm">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sohub-orange/10 flex items-center justify-center">
                    <Camera className="w-5 h-5 text-sohub-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">SOHUB Vision AI Camera</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">Standalone unit with built-in AI</p>
                  </div>
                </div>
                <span className="text-2xl font-extrabold text-foreground">৳8,000</span>
              </div>
            </div>

            <div className="space-y-3 mb-10">
              {addOns.map((addon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2 }}
                  onClick={() => toggleAddOn(i)}
                  className={`p-5 rounded-xl border cursor-pointer transition-all duration-200 ${selectedAddOns.includes(i)
                      ? "border-sohub-orange/40 bg-sohub-orange/[0.04] shadow-sm"
                      : "border-border bg-background hover:border-sohub-orange/20"
                    }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${selectedAddOns.includes(i) ? "bg-sohub-orange border-sohub-orange" : "border-border"
                        }`}>
                        {selectedAddOns.includes(i) ? <Check className="w-4 h-4 text-primary-foreground" /> : <Plus className="w-3 h-3 text-muted-foreground" />}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-foreground">{addon.name}</span>
                        <p className="text-xs text-muted-foreground mt-0.5">{addon.desc}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-foreground whitespace-nowrap ml-4">{addon.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="hero" size="lg" className="rounded-xl text-base px-10 py-6 shadow-[0_8px_30px_-6px_hsl(199,100%,50%,0.4)] w-full sm:w-auto">
                Order Now
              </Button>
              <p className="text-xs text-muted-foreground mt-4">Free shipping within Dhaka. Contact for outside Dhaka.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upsell Banner */}
      <section className="py-16 bg-gradient-to-r from-foreground/[0.02] via-sohub-orange/[0.04] to-foreground/[0.02] border-y border-border/60">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 md:px-8 text-center">
          <p className="text-sm text-muted-foreground mb-2">Need more cameras or centralized processing?</p>
          <h3 className="text-xl font-bold text-foreground mb-4">
            Check out the <span className="text-sohub-orange">Edge Engine</span> for multi-camera setups.
          </h3>
          <Link to="/products/edge-engine">
            <Button variant="hero-outline" size="lg" className="rounded-xl text-sm px-8 py-5">
              View Edge Engine — From ৳95,000
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-sohub-gray-50">
        <div className="mx-auto max-w-[1300px] px-4 sm:px-6 md:px-8">
          <ScrollReveal>
            <h2 className="text-section-mobile md:text-[3rem] text-center text-foreground mb-16 font-extrabold">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div
                  className="p-6 rounded-2xl border border-border/80 bg-background cursor-pointer hover:border-sohub-orange/20 hover:shadow-sm transition-all duration-200"
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-foreground pr-4">{faq.q}</span>
                    <motion.div animate={{ rotate: expandedFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {expandedFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border/60 leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const AICameraSVGLarge = () => (
  <motion.svg width="100%" viewBox="0 0 200 140" fill="none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
    <rect x="50" y="30" width="100" height="70" rx="12" stroke="hsl(var(--border))" strokeWidth="1.5" fill="hsl(var(--secondary))" />
    <circle cx="100" cy="60" r="22" stroke="hsl(var(--border))" strokeWidth="1.5" fill="hsl(var(--background))" />
    <circle cx="100" cy="60" r="14" stroke="hsl(var(--sohub-orange) / 0.4)" strokeWidth="1.5" fill="hsl(var(--sohub-orange) / 0.05)" />
    <motion.circle cx="100" cy="60" r="6" fill="hsl(var(--sohub-orange) / 0.3)" animate={{ scale: [0.8, 1.1, 0.8] }} transition={{ duration: 3, repeat: Infinity }} />
    <rect x="68" y="86" width="24" height="8" rx="2" fill="hsl(var(--sohub-orange) / 0.15)" stroke="hsl(var(--sohub-orange) / 0.3)" strokeWidth="0.5" />
    <text x="80" y="93" textAnchor="middle" fontSize="5" fontWeight="600" fill="hsl(var(--sohub-orange))">AI</text>
    <rect x="92" y="100" width="16" height="20" rx="2" stroke="hsl(var(--border))" strokeWidth="1" fill="hsl(var(--secondary))" />
    <rect x="82" y="118" width="36" height="6" rx="3" stroke="hsl(var(--border))" strokeWidth="1" fill="hsl(var(--secondary))" />
    {[28, 36, 44].map((r, i) => (
      <motion.circle
        key={i}
        cx="100"
        cy="60"
        r={r}
        stroke="hsl(var(--sohub-orange) / 0.08)"
        strokeWidth="1"
        fill="none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.1, 0.8], opacity: [0, 0.3, 0] }}
        transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
      />
    ))}
  </motion.svg>
);

export default ProductStandaloneCamera;
