import React from 'react';
import { motion } from 'framer-motion';
import { Journeys } from '../data';
import { FaGraduationCap, FaLaptopCode, FaRocket, FaBriefcase, FaAward } from 'react-icons/fa';
import { HiUser } from 'react-icons/hi';

const getTimelineIcon = (id) => {
  switch (id) {
    case 1:
      return <FaRocket className="text-amber-400 text-sm" />;
    case 2:
      return <FaAward className="text-cyan-400 text-sm" />;
    case 3:
      return <FaLaptopCode className="text-emerald-400 text-sm" />;
    case 4:
      return <FaBriefcase className="text-amber-400 text-sm" />;
    case 5:
      return <FaGraduationCap className="text-cyan-400 text-sm" />;
    default:
      return <FaLaptopCode className="text-amber-400 text-sm" />;
  }
};

const About = () => {
  return (
    <section className="py-24 bg-[#06080F] relative z-10 text-slate-100 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono tracking-wider uppercase mb-3"
        >
          <HiUser className="text-violet-400" /> Background & Evolution
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white mb-4"
        >
          About <span className="text-gradient-gold">Solomon Alabi</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-sm sm:text-base max-w-2xl font-light"
        >
          Merging electrical engineering analytical discipline with full-stack software development to build resilient, human-centered digital experiences.
        </motion.p>
      </div>

      {/* Grid: Bio Card & Career Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Detailed Bio Glass Card (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 glass-card rounded-3xl p-8 border border-white/10 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <h3 className="text-2xl font-bold font-display text-white mb-2">
            Electrical Engineer & Software Architect
          </h3>
          <p className="text-xs font-mono text-amber-400 mb-6 uppercase tracking-wider">
            MERN & PERN Stack Specialist
          </p>

          <div className="space-y-4 text-slate-300 text-sm font-light leading-relaxed">
            <p>
              I hold a degree in <span className="text-white font-medium">Electrical Engineering</span>, a foundation that instills a rigorous approach to system logic, signal processing, data flow, and problem decomposition.
            </p>
            <p>
              Transitioning into full-stack development, I specialized in the <span className="text-amber-400 font-medium">MERN / PERN stack</span> (MongoDB, PostgreSQL, Express.js, React.js, Next.js, and Node.js) along with cross-platform mobile development using <span className="text-cyan-400 font-medium">React Native and Expo</span>.
            </p>
            <p>
              Whether leading engineering teams at LOEM Health Insurance or developing mobile apps for international logistics, my focus remains on building reliable, clean, scalable architectures with extraordinary user experience.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-4">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Degree</span>
              <span className="text-xs font-semibold text-white">B.Eng Electrical Eng.</span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Focus</span>
              <span className="text-xs font-semibold text-white">Full Stack & Mobile</span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Core Stacks</span>
              <span className="text-xs font-semibold text-amber-400">MERN / PERN</span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Location</span>
              <span className="text-xs font-semibold text-white">Worldwide / Remote</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Career Milestone Timeline (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <h3 className="text-xl font-bold font-display text-white mb-8 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" /> Career & Experience Milestones
          </h3>

          <div className="relative pl-6 border-l-2 border-slate-800 space-y-8">
            {Journeys.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Icon Node */}
                <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:border-amber-400 group-hover:scale-110 transition-all shadow-md">
                  {getTimelineIcon(item.id)}
                </div>

                {/* Milestone Card */}
                <div className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 ml-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-mono">
                      {item.date}
                    </span>
                  </div>
                  
                  {item.title && (
                    <h4 className="text-base font-bold font-display text-white mb-1">
                      {item.title}
                    </h4>
                  )}
                  
                  <p className="text-slate-300 text-xs leading-relaxed font-light">
                    {item.des}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;