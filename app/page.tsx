'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import IntroSection from '@/components/App/IntroSection';
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

      {/* Project Section 2 */}
      <div className="mt-80 w-full max-w-[1500px] max-h-[900px] bg-white h-screen mb-32 rounded">
        <div className="flex w-full h-full">
          <div className="w-96 h-full bg-white border border-black rounded-l-xl">
            <div className="flex w-full justify-center">
              <div className="flex flex-col w-full text-2xl items-center text-center mt-8 px-8">
                <div className="mb-6">
                  <BoxIcon />
                </div>
                A collection of my coding projects that I&apos;ve curated for
                your viewing
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-full border-t border-b border-r border-black rounded-r-xl p-8 space-y-8">
            <div className="flex w-full h-1/2 space-x-8">
              <div className="w-1/2 h-full">
                <div className="bg-black w-full h-3/4 rounded-xl mb-2" />
                <div className="border-b border-black mb-1">Title</div>
                <div className="font-light">
                  Description oh man is this the project template that I want? i
                  really cant tell but time is running low
                </div>
              </div>
              <div className="w-1/2 h-full">
                <div className="bg-black w-full h-3/4 rounded-xl mb-2" />
                <div className="border-b border-black mb-1">Title</div>
                <div className="font-light">
                  Description oh man is this the project template that I want? i
                  really cant tell but time is running low
                </div>
              </div>
            </div>
            <div className="flex w-full h-1/2 space-x-8">
              <div className="w-1/2 h-full">
                <div className="bg-black w-full h-3/4 rounded-xl mb-2" />
                <div className="border-b border-black mb-1">Title</div>
                <div className="font-light">
                  Description oh man is this the project template that I want? i
                  really cant tell but time is running low
                </div>
              </div>
              <div className="w-1/2 h-full">
                <div className="bg-black w-full h-3/4 rounded-xl mb-2" />
                <div className="border-b border-black mb-1">Title</div>
                <div className="font-light">
                  Description oh man is this the project template that I want? i
                  really cant tell but time is running low
                </div>
              </div>
            </div>
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
