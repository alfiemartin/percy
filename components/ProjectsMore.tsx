import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ProjectsMore = () => {
  let extraRefs = useRef<Array<HTMLHeadingElement>>([null]);
  let contRef = useRef<HTMLDivElement>(null);
  let tempRef = useRef<GSAPTween>(null);
  let lineRef = useRef<HTMLDivElement>(null);
  let viewRef = useRef<HTMLHeadingElement>(null);
  let stackRef = useRef<HTMLDivElement>(null);

  const showExtras = () => {
    extraRefs.current.forEach((ref, index) => {
      tempRef.current = gsap.to(ref, {
        color: "#075985",
        duration: 1 + index / 10,
      });
    });

    tempRef.current = gsap.to(lineRef.current, {
      top: viewRef.current.offsetTop + viewRef.current.clientHeight,
      left: viewRef.current.offsetLeft,
      duration: 0,
    });

    tempRef.current = gsap.to(lineRef.current, { width: "90%" });
  };

  const hideExtras = () => {
    extraRefs.current.forEach((ref, index) => {
      tempRef.current = gsap.to(ref, {
        color: "transparent",
        duration: 1 + index / 10,
      });
    });

    tempRef.current = gsap.to(lineRef.current, { width: "0%" });
  };

  return (
    <div className="content section-grid more">
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
          <h1>RDM Technology</h1>
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
        <div className="more-projects-list">
          <h1>RDM Technology</h1>
          <div>
            <h1>Live</h1>
            <h1>Code</h1>
          </div>
        </div>
      </div>
      <div
        className="extra"
        ref={contRef}
        onMouseEnter={() => showExtras()}
        onMouseLeave={() => hideExtras()}
      >
        <div className="line" ref={lineRef}></div>
      </div>
    </div>
  );
};

export default ProjectsMore;
