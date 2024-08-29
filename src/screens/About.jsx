// src/screens/About.jsx
import React from 'react';
import TimelineItem from '../components/TimelineItem';

const About = () => {
  const timelineData = [
    {
      title: 'Intern Data Scientist',
      years: '2024-Present',
      location: 'Dooiu',
      description: "Developing a Python AI chatbot for Dooiu's mobile app, leveraging advanced datasets and Pinecone database embeddings. Designing a test web interface, refining algorithms for better query matching, and preparing for chatbot integration into the mobile app. Managing backend with Flask and overseeing deployment via Render, ensuring seamless project execution.",
      technologies: ['Python', 'AI', 'Chatbot Development', 'JavaScript', 'HTML', 'Flask', 'Pinecone'],
      logo: '/assets/dooiu_logo.jpeg',
    },
    {
      title: 'Algorithm Analyst',
      years: '2024-Present',
      location: 'Tania',
      description: "As an Algorithm Analyst, I research and analyze the time complexity of encrypted message transmission processes, working closely under the supervision of the CTO. Also developed the landing page for the company",
      technologies: ["React", "Encryption", "Algorithm Optimization", "Complexity Analysis", "Data Security"],
      logo: "/assets/tania_logo.png"
    },
    {
      title: 'Developed Amigo LaTiul Mobile App',
      years: '2023-2024',
      location: 'Freelance',
      description: 'Developed a mobile application, addressing challenges in real-time data synchronization and Firebase user authentication. Integrated machine learning models into the app, along with connections to external APIs. The application is currently being tested with a closed group, with deployment to the Apple Store and Play Store underway.',
      technologies: ['React Native', 'MongoDB', 'Node.js', 'Express'],
      logo: '/assets/latiul.png',
    },
    {
      title: 'Computer Science BSc',
      years: '2021-2024',
      location: 'Jerusalem College of Engineering',
      description: 'Studied computer science with a focus on Machine Learning, Algorithms, and Web/Mobile Development.',
      technologies: ['Data Structures', 'Algorithms', 'Web Development', 'Mobile Development', 'Machine Learning', 'AI'],
      logo: '/assets/azrielli.png',
    },
    {
      title: 'Preparation for New Immigrants',
      years: '2020-2021',
      location: 'Bar Ilan University',
      description: 'Participated in a preparatory program for new immigrants, achieving a GPA of 97.',
      technologies: [],
      logo: '/assets/barilan.svg',
    },
    {
      title: 'Volunteer Combat Soldier',
      years: '2018-2019',
      location: 'IDF',
      description: 'Served as a volunteer combat soldier in the IDF, demonstrating leadership and the ability to perform under pressure in challenging environments.',
      technologies: ['Team Leadership', 'High-pressure Work Environments'],
      logo: '/assets/idf.svg',
    },
  ];

  return (
    <section id="about" className="p-6 bg-body">
      {/* Header Section with Name and Image */}
      <div className="flex flex-col items-center mb-10">
        <div className="flex items-center justify-center">
          <h2 className="text-3xl font-bold mr-4">
            <span className="text-font">Kevin Chami</span><br />
            <span className="text-primary">Software Developer</span>
          </h2>
          <img
            src="/assets/kevin.jpeg"
            alt="Kevin Chami"
            className="w-28 h-28 rounded-full border-2 border-gray-300 -mt-2.5"
          />
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative flex flex-col items-center">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>

        {/* Timeline items */}
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`w-full flex flex-col md:flex-row ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} mb-8`}
          >
            <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
              <TimelineItem
                title={item.title}
                years={item.years}
                location={item.location}
                description={item.description}
                technologies={item.technologies}
                logo={item.logo}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
