import { motion, useScroll, useTransform, useInView, type Transition } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Brain,
  Shield,
  Smartphone,
  Database,
  Gamepad2,
  Cpu,
  Cloud,
} from "lucide-react";

const smoothTransition: Transition = {
  duration: 0.8,
  ease: [0.4, 0, 0.2, 1],
};

const domains = [
  {
    icon: Globe,
    name: "Web Development",
    description: "Modern frameworks, responsive design, and full-stack excellence.",
  },
  {
    icon: Brain,
    name: "AI & Machine Learning",
    description: "Deep learning, neural networks, and intelligent systems.",
  },
  {
    icon: Shield,
    name: "Cybersecurity",
    description: "Ethical hacking, network security, and digital forensics.",
  },
  {
    icon: Smartphone,
    name: "App Development",
    description: "Native and cross-platform mobile applications.",
  },
  {
    icon: Database,
    name: "Data Science",
    description: "Analytics, visualization, and data-driven insights.",
  },
  {
    icon: Gamepad2,
    name: "Game Development",
    description: "Game engines, graphics programming, and interactive experiences.",
  },
  {
    icon: Cpu,
    name: "IoT & Embedded",
    description: "Connected devices, sensors, and smart systems.",
  },
  {
    icon: Cloud,
    name: "Cloud Computing",
    description: "Scalable infrastructure, DevOps, and serverless architecture.",
  },
];

export const Domains = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  return (
    <section id="domains" className="section-padding relative overflow-hidden" ref={containerRef}>
      {/* Top gradient blend */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-secondary/30 to-transparent pointer-events-none z-10" />

      <motion.div style={{ y }} className="container-tight relative z-20" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={smoothTransition}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="font-body text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            Explore
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Our Domains
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Dive deep into specialized tracks led by industry experts and
            passionate mentors.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1 + index * 0.06,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative p-6 bg-card rounded-2xl border border-border card-hover glow-hover cursor-pointer"
            >
              <motion.div
                className="w-10 h-10 flex items-center justify-center bg-secondary rounded-xl mb-4 icon-hover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <domain.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-fast" />
              </motion.div>
              <h3 className="font-display text-lg font-bold mb-2 text-hover">
                {domain.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {domain.description}
              </p>

              {/* Hover indicator */}
              <div className="absolute bottom-6 right-6 w-6 h-6 rounded-full bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-slow">
                <span className="text-xs group-hover:text-primary transition-fast">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom gradient blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary/30 to-transparent pointer-events-none z-10" />
    </section>
  );
};
