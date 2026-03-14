import { useState, FormEvent, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("IDLE");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("LOADING");
    setTimeout(() => {
      setStatus("SUCCESS");
      setTimeout(() => setStatus("IDLE"), 3000);
    }, 1500);
  };

  const formVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="flex flex-col w-full pt-24 overflow-hidden">
      <section className="bg-bg-base py-20 px-5 md:px-8 border-b-2 border-border min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="text-6xl md:text-9xl font-display text-text-main leading-none mb-8"
          >
            BOOK THE BAND
          </motion.h1>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full h-[2px] bg-accent mb-16 origin-left" 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16" ref={ref}>
            <motion.div style={{ y: y1 }}>
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-4xl font-display text-text-main mb-8"
              >
                ENQUIRY FORM
              </motion.h2>
              
              <motion.form 
                variants={formVariants}
                initial="hidden"
                animate="show"
                onSubmit={handleSubmit} 
                className="flex flex-col gap-6"
              >
                <motion.input variants={inputVariants} required type="text" placeholder="FULL NAME" className="bg-bg-alt border-2 border-border p-4 font-body text-text-main text-lg uppercase tracking-widest focus:outline-none focus:border-accent transition-colors placeholder:text-text-muted" />
                <motion.input variants={inputVariants} required type="email" placeholder="EMAIL ADDRESS" className="bg-bg-alt border-2 border-border p-4 font-body text-text-main text-lg uppercase tracking-widest focus:outline-none focus:border-accent transition-colors placeholder:text-text-muted" />
                <motion.input variants={inputVariants} required type="tel" placeholder="PHONE NUMBER" className="bg-bg-alt border-2 border-border p-4 font-body text-text-main text-lg uppercase tracking-widest focus:outline-none focus:border-accent transition-colors placeholder:text-text-muted" />
                <motion.select variants={inputVariants} required className="bg-bg-alt border-2 border-border p-4 font-body text-text-main text-lg uppercase tracking-widest focus:outline-none focus:border-accent transition-colors appearance-none">
                  <option value="" disabled selected hidden>EVENT TYPE</option>
                  <option value="wedding">WEDDING</option>
                  <option value="corporate">CORPORATE</option>
                  <option value="party">PRIVATE PARTY</option>
                  <option value="venue">VENUE / SHACK</option>
                </motion.select>
                <motion.textarea variants={inputVariants} required rows={5} placeholder="EVENT DETAILS (DATE, VENUE, VIBE)" className="bg-bg-alt border-2 border-border p-4 font-body text-text-main text-lg uppercase tracking-widest focus:outline-none focus:border-accent transition-colors placeholder:text-text-muted resize-none" />
                <motion.button 
                  variants={inputVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  disabled={status !== "IDLE"} 
                  className="brutal-btn py-5 text-2xl w-full bg-accent text-bg-base hover:bg-transparent hover:text-accent disabled:opacity-50"
                >
                  {status === "LOADING" ? "SENDING..." : status === "SUCCESS" ? "SENT!" : "SUBMIT ENQUIRY"}
                </motion.button>
              </motion.form>
            </motion.div>

            <motion.div style={{ y: y2 }} className="flex flex-col gap-12">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-4xl font-display text-text-main mb-8">DIRECT CONTACT</h2>
                <div className="flex flex-col gap-6">
                  <a href="tel:+919876543210" className="font-display text-4xl text-text-muted hover:text-accent transition-colors">+91 98765 43210</a>
                  <a href="mailto:hello@pexappeal.com" className="font-display text-4xl text-text-muted hover:text-accent transition-colors">HELLO@PEXAPPEAL.COM</a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
                whileHover={{ scale: 1.02, rotate: -1 }}
                className="border-2 border-border bg-bg-alt p-8 shadow-[8px_8px_0px_0px_var(--color-accent)]"
              >
                <h3 className="font-display text-3xl text-text-main mb-4">WHATSAPP US</h3>
                <p className="font-body text-text-muted uppercase tracking-widest mb-8">For the fastest response regarding availability and pricing.</p>
                <a href="https://wa.me/919876543210" className="brutal-btn px-8 py-4 text-xl border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-bg-base w-full">
                  OPEN WHATSAPP <ArrowRight className="ml-2" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
