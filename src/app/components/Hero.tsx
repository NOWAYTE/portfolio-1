"use client";
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';
import Link from 'next/link';
import { PageInfo } from '../../../pages/api/typings';
import Model from './Model';

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, My name is ${pageInfo?.name}`,
      "<Are-you-my-monster/>",
      "<Is-this-the-face-of-my-only-friend/>"
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-8 text-center overflow-hidden">
      <BackgroundCircle />
      <img
        className="relative rounded-full h-24 w-24 sm:h-32 sm:w-32 mx-auto object-cover md:h-24 md:w-24 xl:h-28 xl:w-28"
        src={pageInfo.heroImageUrl}
        alt="profile picture"
      />
      <div className="z-10">
        <h2 className="text-xs sm:text-sm md:text-xs xl:text-xs uppercase text-gray-500 pb-2 sm:pb-4 tracking-[10px] sm:tracking-[15px] font-semibold">
          {pageInfo?.role}
        </h2>
        <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-3xl font-semibold px-5 sm:px-10">
          <span className="mr-1 sm:mr-3">{text}</span>
          <Cursor cursorColor="#EF9C66" />
        </h1>
        <div className="pt-3 sm:pt-5">
          <Link href="#About">
            <button className="heroButton text-[10px] sm:text-[12px] md:text-[10px] xl:text-[10px]">About</button>
          </Link>
          <Link href="#Skills">
            <button className="heroButton text-[10px] sm:text-[12px] md:text-[10px] xl:text-[10px]">Skills</button>
          </Link>
          <Link href="#Projects">
            <button className="heroButton text-[10px] sm:text-[12px] md:text-[10px] xl:text-[10px]">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
