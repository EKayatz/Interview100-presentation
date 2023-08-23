"use client";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Task from "../components/Task";
import Work from "../components/Work";
import Tech from "../components/Tech";
import Project from "../components/Project";
import Contact from "../components/Contact";
import StarsCanvas from "../components/canvas/Stars";

export default function Home() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-cover bg-np-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Task />
        <Work />
        <Tech />
        <Project />
        <div className="relative z-0">
          {/* <Contact /> here is a error with threejs math */}
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}
