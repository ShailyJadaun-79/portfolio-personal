import React from 'react';
import { 
  FaDatabase, 
  FaArrowRight, 
  FaDownload, 
  FaGraduationCap, 
  FaAward, 
  FaChartBar, 
  FaCode,
  FaFileExcel,
  FaReact,
  FaJs
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  const stats = [
    { value: "BCA", label: "Graduate", detail: "Academic Foundation", icon: <FaGraduationCap size={18} /> },
    { value: "5+", label: "Certifications", detail: "Industry Verified", icon: <FaAward size={18} /> },
    { value: "3+", label: "Featured Dashboards", detail: "Interactive BI", icon: <FaChartBar size={18} /> },
    { value: "Strong", label: "Problem Solver", detail: "Analytical Mind", icon: <FaCode size={18} /> }
  ];

  const quickSkills = [
    { name: "Power BI", color: "text-[#F2C811]", icon: <FaChartBar /> },
    { name: "Excel", color: "text-[#10793F]", icon: <FaFileExcel /> },
    { name: "SQL", color: "text-[#336791]", icon: <FaDatabase /> },
    { name: "React", color: "text-[#61DAFB]", icon: <FaReact /> },
    { name: "JavaScript", color: "text-[#F7DF1E]", icon: <FaJs /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const badgeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 12
      }
    }
  };

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center bg-transparent px-6 md:px-12 lg:px-24 pt-28 pb-16 relative">
      <div className="max-w-6xl mx-auto w-full">
        {/* Main 2-Column Hero Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Text Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start"
          >
            {/* Tagline Pill */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-accent/20 backdrop-blur-sm animate-float-slow"
            >
              <FaDatabase className="text-[10px]" />
              <span>Data-Driven UI/UX Design</span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-tight text-white"
            >
              Hi, I'm <span className="text-gradient-name font-black">Shaily Jadaun</span>
            </motion.h1>

            {/* Subtitle / Roles */}
            <motion.h2 
              variants={itemVariants}
              className="text-xl md:text-2xl text-secondaryText mb-6 font-medium tracking-wide flex items-center gap-2.5"
            >
              <span>Data Analyst</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              <span>UI/UX Designer</span>
            </motion.h2>

            {/* Summary */}
            <motion.p 
              variants={itemVariants}
              className="max-w-xl text-base md:text-lg text-secondaryText leading-relaxed mb-8 font-normal"
            >
              Detail-oriented BCA graduate blending analytical thinking with intuitive UI/UX principles.
              Specializing in transforming raw business data into actionable dashboard insights,
              and crafting clean, user-centered digital interfaces.
            </motion.p>

            {/* Tech Badges */}
            <motion.div 
              variants={badgeContainerVariants}
              className="flex flex-wrap gap-2.5 mb-8 justify-center lg:justify-start"
            >
              {quickSkills.map((skill, idx) => (
                <motion.div 
                  key={idx} 
                  variants={badgeVariants}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.3)' }}
                  className="flex items-center gap-1.5 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:border-accent/30 transition-all duration-300"
                >
                  <span className={skill.color}>{skill.icon}</span>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-6"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="btn-gradient inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-accent/20 text-sm"
              >
                View My Work
                <FaArrowRight className="text-xs" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03, borderColor: 'rgba(255, 255, 255, 0.2)' }}
                whileTap={{ scale: 0.97 }}
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 font-semibold px-8 py-3.5 rounded-full text-sm transition duration-300"
              >
                Download Resume
                <FaDownload className="text-xs" />
              </motion.a>
            </motion.div>

            {/* Availability Indicator */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-2 text-xs font-medium text-slate-400"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for freelance & full-time opportunities</span>
            </motion.div>
          </motion.div>

          {/* Right Orbital Graphic Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] flex items-center justify-center">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow"></div>
              
              {/* Mid Glowing Ring */}
              <div className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-accent/20 animate-spin-reverse-slow"></div>
              
              {/* Radial Blur Backdrop */}
              <div className="absolute w-[60%] h-[60%] rounded-full bg-accent/10 blur-[40px] pointer-events-none -z-10 animate-pulse-glow"></div>

              {/* Central Glowing Shield */}
              <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full bg-gradient-to-tr from-accent/20 to-accentBlue/20 border-2 border-accent/30 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.25)] relative z-10 animate-float-slow overflow-hidden">
                <img 
                  src="/profile.jpg" 
                  alt="Shaily Jadaun" 
                  className="w-full h-full object-cover rounded-full"
                  style={{ objectPosition: 'center 18%' }}
                />
              </div>

              {/* Orbital Nodes */}
              {/* Power BI Node */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute top-[8%] right-[8%] w-11 h-11 rounded-full glass-panel flex items-center justify-center text-base shadow-lg hover:border-accent transition-all duration-300 animate-float-slow cursor-pointer"
                style={{ animationDelay: '-1s' }}
              >
                <FaChartBar className="text-[#F2C811]" />
              </motion.div>

              {/* SQL Node */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.65 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="absolute bottom-[10%] left-[5%] w-12 h-12 rounded-full glass-panel flex items-center justify-center text-lg shadow-lg hover:border-accent transition-all duration-300 animate-float-slow cursor-pointer"
                style={{ animationDelay: '-3s' }}
              >
                <FaDatabase className="text-[#3b82f6]" />
              </motion.div>

              {/* Excel Node */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.55 }}
                whileHover={{ scale: 1.1, rotate: 8 }}
                className="absolute top-[40%] right-[-6%] w-10 h-10 rounded-full glass-panel flex items-center justify-center text-base shadow-lg hover:border-accent transition-all duration-300 animate-float-slow cursor-pointer"
                style={{ animationDelay: '-2s' }}
              >
                <FaFileExcel className="text-[#10793F]" />
              </motion.div>

              {/* React Node */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.75 }}
                whileHover={{ scale: 1.1, rotate: -8 }}
                className="absolute bottom-[35%] right-[5%] w-11 h-11 rounded-full glass-panel flex items-center justify-center text-base shadow-lg hover:border-accent transition-all duration-300 animate-float-slow cursor-pointer"
                style={{ animationDelay: '-5s' }}
              >
                <FaReact className="text-[#61DAFB]" />
              </motion.div>

              {/* JS Node */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.6 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="absolute top-[20%] left-[8%] w-9 h-9 rounded-full glass-panel flex items-center justify-center text-sm shadow-lg hover:border-accent transition-all duration-300 animate-float-slow cursor-pointer"
                style={{ animationDelay: '-4s' }}
              >
                <FaJs className="text-[#F7DF1E]" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(168, 85, 247, 0.2)' }}
              className="glass-panel p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent group-hover:text-white group-hover:bg-accent/25 transition-all duration-300">
                {stat.icon}
              </div>
              <div>
                <div className="text-lg font-bold text-white tracking-tight">{stat.value}</div>
                <div className="text-xs font-semibold text-slate-300">{stat.label}</div>
                <div className="text-[10px] text-secondaryText mt-0.5">{stat.detail}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
