import React, { useState } from 'react';
import { FaExternalLinkAlt, FaChartLine, FaUsers, FaDatabase } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "Sales Performance Dashboard",
    tools: ["Power BI", "Excel", "Data Modeling"],
    desc: "Analyzed regional sales, revenue growth, and profitability metrics. Created custom KPI indicators, custom filters, and dynamic date slicers to analyze historical trends.",
    stats: "15% regional growth trend identified",
    icon: <FaChartLine />,
    category: "Power BI"
  },
  {
    title: "HR Analytics Dashboard",
    tools: ["Power BI", "Power Query", "Data Cleaning"],
    desc: "Created a comprehensive dashboard to track employee attrition, demographic distributions, and performance metrics. Transformed dirty HR datasets to derive clear retention patterns.",
    stats: "Analyzed 10k+ workforce records",
    icon: <FaUsers />,
    category: "Power BI"
  },
  {
    title: "Data Analytics Dashboard",
    tools: ["Power BI", "Excel", "Power Query"],
    desc: "Integrated multiple data sources to present aggregate reporting. Developed multi-layered drill-through sheets, Pivot Tables, and advanced Excel modeling using XLOOKUP and dynamic formatting.",
    stats: "4 hrs weekly reporting time saved",
    icon: <FaDatabase />,
    category: "Excel"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tools.includes(filter) || p.category === filter);

  const filterOptions = ['All', 'Power BI', 'Excel', 'Power Query'];

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 85,
        damping: 15
      }
    }
  };

  return (
    <section id="projects" className="py-24 bg-transparent px-6 md:px-12 lg:px-24 relative">
      {/* Background glow blobs */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] rounded-full bg-accentBlue/5 blur-[120px] pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: '-1s' }}></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px] pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: '-4s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Featured Projects <span className="inline-block w-2 h-2 rounded-full bg-accent ml-1"></span>
            </h3>
            <p className="text-secondaryText max-w-xl text-base leading-relaxed">
              Explore interactive data visualizations built using Power BI and Advanced Excel.
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 self-start md:self-auto bg-white/5 p-1 rounded-full border border-white/5">
            {filterOptions.map((opt) => (
              <motion.button
                key={opt}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(opt)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  filter === opt
                    ? 'bg-accent text-white shadow-md shadow-accent/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {opt}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div 
                layout
                key={proj.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -8, 
                  borderColor: 'rgba(168, 85, 247, 0.25)',
                  backgroundColor: 'rgba(18, 22, 49, 0.55)',
                  boxShadow: '0 20px 40px -15px rgba(168, 85, 247, 0.2), 0 0 20px -5px rgba(59, 130, 246, 0.1)'
                }}
                className="glass-panel p-6 rounded-2xl flex flex-col justify-between transition-colors duration-300 group"
              >
                <div>
                  {/* Simulated Mockup Header */}
                  <div className="relative w-full h-40 bg-slate-950/50 rounded-xl border border-white/5 flex items-center justify-center mb-6 overflow-hidden">
                    {/* Window dots */}
                    <div className="absolute top-3.5 left-3.5 flex gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500/50"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/50"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500/50"></span>
                    </div>
                    {/* Category Tag */}
                    <span className="absolute top-2.5 right-3 text-[9px] font-bold text-accent uppercase tracking-widest bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">
                      {proj.category}
                    </span>
                    {/* Pulsating background glow behind the icon */}
                    <div className="absolute w-12 h-12 rounded-full bg-accent/10 blur-[15px] group-hover:bg-accent/25 group-hover:scale-125 transition-all duration-500"></div>
                    {/* Floating centered icon */}
                    <motion.div 
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                      className="text-3xl text-accent relative z-10 cursor-pointer"
                    >
                      {proj.icon}
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-white mb-2.5 tracking-tight">{proj.title}</h4>
                  
                  {/* Tools Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.tools.map((tool, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="bg-accent/5 border border-accent/10 text-slate-300 text-[10px] font-semibold px-2.5 py-0.5 rounded tracking-wide"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-secondaryText text-xs leading-relaxed mb-6">
                    {proj.desc}
                  </p>
                </div>

                {/* Bottom Insights */}
                <div className="pt-5 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-accent/80 italic">
                    {proj.stats}
                  </span>
                  <motion.span 
                    whileHover={{ scale: 1.05, color: '#ffffff' }}
                    whileTap={{ scale: 0.95 }}
                    className="text-accent text-xs font-bold cursor-pointer flex items-center gap-1.5 transition-colors duration-200"
                  >
                    View Specs <FaExternalLinkAlt className="text-[9px]" />
                  </motion.span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
