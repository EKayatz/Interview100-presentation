import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn } from "../utils/motion";
import linkedin from "@/public/linkedin.png";
import github from "@/public/github.png";
import EarthCanvas from "./canvas/Earth";
import Image from "next/image";
import Link from "next/link";

const ContactCard = ({ contact }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 1, 0.75)}
      className="mt-5 text-fourth p-5 rounded-xl bg-secondary w-3/4"
    >
      <div className="flex gap-[2rem]">
        <div className="my-auto">
          <Image
            src="https://avatars.githubusercontent.com/u/93713157?v=4"
            alt="profile picture"
            height={60}
            width={60}
            className="rounded-full object-contain"
          />
        </div>
        <div className="flex items-center justify-center">
          <h3 className="sectionSubText">Elias Kayatz</h3>
          <div className="flex gap-2 p-3">
            <Link href="https://github.com/EKayatz">
              <Image
                src={github}
                alt="github"
                height={40}
                width={40}
                className="rounded-full object-contain"
              />
            </Link>
            <Link href="https://github.com/EKayatz">
              <Image
                src={linkedin}
                alt="linkedin"
                height={50}
                width={45}
                className="rounded-full object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className="sectionSubText">Get in touch</p>
        <h3 className="sectionHeadText">Contact:</h3>
        <div>
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
