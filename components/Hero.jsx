import Image from "next/image";
import school from "../public/school.png";
import bayer from "../public/bayer.png";
import overview from "../public/overview.png";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto paddingX flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`heroHeadText text-white`}>Interview100</h1>
          <div className="flex gap-5">
            <Image
              src={bayer}
              alt="bayer logo"
              className="object-contain text-white-100 flex-col"
              width={40}
              height={40}
            />
            <p className={`heroSubText mt-2 text-white-100 flex-col`}>
              BayerCodingChallenge
            </p>
          </div>
          <div className="flex gap-5">
            <Image
              src={school}
              alt="42 logo"
              className="object-contain text-white-100 flex-col"
              width={40}
              height={40}
            />
            <p className={`heroSubText mt-2 text-white-100 flex-col`}>
              42 Berlin
            </p>
          </div>
        </div>
        <Tilt className="w-[400px] md:w-[600px] lg:w-[800px] m-auto absolute top-[20rem] right-10">
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="w-full p-[15px] rounded-[20px] shadow-card"
          >
            <Image src={overview} alt="overview" className="text-white-100" />
          </motion.div>
        </Tilt>
      </div>
    </section>
  );
};

export default Hero;
