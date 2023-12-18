'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import IntroSection from '@/components/App/IntroSection';

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
      <Footer
        buttonEnterFunction={buttonEnter}
        buttonLeaveFunction={buttonLeave}
      />
    </div>
  );
}
