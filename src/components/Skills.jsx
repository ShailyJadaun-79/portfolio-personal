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
        { name: "Power BI", icon: <FaChartBar className="text-[#F2C811]" /> },
        { name: "Advanced Excel", icon: <FaFileExcel className="text-[#10793F]" /> },
        { name: "Power Query", icon: <FaDatabase className="text-slate-500" /> },
        { name: "Data Cleaning", icon: <FaTable className="text-blue-500" /> },
        { name: "Dashboard Reporting", icon: <FaChartBar className="text-indigo-500" /> }
      ]
    },
    {
      title: "Front-End & Programming",
      description: "Translating mockups and designs into clean, responsive web layouts.",
      skills: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> }
      ]
    },
    {
      title: "Tools & Workspace",
      description: "Modern environments and collaboration systems.",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="text-[#181717]" /> },
        { name: "VS Code", icon: <FaCode className="text-[#007ACC]" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-surface px-6 md:px-12 lg:px-24 border-y border-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-bold text-primaryText mb-4">Core Skillset</h3>
          <p className="text-secondaryText max-w-xl text-base leading-relaxed">
            A balanced combination of data-driven analytics and clean interface layouts.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="bg-background rounded-2xl p-8 border border-slate-100 card-hover flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-bold text-primaryText mb-2">{cat.title}</h4>
                <p className="text-sm text-secondaryText mb-8 leading-relaxed">{cat.description}</p>
              </div>

              {/* Skills List */}
              <div className="flex flex-col gap-4">
                {cat.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="flex items-center gap-3.5 bg-white p-3.5 rounded-xl border border-slate-50 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:border-blue-100 transition duration-200"
                  >
                    <span className="text-xl flex-shrink-0">{skill.icon}</span>
                    <span className="text-sm font-medium text-primaryText">{skill.name}</span>
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
