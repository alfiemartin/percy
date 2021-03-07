import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PropType {
  active: boolean;
}

const ProjectsMore = ({ active }: PropType) => {
  let contRef = useRef<HTMLDivElement>(null);
  let tempRef = useRef<GSAPTween>(null);
  let stackRef = useRef<HTMLDivElement>(null);

  //leave animation
  useEffect(() => {
    if (active) return;

    tempRef.current = gsap.to(contRef.current, {
      opacity: 0,
      duration: 1,
    });
  }, [active]);

  //appearance animation
  useEffect(() => {
    tempRef.current = gsap.to(contRef.current, {
      opacity: 1,
      duration: 1,
    });
  }, []);

  return (
    <div
      className="content section-grid more"
      ref={contRef}
      style={{ opacity: 0 }}
    >
      <h1 className="title">More</h1>
      <div className="stack" ref={stackRef}>
        <div className="more-projects-list">
          <h1>RDM Technology</h1>
          <div>
            <h1>Live</h1>
            <h1>Code</h1>
          </div>
        </div>
        <div className="more-projects-list">
          <h1>nice and chill</h1>
          <div>
            <h1>Live</h1>
            <h1>Code</h1>
          </div>
        </div>
        <div className="more-projects-list">
          <h1>Alba mind</h1>
          <div>
            <h1>Live</h1>
            <h1>Code</h1>
          </div>
        </div>
        <div className="more-projects-list">
          <h1>RDM Technology</h1>
          <div>
            <h1>Live</h1>
            <h1>Code</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsMore;
