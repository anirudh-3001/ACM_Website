import { motion, useScroll, useTransform, useInView, type Transition } from "framer-motion";
import { useRef } from "react";
import { Users, Lightbulb, Code, Trophy } from "lucide-react";

const smoothTransition: Transition = {
  duration: 0.8,
  ease: [0.4, 0, 0.2, 1],
};

const stats = [
  { number: "500+", label: "Active Members" },
  { number: "50+", label: "Events Annually" },
  { number: "20+", label: "Industry Partners" },
  { number: "15", label: "Core Domains" },
];

const values = [
  {
    icon: Users,
    title: "Community First",
    description: "Building lasting connections between students, professionals, and innovators.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description: "Fostering creative solutions and pushing the boundaries of what's possible.",
  },
  {
    icon: Code,
    title: "Technical Excellence",
    description: "Cultivating deep expertise through hands-on projects and mentorship.",
  },
  {
    icon: Trophy,
    title: "Impact Focused",
    description: "Creating real-world change through technology and collaboration.",
  },
];

export const About = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section id="about" className="section-padding bg-secondary/30 relative overflow-hidden" ref={containerRef}>
      {/* Top gradient blend */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      <motion.div style={{ y }} className="container-tight relative z-20" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={smoothTransition}
          className="max-w-3xl mb-20"
        >
          <span className="font-body text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            About Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Shaping tomorrow's
            <br />
            tech leaders
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            We are the student chapter of the world's largest computing society,
            dedicated to advancing computing as a science and profession. Our
            community brings together curious minds to learn, build, and innovate.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...smoothTransition, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-center md:text-left"
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <div className="font-body text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -6 }}
              className="group p-8 bg-card rounded-2xl card-hover glow-hover cursor-pointer"
            >
              <motion.div
                className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl mb-6 icon-hover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <value.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="font-display text-xl font-bold mb-3 text-hover">{value.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom gradient blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </section>
  );
};
