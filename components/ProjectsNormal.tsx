import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface PropType {
  active: boolean;
}

const ProjectsNormal = ({ active }: PropType) => {
  let contRef = useRef<HTMLDivElement>(null);
  let tempRef = useRef<GSAPTween>(null);

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
      className="content section-grid normal"
      ref={contRef}
      style={{ opacity: 0 }}
    >
      <h1 className="title">Projects</h1>
      <div className="subtitle">
        <h1>Take a look at my work 👇</h1>
      </div>
    </div>
  );
};

export default ProjectsNormal;
