import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ProjectsNormal from "./ProjectsNormal";
import ProjectsNeurify from "./ProjectsNeurify";
import ProjectsTapFlash from "./ProjectsTapFlash";
import ProjectsMore from "./ProjectsMore";
import ProjectsFS from "./ProjectsFS";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(-1);
  const [hoveredProject, setHoveredProject] = useState(-1);
  const [delayed, setDelayed] = useState<number>(-1);

  let navLinkRefs = useRef<Array<HTMLHeadingElement>>([null]);
  let contRef = useRef<HTMLDivElement>(null);
  let tempRef = useRef(null);

  const handleProjectClick = (index: number) => {
    if (index === activeProject) setActiveProject(-1);
    else setActiveProject(index);
  };

  useEffect(() => {
    for (let i = 0; i < navLinkRefs.current.length; i++) {
      if (i === activeProject) continue;

      tempRef.current = gsap.to(navLinkRefs.current[i], {
        color: "#dbeafe",
      });
    }

    if (hoveredProject === -1) return;

    tempRef.current = gsap.to(navLinkRefs.current[hoveredProject], {
      color: "#581c87",
    });
  }, [hoveredProject]);

  useEffect(() => {
    navLinkRefs.current.forEach((ref) => {
      tempRef.current = gsap.to(ref, {
        color: "#dbeafe",
        textDecoration: "none",
        duration: 0.5,
      });
    });

    tempRef.current = gsap.to(navLinkRefs.current[activeProject], {
      color: "#581c87",
      textDecoration: "underline",
      duration: 0.5,
    });

    const timeout = setTimeout(() => {
      setDelayed(activeProject);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [activeProject]);

  return (
    <div className="PROJECTS SECTION">
      <div className="section-wrapper">
        <div className="fix" ref={contRef}>
          {delayed === -1 && (
            <ProjectsNormal
              active={activeProject === -1 ? true : false}
            />
          )}
          {delayed === 0 && (
            <ProjectsNeurify
              active={activeProject === 0 ? true : false}
            />
          )}
          {delayed === 1 && (
            <ProjectsTapFlash
              active={activeProject === 1 ? true : false}
            />
          )}
          {delayed === 2 && (
            <ProjectsFS active={activeProject === 2 ? true : false} />
          )}
          {delayed === 3 && (
            <ProjectsMore
              active={activeProject === 3 ? true : false}
            />
          )}
        </div>
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
