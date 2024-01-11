'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useEffect } from 'react';

export default function TeslaTools() {
  useEffect(() => {
    // const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    window.addEventListener('mousemove', function (e) {
      const posX = e.clientX;
      const posY = e.clientY;

      // // @ts-ignore
      // cursorDot.style.left = `${posX}px`;

      // // @ts-ignore
      // cursorDot.style.top = `${posY}px`;

      // @ts-ignore
      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`
        },
        { duration: 500, fill: 'forwards' }
      );
    });
  });

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Navbar />
      {/* Intro section */}
      <div className="flex flex-col w-full h-full items-center text-xl">
        <div className="mt-16 px-72">
          <div className="w-full flex h-[400px]  border border-black">
            <div className="flex relative w-1/3 bg-black h-[400px]">
              <Image
                src="/starfield-hero-static.png"
                objectFit="cover"
                fill
                alt=""
              />
            </div>
            <div className="flex relative w-1/3 bg-black h-[400px]">
              <Image
                src="/over-the-moon-static.png"
                objectFit="cover"
                fill
                alt=""
              />
            </div>
            <div className="flex relative w-1/3 bg-black h-[400px]">
              <Image src="/diamond-static.png" objectFit="cover" fill alt="" />
            </div>
          </div>
          <div className="bg-white border border-black p-8 rounded-b-xl">
            <div className="text-6xl border-b border-black pb-8 font-extrabold">
              OpenGL Shaders
            </div>
            <div className="flex justify-between mt-8 ">
              <div className="font-bold">Side Project</div>
              <div className="w-2/3">
                <div className="font-bold">Overview</div>
                <div className="mt-4 leading-8">
                  A collection of shaders that I created after binge watching
                  Acerola&apos;s YouTube videos. These shaders are all written
                  in GLSL, and can be used in a variety of places, like video
                  games and ThreeJS websites.
                </div>
                <div className="mt-4 leading-8">
                  This is an ongoing passion project, and will be mainly a
                  display of how much I love fragment shaders, and some
                  explanations of the cool math and floatpoint black magic that
                  I&apos;ve learned.
                </div>
              </div>
              <div className="font-bold text-right">
                <p>2023 - Present</p>
              </div>
            </div>
            <div className="mt-8">
              <b>Keywords:</b> GLSL, Graphics Processing, Web Graphics, Shaders
            </div>
          </div>
        </div>
      </div>
      {/* <div className="cursor-dot" data-cursor-dot></div> */}
      <div className="cursor-outline" data-cursor-outline></div>
      <div className="mb-72" />

      <Footer />
    </div>
  );
}
