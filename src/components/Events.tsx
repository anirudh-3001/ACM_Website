import { motion, useScroll, useTransform, useInView, type Transition } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";

const smoothTransition: Transition = {
  duration: 0.8,
  ease: [0.4, 0, 0.2, 1],
};

const events = [
  {
    title: "Principles of Large Language Models: Attention, Transformers, and Emergent Capability",
    type: "Expert Talk",
    date: "January 29, 2026",
    location: "S-Block Seminar Hall",
    description: "End-to-end LLM session covering pre-Transformer models, Transformer architecture and attention math, modern LLM design patterns and limitations, plus hands-on PyTorch self-attention, HuggingFace inference, and an open Q&A.",
    featured: true,
  },
   {
    title: "DemoDay: Building Scalable Systems",
    type: "Project Showcase",
    date: "December 22, 2025",
    location: "S BLock 4th floor",
    description: "Showcase of student projects on scalable system architectures and implementations.",
    featured: false,
  },
  {
    title: "Ideathon 2025",
    type: "Workshop",
    date: "February 15, 2024",
    location: "SBlock Seminar Hall",
    description: "Innovative problem-solving workshop focusing on real-world tech challenges.",
    featured: false,
  },
 
  {
    title: "Talk on Higher Education opportunities at ODU, USA",
    type: "Talk",
    date: "December 8, 2025",
    location: "S-Block Seminar Hall",
    description: "Informative session on pursuing higher education at Old Dominion University, USA.",
    featured: false,
  },
];

export const Events = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section id="events" className="section-padding bg-secondary/30 relative overflow-hidden" ref={containerRef}>
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
              Upcoming
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Events
            </h2>
          </div>
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-fast group"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            View all events
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-fast" />
          </motion.a>
        </motion.div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.15 + index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ y: -6 }}
              className={`group relative p-8 rounded-2xl cursor-pointer ${
                event.featured
                  ? "bg-foreground text-background lg:col-span-2 glow-hover"
                  : "bg-card card-hover glow-hover"
              }`}
            >
              {/* Type Badge */}
              <motion.div
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-6 ${
                  event.featured
                    ? "bg-background/10 text-background"
                    : "bg-primary/10 text-primary"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                {event.type}
              </motion.div>

              <h3
                className={`font-display text-2xl md:text-3xl font-bold mb-4 ${
                  event.featured ? "" : "text-hover"
                }`}
              >
                {event.title}
              </h3>

              <p
                className={`font-body leading-relaxed mb-6 ${
                  event.featured ? "text-background/70" : "text-muted-foreground"
                }`}
              >
                {event.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <div
                  className={`flex items-center gap-2 text-sm ${
                    event.featured ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </div>
                <div
                  className={`flex items-center gap-2 text-sm ${
                    event.featured ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </div>
              </div>

              {/* Arrow */}
              <motion.div
                className={`absolute top-8 right-8 w-10 h-10 rounded-full flex items-center justify-center ${
                  event.featured
                    ? "bg-background/10"
                    : "bg-secondary"
                }`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <ArrowUpRight
                  className={`w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-fast ${
                    event.featured ? "" : "group-hover:text-primary"
                  }`}
                />
              </motion.div>
            </motion.article>
          ))}
        </div>
      </motion.div>

      {/* Bottom gradient blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </section>
  );
};
