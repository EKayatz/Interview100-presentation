import React from "react";
import { technologies } from "../constants/index";
import { SectionWrapper } from "../hoc";
import BallCanvas from "./canvas/Ball";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Tech = () => {
  console.log(technologies);
  return (
    <div>
      <motion.div variants={textVariant()}>
        <h2 className="sectionHeadText">Technologies we used:</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon.src} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
