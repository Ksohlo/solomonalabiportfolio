import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import twitterX from "../assets/twitterx.png";
import { personalInfo } from "../data";
import Project from "./Projects";
import Technologies from "./Technologies";
import About from "./About.jsx";
import Footer from "./Footer";
import Preloader from "./Preloader.jsx";
import {
  FaGithub,
  FaLinkedinIn,
  FaDownload,
  FaArrowRight,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiExpo,
} from "react-icons/si";

const roles = [
  "Senior Full Stack Engineer",
  "React Native Mobile Specialist",
  "MERN & PERN Stack Developer",
  "Electrical Engineering Graduate",
];

const Welcome = () => {
  const [preloader, setPreloader] = useState(true);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloader(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence mode="wait">
      {preloader ? (
        <Preloader key="preloader" />
      ) : (
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen bg-[#06080F] text-slate-100 relative overflow-hidden"
        >
          {/* Ambient Background Light Orbs */}
          <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
          <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

          {/* HERO SECTION */}
          <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Left Column: Intro Details */}
            <div className="w-full lg:w-7/12 flex flex-col items-start z-10">
              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md mb-6 shadow-sm"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-emerald-300 tracking-wide uppercase">
                  Available for Full-time Roles & Contracts
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] tracking-tight text-white mb-4"
              >
                Hi there 👋, I'm <br />
                <span className="text-gradient-gold">{personalInfo.name}</span>
              </motion.h1>

              {/* Animated Role Cycler */}
              <div className="h-8 mb-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentRoleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-lg sm:text-xl font-semibold font-mono text-cyan-400 flex items-center gap-2"
                  >
                    <span className="text-amber-500">&gt;</span>{" "}
                    {roles[currentRoleIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Summary Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-light"
              >
                Full Stack Software Engineer with a background in{" "}
                <span className="text-white font-medium">
                  Electrical Engineering
                </span>
                . Specialized in crafting scalable web applications and
                high-performance cross-platform mobile apps leveraging{" "}
                <span className="text-amber-400 font-medium">
                  React.js, Next.js, React Native, Node.js, Express, PostgreSQL
                  & MongoDB
                </span>
                .
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
              >
                <a
                  href="#projects"
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm tracking-wide shadow-glow-gold hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Explore Works <FaArrowRight className="text-xs" />
                </a>

                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="px-6 py-3.5 rounded-full bg-slate-900 border border-slate-700 text-slate-200 hover:text-amber-400 hover:border-amber-500/50 font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:scale-105"
                >
                  Download CV <FaDownload className="text-xs text-amber-400" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-3.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 text-xs font-mono transition-all flex items-center gap-2"
                  title="Copy Email to Clipboard"
                >
                  {copied ? (
                    <FaCheck className="text-emerald-400" />
                  ) : (
                    <FaCopy />
                  )}
                  <span>{copied ? "Email Copied!" : "Copy Email"}</span>
                </button>
              </motion.div>

              {/* Social Channels & Tech Stack Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-6 w-full max-w-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase font-mono text-slate-400 tracking-wider">
                    Connect:
                  </span>
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/50 transition-all hover:scale-110"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/50 transition-all hover:scale-110"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                  <a
                    href={personalInfo.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/50 transition-all hover:scale-110 p-2.5"
                  >
                    <img
                      src={twitterX}
                      alt="X"
                      className="w-full h-full object-contain filter invert opacity-80"
                    />
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                    Stack:
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400 text-lg">
                    <SiReact
                      className="hover:text-cyan-400 transition-colors"
                      title="React"
                    />
                    <SiNextdotjs
                      className="hover:text-white transition-colors"
                      title="Next.js"
                    />
                    <SiExpo
                      className="hover:text-white transition-colors"
                      title="React Native"
                    />
                    <SiTypescript
                      className="hover:text-blue-400 transition-colors"
                      title="TypeScript"
                    />
                    <SiPostgresql
                      className="hover:text-blue-500 transition-colors"
                      title="PostgreSQL"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: High-Class Interactive Portrait Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-5/12 flex justify-center z-10 relative"
            >
              {/* Outer Decorative Glow Container */}
              <div className="relative w-full max-w-sm sm:max-w-md group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-cyan-500 to-amber-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-700 animate-pulse-glow" />

                {/* Main Card */}
                <div className="relative glass-card rounded-3xl p-4 border border-white/10 overflow-hidden shadow-2xl">
                  {/* Portrait Image Frame */}
                  <div className="relative h-96 sm:h-[420px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06080F] via-transparent to-transparent opacity-70" />

                    {/* Floating Tech Badges on Image */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 p-3 glass-card rounded-xl border border-white/10 backdrop-blur-md">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-xl">
                          3+
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white font-display">
                            Years Experience
                          </p>
                          <p className="text-[10px] text-slate-400 font-mono">
                            Full Stack & Mobile
                          </p>
                        </div>
                      </div>

                      <div className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700 text-xs font-mono text-cyan-400">
                        10+ Apps
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* SECTIONS */}
          <div id="projects">
            <Project />
          </div>
          <div id="technologies">
            <Technologies />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="contact">
            <Footer />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Welcome;
