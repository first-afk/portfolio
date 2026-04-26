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
            <h1 className="text-6xl font-normal">
              I'm Orieji <br /> <span className="font-bold">Esther</span>{" "}
            </h1>
            <p className="py-10 md:py-15 text-xs md:text-sm">
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
          <Card height="none" padding="none" color className="h-48 md:h-185">
            <div className="links-logo">
              <div className="links-icon wrap-break-word flex place-items-center">
                <h1 className="text-[5vw] font-bold md:leading-14 mx-6 p-2 mt-8">
                  LIN KS
                </h1>
              </div>
              <Icons className="links-icon" name="github" size="540"></Icons>
              <Icons className="links-icon" name="instagram" size="540"></Icons>
              <Icons className="links-icon" name="linkedin" size="540"></Icons>
            </div>

            <div className="recent-works mt-15 mx-3 hidden md:block">
              <h2 className="uppercase font-extrabold text-[5vw] md:leading-13 leading-7 mx-4">
                recent works
              </h2>

              <div className="work">
                <div className="flex items-start justify-between">
                  <h3>Job Rank</h3>
                  <h3>date to be posted</h3>
                </div>
                <div>
                  <p>link to be posted</p>
                </div>
              </div>
              <div className="work">
                <div className="flex items-start justify-between">
                  <h3>Job Rank</h3>
                  <h3>date to be posted</h3>
                </div>
                <div>
                  <p>link to be posted</p>
                </div>
              </div>
              <div className="work">
                <div className="flex items-start justify-between">
                  <h3>Job Rank</h3>
                  <h3>date to be posted</h3>
                </div>
                <div>
                  <p>link to be posted</p>
                </div>
              </div>
              <div className="work">
                <div className="flex items-start justify-between">
                  <h3>Job Rank</h3>
                  <h3>date to be posted</h3>
                </div>
                <div>
                  <p>link to be posted</p>
                </div>
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
            <h1 className="text-6xl font-bold mb-5">Skills</h1>
            <div className="grid md:grid-cols-2 items-center">
              {programmingLanguages.map((item) => (
                <p key={item.id}>{item.title}</p>
              ))}
              {frontendTools.map((item) => (
                <p key={item.id}>{item.title}</p>
              ))}
              {backendTools.map((item) => (
                <p key={item.id}>{item.title}</p>
              ))}
              {databaseTool.map((item) => (
                <p key={item.id}>{item.title}</p>
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
