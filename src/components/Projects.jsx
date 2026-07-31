import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectList } from "../data";
import { FaAppStoreIos, FaExternalLinkAlt, FaGithub, FaTimes, FaLayerGroup } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Applications" },
  { id: "app", label: "Mobile Apps" },
];

const Project = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = ProjectList.filter((proj) => {
    if (activeTab === "all") return true;
    return proj.category === activeTab;
  });

  return (
    <section className="py-24 bg-[#06080F] relative z-10 text-slate-100 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono tracking-wider uppercase mb-3"
        >
          <HiSparkles className="text-amber-400" /> Selected Portfolio
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white mb-4"
        >
          Featured <span className="text-gradient-gold">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-sm sm:text-base max-w-2xl font-light"
        >
          Explore a curated selection of full-stack web platforms, mobile applications, enterprise admin portals, and IoT solutions built for real-world impact.
        </motion.p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
              activeTab === cat.id
                ? "bg-amber-500 text-slate-950 shadow-glow-gold scale-105"
                : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-white/10 flex flex-col group"
            >
              {/* Card Image Banner */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900 border-b border-slate-800">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D111D] via-transparent to-transparent opacity-80" />

                {/* Badge Category Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase text-amber-400">
                  {project.type}
                </div>

                {/* Details Quick Trigger */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-amber-500 hover:text-slate-950 border border-slate-700 text-slate-200 text-xs font-medium backdrop-blur-md transition-all duration-300 flex items-center gap-1.5"
                >
                  <FaLayerGroup className="text-xs" /> Overview
                </button>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-amber-400 transition-colors mb-1">
                    {project.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-3 mb-4 font-light">
                    {project.des}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {Array.isArray(project.stack)
                      ? project.stack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400"
                          >
                            {tech}
                          </span>
                        ))
                      : project.stack.split(",").map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400"
                          >
                            {tech.trim()}
                          </span>
                        ))}
                  </div>

                  {/* Links Section */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    {project.type === "WEB" ? (
                      <div className="flex items-center gap-3 w-full justify-between">
                        {project.link.live ? (
                          <a
                            href={project.link.live}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-slate-950 border border-amber-500/30 text-xs font-semibold transition-all flex items-center gap-1.5"
                          >
                            <FaExternalLinkAlt className="text-[10px]" /> Live Demo
                          </a>
                        ) : (
                          <span className="text-xs text-slate-500 font-mono">Internal Web</span>
                        )}

                        {project.link.code ? (
                          <a
                            href={project.link.code}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-all flex items-center gap-1.5"
                          >
                            <FaGithub size={14} /> Code
                          </a>
                        ) : null}
                      </div>
                    ) : (
                      /* Mobile App Badges */
                      <div className="flex items-center justify-around w-full">
                        {project.appLink.android && (
                          <a
                            href={project.appLink.android}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-amber-400 text-xs font-medium transition-all"
                          >
                            <IoLogoGooglePlaystore size={18} className="text-emerald-400" /> Play Store
                          </a>
                        )}

                        {project.appLink.ios && (
                          <a
                            href={project.appLink.ios}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-amber-400 text-xs font-medium transition-all"
                          >
                            <FaAppStoreIos size={18} className="text-cyan-400" /> App Store
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="glass-card max-w-2xl w-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <FaTimes />
              </button>

              {/* Modal Banner */}
              <div className="relative h-64 w-full bg-slate-900 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D111D] via-[#0D111D]/40 to-transparent" />
                
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 font-mono text-[10px] uppercase">
                    {selectedProject.type} ARCHITECTURE
                  </span>
                  <h3 className="text-2xl font-bold font-display text-white mt-1">
                    {selectedProject.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    {selectedProject.tagline}
                  </p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-xs uppercase font-mono text-slate-400 mb-2 tracking-wider">
                    Project Overview
                  </h4>
                  <p className="text-slate-200 text-sm leading-relaxed font-light">
                    {selectedProject.des}
                  </p>
                </div>

                {/* Highlights List */}
                {selectedProject.highlights && (
                  <div>
                    <h4 className="text-xs uppercase font-mono text-slate-400 mb-2 tracking-wider">
                      Architectural & Technical Highlights
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="text-amber-400 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Stack Tags */}
                <div>
                  <h4 className="text-xs uppercase font-mono text-slate-400 mb-2 tracking-wider">
                    Technologies Employed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(selectedProject.stack)
                      ? selectedProject.stack.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                          >
                            {t}
                          </span>
                        ))
                      : selectedProject.stack.split(",").map((t, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                          >
                            {t.trim()}
                          </span>
                        ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-end gap-3">
                  {selectedProject.type === "WEB" ? (
                    <>
                      {selectedProject.link.live && (
                        <a
                          href={selectedProject.link.live}
                          target="_blank"
                          rel="noreferrer"
                          className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-glow-gold transition-all flex items-center gap-2"
                        >
                          <FaExternalLinkAlt className="text-xs" /> Visit Live Site
                        </a>
                      )}
                      {selectedProject.link.code && (
                        <a
                          href={selectedProject.link.code}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-medium hover:text-white transition-all flex items-center gap-2"
                        >
                          <FaGithub size={16} /> GitHub Code
                        </a>
                      )}
                    </>
                  ) : (
                    <>
                      {selectedProject.appLink.android && (
                        <a
                          href={selectedProject.appLink.android}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-emerald-400 text-xs font-semibold hover:border-emerald-500/50 transition-all flex items-center gap-2"
                        >
                          <IoLogoGooglePlaystore size={18} /> Android App
                        </a>
                      )}
                      {selectedProject.appLink.ios && (
                        <a
                          href={selectedProject.appLink.ios}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-cyan-400 text-xs font-semibold hover:border-cyan-500/50 transition-all flex items-center gap-2"
                        >
                          <FaAppStoreIos size={18} /> iOS App
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;
