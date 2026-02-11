import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { Particles } from "./Particles";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex flex-col justify-center hero-gradient relative overflow-hidden"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 w-full h-full">
        <Particles />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container-tight pt-24 pb-16 md:pt-32 md:pb-24 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl"
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8 backdrop-blur-sm"
          >
            <motion.span
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="font-body text-sm font-medium text-primary">
              Association for Computing Machinery
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="block"
            >
              Building the
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="block"
            >
              <span className="text-primary">Future</span> of
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="block"
            >
              Technology
            </motion.span>
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Where innovation meets community. Join a network of passionate
            students driving research, coding culture, and real-world impact.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#join"
              className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-body font-medium rounded-full btn-hover"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              Join the Chapter
            </motion.a>
            <motion.a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 border border-border font-body font-medium rounded-full btn-hover hover:bg-secondary transition-slow backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{ opacity }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-fast"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="font-body text-xs font-medium uppercase tracking-widest">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.a>
      </motion.div>

      {/* Bottom gradient blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary/30 to-transparent pointer-events-none z-10" />
    </section>
  );
};
