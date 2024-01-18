'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import IntroSection from '@/components/App/IntroSection';
import Link from 'next/link';
import Image from 'next/image';
import useMousePosition from '@/utils/useMousePosition';
import ProjectCard from '@/components/App/ProjectCard';

interface MousePosition {
  x: number;
  y: number;
}

export default function Home() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { x, y } = useMousePosition();
  const [isHover, setIsHover] = useState<boolean>(false);
  var size = isHover ? 250 : 10;
  var color = isHover ? 'white' : 'black';
  var mixBlendMode = isHover ? 'difference' : 'normal';

  const textEnter = () => setIsHover(true);
  const textLeave = () => setIsHover(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Navbar highlightedButton={'home'} />

      <div className="cursor-outline" data-cursor-outline></div>

      <motion.div
        className="cursor z-50"
        style={{
          x: x - size / 2,
          y: y - size / 2,
          backgroundColor: color,
          /* 
          // @ts-ignore */
          mixBlendMode: mixBlendMode
        }}
        /*
        // @ts-ignore */
        animate={{ height: size, width: size }}
      />
      <Modal isModalOpen={modalOpen} modalSetter={setModalOpen} />
      <IntroSection
        textEnterFunction={textEnter}
        textExitFunction={textLeave}
        modalFunction={setModalOpen}
      />

      {/* Project Section */}
      <div className="px-4">
        <div className="px-48 mt-16 mb-32 max-w-[1900px] rounded-md border-black">
          <div className="flex w-full h-[900px]">
            <div className="flex flex-col w-full h-full rounded-r-xl p-12 space-y-24">
              <div className="flex w-full h-1/2 space-x-12">
                <ProjectCard
                  title="01. OpenGL Shaders"
                  description="A collection of OpenGL fragment shaders that I made while
                  learning graphics processing."
                  imagePath="/starfield-static.png"
                  linkTo="/shaders"
                />
                {/* <ProjectCard
                  title="02. Tesla Firmware OTA Tools"
                  description="Tools that I created at Tesla to help
                  speed up firmware testing within the Infotainment QA team."
                  imagePath="/tesla.png"
                  linkTo="/tesla-tools"
                  noCover
                /> */}
                <ProjectCard
                  title="02. Tab2XML"
                  description="A Java application that turns plaintext guitar tablature
                  into a playable MusicXML file format."
                  imagePath="/tab2xml.png"
                  linkTo="https://github.com/jamesmqle/TablatureConverter"
                  targetBlank={true}
                />
              </div>
              <div className="flex w-full h-1/2 space-x-12">
                {/* <ProjectCard
                  title="04. Tab2XML"
                  description="A Java application that turns plaintext guitar tablature
                  into a playable MusicXML file format."
                  imagePath="/tab2xml.png"
                  linkTo="https://github.com/jamesmqle/TablatureConverter"
                  targetBlank={true}
                />
                <ProjectCard
                  title="05. Tab2XML"
                  description="A Java application that turns plaintext guitar tablature
                into a playable MusicXML file format."
                  imagePath="/tab2xml.png"
                  linkTo="https://github.com/jamesmqle/TablatureConverter"
                  targetBlank={true}
                /> */}
                {/* <div className="w-1/2 h-full">
                <div className="bg-black w-full h-3/4 rounded-xl mb-2" />
                <div className="border-b border-black mb-1">
                  OSRS Coaching Note Website
                </div>
                <div className="font-light">
                  A website that I made in order to store notes.
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
