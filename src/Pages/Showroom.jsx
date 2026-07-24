import React from "react";
import Card from "../components/molecules/Card";
import Icons from "../components/atoms/Icons";
import {
  backendTools,
  databaseTool,
  frontendTools,
  programmingLanguages,
} from "../../constants";

const Showroom = () => {
  const projects = [
    {
      id: "01",
      title: "OptoNews",
      date: "02.september.2025",
      link: "https://optonews.com.ng/",
    },

    {
      id: "02",
      title: "Skip-Fit",
      date: "02.september.2025",
      link: "https://skip-fit.vercel.app/",
    },

    {
      id: "03",
      title: "MX-Directory",
      date: "02.september.2025",
      link: "https://mx-directory.vercel.app/",
    },
  ];
  return (
    <>
      <section className="showroom mt-20 p-5">
        <div className="mt-2 face-card">
          <Card height rounded="xl" padding color className="h-auto ">
            <img src="/images/star.jpg" alt="" className="rounded-4xl " />
          </Card>
        </div>
        <div className="mt-2 description">
          <Card rounded="lg" color height="xlarge">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight wrap-break-word">
              I'm Orieji <br />
              <span className="font-bold block sm:inline">Esther</span>{" "}
            </h1>
            <p className="py-2 max-sm:text-sm leading-relaxed wrap-break-word">
              My journey in the world of web development stems from a deep
              fascination with the digital realm. From my early days of
              curiosity to my current expertise, I have honed the craft of
              turning ideas into engaging, functional, and user-friendly web
              experiences. I specialize in building seamless and visually
              appealing web applications that balance design with performance.
              So let's create something impactful and innovative together.
            </p>
          </Card>
        </div>
        <div className="mt-2 links">
          <Card height="none" padding="none" color className="h-fit lg:h-185">
            <div className="links-logo max-md:hidden mx-3">
              <div className="links-icon wrap-break-word flex place-items-center">
                <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold md:leading-14 mx-6 p-2 mt-8 wrap-break-word">
                  LIN KS
                </h1>
              </div>
              <Icons className="links-icon" name="github" size="540"></Icons>
              <Icons className="links-icon" name="instagram" size="540"></Icons>
              <Icons className="links-icon" name="linkedin" size="540"></Icons>
            </div>

            <div className="flex items-center flex-col h-47 md:hidden">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4 wrap-break-word">
                  LINKS
                </h1>
              </div>
              <div className="flex items-center justify-center -mt-2 h-1/2 flex-1 p-2">
                <div className="flex-1 w-1/3">
                  <Icons
                    className="links-icon"
                    name="github"
                    size="540"
                  ></Icons>
                </div>
                <div className="flex-1 w-2/3">
                  {" "}
                  <Icons
                    className="links-icon"
                    name="instagram"
                    size="540"
                  ></Icons>
                </div>
                <div className="flex-1 w-1/3">
                  <Icons
                    className="links-icon"
                    name="linkedin"
                    size="540"
                  ></Icons>
                </div>
              </div>
            </div>

            <div className="recent-works mt-15 mx-3 lg:flex flex-col items-center justify-center">
              <h2 className="uppercase font-extrabold text-3xl sm:text-4xl lg:text-[5vw] leading-tight md:leading-13 mx-4 wrap-break-word">
                recent works
              </h2>

              <div className="work">
                {projects.map(({ title, link, date }) => (
                  <div className="flex flex-col mt-2">
                    <div className="flex items-center justify-between text-sm gap-3">
                      <h3 className="text-lg">{title}</h3>
                      <h3 className="text-md">{date}</h3>
                    </div>
                    <div>
                      <a className="text-sm" href={link}>
                        View live
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
        <div className="mt-2 skills">
          <Card
            height="none"
            padding="large"
            className="h-102 md:h-80 border-4 border-fuchsia-600"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 wrap-break-word">
              Skills
            </h1>
            <div className="grid gap-2 sm:grid-cols-2 items-start">
              {programmingLanguages.map((item) => (
                <p
                  key={item.id}
                  className="text-sm sm:text-base wrap-break-word"
                >
                  {item.title}
                </p>
              ))}
              {frontendTools.map((item) => (
                <p
                  key={item.id}
                  className="text-sm sm:text-base wrap-break-word"
                >
                  {item.title}
                </p>
              ))}
              {backendTools.map((item) => (
                <p
                  key={item.id}
                  className="text-sm sm:text-base wrap-break-word"
                >
                  {item.title}
                </p>
              ))}
              {databaseTool.map((item) => (
                <p
                  key={item.id}
                  className="text-sm sm:text-base wrap-break-word"
                >
                  {item.title}
                </p>
              ))}
            </div>
          </Card>
        </div>
        <div className="mt-2 stack">
          <Card height="none" color className="h-48 md:h-80"></Card>
        </div>
        <div className="mt-2 name-tag">
          <Card height="none" color className="h-32 md:h-64"></Card>
        </div>
        <div className="mt-2 backlink">
          <Card color height="large"></Card>
        </div>
      </section>
    </>
  );
};

export default Showroom;
