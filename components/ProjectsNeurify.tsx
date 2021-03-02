import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectsNeurify = () => {
  return (
    <div className="content section-grid">
      <h1 className="title">neurify</h1>
      <Image
        src="/neurifylogotrans.png"
        width={250}
        height={250}
        className="logo"
      />
      <div className="subtitle">
        <h1>neurify is a digital marketing agency.</h1>
        <h1>Created using Wordpress and Elementor.</h1>
      </div>
      <div className="extra">
        <Link href={"https://www.neurify.co.uk"}>
          <h1>
            <a>Live Build</a>
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsNeurify;
