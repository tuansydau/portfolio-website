'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import useMousePosition from '@/utils/useMousePosition';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '@/components/Modal';

interface MousePosition {
  x: number;
  y: number;
}

export default function About() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { x, y } = useMousePosition();
  const [isHover, setIsHover] = useState<boolean>(false);

  var size = isHover ? 300 : 100;
  var color = 'white';
  var mixBlendMode = 'difference';

  const textEnter = () => setIsHover(true);
  const textLeave = () => setIsHover(false);
  return (
    <div className="flex min-h-screen w-full flex-col justify-between items-center">
      <Modal isModalOpen={modalOpen} modalSetter={setModalOpen} />
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
      {/* Hello Potential Employer Blurb */}
      {/* <div className="flex w-full h-[1px] bg-[#222]"></div> */}
      <div
        className="flex flex-col w-full max-w-[2000px]"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        <div className="flex w-full px-80 justify-between items-start mt-12">
          <p
            className="w-11/12 mb-16"
            style={{
              fontFamily: 'satoshi, serif',
              fontSize: '6.5rem',
              lineHeight: '7.5rem',
              fontWeight: 900
            }}
          >
            <span style={{ color: '#3ec760' }}>Hey, </span>potential employer!
          </p>
        </div>
        <div className="flex w-full px-80 space-x-16">
          <div className="flex w-2/12" />
          <div className="w-5/12">
            <p
              style={{
                fontFamily: 'satoshi, serif',
                fontSize: '1rem',
                lineHeight: '1.85rem',
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
                fontFamily: 'satoshi, serif',
                fontSize: '1rem',
                lineHeight: '1.85rem',
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
                fontFamily: 'satoshi, serif',
                fontSize: '1rem',
                lineHeight: '1.85rem',
                fontWeight: 425
              }}
            >
              When I&apos;m not programming, I usually enjoy{' '}
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
              Valley for the 5th+ time, going on nature walks, getting injured
              on my nature walks without knowing how, pumping iron,
              chit-chatting/cooking with friends, and taking spontaneous trips
              to new places.
            </p>
            <div className="mt-8" />
            <p
              style={{
                fontFamily: 'satoshi, serif',
                fontSize: '1rem',
                lineHeight: '1.85rem',
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
        <div className="mt-16" />
        <div className="flex w-full justify-end px-80">
          <div className="w-6 h-6 bg-black"></div>
        </div>
      </div>
      {/* Work Summary */}
      <div className="mt-48" />
      <div className="flex w-full justify-center max-w-[2000px] px-80">
        <div
          className="flex w-full justify-between"
          style={{
            fontFamily: 'satoshi, serif',
            fontSize: '1rem',
            lineHeight: '1.85rem',
            fontWeight: 400
          }}
        >
          <div className="w-9/12">
            <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>
              Work Experience
            </div>
            <div className="mt-4" />
            <div>
              <ul className="w-full space-y-4">
                <li className="flex flex-col">
                  <div className="flex justify-between font-bold bg-blackl">
                    <p>Skinopathy</p>
                    <p>Jan 2023 - May 2023</p>
                  </div>
                  <p className="w-9/12 leading-5">
                    Software Engineer Intern - Backend/DevOps
                  </p>
                </li>
                <li className="flex flex-col">
                  <div className="flex justify-between font-bold">
                    <p>Artemis Data</p>
                    <p>Aug 2022 - Dec 2022</p>
                  </div>
                  <p className="w-9/12 leading-5">
                    Software Engineer Intern - Frontend
                  </p>
                </li>
                <li className="flex flex-col">
                  <div className="flex justify-between font-bold">
                    <p>Big Whale Labs</p>
                    <p>May 2022 - Aug 2022</p>
                  </div>
                  <p className="w-9/12 leading-5">
                    Software Engineer Intern - Frontend
                  </p>
                </li>
                <li className="flex flex-col">
                  <div className="flex justify-between font-bold">
                    <p>Tesla</p>
                    <p>Jan 2022 - Apr 2022</p>
                  </div>
                  <p className="w-9/12 leading-5">
                    Software Engineer Intern - Full-Stack, Infotainment QA Tools
                    Team
                  </p>
                </li>{' '}
                <li className="flex flex-col">
                  <div className="flex justify-between font-bold">
                    <p>CertiK</p>
                    <p>Sep 2021 - Dec 2021</p>
                  </div>
                  <p className="w-9/12 leading-5">
                    Software Engineer Intern - Backend, Static Analysis Team
                  </p>
                </li>{' '}
                <li className="flex flex-col">
                  <div className="flex justify-between font-bold">
                    <p>4PAY Inc.</p>
                    <p>May 2021 - Aug 2021</p>
                  </div>
                  <p className="w-9/12 leading-5">
                    Software Engineer Intern - Backend, KYC Verification
                  </p>
                </li>{' '}
                <li className="flex flex-col">
                  <div className="flex justify-between font-bold">
                    <p>4PAY Inc.</p>
                    <p>Jan 2020 - Sep 2020</p>
                  </div>
                  <p className="w-9/12 leading-5">
                    Technical Systems Analyst Intern - Payments
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-4/12 items-end">
            <div>
              <div className="mt-11"></div>
              <div className="">
                <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                  Languages & Tools
                  <div className="mt-2" />
                </div>
                <ul
                  style={{
                    listStyleType: 'circle',
                    listStylePosition: 'inside'
                  }}
                >
                  <li>Typescript</li>
                  <li>React</li>
                  <li>Python</li>
                  <li>Golang</li>
                  <li>Java</li>
                  <li>Docker</li>
                  <li>Bash</li>
                </ul>
                <div className="mt-8"></div>
              </div>
              <div className="">
                <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                  Skills
                </div>
                <div className="mt-2" />
                <ul
                  style={{
                    listStyleType: 'circle',
                    listStylePosition: 'inside'
                  }}
                >
                  <li>Frontend Development</li>
                  <li>API Design + Implementation</li>
                  <li>Deployments + CI/CD Pipelines</li>
                  <li>QA Tooling/Automated Testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-48" />
      {/*  */}
      <div className="flex w-full justify-center max-w-[2000px] px-80">
        <div
          className="flex w-full justify-center"
          style={{ fontFamily: 'satoshi' }}
        >
          <div className="flex w-full space-x-16 justify-between">
            <div className="w-full max-w-[875px]">
              <div className="w-fit" style={{ fontSize: '3rem' }}>
                Like my work? Let&apos;s chat!
              </div>
              <div
                className="w-fit"
                style={{ fontSize: '1.5rem', fontWeight: 250 }}
              >
                If you&apos;re looking for a developer for your company, or for
                someone to talk about music and Runescape, I&apos;d love to meet
                you! Open to emails and meetings, as well as coffee if
                you&apos;re in the Toronto area{' '}
                <b style={{ fontWeight: 500 }}>:)</b>
              </div>
            </div>
            <div
              className="flex flex-col space-y-8 justify-center items-center"
              style={{ fontSize: '1.25rem', fontWeight: 350 }}
            >
              <div
                className="flex border border-black text-center border-r-2 border-b-3 hover:bg-black hover:text-white hover:cursor-pointer w-64 h-16 items-center justify-center"
                onClick={() => setModalOpen(true)}
              >
                Message me on LinkedIn
              </div>
              <a
                className="flex h-16 border text-center border-black border-r-2 border-b-3 hover:bg-black hover:text-white items-center w-64 justify-center"
                href="mailto:tuansdau@gmail.com"
              >
                Email me
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-40" />
      <div className="w-full bg-black h-5" />
      {/* <Footer /> */}
    </div>
  );
}
