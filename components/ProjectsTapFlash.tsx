import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectsTapFlash = () => {
  return (
    <div className="content section-grid">
      <h1 className="title">TapFlash</h1>
      <div className="subtitle">
        <h1>A simple game based on memory.</h1>
        <h1>Created using React and Firebase.</h1>
      </div>
      <div className="extra">
        <Link href={"https://www.neurify.co.uk"}>
          <h1>
            <a>Live Build</a>
          </h1>
        </Link>
        <Link href={"https://www.neurify.co.uk"}>
          <h1>
            <a>Code</a>
          </h1>
        </Link>
        <Link href={"https://www.neurify.co.uk"}>
          <h1>
            <a>Stack</a>
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsTapFlash;
