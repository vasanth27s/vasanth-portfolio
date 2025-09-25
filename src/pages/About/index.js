import React from "react";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import "./About.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine, MySkill, Education } from "../../components";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <motion.div
          className="mb-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <h3 className="text-neutral text-center">Something About Myself</h3>
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Me</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlHE9fMy14Sr-KkC1ZRxgTLx0XS8My6GW1LmV-NGuji-ylz69aIvlBUy86pgTcz7tcdpFs-HZp7ihilwEWilKN0YXdUxGIOEYYxtBTSMac4hHx6wzLIUco19y4ZZaiPyxnc6DUVEz7CTDrcKWBVwmy6ww54UzF6bn2CGlG1YDqZ8N1iI2ERVZ027j4V_U/s320/1002.JPG"
              alt="Vasanth Kumar"
              className="p-12 w-70 h-70 transform translate-y-[-12%]"
              title="Vasanth Kumar"
            />

          </motion.div>
          <motion.div
            className=""
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl font-semibold mb-4 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">Vasanth Kumar</h1>
            <div className="my-8">
              <TypeAnimation
                className="text-2xl text-primary font-bold text-center translate-y-[-500%] sm:translate-y-[-0%]  sm:text-2xl sm:mb-2 md:text-left"
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
            <p className="text-neutral font-medium text-center translate-y-[-100%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
            As a developer, I am committed to building high-quality web
          applications that meet the needs of my clients.
          create scalable and robust web applications.dedicated to crafting seamless and efficient web applications. With a strong grasp of both front-end and back-end technologies, I excel at creating user-friendly interfaces and robust server-side logic. Passionate about continuous learning, I believe in the transformative power of artificial intelligence in shaping our future. Let's collaborate to bring your innovative ideas to life!
          
           
            </p>
            <br />
            <p className="text-neutral font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              My passion for solving complex problems and creating innovative
              solutions drives me to stay up-to-date with the latest
              technologies and trends in the industry.
             
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left ">
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Name : </span>Vasanth Kumar
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Phone : </span>+91 7981967209
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Email : </span>
                vasanth2003s@gmail.com
              </h2>
              
              <a
                href="https://drive.google.com/file/d/1tnZ5_b2MOUaGsX4xWSGxQsH9EHa3kz_9/view?usp=sharing"
              >
                <div className="flex justify-center md:justify-start translate-y-[60%] sm:translate-y-[-0%]">
                  <button className="primary-button">
                    <span>My Resume</span>
                    <span>
                      <FaDownload />
                    </span>
                  </button>
                </div>

              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* My Skill */}
      <MySkill />

      {/* Education */}
      <Education />
    </div>
  );
};

export default About;
