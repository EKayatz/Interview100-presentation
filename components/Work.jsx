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
import { useState } from "react";
import Model from "./Modal";

const WorkCard = ({ work }) => {
  const [isOpen, setIsOpen] = useState(false);
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
        <h3 className="text-white text-[24px] font-bold">{work.title}</h3>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {work.points.map((point, index) => (
          <li
            key={`work-point-${index}`}
            className="text-fourth text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
      {work.image ? (
        <button
          className="m-2 mt-4 p-3 px-5 rounded-3xl bg-primary hover:bg-tertiary"
          onClick={() => setIsOpen(true)}
        >
          View {work.tag}
        </button>
      ) : (
        ""
      )}
      <Model
        image={work.image}
        title={work.tag}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
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
          {work.map((work, index) => (
            <WorkCard key={`work-${index}`} work={work} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Work, "work");
