import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import ProjectsNormal from "./ProjectsNormal";
import ProjectsNeurify from "./ProjectsNeurify";
import ProjectsTapFlash from "./ProjectsTapFlash";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(-1);
  const [hoveredProject, setHoveredProject] = useState(-1);

  let navLinkRefs = useRef<Array<HTMLHeadingElement>>([null]);
  let contRef = useRef<HTMLDivElement>(null);
  let tempRef = useRef(null);

  const handleProjectClick = (index: number) => {
    if (index === activeProject) setActiveProject(-1);
    else setActiveProject(index);
  };

  useEffect(() => {
    if (hoveredProject === -1) return;

    navLinkRefs.current.forEach((ref) => {
      tempRef.current = gsap.to(ref, { color: "#dbeafe" });
    });

    tempRef.current = gsap.to(navLinkRefs.current[hoveredProject], {
      color: "#581c87",
    });
  }, [hoveredProject]);

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
              ref={(el) => (navLinkRefs.current[0] = el)}
            >
              neurify
            </h1>
          </div>
          <div>
            <h1
              onMouseEnter={() => setHoveredProject(1)}
              onMouseLeave={() => setHoveredProject(-1)}
              onMouseDown={() => handleProjectClick(1)}
              ref={(el) => (navLinkRefs.current[1] = el)}
            >
              Tap Flash
            </h1>
          </div>
          <div>
            <h1
              onMouseEnter={() => setHoveredProject(2)}
              onMouseLeave={() => setHoveredProject(-1)}
              onMouseDown={() => handleProjectClick(2)}
              ref={(el) => (navLinkRefs.current[2] = el)}
            >
              Full Stack
            </h1>
          </div>
          <div>
            <h1
              onMouseEnter={() => setHoveredProject(3)}
              onMouseLeave={() => setHoveredProject(-1)}
              onMouseDown={() => handleProjectClick(3)}
              ref={(el) => (navLinkRefs.current[3] = el)}
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
