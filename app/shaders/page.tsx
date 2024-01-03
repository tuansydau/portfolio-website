'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Shaders() {
  return (
    <div className="bg-white flex min-h-screen flex-col justify-between">
      <Navbar />

      {/* Intro section */}
      <div className="flex flex-col w-full h-full items-center">
        <div className="mt-32 px-24">
          <div className="flex relative w-full bg-black h-[400px] mb-12">
            <Image
              className=""
              src="/starfield-hero-static.png"
              fill
              alt=""
            ></Image>
          </div>
          <div className="mt-16 text-6xl border-b border-black pb-8 font-extrabold">
            OpenGL Shaders
          </div>
          <div className="flex justify-between mt-8 text-xl">
            <div className="font-bold">Side Project</div>
            <div className="w-1/2">
              <div className="font-bold">Overview</div>
              <div>
                A collection of shaders that I created after binge watching
                Acerola&apos;s YouTube videos. These shaders are all written in
                GLSL, and can be used in a variety of places - including video
                games, websites, videos, and etc.
              </div>
            </div>
            <div className="font-bold">2023</div>
          </div>
          <div className="mt-8 text-xl">
            <b>Keywords:</b> GLSL, Graphics Processing, Web Graphics, Shaders
          </div>
        </div>
      </div>

      {/* What the heck are shaders? */}
      <div className="flex w-full mt-24 px-24 justify-center mb-96">
        <div className="flex flex-col w-full items-center">
          <div className="w-full text-center font-extralight border bg-[#141414] text-white p-24 border-black border-2 rounded-xl">
            <p className="text-6xl font-extrabold">
              &quot;So, what&apos;s a shader?&quot;
            </p>
            <br />
            <p className="text-2xl font-light">
              - All of my friends, basically
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
