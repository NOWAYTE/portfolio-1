"use client"
import { BrowserRouter } from "react-router-dom";
import BackgroundCircle from "./components/BackgroundCircle";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-center snap-mandatory
    overflow-scroll z-0">
      <header>
        <title>My Portfolio</title>
      </header>

      {/*Header section*/}
      <Header />

      {/*Hero section*/}
      <section id="Hero" className="snap-center">
      <BrowserRouter>
      <Hero />
      </BrowserRouter>
      </section>

      {/*About section*/}
      <section id="About" className="snap-center">
      <About /> 
      </section>

      {/*Skills Section*/}
      <section id="Skills" className="snap-start">
        <Skills />
      </section>

      {/*Project section*/}
      <section id="Projects" className="snap-start">
        <Projects />
      </section>

    </div>
  );
}
