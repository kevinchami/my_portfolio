// src/components/TimelineItem.jsx
import React from 'react';

const TimelineItem = ({ title, years, location, description, technologies, logo }) => {
  return (
<div className="relative mb-8 flex flex-col p-4 bg-gray-800 rounded-lg shadow-md border border-primaryLight hover:border-primary transition-all w-full md:w-[80%] md:ml-12">
      <div className="flex items-start mb-4">
        {logo && (
          <div className="w-12 h-12 mr-4">
            <img src={logo} alt="Logo" className="w-full h-full object-cover rounded-lg" />
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="text-white text-sm mt-1">
            <p>{years} - {location}</p>
          </div>
        </div>
      </div>

      {/* Description and Technologies */}
      <p className="mt-2 text-gray-300">{description}</p>
      <div className="mt-4 flex flex-wrap">
        {technologies.map((tech, index) => (
          <span key={index} className="inline-block bg-gray-700 bg-opacity-80 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TimelineItem;
