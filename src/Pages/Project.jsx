import React from "react";
import ProjectCard from "../components/molecules/ProjectCard";
import Button from "../components/atoms/Button";

const Project = () => {
  const projects = [
    {
      id: "01",
      title: "OptoNews",
      link: "https://optonews.com.ng/",
      description:
        "A dedicated career and information portal for the optometry community. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cumque assumenda ipsam facere officiis suscipit recusandae maxime aspernatur sint officia alias consequuntur eligendi tempora ullam vitae, perferendis, repudiandae, dolorem molestiae!",
      tagline: "",
      image: "/images/optonews-tile.png",
      image2: "/images/optonews-tile.png",
    },

    {
      id: "02",
      title: "Skip-Fit",
      link: "https://skip-fit.vercel.app/",
      description:
        "Skip Fit is a lightweight fitness-tracking web app to log workouts, quick-add common activities, and schedule simple calendar reminders. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cumque assumenda ipsam facere officiis suscipit recusandae maxime aspernatur sint officia alias consequuntur eligendi tempora ullam vitae, perferendis, repudiandae, dolorem molestiae!",
      tagline: "",
      image: "/images/skip-fit-halftone.png",
      image2: "/images/skip-fit-black.png",
    },

    {
      id: "03",
      title: "MX-Directory",
      link: "https://mx-directory.vercel.app/",
      description:
        "Pitch your startup and connect with entrepreneurs. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cumque assumenda ipsam facere officiis suscipit recusandae maxime aspernatur sint officia alias consequuntur eligendi tempora ullam vitae, perferendis, repudiandae, dolorem molestiae!",
      tagline: "",
      image: "/images/mx-directory-gradient.png",
      image2: "/images/mx-directory-black.png",
    },

    {
      id: "04",
      title: "Portfolio",
      link: "https://mx-directory.vercel.app/",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cumque assumenda ipsam facere officiis suscipit recusandae maxime aspernatur sint officia alias consequuntur eligendi tempora ullam vitae, perferendis, repudiandae, dolorem molestiae!",
      tagline: "",
      image: "/images/portfolio-black.png",
      image2: "/images/portfolio-black.png",
    },
  ];
  const spotlight = projects.slice(0, 3);
  return (
    <section className="projects mt-20 p-5 mx-auto">
      <header className="projects-title py-10 flex justify-center max-md:text-5xl text-8xl uppercase font-black">
        Projects
      </header>
      <div className="flex max-md:flex-col justify-between items-center w-full max-md:space-y-24 gap-10 md:px-5 py-10">
        {spotlight.map(({ title, link, description, image }) => (
          <ProjectCard
            title={title}
            description={description}
            image={image}
            link={link}
          />
        ))}
      </div>

      <div className="projects-display py-60 flex flex-col items-center justify-center m-4">
        {projects.map(({ id, title, link, description, tagline, image2 }) => (
          <div
            key={id}
            className="flex max-md:flex-col md:items-start justify-center gap-12 mb-[30vh]"
          >
            <div className="project-image md:w-1/2">
              <img
                src={image2}
                alt="optonews project image"
                className="w-full h-100 object-cover rounded-xl"
              />
            </div>
            <div className="project-description md:w-1/2">
              <h2 className="md:text-6xl text-4xl font-black mb-2">{id}</h2>
              <h3 className="md:text-5xl text-4xl font-black capitalize mb-2">
                {title}
              </h3>
              <h4 className="uppercase text-slate-400 mb-3">{tagline}</h4>
              <p className="line-clamp-5 text-sm first-letter:capitalize mb-4">
                {description}
              </p>
              <div>
                <Button
                  variant="primary"
                  color="none"
                  className="max-md:w-full"
                >
                  <a href={link}>Live Site</a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
