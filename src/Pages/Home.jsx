import React from "react";
import Hero from "../components/Hero";
import {
  backendTools,
  databaseTool,
  frontendTools,
  programmingLanguages,
} from "../../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Home = () => {
  useGSAP(() => {
    const panels = gsap.utils.toArray(".panel");
    panels.forEach((panel) => {
      gsap.to(panel, {
        scrollTrigger: {
          trigger: panel,
          start: () =>
            panel.offsetHeight < window.innerHeight
              ? "top top"
              : "bottom bottom",
          pin: true,
          pinSpacing: false,
        },
      });
    });

    const toolContents = document.querySelectorAll("[data-index]");
    toolContents.forEach((tools) => {
      gsap.fromTo(
        tools,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: tools,
            start: "top 80%",
          },
        }
      );
    });
  });

  return (
    <>
      <section className="noisy panel">
        <Hero />
      </section>
      <section id="languages" className="body panel">
        <div className="content">
          <div className="programming-language">
            <h2>Programming Language</h2>
            {programmingLanguages.map((language, index) => (
              <div
                className="content-split"
                key={language.id}
                data-index={index}
              >
                <div className="img-class">
                  <img src={language.image} alt={language.title} />
                </div>
                <div className="tool-content">
                  <h3>{language.title}</h3>
                  <p>{language.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="programming-language">
            <h2>Frontend Tools</h2>
            {frontendTools.map((tool, index) => (
              <div className="content-split" key={tool.id} data-index={index}>
                <div className="img-class">
                  <img src={tool.image} alt={tool.title} />
                </div>
                <div className="tool-content">
                  <h3>{tool.title}</h3>
                  <p>{tool.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="programming-language">
            <h2>Backend Tools</h2>
            {backendTools.map((tool, index) => (
              <div className="content-split" key={tool.id} data-index={index}>
                <div className="img-class">
                  <img src={tool.image} alt={tool.title} />
                </div>
                <div className="tool-content">
                  <h3>{tool.title}</h3>
                  <p>{tool.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="programming-language">
            <h2>Database Tools</h2>
            {databaseTool.map((tool, index) => (
              <div className="content-split" key={tool.id} data-index={index}>
                <div className="img-class">
                  <img src={tool.image} alt={tool.title} />
                </div>
                <div className="tool-content">
                  <h3>{tool.title}</h3>
                  <p>{tool.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <a href="/showroom">
        <div className="flex flex-col items-end justify-end cursor-pointer mb-4">
          <img src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YTduaHF5OXJ1d2djZTFranh5cGpobm03NTltcjVkbWwxcDlwc3FhOSZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/VgeZNMC2mRtx3mjpXk/giphy.gif" alt="" className="h-30 w-40 mr-4 z-50" />
          <h2 className="text-xs mr-15 z-50 pb-6">NEXT PAGE</h2>
        </div>
        </a>
      </section>
    </>
  );
};

export default Home;
