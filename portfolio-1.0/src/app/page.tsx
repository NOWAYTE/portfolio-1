"use client";

import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import BackgroundCircle from "./components/BackgroundCircle";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Link from 'next/link';
import { PageInfo, Project, Social, Skill } from "../../pages/api/typings";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchSkills } from "../../utils/fetchSkills";
import { fetchSocials } from "../../utils/fetchSocials";
import { fetchProjects } from "../../utils/fetchProject";

export default function Home() {
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);
  const [skills, setSkills] = useState<Skill[] | null>(null);
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [socials, setSocials] = useState<Social[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPageInfo = await fetchPageInfo();
        const fetchedSkills = await fetchSkills();
        const fetchedProjects = await fetchProjects();
        const fetchedSocials = await fetchSocials();

        setPageInfo(fetchedPageInfo);
        setSkills(fetchedSkills);
        setProjects(fetchedProjects);
        setSocials(fetchedSocials);
      } catch (err) {
        setError(err.message);
        console.error(err);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!pageInfo || !skills || !projects || !socials) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-center snap-mandatory overflow-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-1000 scrollbar-thumb-[#F7AB0A]/80">
      <header>
        <title>My Portfolio</title>
      </header>

      <BrowserRouter>
        <Header />
      </BrowserRouter>

      <section id="Hero" className="snap-center">
        <BrowserRouter>
          <Hero />
        </BrowserRouter>
      </section>

      <section id="About" className="snap-center">
        <About />
      </section>

      <section id="Skills" className="snap-start">
        <Skills />
      </section>

      <section id="Projects" className="snap-start">
        <Projects />
      </section>

      <section id="Contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#Hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="./media/spider-man.jpeg"
              alt="Back to top"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
