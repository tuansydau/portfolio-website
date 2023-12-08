'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Modal from '@/components/Modal';
import { useState } from 'react';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const projectRowClasses =
    'flex flex-col 2xl:flex-row 2xl:space-x-36 space-y-24 2xl:space-y-0';

  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar highlightedButton={'home'} />

      <Modal isModalOpen={modalOpen} modalSetter={setModalOpen} />
      {/* intro section */}
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col lg:flex-row items-center justify-center w-3/5 md:space-x-4 mt-16 md:mt-24 lg:mt-12">
          <div className="flex text-4xl w-full justify-center">
            <Image src={'/teabath.png'} alt="" width={400} height={400}></Image>
          </div>
          <div className="flex flex-col space-y-6 justify-center items-center lg:items-start mt-8 mb-32 lg:mt-64 lg:mb-64">
            <div className="flex flex-row text-4xl">
              Hey, I&apos;m Tuan, a new-grad full-stack developer obsessed with
              designing web apps and APIs, and occasionally tea.
            </div>
            <div
              className="flex text-black hover:border-white hover:bg-black hover:text-white hover:cursor-pointer border-b-2 h-12 w-fit rounded-xl mt-4 px-4 border border-black border-b2 items-center justify-center"
              onClick={() => setModalOpen(true)}
            >
              Let&apos;s talk!
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="flex flex-col w-full justify-center items-center space-y-16 mb-32">
          <div className={projectRowClasses}>
            <div className="w-[32rem] h-full">
              <div className="w-full h-72 mb-4 relative">
                <Image src={'/tesla_summary.png'} alt="" layout="fill"></Image>
              </div>
              <div className="text-3xl w-full border-b border-black mb-4">
                Tesla Vehicle Firmware Tools
              </div>
              <div className="font-light">
                Designed and implemented a set of automation tools, bots, and
                data dashboards to accelerate Tesla&apos;s infotainment system
                testing.
              </div>
            </div>
            <div className="w-[32rem] h-full">
              <div className="w-full h-72 mb-4 relative">
                <Image src="/bwl_homepage.png" alt="" layout="fill"></Image>
              </div>
              <div className="text-3xl w-full border-b border-black mb-4">
                Big Whale Labs Homepage
              </div>
              <div className="font-light">
                Implemented website designs for Big Whale Labs and their
                products in React, TailwindCSS, koa, and valtio.
              </div>
            </div>
          </div>
          <div className={projectRowClasses}>
            <a href="https://github.com/tuansydau/shader-work" target="_blank">
              <div className="w-[32rem] h-full">
                <div className="w-full h-72 mb-4 relative">
                  <Image src={'/Animation.gif'} alt="" layout="fill" />
                </div>
                <div className="text-3xl w-full border-b border-black mb-4">
                  Shaders
                </div>
                <div className="font-light">
                  Programmed a set of realtime OpenGL fragment shaders to create
                  high definition visuals, written in GLSL.
                </div>
              </div>
            </a>
            <a href="https://github.com/tuansydau/TAB2XML" target="_blank">
              <div className="w-[32rem] h-full">
                <div className="w-full h-72 mb-4 relative">
                  <Image src={'/tab2xml.png'} alt="" layout="fill" />
                </div>
                <div className="text-3xl w-full border-b border-black mb-4">
                  Tab2XML
                </div>
                <div className="font-light">
                  Created a program to convert plaintext guitar tablature into
                  playable music files.
                </div>
              </div>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
