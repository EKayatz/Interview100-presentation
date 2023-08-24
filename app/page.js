"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic"; // Import dynamic from Next.js

// Wrap the BrowserRouter import in a dynamic import
const BrowserRouter = dynamic(
  () => import("react-router-dom").then((module) => module.BrowserRouter),
  {
    ssr: false, // This ensures BrowserRouter is only loaded on the client-side
  }
);

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Task from "@/components/Task";
import Work from "@/components/Work";
import Tech from "@/components/Tech";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import StarsCanvas from "@/components/canvas/Stars";
import Learnings from "@/components/Learnings";

export default function Home() {
  useEffect(() => {
    // This code will run on the client-side after component mounts
    if (typeof document !== "undefined") {
      // Your client-side code here
    }
  }, []);

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-cover bg-np-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <Task />
      <Work />
      <Tech />
      <Project />
      <Learnings />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
