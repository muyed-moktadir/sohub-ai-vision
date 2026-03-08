import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Server, Camera, Cpu, MonitorSpeaker, Layers, Zap, Box, Settings } from "lucide-react";
import aiEngineImg from "@/assets/ai_engine.png";

const DeploymentSection = () => (
  <section id="deployment" className="py-28 md:py-36 relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container mx-auto px-6">
      <ScrollReveal>
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-sohub-orange mb-5">Deployment</p>
        <h2 className="text-section-mobile md:text-[3.25rem] text-center text-foreground mb-5 font-extrabold leading-tight">
          Two ways to add intelligence.
        </h2>
        <p className="text-center text-muted-foreground text-body-lg max-w-xl mx-auto mb-20">
          Choose the deployment model that fits your infrastructure.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Edge Engine Card */}
        <ScrollReveal delay={0.1}>
          <motion.a
            href="/products/edge-engine"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group relative flex flex-col h-full rounded-3xl border border-border/80 bg-background hover:border-sohub-orange/25 shadow-[0_1px_3px_0_hsl(0,0%,0%,0.04)] hover:shadow-[0_20px_50px_-12px_hsl(0,0%,0%,0.08)] transition-all duration-300 overflow-hidden"
          >
            {/* Full Width Visual Section */}
            <div className="w-full aspect-[4/3] relative overflow-hidden border-b border-border/40 bg-secondary/10">
              <img src={aiEngineImg} alt="SOHUB AI Vision Edge Engine" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="relative p-8 md:p-10 flex-1 flex flex-col">
              {/* Subtle corner gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-sohub-orange/[0.04] to-transparent rounded-bl-[80px] pointer-events-none" />

              {/* Badge + Title */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-sohub-orange/[0.08] flex items-center justify-center group-hover:bg-sohub-orange/[0.12] transition-colors">
                  <Server className="w-5 h-5 text-sohub-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">SOHUB AI Vision Edge Engine</h3>
                  <span className="text-xs text-muted-foreground">Centralized processing unit</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3.5 text-sm text-muted-foreground mb-8">
                {[
                  { icon: <Layers className="w-4 h-4" />, text: "4 / 8 / scalable channels" },
                  { icon: <MonitorSpeaker className="w-4 h-4" />, text: "Works with existing IP cameras" },
                  { icon: <Cpu className="w-4 h-4" />, text: "Centralized LAN processing" },
                  { icon: <Settings className="w-4 h-4" />, text: "Flexible model deployment" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 group-hover:text-foreground transition-colors">
                    <span className="text-sohub-orange/50 group-hover:text-sohub-orange transition-colors">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-sm text-muted-foreground">Starting from</span>
                <span className="text-3xl font-extrabold text-foreground">৳95,000</span>
              </div>

              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-sohub-orange group-hover:gap-3 transition-all duration-300">
                View Product <span className="text-lg">→</span>
              </span>
            </div>
          </motion.a>
        </ScrollReveal>

        {/* AI Camera Card */}
        <ScrollReveal delay={0.2}>
          <motion.a
            href="/products/standalone-camera"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group relative flex flex-col h-full rounded-3xl border border-border/80 bg-background hover:border-sohub-orange/25 shadow-[0_1px_3px_0_hsl(0,0%,0%,0.04)] hover:shadow-[0_20px_50px_-12px_hsl(0,0%,0%,0.08)] transition-all duration-300 overflow-hidden"
          >
            {/* Full Width Visual Section */}
            <div className="w-full aspect-[4/3] bg-secondary/30 relative overflow-hidden flex items-center justify-center border-b border-border/40 group-hover:bg-secondary/40 transition-colors duration-300">
              <AICameraSVG />
            </div>

            <div className="relative p-8 md:p-10 flex-1 flex flex-col">
              {/* Subtle corner gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-sohub-orange/[0.04] to-transparent rounded-bl-[80px] pointer-events-none" />

              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-sohub-orange/[0.08] flex items-center justify-center group-hover:bg-sohub-orange/[0.12] transition-colors">
                  <Camera className="w-5 h-5 text-sohub-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">SOHUB Vision AI Camera</h3>
                  <span className="text-xs text-muted-foreground">Built-in intelligence</span>
                </div>
              </div>

              <ul className="space-y-3.5 text-sm text-muted-foreground mb-8">
                {[
                  { icon: <Cpu className="w-4 h-4" />, text: "AI built into camera" },
                  { icon: <Box className="w-4 h-4" />, text: "No external box needed" },
                  { icon: <Zap className="w-4 h-4" />, text: "Essential safety models" },
                  { icon: <Settings className="w-4 h-4" />, text: "Quick installation" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 group-hover:text-foreground transition-colors">
                    <span className="text-sohub-orange/50 group-hover:text-sohub-orange transition-colors">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>

              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-sm text-muted-foreground">Starting from</span>
                <span className="text-3xl font-extrabold text-foreground">৳8,000</span>
              </div>

              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-sohub-orange group-hover:gap-3 transition-all duration-300">
                View Product <span className="text-lg">→</span>
              </span>
            </div>
          </motion.a>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

/* Clean SVG illustration for AI Camera */
const AICameraSVG = () => (
  <motion.svg
    width="200"
    height="120"
    viewBox="0 0 200 140"
    fill="none"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <rect x="50" y="30" width="100" height="70" rx="12" stroke="hsl(var(--border))" strokeWidth="1.5" fill="hsl(var(--secondary))" />
    <circle cx="100" cy="60" r="22" stroke="hsl(var(--border))" strokeWidth="1.5" fill="hsl(var(--background))" />
    <circle cx="100" cy="60" r="14" stroke="hsl(var(--sohub-orange) / 0.4)" strokeWidth="1.5" fill="hsl(var(--sohub-orange) / 0.05)" />
    <motion.circle cx="100" cy="60" r="6" fill="hsl(var(--sohub-orange) / 0.3)" animate={{ scale: [0.8, 1.1, 0.8] }} transition={{ duration: 3, repeat: Infinity }} />
    <rect x="68" y="86" width="24" height="8" rx="2" fill="hsl(var(--sohub-orange) / 0.15)" stroke="hsl(var(--sohub-orange) / 0.3)" strokeWidth="0.5" />
    <motion.text x="80" y="93" textAnchor="middle" fontSize="5" fontWeight="600" fill="hsl(var(--sohub-orange))">AI</motion.text>
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

export default DeploymentSection;
