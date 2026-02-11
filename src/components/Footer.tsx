import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Domains", href: "#domains" },
  { name: "Events", href: "#events" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container-tight py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
          {/* Logo */}
          <motion.a
            href="#home"
            className="font-display text-2xl font-bold tracking-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            ACM<span className="text-primary">.</span>
          </motion.a>

          {/* Links */}
          <nav className="flex flex-wrap gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link font-body text-sm text-muted-foreground hover:text-foreground pb-1"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8 border-t border-border">
          {/* Copyright */}
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} ACM Student Chapter. All rights reserved.
          </p>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary glow-hover transition-slow"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4 text-muted-foreground hover:text-primary transition-fast" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
