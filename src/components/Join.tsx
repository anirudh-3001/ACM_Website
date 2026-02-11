import { motion, useScroll, useTransform, useInView, type Transition } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const smoothTransition: Transition = {
  duration: 1,
  ease: [0.4, 0, 0.2, 1],
};

export const Join = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);

  return (
    <section id="join" className="section-padding relative overflow-hidden" ref={containerRef}>
      {/* Top gradient blend */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-secondary/30 to-transparent pointer-events-none z-10" />

      <motion.div style={{ y, scale }} className="container-tight relative z-20" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={smoothTransition}
          className="relative overflow-hidden rounded-3xl bg-foreground text-background p-12 md:p-16 lg:p-20"
        >
          {/* Background decoration with animation */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <div className="relative z-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-background/10 rounded-full mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
              <span className="font-body text-sm font-medium">Open for enrollment</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Ready to shape
              <br />
              the future?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="font-body text-lg text-background/70 leading-relaxed mb-10"
            >
              Join a community of innovators, builders, and dreamers. Get access to
              exclusive workshops, industry connections, and the resources to bring
              your ideas to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground font-body font-medium rounded-full group"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                Become a Member
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-fast" />
              </motion.a>
              <motion.a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 border border-background/30 font-body font-medium rounded-full hover:bg-background/10 transition-slow"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
