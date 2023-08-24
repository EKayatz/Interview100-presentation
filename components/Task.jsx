"use client";
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const TaskCard = ({ index, title }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 60,
            scale: 1,
            speed: 450,
          }}
          className="bg-secondary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <h3 className="text-fourth text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Task = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className="sectionHeadText">Our Task:</h2>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <TaskCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Task, "Task");
