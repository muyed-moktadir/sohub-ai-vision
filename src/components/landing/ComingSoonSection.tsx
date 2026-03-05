import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Brain, MessageSquare, BarChart3, Mic, Sparkles } from "lucide-react";

const upcomingProducts = [
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "SOHUB AI Assist",
    desc: "Conversational AI for customer service and internal operations — trained on your own data.",
    status: "In Development",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "SOHUB AI Analytics",
    desc: "Predictive analytics and business intelligence — turning raw data into actionable insights.",
    status: "Coming 2026",
  },
  {
    icon: <Mic className="w-5 h-5" />,
    title: "SOHUB AI Voice",
    desc: "Bangla-first voice recognition and automation — for factories, call centers, and beyond.",
    status: "Research Phase",
  },
];

const ComingSoonSection = () => (
  <section className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    {/* Subtle background pattern */}
    <div className="absolute inset-0 bg-gradient-to-b from-sohub-orange/[0.015] via-transparent to-transparent" />

    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sohub-orange/8 border border-sohub-orange/15 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-sohub-orange" />
            <span className="text-xs font-medium tracking-wide text-sohub-orange uppercase">SOHUB AI Ecosystem</span>
          </div>
          <h2 className="text-section-mobile md:text-section text-foreground mb-4">
            Vision is just the start.
          </h2>
          <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
            SOHUB AI Vision is our first product — built to solve the most urgent problem. 
            But we're engineering a full ecosystem of AI solutions designed for the real challenges 
            businesses face in Bangladesh and beyond.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
        {upcomingProducts.map((product, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="relative p-8 rounded-2xl border border-dashed border-border hover:border-sohub-orange/25 bg-background/50 backdrop-blur-sm transition-all duration-300 group h-full"
            >
              {/* Status badge */}
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-sohub-orange/8 text-sohub-orange/70">
                  {product.status}
                </span>
              </div>

              <div className="w-12 h-12 rounded-xl bg-sohub-orange/8 flex items-center justify-center text-sohub-orange mb-5 group-hover:bg-sohub-orange/12 transition-colors">
                {product.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{product.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{product.desc}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-2xl bg-gradient-to-br from-foreground/[0.03] to-transparent border border-border/50"
          >
            <Brain className="w-8 h-8 text-sohub-orange shrink-0" />
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground mb-1">
                One mission. Multiple solutions.
              </p>
              <p className="text-sm text-muted-foreground">
                Every SOHUB AI product is built offline-first, privacy-focused, and engineered for local realities.
              </p>
            </div>
          </motion.div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ComingSoonSection;
