import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date();

  return (
    <>
      <footer
        className="w-full text-center p-6 bg-accent"
        style={{ backgroundColor: "#313131" }}
      >
        <div className="flex items-center justify-center mb-6">
          <a
            className="inline-block mx-2"
            href="https://x.com/Vasanth39786970"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl text-blue-600" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://www.linkedin.com/in/salapakshi-vasanth-kumar-2363b5246/"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-blue-400" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://github.com/vasanth27s"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-black" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://www.instagram.com/vasanth_kumar.27?igsh=MXB0aTdwYzZheGk1dg=="
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl text-pink-500" />
          </a>
        </div>
        <div className="hidden  md:flex items-center justify-center mb-6 flex-wrap">
          
          
          
          
        
         
         
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://drive.google.com/file/d/1SfjNHQQxCBfx3AK2EyJUzgX-ejOD0-Fy/view?usp=sharing"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <p>&copy; Copyright All Rights Reserved 2023</p>
          <p>
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/salapakshi-vasanth-kumar-2363b5246/"
              className="text-primary hover:underline"
            >
              Vasanth Kumar
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
