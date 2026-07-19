import React from 'react';
import { 
  FaDatabase, 
  FaArrowRight, 
  FaDownload, 
  FaGraduationCap, 
  FaAward, 
  FaChartBar, 
  FaGitAlt, 
  FaCode,
  FaFileExcel,
  FaReact,
  FaJs
} from 'react-icons/fa';

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

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center bg-transparent px-6 md:px-12 lg:px-24 pt-28 pb-16 relative">
      <div className="max-w-6xl mx-auto w-full">
        {/* Main 2-Column Hero Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-accent/20 backdrop-blur-sm animate-float-slow">
              <FaDatabase className="text-[10px]" />
              <span>Data-Driven UI/UX Design</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-tight text-white">
              Hi, I'm <span className="text-gradient-name font-black">Shaily Jadaun</span>
            </h1>

            {/* Subtitle / Roles */}
            <h2 className="text-xl md:text-2xl text-secondaryText mb-6 font-medium tracking-wide flex items-center gap-2.5">
              <span>Data Analyst</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              <span>UI/UX Designer</span>
            </h2>

            {/* Summary */}
            <p className="max-w-xl text-base md:text-lg text-secondaryText leading-relaxed mb-8 font-normal">
              Detail-oriented BCA graduate blending analytical thinking with intuitive UI/UX principles.
              Specializing in transforming raw business data into actionable dashboard insights,
              and crafting clean, user-centered digital interfaces.
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2.5 mb-8 justify-center lg:justify-start">
              {quickSkills.map((skill, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-1.5 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:border-accent/30 transition-all duration-300"
                >
                  <span className={skill.color}>{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-6">
              <a
                href="#projects"
                className="btn-gradient inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-accent/20 text-sm"
              >
                View My Work
                <FaArrowRight className="text-xs" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 font-semibold px-8 py-3.5 rounded-full text-sm transition duration-300"
              >
                Download Resume
                <FaDownload className="text-xs" />
              </a>
            </div>

            {/* Availability Indicator */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for freelance & full-time opportunities</span>
            </div>
          </div>

          {/* Right Orbital Graphic Column */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
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
              <div 
                className="absolute top-[8%] right-[8%] w-11 h-11 rounded-full glass-panel flex items-center justify-center text-base shadow-lg hover:border-accent transition-all duration-300 animate-float-slow"
                style={{ animationDelay: '-1s' }}
              >
                <FaChartBar className="text-[#F2C811]" />
              </div>

              {/* SQL Node */}
              <div 
                className="absolute bottom-[10%] left-[5%] w-12 h-12 rounded-full glass-panel flex items-center justify-center text-lg shadow-lg hover:border-accent transition-all duration-300 animate-float-slow"
                style={{ animationDelay: '-3s' }}
              >
                <FaDatabase className="text-[#3b82f6]" />
              </div>

              {/* Excel Node */}
              <div 
                className="absolute top-[40%] right-[-6%] w-10 h-10 rounded-full glass-panel flex items-center justify-center text-base shadow-lg hover:border-accent transition-all duration-300 animate-float-slow"
                style={{ animationDelay: '-2s' }}
              >
                <FaFileExcel className="text-[#10793F]" />
              </div>

              {/* React Node */}
              <div 
                className="absolute bottom-[35%] right-[5%] w-11 h-11 rounded-full glass-panel flex items-center justify-center text-base shadow-lg hover:border-accent transition-all duration-300 animate-float-slow"
                style={{ animationDelay: '-5s' }}
              >
                <FaReact className="text-[#61DAFB]" />
              </div>

              {/* JS Node */}
              <div 
                className="absolute top-[20%] left-[8%] w-9 h-9 rounded-full glass-panel flex items-center justify-center text-sm shadow-lg hover:border-accent transition-all duration-300 animate-float-slow"
                style={{ animationDelay: '-4s' }}
              >
                <FaJs className="text-[#F7DF1E]" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="glass-panel p-5 rounded-2xl flex items-center gap-4 hover:border-accent/30 hover:bg-white/[0.03] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent group-hover:text-white group-hover:bg-accent/25 transition-all duration-300">
                {stat.icon}
              </div>
              <div>
                <div className="text-lg font-bold text-white tracking-tight">{stat.value}</div>
                <div className="text-xs font-semibold text-slate-300">{stat.label}</div>
                <div className="text-[10px] text-secondaryText mt-0.5">{stat.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
