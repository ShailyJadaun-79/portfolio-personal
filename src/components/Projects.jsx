import React, { useState } from 'react';
import { FaExternalLinkAlt, FaChartLine, FaFilter, FaUsers, FaDatabase } from 'react-icons/fa';

const projects = [
  {
    title: "Sales Performance Dashboard",
    tools: ["Power BI", "Excel", "Data Modeling"],
    desc: "Analyzed regional sales, revenue growth, and profitability metrics. Created custom KPI indicators, custom filters, and dynamic date slicers to analyze historical trends.",
    stats: "15% regional growth trend identified",
    icon: <FaChartLine className="text-blue-500" />,
    category: "Power BI"
  },
  {
    title: "HR Analytics Dashboard",
    tools: ["Power BI", "Power Query", "Data Cleaning"],
    desc: "Created a comprehensive dashboard to track employee attrition, demographic distributions, and performance metrics. Transformed dirty HR datasets to derive clear retention patterns.",
    stats: "Analyzed 10k+ workforce records",
    icon: <FaUsers className="text-indigo-500" />,
    category: "Power BI"
  },
  {
    title: "Data Analytics Dashboard",
    tools: ["Power BI", "Excel", "Power Query"],
    desc: "Integrated multiple data sources to present aggregate reporting. Developed multi-layered drill-through sheets, Pivot Tables, and advanced Excel modeling using XLOOKUP and dynamic formatting.",
    stats: "4 hrs weekly reporting time saved",
    icon: <FaDatabase className="text-slate-500" />,
    category: "Excel"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tools.includes(filter) || p.category === filter);

  const filterOptions = ['All', 'Power BI', 'Excel', 'Power Query'];

  return (
    <section id="projects" className="py-24 bg-background px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-primaryText mb-4">Featured Dashboards</h3>
            <p className="text-secondaryText max-w-xl text-base leading-relaxed">
              Explore interactive data visualizations built using Power BI and Advanced Excel.
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                  filter === opt
                    ? 'bg-accent text-white shadow-sm'
                    : 'bg-surface text-secondaryText border border-slate-100 hover:border-slate-200'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((proj, idx) => (
            <div 
              key={idx} 
              className="bg-surface p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] card-hover flex flex-col justify-between"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100/50">
                    {proj.icon}
                  </div>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded">
                    {proj.category}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-primaryText mb-3">{proj.title}</h4>
                
                {/* Tools Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tools.map((tool, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="bg-slate-50 text-secondaryText text-[11px] font-medium px-2.5 py-0.5 rounded border border-slate-100"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-secondaryText text-sm leading-relaxed mb-6">
                  {proj.desc}
                </p>
              </div>

              {/* Bottom Insights */}
              <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500 italic">
                  {proj.stats}
                </span>
                <span className="text-accent hover:text-blue-700 text-xs font-semibold cursor-pointer flex items-center gap-1">
                  View Specs <FaExternalLinkAlt className="text-[10px]" />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
