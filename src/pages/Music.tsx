import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Music() {
  const [activeTab, setActiveTab] = useState("ALL");
  const tabs = ["ALL", "WEDDINGS", "CORPORATE", "SHACKS"];

  const videos = [
    {
      category: "WEDDINGS",
      label: "WEDDING RECEPTION",
      url: "https://www.youtube.com/embed/1w7OgIMMRc4",
    },
    {
      category: "CORPORATE",
      label: "TECH CONFERENCE",
      url: "https://www.youtube.com/embed/v2AC41dglnM",
    },
    {
      category: "SHACKS",
      label: "LATE NIGHT SET",
      url: "https://www.youtube.com/embed/CSvFpBOe8eY",
    },
    {
      category: "WEDDINGS",
      label: "RECEPTION PARTY",
      url: "https://www.youtube.com/embed/l482T0yNkeo",
    },
    {
      category: "CORPORATE",
      label: "ANNUAL GALA",
      url: "https://www.youtube.com/embed/97Mj6pXYMd8",
    },
    {
      category: "SHACKS",
      label: "SUNSET SESSION",
      url: "https://www.youtube.com/embed/fJ9rUzIMcZQ",
    },
  ];

  const filteredVideos =
    activeTab === "ALL"
      ? videos
      : videos.filter((v) => v.category === activeTab);

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
            WATCH & LISTEN
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full h-[2px] bg-accent mb-12 origin-left"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`brutal-btn px-6 py-2 text-xl transition-all ${activeTab === tab ? "bg-accent text-bg-base scale-105" : "hover:scale-105"}`}
              >
                {tab}
              </button>
            ))}
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredVideos.map((video, i) => (
                <motion.div
                  key={`${video.category}-${video.label}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                  transition={{ duration: 0.4, type: "spring" }}
                  whileHover={{ y: -10 }}
                  className="border-2 border-border bg-bg-alt p-4 group hover:border-accent transition-colors"
                >
                  <div className="aspect-video bg-border mb-4 overflow-hidden">
                    <iframe
                      className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                      src={video.url}
                      title="Video"
                      frameBorder="0"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-body text-accent font-bold tracking-widest uppercase text-sm mb-1">
                      {video.category}
                    </span>
                    <span className="font-display text-2xl text-text-main uppercase">
                      {video.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
