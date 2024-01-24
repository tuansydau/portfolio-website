'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import useMousePosition from '@/utils/useMousePosition';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface MousePosition {
  x: number;
  y: number;
}

export default function About() {
  const { x, y } = useMousePosition();
  const [isHover, setIsHover] = useState<boolean>(false);

  var size = isHover ? 300 : 100;
  var color = 'white';
  var mixBlendMode = 'difference';

  const textEnter = () => setIsHover(true);
  const textLeave = () => setIsHover(false);
  return (
    <div className="flex min-h-screen w-full flex-col justify-center items-center">
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
        animate={{
          height: size,
          width: size
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      />
      <Navbar highlightedButton={'about'} />

      {/* <div className="flex w-full h-[1px] bg-[#222]"></div> */}
      <div className="flex flex-col w-full max-w-[2000px]">
        <div
          className="flex w-full px-80 justify-between items-start mt-12"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <p
            className="w-full mb-16"
            style={{
              fontFamily: 'Zodiak, serif',
              fontSize: '8em',
              lineHeight: '8rem',
              fontWeight: 500
            }}
          >
            Hello, potential employer.
          </p>
          {/* <div className="flex w-8 h-8 bg-[#222] mt-9"></div> */}
        </div>
        <div className="flex w-full px-80 space-x-16">
          <div className="flex w-2/12">
            {/* <p
              style={{
                fontFamily: 'Zodiak, serif',
                fontSize: '3rem',
                lineHeight: '4rem',
                fontWeight: 450
              }}
            >
              Welcome to my portfolio site!
            </p> */}
          </div>
          <div className="w-5/12">
            <p
              style={{
                fontFamily: 'Zodiak, serif',
                fontSize: '1rem',
                lineHeight: '2.25rem',
                fontWeight: 425
              }}
            >
              First of all, thanks for taking the time to visit my portfolio, I
              have been <b style={{ fontWeight: 900 }}>DYING</b> for someone
              (other than my friends) to see the portfolio site! This website
              was largely inspired by photography magazines - my old{' '}
              <a
                href="https://davidnngo.com/"
                className="text-[#9975D3] font-extrabold"
                target="_blank"
              >
                roommate from university
              </a>{' '}
              was studying Graphic Design when we lived together, and a love of
              zines was one of the things that I picked up from him, as well as
              actually cooking food instead of getting takeout every day.
            </p>{' '}
            <div className="mt-8" />
            <p
              style={{
                fontFamily: 'Zodiak, serif',
                fontSize: '1rem',
                lineHeight: '2.25rem',
                fontWeight: 425
              }}
            >
              <b style={{ fontWeight: 900 }}>But hi!</b> I&apos;m Tuan Dau, and
              I&apos;m a new grad full stack developer. I went to York
              University, and I&apos;ve interned at a total of 6 different
              companies, mainly creating + designing internal tools/websites,
              containerizing + deploying backend services, and creating CI/CD
              testing/deployment pipelines whenever I am summoned via Slack
              message.
            </p>
          </div>
          <div className="w-5/12">
            <p
              style={{
                fontFamily: 'Zodiak, serif',
                fontSize: '1rem',
                lineHeight: '2.25rem',
                fontWeight: 425
              }}
            >
              When I&apos;m not programming, I am usually{' '}
              <Link
                className="font-extrabold text-violet-600 hover:text-viole: 450"
                href="https://www.tuandau.ca"
                target="_blank"
              >
                doing DJ/event photography,
              </Link>{' '}
              <Link
                className="font-extrabold text-blue-600 hover:text-blu: 450"
                href="https://how-dry-is-moo.vercel.app/"
                target="_blank"
              >
                playing a lot of Runescape,
              </Link>{' '}
              <Link
                className="font-extrabold text-[#4d94ca] hover:text-[#8fc4ea]"
                href="https://scuderia.alphatauri.com/en/"
                target="_blank"
              >
                patiently waiting for the F1 season to start,
              </Link>{' '}
              <Link
                className="font-extrabold text-[#FF4454] hover:text-[#f4979f]"
                href="https://tracker.gg/valorant/profile/riot/Verified%20Email%23NA1/overview"
                target="_blank"
              >
                deranking in Valorant,
              </Link>{' '}
              enjoying the photography of others, reading magazines,
              doomscrolling, geeking about my skincare, rewatching Silicon
              Valley for the 5th+ time, going on little nature walks, getting
              injured on the nature walk without knowing where the damage came
              from, pumping iron, chit-chatting/cooking with friends, or taking
              a spontaneous trips (aka. the plans were in the group chat but
              nobody did any actual planning until the night before).
            </p>
            <div className="mt-8" />
            <p
              style={{
                fontFamily: 'Zodiak, serif',
                fontSize: '1rem',
                lineHeight: '2.25rem',
                fontWeight: 425
              }}
            >
              If you&apos;re looking for a full-stack developer who can
              design/code prototypes, as well as create infrastructure to hold
              up their code really really quickly, I&apos;d love to talk! Thanks
              for checking out my portfolio! Hopefully you&apos;ve enjoyed this
              website, I&apos;ll cry otherwise. Just kidding.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16" />
      <div
        className="flex w-full max-w-[2200px] px-80 justify-between space-x-64"
        style={{
          fontFamily: 'Zodiak, serif',
          fontSize: '1rem',
          lineHeight: '2.25rem',
          fontWeight: 400
        }}
      >
        <div className="w-full">
          <div style={{ fontWeight: 700 }}>Work Experience</div>
          <div>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <div className="flex justify-between">
                  <p>job 1</p>
                  <p>Year 1</p>
                </div>
                Role
              </li>
              <li className="flex flex-col">
                <div className="flex justify-between">
                  <p>job 1</p>
                  <p>Year 1</p>
                </div>
                Role
              </li>
              <li className="flex flex-col">
                <div className="flex justify-between">
                  <p>job 1</p>
                  <p>Year 1</p>
                </div>
                Role
              </li>
              <li className="flex flex-col">
                <div className="flex justify-between">
                  <p>job 1</p>
                  <p>Year 1</p>
                </div>
                Role
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <div style={{ fontWeight: 700 }}>Languages & Tools</div>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>
        <div className="w-full">
          <div style={{ fontWeight: 700 }}>Skills</div>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>
      </div>
      <div className="mt-16" />
      <Footer />
    </div>
  );
}
