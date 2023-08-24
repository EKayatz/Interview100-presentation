"use client";
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
