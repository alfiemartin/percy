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
          <h1>Electronic Engineer.</h1>
          <h1>Web Developer.</h1>
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
            height={600}
            width={500}
            priority={true}
            quality={100}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
