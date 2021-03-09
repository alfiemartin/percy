import Link from "next/link";
import React from "react";

const Resume = () => {
  return (
    <div className="RESUME SECTION">
      <div className="section-grid">
        <h1 className="title">Résumé</h1>
        <div className="subtitle">
          <Link href="/Resume.pdf">
            <h1 style={{ cursor: "pointer" }}>View as pdf.</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resume;
