import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { RiFolderInfoFill } from "react-icons/ri";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import coding from "../../../assets/coding.json";
import "../../../pages/shared/Shared.css";
import { SecondaryBtn } from "../../../components";

const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-neutral text-xl font-medium translate-y-[-90%] sm:translate-y-[-0%]">Hello, I'm</h2>
        <h1 className="text-4xl font-semibold mb-0 translate-y-[-50%] sm:translate-y-[-0%]">Vasanth Kumar</h1>
        <div className="my-4">
          <TypeAnimation
            className="text-2xl text-primary font-bold translate-y-[-80%] sm:translate-y-[-0%]"
            cursor={true}
            sequence={[
             "A Software Developer",
                  2000,
                
                  "A Full-stack Developer",
                  2000,
                  "A Mern-stack Developer",
                  2000
            ]}
            wrapper="div"
            repeat={Infinity}
          />
        </div>
        <p className="text-neutral max-w-xl mb-6 font-medium translate-y-[-20%] sm:translate-y-[-0%]">
        As a developer, I am committed to building high-quality web
          applications that meet the needs of my clients.
          create scalable and robust web applications.dedicated to crafting seamless and efficient web applications. With a strong grasp of both front-end and back-end technologies, I excel at creating user-friendly interfaces and robust server-side logic. Passionate about continuous learning, I believe in the transformative power of artificial intelligence in shaping our future. Let's collaborate to bring your innovative ideas to life!
          
        </p>

        <div className="flex items-center translate-y-[-60%] sm:translate-y-[-0%]">
          <a
            href="https://drive.google.com/file/d/1SfjNHQQxCBfx3AK2EyJUzgX-ejOD0-Fy/view?usp=sharing"
          >
            <button className="primary-button">
              <span>My Resume</span>
              <span>
                <FaDownload />
              </span>
            </button>
          </a>
          <Link to="/about" className="ml-4">
            <SecondaryBtn>
              <span>About Me</span>
              <span>
                <RiFolderInfoFill />
              </span>
            </SecondaryBtn>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <Lottie options={defaultOptions} height="90%" width="90%" />
      </motion.div>
    </div>
  );
};

export default Banner;
