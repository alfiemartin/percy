import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import ProjectsNormal from "./ProjectsNormal";
import ProjectsNeurify from "./ProjectsNeurify";
import ProjectsTapFlash from "./ProjectsTapFlash";

let initial = true;
const Projects = () => {
  const [activeProject, setActiveProject] = useState(-1);
  const [hoveredProject, setHoveredProject] = useState(-1);
  const [revealTitleText, setRevealTitleText] = useState("");
  const [revealBodyText, setRevealBodyText] = useState("");
  const [revealLiveLink, setRevealLiveLink] = useState("");

  let projectTitleRef = useRef<HTMLHeadingElement>(null);
  let projectBodyRef = useRef<HTMLDivElement>(null);
  let revealTitleRef = useRef<HTMLHeadingElement>(null);
  let revealBodyRef = useRef<HTMLDivElement>(null);
  let revealSectionRef = useRef<HTMLDivElement>(null);
  let contRef = useRef<HTMLDivElement>(null);
  let tempRef = useRef(null);

  const handleProjectClick = (index: number) => {
    if (index === activeProject) setActiveProject(-1);
    else setActiveProject(index);
  };

  return (
    <div className="PROJECTS SECTION">
      <div className="section-wrapper" ref={contRef}>
        {/* <ProjectsNormal /> */}
        {/* <ProjectsNeurify /> */}
        <ProjectsTapFlash />
        <div className="navigation">
          <div>
            <h1
              onMouseEnter={() => setHoveredProject(0)}
              onMouseLeave={() => setHoveredProject(-1)}
              onMouseDown={() => handleProjectClick(0)}
            >
              neurify
            </h1>
          </div>
          <div>
            <h1
              onMouseEnter={() => setHoveredProject(1)}
              onMouseLeave={() => setHoveredProject(-1)}
              onMouseDown={() => handleProjectClick(1)}
            >
              Tap Flash
            </h1>
          </div>
          <div>
            <h1
              onMouseEnter={() => setHoveredProject(2)}
              onMouseLeave={() => setHoveredProject(-1)}
              onMouseDown={() => handleProjectClick(2)}
            >
              Full Stack
            </h1>
          </div>
          <div>
            <h1
              onMouseEnter={() => setHoveredProject(3)}
              onMouseLeave={() => setHoveredProject(-1)}
              onMouseDown={() => handleProjectClick(3)}
            >
              More
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
