import { motion, useScroll, useTransform, useInView, type Transition } from "framer-motion";
import { useRef } from "react";
import { Users, ArrowUpRight } from "lucide-react";

const smoothTransition: Transition = {
  duration: 0.8,
  ease: [0.4, 0, 0.2, 1],
};

const teamMembers = [
  {
    name: "Harshitha D",
    role: "Chair",
  },
  {
    name: "Anirudh Kulkarni",
    role: "Vice chair",
  },
  {
    name: "V Saishivram",
    role: "Secretary",
  },
  {
    name: "Kaushik Kumar",
    role: "Treasurer",
  },
  {
    name: "Anoushka S",
    role: "Webmaster",
  },
];

const teachers = [
  {
    name: "Dr S. Srividhya Subramanian",
    role: "Faculty Sponsor",
  },
  {
    name: "Mrs. Sindhu N",
    role: "Membership Chair",
  },
];

export const Team = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section id="team" className="section-padding bg-secondary/30 relative overflow-hidden" ref={containerRef}>
      {/* Top gradient blend */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      <motion.div style={{ y }} className="container-tight relative z-20" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={smoothTransition}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className="max-w-xl">
            <span className="font-body text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              Meet the team
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Team
            </h2>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="space-y-12">
          {/* Student Team */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="font-display text-2xl md:text-3xl font-bold mb-8 text-primary"
            >
              Student Leaders
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.15 + index * 0.08,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative p-6 rounded-2xl bg-card card-hover glow-hover"
                >
                  {/* Role Badge */}
                  <motion.div
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 bg-primary/10 text-primary"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {member.role}
                  </motion.div>

                  <h4 className="font-display text-xl md:text-2xl font-bold text-hover">
                    {member.name}
                  </h4>

                  {/* Arrow */}
                  <motion.div
                    className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-secondary"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-fast group-hover:text-primary" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Teacher Team */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="font-display text-2xl md:text-3xl font-bold mb-8 text-primary"
            >
              Faculty Advisors
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teachers.map((teacher, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.35 + index * 0.08,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative p-6 rounded-2xl bg-card card-hover glow-hover border border-primary/20"
                >
                  {/* Role Badge */}
                  <motion.div
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 bg-primary/10 text-primary"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {teacher.role}
                  </motion.div>

                  <h4 className="font-display text-xl md:text-2xl font-bold text-hover">
                    {teacher.name}
                  </h4>

                  {/* Arrow */}
                  <motion.div
                    className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-secondary"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <Users className="w-4 h-4 group-hover:text-primary transition-fast" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </section>
  );
};
