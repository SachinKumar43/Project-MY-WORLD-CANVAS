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
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
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
        </Section>{" "}
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Here are my skillsets 🔥
          </h1>
          <p className="text-gray-500">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/17THjdyf1mFPVrOA-Gvw484CkZkFVkWau/view"
            >
              click HERE to view my resume!
            </a>
          </p>
          <p className="mt-3"></p>
          <ul className="leading-9">
            <li>Java</li>
            <li>C</li>
            <li>C++</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>ThreeJS</li>
          </ul>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
            My Contact Info?
          </h1>
          <p className="text-gray-500">I monitor my emails very often</p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📩 <a href="mailto:sachin43@my.yorku.ca">sachin43@my.yorku.ca</a>
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📞 <a href="">+1 (647)-870-2736</a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
