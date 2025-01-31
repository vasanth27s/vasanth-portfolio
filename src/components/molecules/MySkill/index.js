import React from "react";
import Lottie from "react-lottie";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiAmazonaws,
  SiPython,
  SiPhp,
  SiC,
  SiLinux,
  SiAdobexd,
  SiTypescript,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";
import man from "../../../assets/man.json";

// Defining the type for skill items
interface SkillItem {
  title: string;
  icon: JSX.Element;
}

const MySkill: React.FC = () => {
  const languages: SkillItem[] = [
    { title: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { title: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    {
      title: "JavaScript",
      icon: <SiJavascript className="text-yellow-500 rounded" />,
    },
    { title: "Python", icon: <SiPython className="text-blue-500" /> },
    { title: "PHP", icon: <SiPhp className="text-purple-500" /> },
    { title: "C", icon: <SiC className="text-blue-600" /> },
  ];

  const frameworks: SkillItem[] = [
    { title: "React", icon: <FaReact className="text-cyan-400" /> },
    { title: "Bootstrap", icon: <FaBootstrap className="text-indigo-600" /> },
    { title: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { title: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
    { title: "ExpressJS", icon: <SiExpress className="text-neutral" /> },
    { title: "TypeScript", icon: <SiTypescript className="text-neutral" /> },
  ];

  const tools: SkillItem[] = [
    { title: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { title: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { title: "AWS", icon: <SiAmazonaws className="text-orange-500" /> },
    { title: "GitHub", icon: <FaGithub className="text-black" /> },
    { title: "Linux", icon: <SiLinux className="text-yellow-500" /> },
    { title: "UI/UX Design", icon: <SiAdobexd className="text-pink-500" /> },
  ];

  const exposedTo: SkillItem[] = [
    { title: "SQL", icon: <DiMysql className="text-blue-700" /> },
    { title: "Python DSA", icon: <SiPython className="text-blue-500" /> },
    { title: "Power BI", icon: <SiAmazonaws className="text-yellow-600" /> },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: man,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="pt-24">
      <h1 className="text-4xl font-semibold drop-shadow-md text-center mb-8">
        My <span className="text-primary">Skills</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-evenly my-8">
        <div>
          <h2 className="text-cyan-500 text-xl font-semibold">Languages:</h2>
          <div className="flex flex-wrap mb-4">
            {languages.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill.icon}
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-cyan-500 text-xl font-semibold">
            Library & Frameworks:
          </h2>
          <div className="flex flex-wrap mb-4">
            {frameworks.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill.icon}
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-cyan-500 text-xl font-semibold">
            Tools & Technologies:
          </h2>
          <div className="flex flex-wrap mb-4">
            {tools.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill.icon}
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-cyan-500 text-xl font-semibold">Exposed To:</h2>
          <div className="flex flex-wrap mb-4">
            {exposedTo.map((skill) => (
              <div key={skill.title} className="text-center m-3">
                <div
                  className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626] mx-auto"
                  title={skill.title}
                >
                  {skill.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Lottie options={defaultOptions} height={400} width={360} />
        </div>
      </div>
    </div>
  );
};

export default MySkill;
