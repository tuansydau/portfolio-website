'use client';
import Navbar from '@/components/Navbar';
import useMousePosition from '@/utils/useMousePosition';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from '@/components/App/ProjectCard';
import Footer from '@/components/Footer';

interface MousePosition {
  x: number;
  y: number;
}
export default function Home() {
  const { x, y } = useMousePosition();
  const [isHover, setIsHover] = useState<boolean>(false);
  var size = isHover ? 250 : 50;
  var color = 'white';
  var mixBlendMode = 'difference';

  const textEnter = () => setIsHover(true);
  const textLeave = () => setIsHover(false);

  return (
    <div className="flex pl-4 lg:pl-0 min-h-screen flex-col items-center justify-between overflow-hidden">
      {/* page container */}
      {/* Navbar */}
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
      <div className="fixed w-screen bg-white z-10">
        <Navbar highlightedButton={'home'} />
      </div>
      <div className="flex w-full min-h-screen max-w-[1360px]">
        {/* Body container */}
        <div className="w-full">
          {/* Hero section */}
          <div className="flex flex-col lg:flex-row w-full justify-between">
            <div
              className="mt-32 lg:w-7/12"
              style={{
                fontFamily: 'comico',
                fontSize: '100px',
                lineHeight: '100%',
                letterSpacing: '-0.25rem',
                fontWeight: 900
              }}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <span
              // className="-ml-6"
              >
                TUAN DAU
              </span>
              <div className="flex h-[120px] items-center">
                {/* <div className="bg-black w-[400px] h-[90px] mr-2" /> */}
                IS NOW A
              </div>
              DEVELOPER
            </div>
            <div
              className="w-1/3 mt-32 invisible lg:visible rotate-6"
              style={{
                fontFamily: 'inter',
                fontSize: '80px',
                lineHeight: '100%',
                fontWeight: 400,
                zIndex: 0,
                paddingTop: '10rem'
              }}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              &quot;I am truly ecstatic&quot; <br />- Tuan Dau
            </div>
          </div>
          <div
            className="w-full text-right mt-32 text-[#414141]"
            style={{
              fontFamily: 'zodiak',
              fontSize: '60px',
              lineHeight: '100%',
              letterSpacing: '-0.25rem',
              fontWeight: 300
            }}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            &quot;About damn time&quot;, says Friend
          </div>

          {/* About me */}
          <div className="flex w-full justify-between min-h-screen items-center mt-32 border-black">
            <div className="w-full lg:flex">
              <div
                className="w-4/12"
                style={{
                  fontFamily: 'zodiak, sans-serif',
                  fontSize: '20px',
                  letterSpacing: '0rem',
                  fontWeight: 900
                }}
              >
                (Well, I mean)
              </div>
              <div
                className="w-8/12"
                style={{
                  fontFamily: 'satoshi, sans-serif',
                  fontSize: '35px',
                  lineHeight: '110%',
                  letterSpacing: '-0.05rem',
                  fontWeight: 300
                }}
              >
                Tuan was always a developer, but up until recently he was
                unemployed, and still finding his niche. Now that Tuan has a
                job, he can finally say that he is a full stack developer.
                <br />
                <br />
                Tuan is currently a Full Stack Developer, and occasional UI/UX
                designer at{' '}
                <a
                  href="https://www.arimadata.com"
                  className="font-medium text-green-500"
                >
                  Arima Data
                </a>
                .
                <br />
                <br />
                <div>Tuan has done the following before:</div>
                <ul
                  className="mt-3"
                  style={{
                    fontFamily: 'satoshi',
                    fontSize: '25px',
                    lineHeight: '200%',
                    letterSpacing: '-0.05rem',
                    fontWeight: 300,
                    listStyleType: 'disc',
                    listStylePosition: 'inside'
                  }}
                >
                  <li>
                    Back End - Python (Flask, FastAPI), MongoDB, PostgreSQL,
                    Ethereum/Solidity
                  </li>
                  <li>
                    Front End - Typescript/Javascript/React, Valtio, HTML/CSS,
                    Framer Motion
                  </li>
                  <li>
                    DevOps - Azure/AWS, DigitalOcean, Jenkins, Github Actions,
                    Docker
                  </li>
                  <li>UI/UX Design - Figma, User Interviews</li>
                  <br />
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full max-w-[1360px]">
            <div className="flex w-full space-x-4">
              <ProjectCard
                category="Project"
                title="OpenGL Shaders"
                description="A collection of OpenGL fragment shaders that I made while
                  learning graphics processing."
                imagePath="/Animation-3.gif"
                linkTo="https://github.com/tuansydau/shader-work"
                targetBlank
              />
              {/* <ProjectCard
            category="Internship"
            title="Big Whale Labs Website"
            description="A website redesign that I helped program while interning at Big Whale Labs."
            imagePath="/bwl_homepage.png"
            linkTo="/bwl-homepage"
            filter="grayscale(100%)"
          /> */}
              <ProjectCard
                category="Project"
                title="Tab2XML"
                description="A program that converts guitar tablature into a playable MusicXML file."
                imagePath="/tab2xml.png"
                linkTo="https://github.com/tuansydau/TAB2XML"
                filter="grayscale(100%)"
                lowBaseOpacity
                targetBlank
              />
            </div>
            <br />
            <div className="flex w-full space-x-4">
              <ProjectCard
                category="Project"
                title="3D Globe Visualizing Global Transactions"
                description="A 3D Globe that visualizes transactions made on Float's card system, submitted for DeCode 2021."
                imagePath="/three-globe.png"
                linkTo="https://github.com/trentstauff/decode-2021/tree/main/frontend"
                targetBlank
                filter="grayscale(100%)"
              />
              <ProjectCard
                category="Project"
                title="NiftyArt"
                description="A simple marketplace to buy and sell digital artwork, built on Ethereum."
                imagePath="/niftyArt.jpg"
                linkTo="https://github.com/tuansydau/TAB2XML"
                filter="grayscale(100%)"
                targetBlank
                lowBaseOpacity
              />
            </div>
          </div>
          <div className="mt-24"></div>
          <Footer />
          {/* <div
            className="flex flex-col w-full items-center min-h-screen"
            style={{
              fontFamily: 'satoshi',
              fontSize: '60px',
              lineHeight: '110%',
              letterSpacing: '0rem',
              fontWeight: 700,
              listStyleType: 'circle'
            }}
          ></div> */}
          {/* <div className="min-h-screen"></div> */}
        </div>
      </div>
    </div>
  );
}
