import React from "react";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="border border-slate-400/40 rounded-xl p-5 w-100 md:w-1/3 h-100">
      {title && (
        <div>
          <h1 className="font-bold text-lg uppercase mb-2">{title}</h1>
          <p className="text-sm text-slate-400 line-clamp-1 mb-2">
            {description}
          </p>
          <img
            src={image}
            alt="hero image for project"
            className="w-full h-50 mb-8 object-cover"
          />
          <div className="py-8">
            <a href={link}>Try now &rarr;</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
