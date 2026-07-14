import React from 'react';
import { FaGraduationCap, FaAward, FaCheckCircle } from 'react-icons/fa';

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

  return (
    <section id="education" className="py-24 bg-surface px-6 md:px-12 lg:px-24 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <div>
            <div className="mb-12 flex items-center gap-3">
              <div className="p-3 bg-blue-50 text-accent rounded-xl">
                <FaGraduationCap size={22} />
              </div>
              <h3 className="text-3xl font-bold text-primaryText">Education</h3>
            </div>

            {/* Timeline */}
            <div className="relative pl-6 border-l-2 border-slate-100 flex flex-col gap-10">
              {educationData.map((edu, idx) => (
                <div key={idx} className="relative">
                  {/* Circle indicator */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-accent" />
                  
                  <span className="text-[11px] font-bold text-accent tracking-wider uppercase bg-blue-50/50 border border-blue-100 px-2 py-0.5 rounded">
                    {edu.duration}
                  </span>
                  <h4 className="text-lg font-bold text-primaryText mt-2 mb-1">{edu.degree}</h4>
                  <span className="text-sm font-semibold text-secondaryText block mb-3">{edu.institution}</span>
                  <p className="text-secondaryText text-sm leading-relaxed max-w-md">{edu.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="mb-12 flex items-center gap-3">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                <FaAward size={22} />
              </div>
              <h3 className="text-3xl font-bold text-primaryText">Professional Certifications</h3>
            </div>

            <p className="text-secondaryText text-sm leading-relaxed mb-8">
              Continuous skill development through industry-focused certifications and hands-on laboratory courses.
            </p>

            <div className="flex flex-col gap-4">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 bg-background p-4 rounded-xl border border-slate-50 hover:border-slate-200 transition duration-200"
                >
                  <FaCheckCircle className="text-emerald-500 text-lg flex-shrink-0" />
                  <span className="text-sm font-medium text-primaryText">{cert}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
