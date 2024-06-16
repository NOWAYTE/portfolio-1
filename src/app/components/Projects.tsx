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
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-base md:text-lg xl:text-base">
          Projects
        </h3>
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-1000 scrollbar-thumb-[#EF9C66]/20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-8 md:p-12 xl:p-16 h-screen"
            >
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-56 h-48 md:w-52 md:h-44 xl:w-60 xl:h-52"
                src={project?.heroImage}
                alt=""
              />

              <div className="space-y-3 px-0 md:px-5 xl:px-8 max-w-6xl">
                <h4 className="text-lg md:text-2xl xl:text-3xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    {project.title}
                  </span>
                </h4>
                <div className="flex items-center space-x-2 justify-center">
                  {project?.technologies.map((technology) => (
                    <img
                      key={technology.name}
                      className="h-6 w-6 md:h-5 md:w-5 xl:h-7 xl:w-7"
                      src={technology?.Image}
                      alt="icons"
                    />
                  ))}
                </div>
                <p className="text-xs md:text-sm xl:text-sm text-center md:text-left xl:w-[800px]">
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
