import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '../../../pages/api/typings';

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <Link href="#Projects">
      <motion.div
        initial={{ x: 200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }} 
        className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 md:text-2xl">
          Projects
        </h3>
        <div
          className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-1000 scrollbar-thumb-[#EF9C66]/20"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-20 h-screen"
            >
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} // Ensure animation plays only once
                className="w-70 h-60"
                src={project?.heroImage}
                alt=""
              />

              <div className="space-y-5 px-0 md:px-10 max-w-6xl">
                <h4 className="md:text-4xl font-semibold text-center text-2xl">
                  <span className="underline decoration-[#F7AB0A]/50">
                    {project.title}
                  </span>
                </h4>
                <div className="flex items-center space-x-2 justify-center">
                  {project?.technologies.map((technology) => (
                    <img
                      key={technology.name}
                      className="h-10 w-10"
                      src={technology?.Image}
                      alt="icons"
                    />
                  ))}
                </div>
                <p className="text-sm md:text-lg text-center md:text-left">
                  {project.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full absolute top-[30%] bg-[#61553a] left-0 h-[500px] -skew-y-12"></div>
      </motion.div>
    </Link>
  );
}

export default Projects;
