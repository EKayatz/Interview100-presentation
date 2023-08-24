"use client";
import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { work } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const WorkCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#655DBB",
        color: "#ECF2FF",
      }}
      contentArrowStyle={{ borderRight: "15px solid  bg-fourth" }}
      iconStyle={{ background: "#BFACE2" }}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-fourth text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Work = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className="sectionHeadText">How did we proceed:</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {work.map((experience, index) => (
            <WorkCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Work, "work");
