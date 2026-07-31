import React, { useState } from 'react';
import { motion } from 'framer-motion';
import twitterX from '../assets/twitterx.png';
import { personalInfo } from '../data';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowUp, FaCheck, FaCopy } from 'react-icons/fa';

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04050A] text-slate-100 relative pt-20 pb-12 overflow-hidden border-t border-slate-800/80">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CTA Banner Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 text-center relative overflow-hidden mb-16 shadow-2xl"
        >
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono tracking-wider uppercase mb-4 inline-block">
            Let's Connect
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white mb-4 tracking-tight">
            Have a Project or Opportunity? <br />
            <span className="text-gradient-gold">Let's Build Something Great</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-light mb-8">
            Available for full-time engineering roles, technical team leadership, cross-platform mobile apps, and full-stack software development contracts.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm tracking-wide shadow-glow-gold hover:shadow-amber-500/40 hover:scale-105 transition-all flex items-center gap-2"
            >
              <FaEnvelope /> Send an Email
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-6 py-3.5 rounded-full bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-slate-600 font-medium text-sm transition-all flex items-center gap-2"
            >
              {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
              <span>{copied ? "Email Copied!" : "Copy Address"}</span>
            </button>
          </div>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Email Card */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-xl">
              <FaEnvelope />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Direct Mail</span>
              <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-white hover:text-amber-400 transition-colors">
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xl">
              <i className="bx bx-map"></i>
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Availability</span>
              <span className="text-sm font-semibold text-white">{personalInfo.location}</span>
            </div>
          </div>

          {/* Social Channels Card */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Social Networks</span>
              <span className="text-sm font-semibold text-white">GitHub, LinkedIn & X</span>
            </div>

            <div className="flex gap-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all"
              >
                <FaGithub size={16} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all p-2"
              >
                <img src={twitterX} alt="X" className="w-full h-full object-contain filter invert opacity-80" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Scroll Top Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <i className="bx bx-code-alt text-amber-400 text-lg"></i>
            <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-slate-300 hover:text-amber-400 transition-all group"
          >
            <span>Back to Top</span>
            <FaArrowUp className="text-xs group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;