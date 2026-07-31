import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TechList, TechCategories } from '../data';
import { SiPostgresql, SiReactquery, SiNextdotjs } from "react-icons/si";
import { GrCycle } from "react-icons/gr";
import { HiCode } from "react-icons/hi";

const renderIcon = (ico) => {
  if (ico === 'SiPostgresql') return <SiPostgresql className="text-blue-400 text-4xl" />;
  if (ico === 'zustand') return <GrCycle className="text-emerald-400 text-4xl" />;
  if (ico === 'query') return <SiReactquery className="text-rose-400 text-4xl" />;
  if (ico === 'next') return <SiNextdotjs className="text-white text-4xl" />;
  
  return <i className={`${ico} text-4xl text-amber-400`}></i>;
};

const getBadgeStyle = (badge) => {
  switch (badge) {
    case 'Expert':
      return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
    case 'Advanced':
      return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
    default:
      return 'bg-slate-800 text-slate-300 border-slate-700';
  }
};

const Technologies = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredTech = TechList.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category === selectedCategory;
  });

  return (
    <section className="py-24 bg-[#04050A] relative z-10 text-slate-100 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-3"
        >
          <HiCode className="text-cyan-400" /> Engineering Capability
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white mb-4"
        >
          Technologies & <span className="text-gradient-gold">Skill Matrix</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-sm sm:text-base max-w-2xl font-light"
        >
          A comprehensive toolkit spanning modern web frontend frameworks, cross-platform mobile engines, robust relational and NoSQL databases, and cloud infrastructure.
        </motion.p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
        {TechCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
              selectedCategory === cat.id
                ? "bg-amber-500 text-slate-950 shadow-glow-gold scale-105"
                : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Tech Cards */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredTech.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-amber-500/40 transition-all duration-300 shadow-sm">
                    {renderIcon(item.icon)}
                  </div>

                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono border uppercase tracking-wider ${getBadgeStyle(
                      item.badge
                    )}`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Tech Title */}
                <h3 className="text-xl font-bold font-display text-white group-hover:text-amber-400 transition-colors mb-2">
                  {item.name}
                </h3>

                {/* Capability Description */}
                <p className="text-slate-300 text-xs leading-relaxed font-light">
                  {item.des}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Domain: {item.category.toUpperCase()}</span>
                <span className="text-amber-400/80 font-bold">● ACTIVE</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </section>
  );
};

export default Technologies;