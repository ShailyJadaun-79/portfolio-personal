import { 
  FaDatabase, 
  FaChartBar, 
  FaTable, 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaGitAlt, 
  FaGithub,
  FaFileExcel,
  FaCode
} from 'react-icons/fa';
import { 
  SiTailwindcss 
} from 'react-icons/si';

const Skills = () => {
  const categories = [
    {
      title: "Data Analytics & BI",
      description: "Extracting insights and building robust visualization models.",
      skills: [
        { name: "Power BI", icon: <FaChartBar className="text-[#F2C811]" />, level: "90%" },
        { name: "Advanced Excel", icon: <FaFileExcel className="text-[#10793F]" />, level: "85%" },
        { name: "Power Query", icon: <FaDatabase className="text-[#3b82f6]" />, level: "80%" },
        { name: "Data Cleaning", icon: <FaTable className="text-[#06b6d4]" />, level: "85%" },
        { name: "Dashboard Reporting", icon: <FaChartBar className="text-[#a855f7]" />, level: "90%" }
      ]
    },
    {
      title: "Front-End & Programming",
      description: "Translating mockups and designs into clean, responsive web layouts.",
      skills: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" />, level: "75%" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: "85%" },
        { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" />, level: "80%" },
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" />, level: "90%" },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" />, level: "85%" }
      ]
    },
    {
      title: "Tools & Workspace",
      description: "Modern environments and collaboration systems.",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, level: "80%" },
        { name: "GitHub", icon: <FaGithub className="text-white" />, level: "85%" },
        { name: "VS Code", icon: <FaCode className="text-[#007ACC]" />, level: "90%" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-transparent px-6 md:px-12 lg:px-24 border-y border-white/5 relative">
      {/* Decorative radial glows for skills */}
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-accent/5 blur-[120px] pointer-events-none -z-10 animate-pulse-glow"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-accentBlue/5 blur-[100px] pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: '-3s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              My Skills <span className="inline-block w-2 h-2 rounded-full bg-accent ml-1"></span>
            </h3>
            <p className="text-secondaryText max-w-xl text-base leading-relaxed">
              A balanced combination of data-driven analytics and clean interface layouts.
            </p>
          </div>
          <a 
            href="#projects" 
            className="text-accent text-sm font-semibold hover:text-white transition-colors flex items-center gap-1 group self-start md:self-auto"
          >
            Explore My Work <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-lg font-bold text-white mb-2">{cat.title}</h4>
                <p className="text-xs text-secondaryText mb-8 leading-relaxed">{cat.description}</p>
              </div>

              {/* Skills List with Progress Bars */}
              <div className="flex flex-col gap-5">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex flex-col">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2.5">
                        <span className="text-base flex-shrink-0">{skill.icon}</span>
                        <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                      </div>
                      <span className="text-xs font-bold text-accent">{skill.level}</span>
                    </div>
                    {/* Progress track */}
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-accentBlue/80 to-accent/90 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: skill.level }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
