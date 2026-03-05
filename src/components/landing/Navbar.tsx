import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Facebook, Linkedin, Youtube } from "lucide-react";

const navLinks = [
  { label: "Problem", href: "/#problem" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Deployment", href: "/#deployment" },
  { label: "FAQ", href: "/#faq" },
];

const socialLinks = [
  { icon: <Facebook className="w-4 h-4" />, href: "https://facebook.com/sohub", label: "Facebook" },
  { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com/company/sohub", label: "LinkedIn" },
  { icon: <Youtube className="w-4 h-4" />, href: "https://youtube.com/@sohub", label: "YouTube" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const getHref = (href: string) => {
    // On home page, use just the hash; on other pages, use full path
    if (isHome) return href.replace("/", "");
    return href;
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/40"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="/" className="flex items-center gap-1.5">
          <span className="text-xl font-extrabold tracking-tight text-foreground">SOHUB</span>
          <span className="text-xl font-light text-sohub-orange">AI Vision</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {navLinks.map(link => (
            <a key={link.href} href={getHref(link.href)} className="hover:text-foreground transition-colors relative group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-sohub-orange group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Social icons - desktop */}
          <div className="hidden sm:flex items-center gap-2">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-8 h-8 rounded-lg border border-border/50 bg-background/50 flex items-center justify-center text-muted-foreground hover:text-sohub-orange hover:border-sohub-orange/30 transition-all duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur-xl"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={getHref(link.href)}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 flex items-center gap-2">
                {socialLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-9 h-9 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-sohub-orange hover:border-sohub-orange/30 transition-all duration-200"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
