import React, { useState } from "react";
import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";

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
          <div className="bg-white rounded-lg px-8 py-12 relative">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

const workExperiences = [
  {
    company: "Software QA Assistant at Ministry of Education, Ontario",
    duration: "Sep 2024 – Apr 2025",
    description:
      "Independently created and optimized QA automation scripts using Microfocus UFT and ALM for PARIS (Program Approval & Registration Information System), reducing test execution time by 30% and improving overall system efficiency and reliability.",
  },
  {
    company: "Software Developer at Nyalazone Solutions Pvt Ltd",
    duration: "May 2024 – Aug 2024",
    description:
      "I developed and maintained full applications using Angular, contributing to both front-end and back-end development. Utilised Python to streamline data import and connection to our databases, and handled organizing and optimizing data to ensure accuracy and efficiency. My role involved designing and implementing features that enhance user experience and functionality.",
  },
];

const transitionVariants = {
  initial: { x: 50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -50, opacity: 0 },
};

export default function WorkExperienceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const scroll = useScroll();

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % workExperiences.length);
  };

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="select-none w-screen">
        {/* Intro Section */}
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
            technological domains. I am driven by a desire to leave a
            <span style={{ color: "red" }}> mark</span> on this world.
          </p>
        </Section>

        {/* Work Experience Section */}
        <Section right opacity={opacitySecondSection}>
          <h1 className="select-none font-semibold font-serif text-2xl">
            Work Experience
          </h1>
          <p className="text-gray-500">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1CU4cCyK65OSIECf0bq2a7RxJIPm6SJED/view?usp=drive_link"
              rel="noopener noreferrer"
            >
              click HERE to view my resume!
            </a>
          </p>

          {/* Slideable Job Description */}
          <div className="select-none relative min-h-[200px] mt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={transitionVariants}
                transition={{ duration: 0.4 }}
                className="absolute w-full"
              >
                <p className="select-none text-sm">
                  <p className="font-semibold">
                    {workExperiences[currentIndex].company}
                  </p>
                  <span className="text-gray-500 italic text-xs">
                    {workExperiences[currentIndex].duration}
                  </span>
                  <br />
                  <br />
                  {workExperiences[currentIndex].description}
                </p>
                <div className="mt-4 text-right">
                  <button
                    onClick={handleNext}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {currentIndex === workExperiences.length - 1
                      ? "Back"
                      : "Next"}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer Button */}
          <div className="select-none mt-5">
            <button
              className="select-none bg-blue-500 text-white font-bold py-2 px-4 rounded"
              onClick={handleModalOpen}
            >
              Click here to view my Projects
            </button>
          </div>
        </Section>

        {/* Contact Section */}
        <Section opacity={opacityLastSection}>
          <h1 className="select-none font-semibold font-serif text-2xl">
            Contact Information
          </h1>
          <p className="select-none text-gray-500">
            <a
              href="https://www.linkedin.com/in/sachin-kumar-7ab3b9216/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click HERE to connect with me on LinkedIn
            </a>
          </p>
          <p className="select-none mt-6 p-3 bg-slate-200 rounded-lg">
            📩 <a href="mailto:sachin43@my.yorku.ca">sachin43@my.yorku.ca</a>
          </p>
          <p className="select-none mt-6 p-3 bg-slate-200 rounded-lg">
            📞 +1 (647)-870-2736
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

      {/* Modal */}
      {showModal && (
        <>
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75"></div>
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white m-20 p-10 rounded shadow-lg">
              <h2 className="text-xl font-bold mb-4">Projects</h2>
              <p>
                <strong>AutoScrape</strong>
                <br />• Java-based Selenium tool for automated web tasks.
                <br />• Integrated load time tracking for performance insights.
                <br />• Extracted webpage data for analysis.
                <br />
                <br />
                <strong>My World Canvas</strong>
                <br />• Designed a 3D portfolio website using Blender and
                Three.js.
                <br />• Built low-poly models for performance.
                <br />• Interactive 360° viewer with React Three Fiber.
                <br />
                <br />
                <strong>ClarisCare</strong>
                <br />• Fully responsive healthcare website.
                <br />• Dark mode, smooth nav, parallax effects.
                <br />• User guidance via CTA buttons.
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
}
