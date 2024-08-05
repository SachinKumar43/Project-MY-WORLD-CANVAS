import React, { useState } from "react";
import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/3 flex items-center justify-center">
        <div className="max-w-lg w-full">
          <div className="bg-white rounded-lg px-8 py-12">{props.children}</div>
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
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
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
          <br />
          <p>
            As a committed and passionate computer science student, I possess a
            robust understanding of programming, software development, and
            digital artistry. My journey has equipped me with a diverse set of
            skills and experiences, allowing me to excel in various
            technological domains.I am driven by a desire to leave a
            <span style={{ color: "red" }}> mark</span> on this world
          </p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">Work Experience</h1>
          <p className="text-gray-500">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/17THjdyf1mFPVrOA-Gvw484CkZkFVkWau/view"
              rel="noopener noreferrer"
            >
              click HERE to view my resume!
            </a>
          </p>
          <p className="mt-3"></p>
          <p>
            Software Developer at Nyalazone Solutions Pvt Ltd <br />
            <span style={{ color: "gray", fontStyle: "italic" }}>
              May 2024 – Aug 2024
            </span>
            <br />
            <br />I develop and maintain full applications using Angular,
            contributing to both front-end and back-end development. I use
            Python to streamline data import and connection to our databases,
            and handle organizing and optimizing data to ensure accuracy and
            efficiency. My role involves designing and implementing features
            that enhance user experience and functionality.
          </p>
          <div className="mt-5">
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={handleModalOpen}
            >
              Click here to view my Projects
            </button>
          </div>
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
          <br />
          <p>
            As I reflect on my professional journey and the insights gained
            through various projects and experiences, I value open communication
            and critical dialogue. I believe that constructive feedback and
            thoughtful discussions are integral to personal and professional
            growth. Therefore, I am always eager to engage in conversations that
            challenge my perspectives and foster collaborative learning.
            <br />
            <br /> I look forward to connecting and discussing any potential
            opportunities or collaborations!
          </p>
        </Section>
      </div>
      {showModal && (
        <>
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75"></div>
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white m-20 p-10 rounded shadow-lg">
              <h2 className="text-xl font-bold mb-4">Projects</h2>
              <p>
                AutoScrape<br></br> • Created a Java-based Selenium tool for
                automated web application tasks, including login, navigation,
                and user-defined actions with a success rate of over 95%.
                <br></br> • Integrated load time tracking for real-time
                performance insights, enhancing user experience and optimization
                efforts.<br></br> • Developed functionality to extract and
                process webpage element information, facilitating data-driven
                decisions.<br></br>
                <br></br> My World Canvas<br></br>• Designed a 3-D portfolio
                website with custom assets using Blender showcasing my creative
                graphic design skills.<br></br> • Focused on performance
                optimization by creating low-poly models and optimized textures,
                enhancing loading times while maintaining visual appeal.
                Utilized the ThreeJS library to incorporate 3D graphics
                seamlessly into the web project..<br></br> • Implemented an
                immersive 360-degree rotate feature using React Three Fiber,
                allowing users to interactively explore 3D models from all
                angles with smooth and fluid motion.<br></br> <br></br>
                ClarisCare<br></br> • Developed a user-centric, fully responsive
                HealthCare website with strategically placed Call-to-Action
                buttons using Javascript, guiding users through various sections
                of the website.<br></br> • Enhanced user experience by
                implementing eye-catching styling designs with CSS, including
                Dark-mode, navigation bar improvements, and parallax scroll for
                a unique and immersive interface.
              </p>
              <button
                className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded"
                onClick={handleModalClose}
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </Scroll>
  );
};
