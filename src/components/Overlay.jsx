import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10  ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/3 flex items-center justify-center">
        <div className="max-w-lg w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Hello, I'm Sachin Kumar
          </h1>
          <p className="text-gray-600">Computer Science student at YorkU</p>
          <p className="mt-3">I am a </p>
          <ul className="leading-9">
            <li>🧑‍💻 Programmer</li>
            <li>🧑‍🏫 Developer</li>
            <li>🎮 Gamer</li>
            <li>✍ Digital Artist</li>
          </ul>
          <br></br>
          <p>
            As a committed and passionate computer science student, I possess a
            robust understanding of programming, software development, and
            digital artistry. My journey has equipped me with a diverse set of
            skills and experiences, allowing me to excel in various
            technological domains.I am driven by a desire to leave a
            <span style={{ color: "red" }}> mark</span> on this world
          </p>
        </Section>{" "}
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">Work Experience</h1>
          <p className="text-gray-500">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/17THjdyf1mFPVrOA-Gvw484CkZkFVkWau/view"
            >
              click HERE to view my resume!
            </a>
          </p>
          <p className="mt-3"></p>
          <p>
            Software Developer at Nyalazone Solutions Pvt Ltd <br></br>
            <span style={{ color: "gray", fontStyle: "italic" }}>
              May 2024 – Aug 2024
            </span>{" "}
            <br></br>
            <br></br>I develop and maintain full applications using Angular,
            contributing to both front-end and back-end development. I use
            Python to streamline data import and connection to our databases,
            and handle organizing and optimizing data to ensure accuracy and
            efficiency. My role involves designing and implementing features
            that enhance user experience and functionality.
          </p>
          {/* <ul className="leading-9">
            <li>Java</li>
            <li>C</li>
            <li>C++</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>ThreeJS</li>
          </ul> */}
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Contact Information
          </h1>
          <p className="text-gray-500">
            <a
              href="https://www.linkedin.com/in/sachin-kumar-7ab3b9216/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click HERE to connect with me on LinkedIn
            </a>
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📩 <a href="mailto:sachin43@my.yorku.ca">sachin43@my.yorku.ca</a>
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📞 <a href="">+1 (647)-870-2736</a>
          </p>
          <br></br>
          <p>
            As I reflect on my professional journey and the insights gained
            through various projects and experiences, I value open communication
            and critical dialogue. I believe that constructive feedback and
            thoughtful discussions are integral to personal and professional
            growth. Therefore, I am always eager to engage in conversations that
            challenge my perspectives and foster collaborative learning.
            <br></br>
            <br></br> I look forward to connecting and discussing any potential
            opportunities or collaborations!
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
