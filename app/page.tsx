'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import IntroSection from '@/components/App/IntroSection';
import BoxIcon from '@/components/App/BoxIcon';
import Link from 'next/link';
import Image from 'next/image';
import useMousePosition from '@/utils/useMousePosition';

interface MousePosition {
  x: number;
  y: number;
}

export default function Home() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { x, y } = useMousePosition();
  const [isHover, setIsHover] = useState<boolean>(false);
  var size = isHover ? 200 : 10;
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

      {/* Project Section 2 */}
      <div className="mt-80 w-full max-w-[1500px] h-[750px] bg-white mb-32 rounded">
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
          <div className="flex flex-col w-full h-full border-t border-b border-r border-black rounded-r-xl p-12 space-y-12">
            <div className="flex w-full h-1/2 space-x-12">
              <div className="w-1/2 h-full">
                <Link href="/shaders">
                  <div className="relative w-full h-3/4 rounded-xl mb-2">
                    <Image
                      className="rounded-xl"
                      src="/starfield-static.png"
                      alt=""
                      objectFit="cover"
                      fill
                    ></Image>
                  </div>
                  <div className="border-b border-black mb-1 font-medium">
                    OpenGL Shaders
                  </div>
                  <div className="font-light">
                    A collection of OpenGL fragment shaders that I made while
                    learning graphics processing.
                  </div>
                </Link>
              </div>
              {/* <div className="w-1/2 h-full">
                <Link href="/tesla-tools">
                  <div className="bg-black w-full h-3/4 rounded-xl mb-2" />
                  <div className="border-b border-black mb-1">
                    Tesla Firmware OTA Tools
                  </div>
                  <div className="font-light">
                    Tools that I created during my work term at Tesla to help
                    speed up firmware testing within the Infotainment QA team.
                  </div>
                </Link>
              </div> */}
            </div>
            <div className="flex w-full h-1/2 space-x-12">
              <div className="w-1/2 h-full">
                <Link
                  href="https://github.com/jamesmqle/TablatureConverter"
                  target="_blank"
                >
                  <div className="relative w-full h-3/4 rounded-xl mb-2">
                    <Image
                      className="rounded-xl"
                      src="/tab2xml.png"
                      alt=""
                      objectFit="cover"
                      fill
                    ></Image>
                  </div>
                  <div className="border-b border-black mb-1 font-medium">
                    Tab2XML
                  </div>
                  <div className="font-light">
                    A Java application that turns plaintext guitar tablature
                    into a playable MusicXML file format.
                  </div>
                </Link>
              </div>
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

      <Footer />
    </div>
  );
}
