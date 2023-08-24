"use client";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import github from "@/public/github.png";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";
import overview from "@/public/overview.png";
import { textVariant } from "../utils/motion";

const Project = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <h2 className="sectionHeadText">Our Project:</h2>
      </motion.div>
      <motion.div variants={fadeIn("up", "spring", 1, 0.75)} className="mt-20">
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-primary p-5 rounded-2xl w-[70%] shadow-card"
        >
          <Link
            href="https://bayer-coding-challenge.vercel.app/"
            className="cursor-pointer w-full h-[230px]"
          >
            <Image
              src={overview}
              alt="Project"
              className="w-full object-contain"
            />
          </Link>
          <div className="inset-0 flex justify-between mt-5">
            <Link
              href="https://bayer-coding-challenge.vercel.app/"
              className="cursor-pointer"
            >
              <h3 className="text-fourth font-bold text-[24px]">
                Interview100
              </h3>
            </Link>
            <Link
              href="https://github.com/EKayatz/Intrerview100"
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </Link>
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Project, "project");
