// src/screens/Home.jsx
import React from "react";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
  // Demo projects data
  const demoProjects = [
    {
      title: "Amigo LaTiul",
      video: "/assets/latiul_land.mp4",
      bgImage: "",
      bgColor: "#F35A33",
      fontFamily: "Khula, sans-serif",
      description:
        "Mobile Application for Young Israelis Traveling to South America",
      technologies: ["React Native", "MongoDB", "Node.js"],
      maxWidth: "70%", // New property
      maxHeight: "70%", // New property
      borderRadius: "35px", // New property
      projectUrl: "https://kevinchami.my.canva.site/latiul",
    },
    {
      title: "Speenu",
      video: "/assets/speenu_land.mp4",
      bgImage: "",
      bgColor: "#64CABA",
      fontFamily: "Khula, sans-serif",
      description: "360º Interactive Web Application",
      technologies: ["React", "Sirv", "Three.js"],
      maxWidth: "110%", // New property
      maxHeight: "110%", // New property
      borderRadius: "20px", // New property
      projectUrl: "https://landing-360.vercel.app",
    },
    {
      title: "Weather Prediction API",
      video: "/assets/weather_land.mp4",
      bgImage: "",
      bgColor: "#D2010F",
      fontFamily: "Khula, sans-serif",
      description: "Machine Learning & Interface Developmment and Integration",
      technologies: ["Python", "Machine Learning", "FastAPI"],
      maxWidth: "70%", // New property
      maxHeight: "70%", // New property
      borderRadius: "15px", // New property
      projectUrl: "https://github.com/kevinchami/weather-predicter",
    },
    {
        title: "Tania",
        video: "/assets/tania_land.mp4",
        bgImage: "",
        bgColor: "#A2A3F9",
        fontFamily: "Khula, sans-serif",
        description: "Tania Landing Page & Algorithm Analyst",
        technologies: ["React", "Javascript", "Algorithms & Complexity"],
        maxWidth: "110%", // New property
        maxHeight: "110%", // New property
        borderRadius: "20px", // New property
        projectUrl: "https://www.taniapqc.com/",
      },
  ];

  return (
    <section id="home" className="p-0">
      <div className="w-full bg-body">
            <h2 className="text-center text-4xl md:text-5xl font-bold text-white py-6 m-0">
        <span className="text-primary">Mobile & Web</span>
        <br />
        <span className="text-font">App Engineer</span>
        </h2>
      </div>

      <div className="flex flex-col gap-6 mt-8">
        {/* Render ProjectCard components using demoProjects data */}
        {demoProjects.map((project, index) => (
          <div key={index} className="flex justify-center mb-7">
            <ProjectCard
              title={project.title}
              video={project.video}
              image={project.image}
              bgImage={project.bgImage}
              bgColor={project.bgColor}
              fontFamily={project.fontFamily}
              description={project.description}
              technologies={project.technologies}
              maxWidth={project.maxWidth} // Pass the maxWidth
              maxHeight={project.maxHeight} // Pass the maxHeight
              borderRadius={project.borderRadius} // Pass the borderRadius
              projectUrl={project.projectUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
