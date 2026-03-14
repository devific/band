import { useRef } from "react";
import { Link } from "react-router-dom";
import { Music, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20 bg-bg-base"
    >
      <motion.div
        style={{ y: yText, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 overflow-hidden z-0"
      >
        <h1 className="text-[25vw] font-display leading-none whitespace-nowrap text-text-main">
          peXAppeal
        </h1>
      </motion.div>

      <motion.div
        style={{ y: yImg, opacity }}
        initial={{ scale: 1.1, opacity: 0, filter: "blur(10px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl mx-auto flex justify-center mt-10 px-5"
      >
        <img
          src="https://ik.imagekit.io/gavin/band/live.png"
          alt="peXAppeal Band Members Performing Live"
          className="w-full max-w-4xl object-cover grayscale-25 contrast-125 mix-blend-lighten"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
          }}
        />
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-20 flex flex-col items-center text-center mt-[-15vh] px-5 w-full max-w-4xl"
      >
        <div className="bg-bg-base border-2 border-border p-6 md:p-10 w-full shadow-[16px_16px_0px_0px_var(--color-accent)]">
          <h2 className="text-4xl md:text-7xl font-display text-text-main mb-4 tracking-tight">
            LOUDER THAN THE ARABIAN SEA
          </h2>
          <p className="font-body text-text-muted text-lg md:text-2xl max-w-2xl mx-auto uppercase tracking-widest">
            Goa's premier live band. No compromises. Just pure energy.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-12 w-full md:w-auto">
          <Link
            to="/contact"
            className="brutal-btn px-10 py-5 text-2xl w-full md:w-auto bg-accent text-bg-base hover:bg-transparent hover:text-accent"
          >
            BOOK THE BAND <ArrowRight className="ml-2" />
          </Link>
          <Link
            to="/music"
            className="brutal-btn px-10 py-5 text-2xl w-full md:w-auto"
          >
            HEAR US LIVE <Music className="ml-2" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

function Marquee() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full bg-accent py-4 relative z-20 border-y-2 border-border mt-20"
    >
      <div className="marquee-container">
        <div className="marquee-content animate-marquee-left font-display text-bg-base text-4xl tracking-wider">
          BOLLYWOOD /// WESTERN POP /// CLASSIC ROCK /// JAZZ /// EDM /// HINDI
          HITS /// 90s ANTHEMS /// BEACH VIBES /// BOLLYWOOD /// WESTERN POP ///
          CLASSIC ROCK /// JAZZ /// EDM /// HINDI HITS /// 90s ANTHEMS /// BEACH
          VIBES ///
        </div>
      </div>
    </motion.div>
  );
}

function QuickAbout() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="bg-bg-base py-24 px-5 md:px-8 border-b-2 border-border overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <span className="font-body text-accent text-xl font-bold tracking-widest mb-4 uppercase">
            01 // Who We Are
          </span>
          <h2 className="text-5xl md:text-7xl font-display mb-8 leading-none">
            GOA'S FAVOURITE EVENT BAND
          </h2>
          <div className="font-body text-text-muted text-xl leading-relaxed space-y-6">
            <p>
              peXAppeal is Goa's live band for people who believe every
              celebration deserves a live soundtrack. We've played weddings on
              clifftops, corporate nights at five-star hotels, and late-night
              sessions at shacks where the crowd never wanted us to stop.
            </p>
            <p>
              We cover everything — Bollywood bangers, Western pop, rock
              anthems, jazz standards, EDM, and 90s nostalgia — and we read the
              room so the music fits the moment.
            </p>
          </div>
          <Link
            to="/about"
            className="mt-10 brutal-btn px-8 py-4 text-xl w-fit"
          >
            MEET THE CREW
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="w-full relative overflow-hidden border-2 border-border bg-bg-alt group hover:border-accent transition-colors"
          >
            <img
              src="https://ik.imagekit.io/gavin/band/band.png"
              alt="The Band"
              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
          <div className="grid grid-cols-1 gap-6">
            {[
              { stat: "10+", label: "YEARS PERFORMING" },
              { stat: "500+", label: "EVENTS COVERED" },
              { stat: "8", label: "GENRES MASTERED" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="border-2 border-border p-8 bg-bg-alt flex items-center justify-between hover:border-accent transition-colors cursor-default"
              >
                <span className="font-display text-6xl text-text-main">
                  {item.stat}
                </span>
                <span className="font-body text-xl text-accent font-bold tracking-widest text-right">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function VideoTeaser() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="bg-bg-alt py-24 px-5 md:px-8 border-b-2 border-border overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div>
            <span className="font-body text-accent text-xl font-bold tracking-widest mb-4 uppercase block">
              02 // See Us Live
            </span>
            <h2 className="text-5xl md:text-7xl font-display leading-none">
              DON'T TAKE OUR WORD FOR IT
            </h2>
          </div>
          <Link
            to="/music"
            className="brutal-btn px-8 py-4 text-xl whitespace-nowrap"
          >
            ALL VIDEOS
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {[
            {
              label: "WEDDING RECEPTION",
              url: "https://www.youtube.com/embed/1w7OgIMMRc4",
            },
            {
              label: "CORPORATE NIGHT",
              url: "https://www.youtube.com/embed/v2AC41dglnM",
            },
            {
              label: "BEACH SHACK SESSION",
              url: "https://www.youtube.com/embed/CSvFpBOe8eY",
            },
          ].map((video, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="border-2 border-border bg-bg-base p-4 group hover:border-accent transition-colors"
            >
              <div className="aspect-video bg-border mb-4 relative overflow-hidden">
                <iframe
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  src={video.url}
                  title="Video"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <span className="font-body text-lg font-bold tracking-widest text-text-main uppercase">
                {video.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } },
  };

  return (
    <section className="bg-bg-base py-24 px-5 md:px-8 border-b-2 border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="font-body text-accent text-xl font-bold tracking-widest mb-4 uppercase block">
            03 // Client Words
          </span>
          <h2 className="text-5xl md:text-7xl font-display leading-none mb-16">
            STRAIGHT FROM THE EVENTS
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              text: "Every guest was on the dance floor by the second song. They absolutely made the night.",
              author: "PRIYA & ARJUN M.",
              event: "WEDDING",
            },
            {
              text: "Professional, energetic, and incredibly well-prepared. Brilliant for our annual corporate night.",
              author: "RAHUL D.",
              event: "CORPORATE",
            },
            {
              text: "The crowd stayed two hours past closing. That says everything.",
              author: "MARCO F.",
              event: "BEACH SHACK",
            },
          ].map((quote, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
              className="border-2 border-border p-8 flex flex-col justify-between bg-bg-alt relative overflow-hidden group hover:border-accent transition-all duration-300 cursor-default"
            >
              <motion.span
                initial={{ opacity: 0.5, scale: 1 }}
                whileHover={{ opacity: 0.2, scale: 1.5, rotate: 10 }}
                className="absolute top-[-20px] left-[-10px] text-[120px] font-display text-border transition-all duration-500"
              >
                "
              </motion.span>
              <p className="font-body text-xl text-text-main relative z-10 mb-12 uppercase leading-snug">
                "{quote.text}"
              </p>
              <div className="relative z-10 border-t-2 border-border pt-6">
                <span className="font-display text-2xl block text-accent">
                  {quote.author}
                </span>
                <span className="font-body text-text-muted tracking-widest font-bold">
                  {quote.event}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BookingCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="bg-accent py-32 px-5 md:px-8 overflow-hidden">
      <motion.div
        style={{ scale, opacity }}
        className="max-w-5xl mx-auto text-center flex flex-col items-center"
      >
        <h2 className="text-6xl md:text-9xl font-display text-bg-base leading-none mb-8">
          READY TO ROCK?
        </h2>
        <p className="font-body text-bg-base text-2xl md:text-3xl font-bold uppercase tracking-widest mb-12">
          Your event deserves a live soundtrack. Let's make it happen.
        </p>
        <Link
          to="/contact"
          className="brutal-btn bg-bg-base !text-black !border-bg-base px-12 py-6 text-3xl hover:bg-transparent hover:text-bg-base hover:border-bg-base shadow-[8px_8px_0px_0px_#050505] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all"
        >
          BOOK US NOW
        </Link>
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Marquee />
      <QuickAbout />
      <VideoTeaser />
      <Testimonials />
      <BookingCTA />
    </div>
  );
}
