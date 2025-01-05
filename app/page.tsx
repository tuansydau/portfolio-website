'use client';

import IntroSection from './components/homepage/IntroSection';
import NavigationMenu from './components/homepage/NavigationMenu';
import PageWrapper from './components/common/PageWrapper';
import ProjectCard from './components/homepage/ProjectCard';
import ScrollingTextBanner from './components/common/ScrollingTextBanner';
import Spacer from './components/common/Spacer';
import TextWrapper from './components/common/TextWrapper';
import Image from 'next/image';
import NixOS from '@/public/images/nixos.png';
import Arima from '@/public/images/arima-pixelated.png';
import CertiK from '@/public/images/certik-pixelated.png';

export default function Home() {
  return (
    <>
      <PageWrapper>
        <ScrollingTextBanner />
        <Spacer />
        <Spacer />

        {/* Text Container */}
        <TextWrapper>
          <NavigationMenu />
          <Spacer />
          <Spacer />
          <IntroSection />
          <Spacer />
          <Spacer />
          <Spacer />
          <div id="section1" className="w-full text-6xl text-[#f999ff]">
            Work Projects (non-NDA)
          </div>
          <Spacer />
          {/* Mock Project Card */}{' '}
          <div className="text-white hover:text-[#AACD4A] transition-colors hover:cursor-pointer">
            <ProjectCard
              company="Arima Data"
              description="Implementing report sharing for synthetic data analytics, completing feature requests, and reworking the homepage."
              title="Fullstack Engineer (Feb 2024 - Nov 2024)"
            />
            <Spacer />
            <Image src={Arima} className="bg-[#181818]" alt="" />
          </div>
          <Spacer />
          <Spacer />
          <Spacer />{' '}
          <div className="text-white hover:text-gray-500 transition-colors hover:cursor-pointer">
            <ProjectCard
              company="CertiK"
              description="Automating static analysis and formal verification tests for Web3 code audits."
              title="Backend Engineer Intern, Static Analysis Tools (Fall 2021)"
            />
            <Spacer />
            <Image src={CertiK} className="bg-[#181818]" alt="" />
          </div>
          <Spacer />
          <Spacer />
          <Spacer />
          <div className="w-full text-6xl text-[#f999ff]">
            Personal Projects
          </div>
          <Spacer />
          <div className="text-white hover:text-[#3AB7C6] transition-colors hover:cursor-pointer">
            <ProjectCard
              company="Home Web Server + AWS Learning Environment"
              description="A NixOS server to host websites, and a free AWS (localstack) test environment."
              title="Motivation: To avoid going bankrupt to AWS, and to have a consistent environment to learn about systems design."
            />
            <Spacer />
            <Image src={NixOS} alt="" />
          </div>
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
        </TextWrapper>
      </PageWrapper>
    </>
  );
}
