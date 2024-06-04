"use client"
import { BrowserRouter } from "react-router-dom";
import BackgroundCircle from "./components/BackgroundCircle";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-center snap-mandatory
    overflow-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-1000 scrollbar-thumb-[#F7AB0A]/80">
      <header>
        <title>My Portfolio</title>
      </header>

      {/*Header section*/}
      <BrowserRouter>
      <Header />
      </BrowserRouter>
      

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

      {/*Contact seciton*/}
      <section id="Contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0
            cursor-pointer"
             src="./media/spider-man.jpeg" />
          </div>
        </footer>
      </Link>

    </div>
  );
}
