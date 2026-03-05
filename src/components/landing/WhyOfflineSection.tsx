import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { WifiOff, CircleDollarSign, Shield, Zap } from "lucide-react";

const points = [
  { icon: <WifiOff className="w-5 h-5" />, title: "Zero internet dependency", text: "Operates on your LAN. No bandwidth, no latency, no downtime from ISP failures.", stat: "100%", statLabel: "Offline" },
  { icon: <CircleDollarSign className="w-5 h-5" />, title: "No recurring costs", text: "One-time deployment. No monthly AI subscriptions eating into margins.", stat: "0", statLabel: "Monthly fees" },
  { icon: <Shield className="w-5 h-5" />, title: "Data stays private", text: "All processing and storage happens on-premise. Nothing leaves your building.", stat: "On-site", statLabel: "Data storage" },
  { icon: <Zap className="w-5 h-5" />, title: "Faster response", text: "Edge processing means sub-200ms detection. No round-trip to cloud servers.", stat: "<200ms", statLabel: "Latency" },
];

const WhyOfflineSection = () => (
  <section className="py-24 md:py-32 relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    
    <div className="container mx-auto px-6 max-w-5xl">
      <ScrollReveal>
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-sohub-orange mb-4">Why Offline</p>
        <h2 className="text-section-mobile md:text-section text-center text-foreground mb-4">
          Why offline AI makes sense here.
        </h2>
        <p className="text-center text-muted-foreground text-body-lg max-w-xl mx-auto mb-16">
          In Bangladesh's infrastructure reality, edge AI isn't a choice — it's the only reliable option.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-5">
        {points.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="relative p-6 rounded-2xl border border-border bg-background hover:border-sohub-orange/20 hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              {/* Stat watermark */}
              <div className="absolute top-3 right-5 text-right">
                <span className="text-3xl font-black text-sohub-orange/8 group-hover:text-sohub-orange/15 transition-colors">{p.stat}</span>
                <p className="text-[9px] text-muted-foreground/40 uppercase tracking-wider">{p.statLabel}</p>
              </div>

              <div className="w-10 h-10 rounded-xl bg-sohub-orange/8 flex items-center justify-center text-sohub-orange mb-4 group-hover:bg-sohub-orange/12 transition-colors">
                {p.icon}
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed pr-12">{p.text}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyOfflineSection;
