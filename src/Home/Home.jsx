import React from "react";
import Hero from "../components/Hero";
import { programmingLanguages } from "../../constants";

const Home = () => {
  return (
    <>
      <section className="noisy">
        <Hero />
      </section>
      <section className="body">
        <div className="content">
          <h2>Programming Language</h2>
          <div>
            {programmingLanguages.map((language) => (
              <div key={language.id}>
                <div className="hidden">
                  <img src={language.image} alt={language.title} />
                </div>
                <div>
                  <h3>{language.title}</h3>
                  <p>{language.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
