'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export default function Home() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10
    },
    text: {
      height: 200,
      width: 200,
      x: mousePosition.x - 100,
      y: mousePosition.y - 100,
      backgroundColor: 'white',
      mixBlendMode: 'difference'
    }
  };

  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');

  const projectRowClasses =
    'flex flex-col 2xl:flex-row 2xl:space-x-36 space-y-24 2xl:space-y-0';

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Navbar highlightedButton={'home'} onMouseEnterFunction={textEnter} />
      <motion.div
        className="cursor"
        /* 
        //@ts-ignore */
        variants={variants}
        /* 
        //@ts-ignore */
        animate={cursorVariant}
      />
      <div />
      <Modal isModalOpen={modalOpen} modalSetter={setModalOpen} />
      <div className="flex flex-col w-full items-center justify-between">
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1000px] md:space-x-4 mt-16 md:mt-24 lg:mt-12 lg:px-4">
          <div className="flex flex-col w-4/5 md:w-5/5 justify-center items-center">
            <div
              className="flex flex-col text-4xl font-light text-center items-center mb-2 bg-white border border-black rounded-xl py-12 px-16"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              Hey, I&apos;m Tuan, a full-stack developer. Currently obsessed
              with designing web apps, APIs, and occasionally green tea.
              <div
                className="flex bg-white text-black text-xl hover:border-white hover:bg-black hover:text-white hover:cursor-pointer border-b-3 border-r-2 h-12 w-fit rounded-full mt-6 px-4 border border-black border-b-2 items-center justify-center"
                onClick={() => setModalOpen(true)}
              >
                Let&apos;s talk!
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>Projects</div>
      </div>

      <div></div>
      <Footer />
    </div>
  );
}
