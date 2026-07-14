import React from 'react';
import { FaDatabase, FaLayerGroup, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center bg-background px-6 md:px-12 lg:px-24 pt-20">
      <div className="max-w-4xl">
        {/* Short Tagline */}
        <div className="inline-flex items-center gap-2 bg-blue-50 text-accent text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 border border-blue-100">
          <FaDatabase className="text-[10px]" />
          <span>Data-Driven UI/UX Design</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-primaryText tracking-tight mb-4 leading-tight">
          Hi, I'm <span className="text-accent">Shaily Jadaun</span>
        </h1>

        {/* Roles */}
        <h2 className="text-2xl md:text-3.5xl text-secondaryText mb-6 font-medium tracking-tight">
          Data Analyst <span className="text-slate-300 mx-2">|</span> UI/UX Designer
        </h2>

        {/* Summary Description */}
        <p className="max-w-2xl text-lg md:text-xl text-secondaryText leading-relaxed mb-10 font-normal">
          Detail-oriented BCA graduate blending analytical thinking with intuitive UI/UX principles. 
          Specializing in transforming raw business data into actionable dashboard insights, 
          and crafting clean, user-centered digital interfaces.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#projects" 
            className="group inline-flex items-center justify-center gap-2 bg-accent text-white font-medium px-8 py-3.5 rounded shadow-sm hover:bg-blue-700 transition duration-200"
          >
            View Projects 
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="/ShailyJadaun_DataAnalytics_Resume.pdf" 
            download 
            className="inline-flex items-center justify-center border border-slate-200 bg-surface text-secondaryText hover:text-accent hover:border-accent hover:bg-blue-50/20 font-medium px-8 py-3.5 rounded transition duration-200 shadow-sm"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
