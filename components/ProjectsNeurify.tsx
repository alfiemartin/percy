import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

interface PropType {
  active: boolean;
}

const ProjectsNeurify = ({ active }: PropType) => {
  let extraRefs = useRef<Array<HTMLHeadingElement>>([null]);
  let contRef = useRef<HTMLDivElement>(null);
  let tempRef = useRef<GSAPTween>(null);
  let lineRef = useRef<HTMLDivElement>(null);
  let viewRef = useRef<HTMLHeadingElement>(null);
  let stackRef = useRef<HTMLDivElement>(null);
  let subtitleRef = useRef<HTMLDivElement>(null);

  let [viewText, setViewText] = useState("");

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

    setViewText(":");
  };

  const hideExtras = () => {
    extraRefs.current.forEach((ref, index) => {
      tempRef.current = gsap.to(ref, {
        color: "transparent",
        duration: 1 + index / 10,
      });
    });

    tempRef.current = gsap.to(lineRef.current, { width: "0%" });

    setViewText("");
  };

  const showStack = () => {
    tempRef.current = gsap.to(stackRef.current, {
      left: subtitleRef.current.offsetLeft,
      duration: 0,
    });

    tempRef.current = gsap.to(subtitleRef.current, { opacity: 0 });

    tempRef.current = gsap.to(stackRef.current, {
      opacity: 1,
    });
  };

  const hideStack = () => {
    tempRef.current = gsap.to(subtitleRef.current, { opacity: 1 });
    tempRef.current = gsap.to(stackRef.current, { opacity: 0 });
  };

  const extraLinkIntro = (index: number) => {
    tempRef.current = gsap.to(extraRefs.current[index], {
      color: "rgb(88, 28, 135)",
      duration: 0.5,
    });
  };
  const extraLinkOutro = (index: number) => {
    tempRef.current = gsap.to(extraRefs.current[index], {
      color: "#075985",
      duration: 0.5,
    });
  };

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
      className="content section-grid neurify"
      ref={contRef}
      style={{ opacity: 0 }}
    >
      <h1 className="title">neurify</h1>
      <img
        src="/neurifylogotrans.png"
        className="image"
        width={100}
        height={100}
      />
      <div className="stack" ref={stackRef}>
        <h1>Wordpress</h1>
        <h1>Elementor</h1>
        <h1>javascript</h1>
        <h1>jQuery</h1>
      </div>
      <div className="subtitle" ref={subtitleRef}>
        <h1>Integrating Technology With Marketing.</h1>
      </div>
      <div
        className="extra"
        onMouseEnter={() => showExtras()}
        onMouseLeave={() => hideExtras()}
      >
        <h1 ref={viewRef}>View{viewText}</h1>
        <div className="view-elements">
          <h1
            ref={(el) => (extraRefs.current[0] = el)}
            onMouseEnter={() => extraLinkIntro(0)}
            onMouseLeave={() => extraLinkOutro(0)}
          >
            live
          </h1>
          <h1
            ref={(el) => (extraRefs.current[1] = el)}
            onMouseEnter={() => {
              showStack();
              extraLinkIntro(1);
            }}
            onMouseLeave={() => {
              hideStack();
              extraLinkOutro(1);
            }}
          >
            stack
          </h1>
        </div>
        <div className="line" ref={lineRef}></div>
      </div>
    </div>
  );
};

export default ProjectsNeurify;
