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
} from "../public/index";

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
    // icon: starbucks,
    points: [
      "A Website where we can prepare for coding interviews",
      "Prepare for companies needs",
      "Share experience on one location and exchange with other people",
    ],
  },
  {
    title: "Create a Wireframe",
    //icon: tesla,
    image: "",
    points: [
      "Think about the structure of the website",
      "Develop a rough design for the website",
    ],
  },
  {
    title: "Think about a user journey",
    // icon: shopify,
    points: [
      "How should a user navigate through the website",
      "How should a user interact with the website",
      "How should a user use the website",
    ],
  },
  {
    title: "Create a Mockup",
    //icon: meta,
    points: [
      "Think about the color scheme",
      "Think about the font",
      "Create the design and details for the website",
    ],
  },
  {
    title: "Develop a Frontend",
    //icon: meta,
    points: [
      "Create a new Project with NextJS",
      "Develop the structure of the website using reusable components and style it with TailwindCSS",
      "Develop dropdowns, buttons, inputs, etc. with the help of headlessUI",
    ],
  },
  {
    title: "Develop a Backend",
    //icon: meta,
    points: [
      "Implement Login with GoogleOAuth and get session with NextAuth.js and JWT",
      "Create the Grafbase Schema",
      "Create the GraphQL Schema",
      "Develop action functions for the GraphQL Schema, for querying, creating, updating and deleting data",
    ],
  },
  {
    title: "Deployment",
    //icon: meta,
    points: [
      "Deploy the Website on Vercel",
      "Add environment variables",
      "Change GoogleOAuth credentials",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    //image: carrent,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, work, projects };
