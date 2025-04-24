import React from "react";
import { Timeline } from "./ui/timeline";
import ruetbus from "../assets/images/ruetbus.jpg"

export function TimelineDemo() {
  const data = [
    {
      title: "2021",
      content: (
        <div>
          <p
            className="mb-4 text-base font-medium text-base-content md:text-lg">
            The pandemic that sparked a new passion - my first steps into web development
          </p>
          <div className="mb-6">
            <div
              className="flex items-center gap-2 text-base text-base-content/80 md:text-lg mb-2">
              During the isolation of COVID-19, I discovered web development as a creative outlet
            </div>
            <div
              className="flex items-center gap-2 text-base text-base-content/80 md:text-lg mb-2">
              Immersed myself in learning the MERN stack - MongoDB, Express, React, and Node.js
            </div>
            <div
              className="flex items-center gap-2 text-base text-base-content/80 md:text-lg mb-2">
              Built my first interactive web applications and discovered the joy of problem solving
            </div>
            <div
              className="flex items-center gap-2 text-base text-base-content/80 md:text-lg mb-2">
              This newfound passion led me to see the deeper value in pursuing computer science
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Coding on laptop"
              width={500}
              height={500}
              className="aspect-square w-full object-cover shadow-lg filter grayscale" />
            <img
              src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Computer science algorithms"
              width={500}
              height={500}
              className="aspect-square w-full object-cover shadow-lg filter grayscale" />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p
            className="mb-4 text-base font-medium text-base-content md:text-lg">
            A period of academic focus as I completed HSC and prepared for university
          </p>
          <div className="mb-6">
            <div
              className="flex items-center gap-2 text-base text-base-content/80 md:text-lg mb-2">
              Devoted my time to completing Higher Secondary Certificate (HSC) with distinction
            </div>
            <div
              className="flex items-center gap-2 text-base text-base-content/80 md:text-lg mb-2">
              Underwent intensive preparation for university admission examinations
            </div>
            <div
              className="flex items-center gap-2 text-base text-base-content/80 md:text-lg mb-2">
              Though development took a backseat, the seed of interest in technology remained alive
            </div>
            <div
              className="flex items-center gap-2 text-base text-base-content/80 md:text-lg mb-2">
              Occasional small projects kept my coding skills from getting rusty
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
                src="https://img.freepik.com/free-photo/portrait-person-suffering-from-cybersickness-from-using-tech-device-too-long_23-2151393767.jpg?semt=ais_hybrid&w=740"
              alt="Coding on laptop"
              width={500}
              height={500}
              className="aspect-square w-full object-cover shadow-lg filter grayscale" />
            <img
              src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Computer science algorithms"
              width={500}
              height={500}
              className="aspect-square w-full object-cover shadow-lg filter grayscale" />
          </div>
        </div>
      ),
    },
    {
      title: "2023 - 2024",
      content: (
        <div>
          <p
            className="mb-4 text-base font-medium text-base-content md:text-lg">
            Beginning my academic journey at RUET and rediscovering my passion for development
          </p>
          <div className="mb-6">
            <div
              className="flex items-center gap-2 text-base text-base-content/80 md:text-lg mb-2">
              Secured admission to Rajshahi University of Engineering & Technology, one of Bangladesh's premier institutions
            </div>
            <div
              className="flex items-center gap-2 text-base text-base-content/80 md:text-lg mb-2">
              First year: Established a strong foundation in computer science fundamentals and algorithms
            </div>
            <div
              className="flex items-center gap-2 text-base text-base-content/80 md:text-lg mb-2">
              Second year: The software development course reignited my passion for web technologies
            </div>
            <div
              className="flex items-center gap-2 text-base text-base-content/80 md:text-lg mb-2">
              Began applying theoretical CS concepts to practical development projects
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://tfe-bd.sgp1.cdn.digitaloceanspaces.com/uploads/1510029650.jpg"
              alt="Computer science classroom"
              width={500}
              height={500}
              className="aspect-square w-full object-cover shadow-lg filter grayscale" />
            <img
              src={ruetbus}
              alt="Programming algorithms"
              width={500}
              height={500}
              className="aspect-square w-full object-cover shadow-lg filter grayscale" />
          </div>
        </div>
      ),
    },
    {
      title: "2025 - Present",
      content: (
        <div>
          <p
            className="mb-4 text-base font-medium text-base-content md:text-lg">
            A renaissance in my web development journey and expanding into new frontiers
          </p>
          <div className="mb-6">
            <div
              className="flex items-center gap-2 text-base text-base-content/80 md:text-lg mb-2">
              Revitalized my MERN stack expertise through a series of increasingly complex projects
            </div>
            <div
              className="flex items-center gap-2 text-base text-base-content/80 md:text-lg mb-2">
              Developing this portfolio and other personal applications to showcase my skills
            </div>
            <div
              className="flex items-center gap-2 text-base text-base-content/80 md:text-lg mb-2">
              Delving into advanced concepts like React architecture patterns and Next.js framework
            </div>
            <div
              className="flex items-center gap-2 text-base text-base-content/80 md:text-lg mb-2">
              Expanding knowledge in DevOps practices, cloud platforms, and deployment strategies
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Modern web development workspace"
              width={500}
              height={500}
              className="aspect-square w-full object-cover shadow-lg filter grayscale" />
            <img
              src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Web development code"
              width={500}
              height={500}
              className="aspect-square w-full object-cover shadow-lg filter grayscale" />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip bg-base-100 py-16">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold mb-4 text-base-content">My Development Journey</h2>
        <div className="w-32 h-1 bg-primary mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-xl text-base-content/80">Tracing my path from pandemic discovery through academic growth to professional evolution</p>
      </div>
      <Timeline data={data} />
    </div>
  );
}
