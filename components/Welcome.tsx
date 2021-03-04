import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const Welcome = () => {
  let imageRef = useRef(null);
  let tempRef = useRef(null);

  const mouseOverTitle = (e: any) => {
    tempRef.current = gsap.to(imageRef.current, {
      x: e.clientX - 500,
    });
  };

  const mouseEnter = () => {
    tempRef.current = gsap.to(imageRef.current, { opacity: 1, z: 0 });
  };

  const mouseLeave = () => {
    tempRef.current = gsap.to(imageRef.current, {
      opacity: 0,
      z: -300,
    });
  };

  return (
    <div className="WELCOME SECTION">
      <div className="section-grid">
        <h1
          className="title"
          onMouseMove={(e) => mouseOverTitle(e)}
          onMouseEnter={() => mouseEnter()}
          onMouseLeave={() => mouseLeave()}
        >
          Alfie Martin
        </h1>
        <div className="subtitle">
          <div className="top">
            <h1>Electronic</h1>
            <h1>&nbsp;Engineer.</h1>
          </div>
          <div className="bottom">
            <h1>Web</h1>
            <h1>&nbsp;Developer.</h1>
          </div>
          <div
            ref={imageRef}
            className="image"
            style={{
              opacity: 0,
              transform: "translate3d(0px, 0px, -300px)",
            }}
          >
            <Image
              src="/alfie-head1.JPG"
              alt="email icon"
              className="alfie-head"
              height={300}
              width={447}
              priority={true}
              quality={100}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
