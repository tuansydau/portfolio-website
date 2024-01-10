'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Shaders() {
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

      <div className="flex flex-col w-full mt-96 px-48 text-xl">
        <div className="flex flex-col border py-24 px-16 bg-white border-black rounded-xl">
          <div className="flex items-center">
            <div className="w-2/3 pr-32 -mt-16">
              <p className="text-4xl font-bold">Introduction to Shaders</p>
              <p className="mt-6 leading-9">
                Shaders are programs that are used to create any kind of
                computer graphics. Every video game and animated movie is
                created with shaders, and they can be as complex or as simple as
                the artists and programmers want them to be.
              </p>
              <p className="mt-6 leading-9">
                As an{' '}
                <a
                  className="text-blue-500 underline"
                  href="http://how-dry-is-moo.vercel.app"
                  target="_blank"
                >
                  avid video game player
                </a>
                , I&apos;ve had a lot of exposure to shaders, but never fully
                understood how they worked. This programming project helped me
                understand the games that I play a little bit better.
              </p>
            </div>
            <div className="-mt-8 w-[450px] h-[550px] border-3 border-black bg-white px-4 pt-4 pb-8 rounded-md rotate-2">
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
          <div className="w-full mt-48">
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
                    target="_blank"
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
                    target="_blank"
                  >
                    Ori and the Blind Forest
                  </a>{' '}
                  - Uses shaders to add glow to objects in the game.
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
                    target="_blank"
                  >
                    Minecraft BSL Shader Pack
                  </a>{' '}
                  - Adds additional lighting effects to Minecraft.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-96 px-48 text-center mb-16">
        <div className="py-16 px-8 rounded-xl border-8 border-black bg-white ">
          <div
            className="mt-6 text-3xl font-light"
            style={{ lineHeight: '4rem' }}
          >
            There are lots of different types of shaders that do different
            things. However, the type that I found the most interesting was:
          </div>
          <div
            className="mt-8 leading-10"
            style={{
              fontFamily: 'Comico, sans-serif',
              fontSize: '10rem',
              lineHeight: '10rem'
            }}
          >
            Fragment Shaders
          </div>
        </div>
      </div>

      <div className="flex w-full mt-96 px-48 text-xl">
        <div className="flex flex-col border border-black px-8 py-24 rounded-xl bg-white items-center">
          <div className="flex">
            <div className="-mt-8 w-[450px] h-[550px] border-3 border-black px-4 pt-4 pb-8 rounded-md -rotate-2 bg-white">
              <div className="relative w-[400px] h-[400px] mx-auto">
                <Image src="/Animation.gif" alt="" fill objectFit="cover" />
              </div>
              <p
                className="mt-4 text-center"
                style={{
                  fontFamily: 'Comico, cursive',
                  fontSize: '1.5rem',
                  lineHeight: '3rem'
                }}
              >
                Proof: Fragment shaders are cool (i coded this!)
              </p>
            </div>
            <div className="-mt-8 w-2/3 pl-32">
              <p className="text-4xl font-bold">Fragment Shaders</p>
              <p className="mt-6 leading-9">
                Fragment shaders, or pixel shaders, are shaders that determine
                the final colour of each individual pixel on the screen,
                depending on a number of factors, such as:
              </p>
              <ul
                style={{ listStyleType: 'disc', listStylePosition: 'inside' }}
                className="mt-4"
              >
                <li>Objects in view</li>
                <li>Lighting direction/strength</li>
                <li>Texture of objects</li>
                <li>Distance from camera</li>
                <li>Light reflections from other objects</li>
                <li>Bloom (if desired)</li>
              </ul>
              <p className="mt-6 leading-9">
                Fragment shaders, in combination with things like Vertex
                shaders, can be used to create complicated graphics effects and
                scenes, like in the above examples.
              </p>
            </div>
          </div>
          <div className="w-full mt-48">
            <p className="text-4xl font-bold">
              Shaders that I&apos;ve Made So Far (More to come!)
            </p>
            <div className="flex mt-8 space-x-4">
              <div className="w-1/3 text-center text-lg">
                <div className="relative w-full h-[400px] bg-black">
                  <Image src="/Animation.gif" alt="" fill objectFit="cover" />
                </div>
              </div>
              {/* <div className="w-1/3 text-lg text-center">
                <div className="relative w-full h-[400px] bg-black">
                  <Image src="/Animation.gif" alt="" fill objectFit="cover" />
                </div>
              </div>
              <div className="w-1/3 text-lg text-center">
                <div className="relative w-full h-[400px] bg-black">
                  <Image src="/Animation.gif" alt="" fill objectFit="cover" />
                </div>
              </div> */}
            </div>
            <div className="mt-4 text-xl">
              My up to date shader work will be posted here:{' '}
              <a
                className="text-blue-500 underline"
                href="https://github.com/tuansydau/shader-work/"
              >
                https://github.com/tuansydau/shader-work/
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-72" />

      <Footer />
    </div>
  );
}
