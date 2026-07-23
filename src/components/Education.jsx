import React from 'react';
import { FaGraduationCap, FaAward, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Dr. B.R. Ambedkar University, Agra",
      duration: "Graduated",
      desc: "Specialized in software fundamentals, databases, and structured programming paradigms."
    },
    {
      degree: "Higher Secondary (12th Grade)",
      institution: "SVM, Firozabad",
      duration: "Completed",
      desc: "Focused on sciences and mathematics, laying analytical foundations."
    }
  ];

  const certifications = [
    "Data Analytics & Insights",
    "Advanced Excel Modeling",
    "Power BI Dashboard Development",
    "Data Cleaning & Interactive Dashboard Design",
    "Git & GitHub Version Control"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 15
      }
    }
  };

  return (
    <section id="education" className="py-24 bg-transparent px-6 md:px-12 lg:px-24 border-t border-white/5 relative">
      {/* Background glow blobs */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-accent/5 blur-[120px] pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-accentBlue/5 blur-[100px] pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: '-5s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="mb-12 flex items-center gap-3.5">
              <div className="w-11 h-11 bg-accent/10 border border-accent/20 text-accent rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                <FaGraduationCap size={20} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                My Education <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent ml-1"></span>
              </h3>
            </motion.div>

            {/* Timeline */}
            <div className="relative pl-6 border-l border-white/10 flex flex-col gap-12 ml-2">
              {educationData.map((edu, idx) => (
                <motion.div key={idx} variants={itemVariants} className="relative">
                  {/* Circle indicator */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 + 0.1, type: 'spring' }}
                    className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#030712] border-2 border-accent flex items-center justify-center"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping"></span>
                  </motion.div>
                  
                  <span className="text-[10px] font-bold text-accent tracking-widest uppercase bg-accent/10 border border-accent/20 px-3 py-1 rounded-full inline-block mb-3">
                    {edu.duration}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-1.5 tracking-tight">{edu.degree}</h4>
                  <span className="text-xs font-semibold text-slate-300 block mb-3">{edu.institution}</span>
                  <p className="text-secondaryText text-xs leading-relaxed max-w-md font-normal">{edu.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="mb-12 flex items-center gap-3.5">
              <div className="w-11 h-11 bg-accentBlue/10 border border-accentBlue/20 text-accentBlue rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                <FaAward size={20} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Certifications <span className="inline-block w-1.5 h-1.5 rounded-full bg-accentBlue ml-1"></span>
              </h3>
            </motion.div>

            <motion.p variants={itemVariants} className="text-secondaryText text-xs leading-relaxed mb-8 max-w-md font-normal">
              Continuous skill development through industry-focused certifications and hands-on laboratory courses.
            </motion.p>

            <div className="flex flex-col gap-4">
              {certifications.map((cert, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  whileHover={{ y: -4, borderColor: 'rgba(168, 85, 247, 0.25)', backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
                  className="glass-panel p-4 rounded-xl flex items-center gap-4 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                    <FaCheckCircle size={14} />
                  </div>
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors duration-200">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;
