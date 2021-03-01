import Head from "next/head";
import React, { useState } from "react";
import Particles from "react-particles-js";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import SideBar from "../components/SideBar";
import Welcome from "../components/Welcome";

const particleParams = {
  fpsLimit: 60,
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,

        parallax: { enable: true, force: 100, smooth: 10 },
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
    },
  },
  particles: {
    color: { value: "#581C87" },
    move: { speed: 2 },
    size: {
      value: 10,
      random: { enable: true, minimumValue: 3 },
    },
    links: { enable: false, color: "transparent" },
    number: { value: 100 },
    collisions: { enable: true },
  },
};

export default function Home() {
  const [pressedSection, setPressedSection] = useState<number>(0);

  return (
    <div>
      <Head>
        <title>Alfie Martin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="VIEWPORT">
        <SideBar setPressedSection={setPressedSection} />
        <div className="SECTION-WRAPPER">
          <Particles
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "0",
            }}
            params={particleParams as any}
          />
          {pressedSection === 0 && <Welcome />}
          {pressedSection === 1 && <Projects />}
          {pressedSection === 2 && <Contact />}
          {pressedSection === 3 && <Resume />}
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
