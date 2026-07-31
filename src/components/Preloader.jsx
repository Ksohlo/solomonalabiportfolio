import React from 'react';
import { motion } from "framer-motion";
import { SiNextdotjs, SiReactquery, SiExpress, SiExpo } from "react-icons/si";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaReact, FaAws } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const techIcons = [
  { icon: FaReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: BiLogoTypescript, name: "TypeScript" },
  { icon: RiTailwindCssFill, name: "Tailwind" },
  { icon: SiExpo, name: "React Native" },
  { icon: BiLogoPostgresql, name: "PostgreSQL" },
  { icon: DiMongodb, name: "MongoDB" },
  { icon: FaAws, name: "AWS" },
];

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[#04050A] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background glowing orb */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        {/* Brand Icon & Spinner Ring */}
        <div className="relative flex items-center justify-center mb-8">
          <div className="w-24 h-24 rounded-full border-2 border-amber-500/20 border-t-amber-500 animate-spin-slow" />
          <div className="absolute inset-0 flex items-center justify-center">
            <i className="bx bx-code-alt text-4xl text-amber-400 animate-pulse"></i>
          </div>
        </div>

        {/* Name & Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold font-display tracking-tight text-white mb-2"
        >
          Solomon <span className="text-amber-400">Alabi</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xs md:text-sm text-slate-400 font-mono tracking-wider uppercase mb-8"
        >
          Senior Full Stack & Mobile Engineer
        </motion.p>

        {/* Tech Icon Grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6 p-4 glass-card rounded-2xl border border-white/10 max-w-2xl">
          {techIcons.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * idx, duration: 0.4 }}
                className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-amber-500/10 transition-colors group"
              >
                <IconComp className="text-2xl md:text-3xl text-slate-400 group-hover:text-amber-400 transition-colors duration-300" />
                <span className="text-[10px] text-slate-500 group-hover:text-slate-300 font-mono">
                  {item.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-slate-800 rounded-full mt-8 overflow-hidden relative">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-amber-500 via-cyan-400 to-amber-400"
          />
        </div>
      </div>
    </motion.div>
  );
}
