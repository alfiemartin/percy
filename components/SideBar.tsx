import React from "react";
import { useEffect, useRef, useState } from "react";
// import sidebarStyles from "../styles/Sidebar.module.css";
import gsap from "gsap";

const animDuration = 0.7;

const SideBar = ({ setPressedSection }) => {
  let linkRefs = useRef([null]);
  let tempRef = useRef(null);

  const [hoveredLink, setHoveredlink] = useState(-1);
  const [pressedLink, setPressedLink] = useState(0);

  useEffect(() => {
    linkRefs.current.forEach((link) => {
      tempRef.current = gsap.to(link, {
        x: 0,
        duration: animDuration,
      });
    });

    if (hoveredLink === -1) return;

    tempRef.current = gsap.to(linkRefs.current[hoveredLink], {
      x: 10,
      duration: animDuration,
    });
  }, [hoveredLink]);

  useEffect(() => {
    linkRefs.current.forEach((link) => {
      tempRef.current = gsap.to(link, {
        textDecoration: "none",
        color: "#4b5563",
        duration: animDuration,
      });
    });

    if (pressedLink === -1) return;

    setPressedSection(pressedLink);

    tempRef.current = gsap.to(linkRefs.current[pressedLink], {
      textDecoration: "underline",
      color: "#581c87",
      duration: animDuration,
    });
  }, [pressedLink]);

  return (
    <div className="sidebar">
      <div className="linkWrapper">
        <h1
          className="link"
          onMouseOver={() => setHoveredlink(0)}
          onMouseDown={() => setPressedLink(0)}
          onMouseLeave={() => setHoveredlink(-1)}
          ref={(el) => (linkRefs.current[0] = el)}
        >
          Home
        </h1>
        <h1
          className="link"
          onMouseOver={() => setHoveredlink(1)}
          onMouseDown={() => setPressedLink(1)}
          onMouseLeave={() => setHoveredlink(-1)}
          ref={(el) => (linkRefs.current[1] = el)}
        >
          Projects
        </h1>
        <h1
          className="link"
          onMouseOver={() => setHoveredlink(2)}
          onMouseDown={() => setPressedLink(2)}
          onMouseLeave={() => setHoveredlink(-1)}
          ref={(el) => (linkRefs.current[2] = el)}
        >
          Contact
        </h1>
        <h1
          className="link"
          onMouseOver={() => setHoveredlink(3)}
          onMouseDown={() => setPressedLink(3)}
          onMouseLeave={() => setHoveredlink(-1)}
          ref={(el) => (linkRefs.current[3] = el)}
        >
          Résumé
        </h1>
      </div>
    </div>
  );
};

export default SideBar;
