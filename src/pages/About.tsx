import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -20 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="flex flex-col w-full pt-24 overflow-hidden">
      <section className="bg-bg-base py-20 px-5 md:px-8 border-b-2 border-border">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="text-6xl md:text-9xl font-display text-text-main leading-none mb-8"
          >
            THE CREW
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full h-[2px] bg-accent mb-12 origin-left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16" ref={ref}>
            <motion.div
              style={{ y: y1 }}
              className="font-body text-xl text-text-muted leading-relaxed space-y-6"
            >
              <p>
                peXAppeal started the way most great things in Goa do — at a
                beach shack, over too many drinks, with someone saying "we
                should form a band." That was over a decade ago.
              </p>
              <p>
                We don't release albums. We don't go on tour. We play for the
                room in front of us — and we read that room well. If you want
                energy, we bring energy. If you want background music with a
                pulse, we deliver that too.
              </p>
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              className="border-2 border-border p-8 bg-bg-alt shadow-[12px_12px_0px_0px_var(--color-accent)]"
            >
              <h3 className="font-display text-4xl mb-4 text-accent">
                BUILT FOR EVERY CROWD
              </h3>
              <p className="font-body text-lg text-text-main uppercase tracking-widest leading-relaxed">
                Bollywood, Western Pop, Classic Rock, Jazz, EDM, 90s Nostalgia.
                We follow the energy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-bg-alt py-24 px-5 md:px-8 border-b-2 border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: 'GAVIN "PEX" PEREIRA',
                role: "LEAD VOCALS",
                image: "gavin.png",
              },
              {
                name: "DANNY ALVES",
                role: "ELECTRIC GUITAR",
                image: "danny.png",
              },
              {
                name: "SONIA D'MELLO",
                role: "KEYBOARDS & VOCALS",
                image: "sonia.png",
              },
              {
                name: 'ANKIT "TANK" RAO',
                role: "BASS GUITAR",
                image: "ankit.png",
              },
              {
                name: "CHRIS PEREIRA",
                role: "DRUMS & PERCUSSION",
                image: "chris.png",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="border-2 border-border bg-bg-base p-8 group hover:border-accent transition-colors relative overflow-visible mt-12"
              >
                <div className="w-full h-48 mb-6 flex items-end justify-center relative">
                  <img
                    src={`https://ik.imagekit.io/gavin/band/tr:w-350/${member.image}`}
                    alt={member.name}
                    className="absolute bottom-0 h-[150%] object-contain drop-shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500 origin-bottom"
                  />
                </div>
                <h3 className="font-display text-3xl text-text-main mb-2 relative z-10">
                  {member.name}
                </h3>
                <span className="font-body text-accent font-bold tracking-widest uppercase relative z-10">
                  {member.role}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
