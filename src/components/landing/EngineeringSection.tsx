import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Wrench, Layers, Globe, ArrowRight } from "lucide-react";

const pillars = [
  { icon: <Wrench className="w-5 h-5" />, title: "Engineered solutions", desc: "We don't just install hardware. We solve real-world problems." },
  { icon: <Layers className="w-5 h-5" />, title: "Integrated systems", desc: "Every component is designed to work together seamlessly." },
  { icon: <Globe className="w-5 h-5" />, title: "International standards", desc: "Local understanding with global engineering quality." },
];

const EngineeringSection = () => (
  <section className="py-24 md:py-32 bg-sohub-gray-50 relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sohub-orange mb-4">Who We Are</p>
            <h2 className="text-section-mobile md:text-section text-foreground mb-6">
              Built by engineers.
              <br />Not traders.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-body-lg text-muted-foreground mb-6 leading-relaxed">
              SOHUB designs systems that integrate, adapt, and scale.
              We don't just install hardware.
              We engineer solutions around real-world problems.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sohub-orange/5 border border-sohub-orange/15">
              <span className="text-sm font-medium text-foreground">SOHUB AI Vision is just the beginning — more AI products are coming.</span>
              <ArrowRight className="w-4 h-4 text-sohub-orange shrink-0" />
            </div>
          </ScrollReveal>
        </div>

        {/* Right: Pillars */}
        <div className="space-y-4">
          {pillars.map((p, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.1}>
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-border bg-background hover:border-sohub-orange/20 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-sohub-orange/8 flex items-center justify-center text-sohub-orange shrink-0 group-hover:bg-sohub-orange/12 transition-colors">
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EngineeringSection;
