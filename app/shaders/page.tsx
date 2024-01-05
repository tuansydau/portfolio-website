'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Shaders() {
  return (
    <div className="bg-white flex min-h-screen flex-col justify-between text-xl">
      <Navbar />
      {/* Intro section */}
      <div className="flex flex-col w-full h-full items-center">
        <div className="mt-16 px-72">
          <div className="w-full flex bg-black h-[400px] mb-12">
            <div className="flex relative w-1/3 bg-black h-[400px]">
              <Image
                className=""
                src="/starfield-hero-static.png"
                objectFit="cover"
                fill
                alt=""
              />
            </div>
            <div className="flex relative w-1/3 bg-black h-[400px]">
              <Image
                className=""
                src="/over-the-moon-static.png"
                objectFit="cover"
                fill
                alt=""
              />
            </div>
            <div className="flex relative w-1/3 bg-black h-[400px]">
              <Image
                className=""
                src="/diamond-static.png"
                objectFit="cover"
                fill
                alt=""
              />
            </div>
          </div>
          <div className="mt-16 text-6xl border-b border-black pb-8 font-extrabold">
            OpenGL Shaders
          </div>
          <div className="flex justify-between mt-8 ">
            <div className="font-bold">Side Project</div>
            <div className="w-2/3">
              <div className="font-bold">Overview</div>
              <div className="mt-4 leading-8">
                A collection of shaders that I created after binge watching
                Acerola&apos;s YouTube videos. These shaders are all written in
                GLSL, and can be used in a variety of places, like video games
                and ThreeJS websites.
              </div>
              <div className="mt-4 leading-8">
                This collection of shaders is an ongoing passion project, and
                will be mainly a display of the shaders that I&apos;ve created,
                and some explanations of the cool math and floatpoint black
                magic used in some of them.
              </div>
            </div>
            <div className="font-bold text-right">
              <p>2023 - Present</p>
            </div>
          </div>
          <div className="mt-16">
            <b>Keywords:</b> GLSL, Graphics Processing, Web Graphics, Shaders
          </div>
        </div>
      </div>

      <div className="flex w-full mt-48 px-72">
        <div className="w-2/3 pr-32">
          <p className="text-4xl font-bold">Introduction</p>
          <p className="mt-6 leading-9">
            Shaders are programs that are used to create any kind of computer
            graphics. Every video game and animated movie is created with
            shaders, and they can be as complex or as simple as the artists and
            programmers want them to be.
          </p>
          <p className="mt-6 leading-9">
            As an avid video game player, I&apos;ve had a lot of exposure to
            shaders, but never fully understood how they worked. This
            programming project helped me understand the games that I play a
            little bit better.
          </p>
        </div>
        <div className="-mt-8 w-[450px] h-[550px] border-3 border-black px-4 pt-4 pb-8 rounded-md rotate-2">
          <div className="relative w-[400px] h-[400px] mx-auto">
            <Image src="/limbo.png" alt="" fill />
          </div>
          <p
            className="mt-4 text-center"
            style={{
              fontFamily: 'Comico, cursive',
              fontSize: '1.5rem',
              lineHeight: '3rem'
            }}
          >
            Game: Limbo
          </p>
        </div>
      </div>

      <div className="flex w-full mt-48 px-72 mb-96">
        <div className="w-full">
          <p className="text-4xl font-bold">Examples of Shaders</p>
          <div className="flex mt-8 space-x-4">
            <div className="w-1/3 text-center text-lg">
              <div className="relative w-full h-[400px] bg-black">
                <Image src="/shadertoy-floating-star.png" alt="" fill />
              </div>
              <div className="mt-4">
                <a
                  className="text-blue-600 underline"
                  href="https://www.shadertoy.com/view/XstGWn"
                >
                  River of Styx
                </a>{' '}
                - An animated OpenGL fragment shader by Dave_Hoskins.
              </div>
            </div>
            <div className="w-1/3 text-lg text-center">
              <div className="relative w-full h-[400px] bg-black">
                <Image src="/ori-shaders.png" alt="" fill />
              </div>
              <div className="mt-4">
                <a
                  className="text-blue-600 underline"
                  href="https://store.steampowered.com/app/261570/Ori_and_the_Blind_Forest/"
                >
                  Ori and the Blind Forest
                </a>{' '}
                - This game uses shaders to add glow to objects in the game.
              </div>
            </div>
            <div className="w-1/3 text-lg text-center">
              <div className="relative w-full h-[400px] bg-black">
                <Image src="/minecraft-shader.png" alt="" fill />
              </div>
              <div className="mt-4">
                <a
                  className="text-blue-600 underline"
                  href="https://minecraftshader.com/bsl-shaders/"
                >
                  Minecraft BSL Shader Pack
                </a>{' '}
                - One of many shader packs that adds additional lighting effects
                to Minecraft.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
