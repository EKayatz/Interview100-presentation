import Contact from "@/components/Contact";
import {
  typescript,
  reactjs,
  tailwind,
  figma,
  nextjs,
  grafbase,
  headless,
  graphql,
  vercel,
  elias,
  yy,
  wireframe,
  userjourney,
  mockup,
  deployment,
} from "../public/index";
import { userAgent } from "next/server";

export const navLinks = [
  {
    id: "Task",
    title: "Task",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "//create a design mockup",
  },
  {
    title: "//deliver a working front-end application",
  },
  {
    title: "//deliver a working back-end application",
  },
  {
    title: "//deploy on the cloud and provide access to other participants",
  },
];

const technologies = [
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "Grafbase",
    icon: grafbase,
  },
  {
    name: "GrapQL",
    icon: graphql,
  },
  {
    name: "HeadlessUI",
    icon: headless,
  },
  {
    name: "vercel",
    icon: vercel,
  },
];

const work = [
  {
    title: "What we were looking for",
    image: "",
    points: [
      "A Website where we can prepare for coding interviews",
      "Prepare for companies needs",
      "Share experience on one location and exchange with other people",
    ],
  },
  {
    title: "Think about a user journey",
    image: userjourney,
    tag: "User Journey",
    points: [
      "How should a user navigate through the website",
      "How should a user interact with the website",
      "How should a user use the website",
    ],
  },
  {
    title: "Create a Wireframe",
    image: wireframe,
    tag: "Wireframe",
    points: [
      "Think about the structure of the website",
      "Develop a rough design for the website",
    ],
  },
  {
    title: "Create a Mockup",
    image: mockup,
    tag: "Mockup",
    points: [
      "Think about the color scheme",
      "Think about the font",
      "Create the design and details for the website",
    ],
  },
  {
    title: "Develop a Frontend",
    points: [
      "Create a new Project with NextJS",
      "Develop the structure of the website using reusable components and style it with TailwindCSS",
      "Develop dropdowns, buttons, inputs, etc. with the help of headlessUI",
    ],
  },
  {
    title: "Develop a Backend",
    points: [
      "Implement Login with GoogleOAuth and get session with NextAuth.js and JWT",
      "Create the Grafbase and GraphQL Schema",
      "Develop action functions for the GraphQL Schema, for querying, creating, updating and deleting data",
    ],
  },
  {
    title: "Deployment",
    image: deployment,
    tag: "Deployment",
    points: [
      "Deploy the Website on Vercel",
      "Add environment variables",
      "Change GoogleOAuth credentials",
    ],
  },
];

const contact = [
  {
    name: "Elias Kayatz",
    github: "https://github.com/EKayatz",
    linkedin: "https://www.linkedin.com/in/elias-kayatz-686629240/",
    image: elias,
  },
  {
    name: "Anton Isakov",
    github: "https://github.com/electroautomatic",
    linkedin: "https://www.linkedin.com/in/anton-isakov/",
    image: "https://avatars.githubusercontent.com/u/88892900?v=4",
  },
  {
    name: "Irene Rivero Casal",
    github: "https://github.com/irrivero",
    linkedin: "https://www.linkedin.com/in/irriverocas/",
    image: "https://avatars.githubusercontent.com/u/116060502?v=4",
  },
  {
    name: "Yuanying Li",
    github: "https://github.com/YYBer",
    linkedin: "https://www.linkedin.com/in/yuanying-l-8bb20b121/",
    image: yy,
  },
];

export { services, technologies, work, contact };
