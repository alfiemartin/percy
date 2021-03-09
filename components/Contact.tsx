import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="CONTACT SECTION">
      <div className="section-grid">
        <h1 className="title">Contact Me</h1>
        <div className="contact-section">
          <div className="contact-item">
            <Image
              src="/email.svg"
              alt="email icon"
              width={50}
              height={50}
              priority={true}
              quality={50}
            />
            <h1>alfie.martin@hotmail.co.uk</h1>
          </div>
          <div className="contact-item">
            <Image
              src="/phone-call.svg"
              alt="email icon"
              width={50}
              height={50}
              priority={true}
              quality={50}
            />
            <h1>+447528559068</h1>
          </div>
          <div className="contact-item">
            <Image
              src="/linkedin.svg"
              alt="email icon"
              width={50}
              height={50}
              priority={true}
              quality={50}
            />
            <a
              href="https://www.linkedin.com/in/alfie-martin99/"
              target="_blank"
            >
              <h1 style={{ cursor: "pointer" }}>LinkedIn</h1>
            </a>
          </div>
          <div className="contact-item">
            <Image
              src="/github.svg"
              alt="email icon"
              width={50}
              height={50}
              priority={true}
              quality={50}
            />
            <a href="https://github.com/alfiemartin/" target="_blank">
              <h1 style={{ cursor: "pointer" }}>github</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
