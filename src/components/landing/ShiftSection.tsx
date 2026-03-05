import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const ShiftSection = () => (
  <section className="py-24 md:py-32 relative overflow-hidden">
    {/* Accent line */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div>
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sohub-orange mb-4">The Shift</p>
            <h2 className="text-section-mobile md:text-section text-foreground mb-6">
              Prevention.
              <br />Made practical.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-body-lg text-muted-foreground mb-8 leading-relaxed">
              SOHUB AI Vision runs entirely offline inside your local network.
              It analyzes video in real time and responds instantly —
              without monthly AI subscription costs.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="space-y-3">
              {["Built for Bangladesh realities", "Engineered with international standards", "Zero cloud dependency"].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-sohub-orange/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-sohub-orange" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Right: Visual comparison */}
        <ScrollReveal delay={0.2}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-sohub-orange/5 to-transparent rounded-3xl blur-xl" />
            <div className="relative space-y-4">
              <ComparisonCard
                type="before"
                title="Traditional CCTV"
                items={["Record & review later", "Cloud subscriptions", "Internet required", "Delayed response"]}
              />
              <ComparisonCard
                type="after"
                title="With SOHUB AI Vision"
                items={["Detect & alert instantly", "One-time deployment", "Fully offline", "Real-time response"]}
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

const ComparisonCard = ({ type, title, items }: { type: "before" | "after"; title: string; items: string[] }) => (
  <motion.div
    whileHover={{ scale: 1.01 }}
    className={`p-6 rounded-xl border ${
      type === "after"
        ? "border-sohub-orange/25 bg-gradient-to-br from-sohub-orange/5 to-sohub-orange/[0.02]"
        : "border-border bg-background"
    }`}
  >
    <div className="flex items-center gap-2 mb-4">
      <div className={`w-2 h-2 rounded-full ${type === "after" ? "bg-sohub-orange" : "bg-muted-foreground/30"}`} />
      <span className={`text-sm font-semibold ${type === "after" ? "text-sohub-orange" : "text-muted-foreground"}`}>
        {title}
      </span>
    </div>
    <div className="grid grid-cols-2 gap-2">
      {items.map((item, i) => (
        <span key={i} className={`text-xs px-3 py-1.5 rounded-md ${
          type === "after"
            ? "bg-sohub-orange/8 text-foreground"
            : "bg-secondary text-muted-foreground line-through decoration-muted-foreground/30"
        }`}>
          {item}
        </span>
      ))}
    </div>
  </motion.div>
);

export default ShiftSection;
