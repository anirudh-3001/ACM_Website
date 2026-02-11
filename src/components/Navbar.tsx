import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Domains", href: "#domains" },
  { name: "Events", href: "#events" },
  { name: "Team", href: "#team" },
  { name: "Join", href: "#join" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container-tight flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <motion.a
          href="#home"
          className="font-display text-xl md:text-2xl font-bold tracking-tight"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          ACM<span className="text-primary">.</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link font-body text-sm font-medium text-muted-foreground hover:text-foreground pb-1"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container-tight py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="font-body text-lg font-medium text-muted-foreground hover:text-foreground transition-fast"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
