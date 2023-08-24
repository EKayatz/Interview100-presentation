"use client";
import React from "react";
import { SectionWrapper } from "@/hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";

const Learnings = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <h2 className="sectionHeadText mb-10">Learnings:</h2>
      </motion.div>
      <div className="flex flex-wrap gap-10">
        <motion.div
          variants={fadeIn("right", "spring", 1, 0.75)}
          className="mt-5 text-fourth shadow-card p-10 rounded-xl bg-secondary"
        >
          <h3 className="sectionSubText">What we learned:</h3>
          <ul className="text-[14px] pl-1 tracking-wider mt-5 list-disc ml-5 space-y-2">
            <li>Teamwork</li>
            <li>Time management</li>
            <li>Communication in a group</li>
          </ul>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "spring", 1.5, 0.75)}
          className="mt-5 text-fourth shadow-card p-10 rounded-xl bg-secondary max:h-1/2"
        >
          <h3 className="sectionSubText">Problems that we faced:</h3>
          <ul className="text-[14px] pl-1 tracking-wider mt-5 list-disc ml-5 space-y-2">
            <li>Division of labour</li>
            <li>Decide on an idea</li>
            <li>Fix bugs</li>
          </ul>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "spring", 2, 0.75)}
          className="mt-5 text-fourth shadow-card p-10 rounded-xl bg-secondary"
        >
          <h3 className="sectionSubText">Future Implementation:</h3>
          <ul className="text-[14px] pl-1 tracking-wider mt-5 list-disc ml-5 space-y-2">
            <li>Chat between users</li>
            <li>Partial search</li>
            <li>Save and Like functionality</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Learnings, "");
