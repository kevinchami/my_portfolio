// src/components/ProjectCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({
  title,
  image,
  bgImage,
  bgColor,
  fontFamily,
  description,
  technologies,
  maxWidth,
  maxHeight,
  borderRadius,
  projectUrl,
}) => {
  return (
    <div
        className={`w-[95%] md:w-[964px] h-auto md:h-[550px] p-6 rounded-lg shadow-lg flex flex-col md:flex-row transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl mx-auto`}
        style={{
        backgroundColor: bgColor, // Ensure bgColor is applied to the entire card
        fontFamily,
      }}
    >
      {/* Left Side - Content with Background Image */}
      <div className="flex-1 flex flex-col justify-center items-start text-left pr-0 md:pr-4 relative">
        {/* Background Image with Opacity */}
        <div
          className="absolute"
          style={{
            backgroundImage: `url('/assets/fondo.png')`, // Background image for the left side
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1, // High opacity for subtle background image
            zIndex: 1, // Ensure the background is behind other elements
            width: '70%', // Adjust width to make the background image smaller
            height: '70%', // Adjust height to make the background image smaller
            top: '10%', // Center the background vertically
            left: '10%', // Center the background horizontally
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full ml-6">
        <div className="flex items-center mb-4 md:mb-2"> {/* Change mb-2 to mb-4 for more margin on mobile */}
            <h3 className="text-white text-3xl md:text-4xl font-bold mr-2">{title}</h3> {/* Use text-3xl on mobile and text-4xl on larger screens */}
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                <img
                src="/assets/link.gif"
                alt="Link icon"
                className="w-6 h-6 rounded -mt-1.5 ml-1"
                />
            </a>
            </div>
        <p className="text-white text-base md:text-sm mb-4 px-0">{description}</p> {/* Use text-base on mobile and text-sm on larger screens */}

          <Link
            to="/about"
            className="text-white px-0 py-2 rounded hover:underline font-bold"
          >
            More →
          </Link>
          <div className="mt-4 flex flex-wrap items-start">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 bg-opacity-80 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 leading-none mb-2 mr-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 flex items-center justify-center mt-4 md:mt-0">
        <img
          src={image}
          alt={title}
          className="object-cover"
          style={{
            maxWidth: maxWidth,
            maxHeight: maxHeight,
            borderRadius: borderRadius,
          }}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
