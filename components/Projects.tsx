import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

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

  useEffect(() => {
    if (activeProject !== -1) {
      // tempRef.current = gsap.to(revealSectionRef.current, {
      //   pointerEvents: "all",
      // });

      tempRef.current = gsap.to(projectTitleRef.current, {
        x: contRef.current.clientWidth,
        duration: initial ? 0 : 1,
      });

      tempRef.current = gsap.to(projectBodyRef.current, {
        x: contRef.current.clientWidth,
        duration: initial ? 0 : 1,
      });

      tempRef.current = gsap.to(revealTitleRef.current, {
        y: 0,
        duration: initial ? 0 : 1,
      });
      tempRef.current = gsap.to(revealBodyRef.current, {
        y: 0,
        duration: initial ? 0 : 1,
      });
    } else {
      // tempRef.current = gsap.to(revealSectionRef.current, {
      //   pointerEvents: "none",
      // });

      tempRef.current = gsap.to(projectTitleRef.current, {
        x: 0,
        duration: initial ? 0 : 1,
      });
      tempRef.current = gsap.to(projectBodyRef.current, {
        x: 0,
        duration: initial ? 0 : 1,
      });
      tempRef.current = gsap.to(revealTitleRef.current, {
        y: contRef.current.clientHeight,
        duration: initial ? 0 : 1,
      });
      tempRef.current = gsap.to(revealBodyRef.current, {
        y: contRef.current.clientHeight,
        duration: initial ? 0 : 1,
      });
    }

    switch (activeProject) {
      case 0:
        setRevealTitleText("neurify");
        setRevealBodyText(
          "neurify is a digital marketing agency. Created using Worpress and Elementor."
        );
        setRevealLiveLink("https://www.neurify.co.uk/");
        break;
      case 1:
        setRevealTitleText("TapFlash");
        break;
      case 2:
        setRevealTitleText("Full Stack");
        break;
      case 3:
        setRevealTitleText("More");
        break;
      case -1:
        setRevealTitleText("");
        break;
    }

    initial = false;
  }, [activeProject]);

  return (
    <div className="PROJECTS SECTION">
      <div className="section-grid" ref={contRef}>
        <h1 className="title" ref={projectTitleRef}>
          Projects
        </h1>
        <div className="subtitle" ref={projectBodyRef}>
          <h1>Take a look at my work 👇</h1>
          <h1>⠀</h1>
        </div>
        <div className="project-list">
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
      <div
        className="grid-reveal section-grid"
        ref={revealSectionRef}
      >
        <h1 className="title" ref={revealTitleRef}>
          {revealTitleText}
        </h1>
        <div className="subtitle" ref={revealBodyRef}>
          <h1>{revealBodyText}</h1>
          <Link href={revealLiveLink}>
            <h1>
              <a>View Live</a>
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
