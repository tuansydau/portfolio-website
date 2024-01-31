'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';
import { motion } from 'framer-motion';
import { useState } from 'react';
import IntroSection from '@/components/App/IntroSection';
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
  var size = isHover ? 300 : 50;
  var color = 'white';
  var mixBlendMode = 'difference';

  const textEnter = () => setIsHover(true);
  const textLeave = () => setIsHover(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Navbar highlightedButton={'home'} />
      <div className="mt-8"></div>
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
        animate={{
          height: size,
          width: size
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      />
      <Modal isModalOpen={modalOpen} modalSetter={setModalOpen} />
      <IntroSection
        textEnterFunction={textEnter}
        textExitFunction={textLeave}
        modalFunction={setModalOpen}
      />
      <div className="mt-32"></div>
      <div className="flex flex-col w-full px-24 max-w-[2000px]">
        <div className="flex w-full space-x-4">
          <ProjectCard
            category="Project"
            title="OpenGL Shaders"
            description="A collection of OpenGL fragment shaders that I made while
                  learning graphics processing."
            imagePath="/Animation-3.gif"
            linkTo="/shaders"
          />
          <ProjectCard
            category="Internship"
            title="Big Whale Labs Website"
            description="A website redesign that I helped program while interning at Big Whale Labs."
            imagePath="/bwl_homepage.png"
            linkTo="/bwl-homepage"
            filter="grayscale(100%)"
          />
        </div>
        <br />
        <div className="flex w-full">
          <ProjectCard
            category="Project"
            title="3D Globe Visualizing Global Transactions"
            description="A remake of a previous hackathon submission completed with Float's team at Decode 2021. Inspired by the GitHub globe."
            imagePath="/three-globe.png"
            linkTo="https://github.com/trentstauff/decode-2021/tree/main/frontend"
            targetBlank
            filter="grayscale(100%)"
          />
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}
