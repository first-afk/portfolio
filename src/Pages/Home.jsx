import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "../components/atoms/Button";
import Card from "../components/molecules/Card";
import Icons from "../components/atoms/Icons";
import Footer from "../components/organisms/Footer";

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
        },
      );
    });
  });

  return (
    <>
      <section className="hero">
        <div className="flex flex-row gap-2 items-center">
          <hr className="w-10 h-0.5 bg-primary" />
          <h1> ESTHER ORIEJI</h1>
        </div>
        <h2>
          breathing life <br />{" "}
          <span className="text-gradient">into lines </span> <br />
          of code
        </h2>
        <p>
          I build websites and web apps with a perfect blend of clean code and
          stunning visuals. Transforming complex logic into immersive digital
          experiences.
        </p>
        <div className="flex items-center">
          <Button size="small">View Projects</Button>
        </div>
      </section>

      <section id="languages" className="body">
        <div className="language-card ">
          <div className="mt-2 languages">
            <Card
              height="large"
              title="languages"
              subtitle="Core logic"
              color="primary"
            >
              <div className="flex justify-between">
                <div className="flex-center">
                  <Icons name="js" size={24} color="#00d1ff" />
                  <p className="text-lg">Javascript</p>
                </div>
                <div>
                  <p className="text-lg">ESNEXT</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="mt-2 frameworks">
            <Card
              title="frameworks"
              subtitle="the reactive ecosystem"
              color="secondary"
              padding="normal"
              height="large"
            >
              <div className="frameworks-ecosystem">
                <div className="flex items-center gap-2">
                  <Icons name="react" color="#bd00ff" size="18px"></Icons>
                  <h1>React</h1>
                </div>
                <p className="mt-3 text-sm line-clamp-3">
                  Building complex, modular component architectures with
                  optimized state cycles. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Quo unde natus, optio, et omnis
                  temporibus aliquam cupiditate neque repudiandae vel recusandae
                  repellendus, eius ut modi fugiat rerum dignissimos dolorem
                  eos?
                </p>
              </div>
            </Card>
          </div>
          <div className="mt-2 web">
            <Card
              title="web standard"
              subtitle="interface mastery"
              color=""
              className="md:h-24 h-full"
            >
              <div className="flex justify-end md:-mt-22 space-x-4">
                <Button
                  variant="secondary"
                  color="none"
                  className="flex items-center gap-2"
                >
                  <Icons name="html" size="26px"></Icons>
                  <p className="text-amber-50">HTML</p>
                </Button>
                <Button
                  variant="secondary"
                  color="none"
                  className="flex items-center gap-2"
                >
                  <Icons name="css" size="26px"></Icons>
                  <p className="text-amber-50">CSS</p>
                </Button>
                <Button
                  variant="secondary"
                  color="none"
                  className="flex items-center gap-2"
                >
                  <Icons name="tailwind" size="26px"></Icons>
                  <p className="text-amber-50">Tailwind</p>
                </Button>
              </div>
            </Card>
          </div>
          <div className="mt-2 backend">
            <Card
              title="backend & db"
              subtitle="persistent infrastructure"
              color="tertiary"
              padding="normal"
              height="large"
            >
              <div className="card-grid">
                <div className="p-text">
                  <p>
                    Architecting secure API layers and scalable data models
                    across relational and document-based systems
                  </p>
                </div>
                <div className="icon-grid ">
                  <div className="flex flex-col items-center justify-center express">
                    <Icons size="2em" name="express" color="#00ff94"></Icons>
                    <h1>Express</h1>
                  </div>
                  <div className="flex flex-col items-center justify-center nodejs">
                    <Icons size="2em" name="nodejs" color="#00ff94"></Icons>
                    <h1>node.js</h1>
                  </div>
                  <div className="flex flex-col items-center justify-center mysql">
                    <Icons size="2em" name="mysql" color="#00ff94"></Icons>
                    <h1>MySQL</h1>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section>
        <a href="/showroom">
          <div className="flex flex-col items-end justify-end cursor-pointer mb-4">
            <img
              src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YTduaHF5OXJ1d2djZTFranh5cGpobm03NTltcjVkbWwxcDlwc3FhOSZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/VgeZNMC2mRtx3mjpXk/giphy.gif"
              alt=""
              className="h-30 w-40 mr-4 z-50"
            />
            <h2 className="text-xs mr-15 z-50 pb-6">NEXT PAGE</h2>
          </div>
        </a>
      </section>
    </>
  );
};

export default Home;
