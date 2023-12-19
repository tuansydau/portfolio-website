'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import IntroSection from '@/components/App/IntroSection';
// import Image from 'next/image';
import BoxIcon from '@/components/App/BoxIcon';

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
    button: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      backgroundColor: 'white',
      mixBlendMode: 'difference'
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
  const buttonEnter = () => setCursorVariant('button');
  const buttonLeave = () => setCursorVariant('default');

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Navbar
        highlightedButton={'home'}
        buttonEnterFunction={buttonEnter}
        buttonLeaveFunction={buttonLeave}
      />

      {/* Custom cursor element */}
      <motion.div
        className="cursor z-50"
        /* 
        //@ts-ignore */
        variants={variants}
        /* 
        //@ts-ignore */
        animate={cursorVariant}
      />
      <Modal isModalOpen={modalOpen} modalSetter={setModalOpen} />
      <IntroSection
        textEnterFunction={textEnter}
        textExitFunction={textLeave}
        modalFunction={setModalOpen}
      />

      {/*  Project Section 2 */}
      <div className="mt-80 w-full max-w-[1800px] max-h-[800px] h-screen px-8 mb-32">
        <div className="flex w-full h-full">
          <div className="w-96 h-full bg-black border border-black text-white">
            <div className="flex w-full justify-center">
              <div className="flex flex-col w-2/3 text-xl items-center text-center mt-8">
                <div className="mb-6">
                  <BoxIcon />
                </div>
                A collection of my coding projects that I&apos;ve curated for
                your viewing
              </div>
            </div>
          </div>
          <div className="w-full h-full bg-white border-t border-b border-r border-black p-16 text-4xl">
            yeah i have no projects
          </div>
        </div>
      </div>

      <Footer
        buttonEnterFunction={buttonEnter}
        buttonLeaveFunction={buttonLeave}
      />
    </div>
  );
}
