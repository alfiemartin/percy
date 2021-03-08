import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Particles from "react-particles-js";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import SideBar from "../components/SideBar";
import Welcome from "../components/Welcome";
import gsap from "gsap";

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

let initial = true;
export default function Home() {
  const [pressedSection, setPressedSection] = useState<number>(0);
  const [delayed, setDelayed] = useState<number>(0);

  let contRef = useRef<HTMLDivElement>(null);
  let tempRef = useRef<GSAPTween>(null);

  useEffect(() => {
    if (!initial) {
      tempRef.current = gsap.to(contRef.current, {
        opacity: 0,
        duration: 0.5,
      });
    }

    const timeout = setTimeout(() => {
      tempRef.current = gsap.to(contRef.current, {
        opacity: 1,
        duration: 0.5,
      });
      setDelayed(pressedSection);
    }, 500);

    initial = false;
    return () => clearTimeout(timeout);
  }, [pressedSection]);

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
            style={{ width: "100%", height: "100%" }}
            params={particleParams as any}
          />
          <div
            ref={contRef}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
            }}
          >
            {delayed === 0 && <Welcome />}
            {delayed === 1 && <Projects />}
            {delayed === 2 && <Contact />}
            {delayed === 3 && <Resume />}
          </div>
        </div>
        <div className="mobile-banner">
          <h1>Mobile Site Coming Soon!</h1>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
