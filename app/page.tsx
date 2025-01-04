'use client';

import IntroSection from './components/homepage/IntroSection';
import NavigationMenu from './components/homepage/NavigationMenu';
import PageWrapper from './components/common/PageWrapper';
import ProjectCard from './components/homepage/ProjectCard';
import ScrollingTextBanner from './components/common/ScrollingTextBanner';
import Spacer from './components/common/Spacer';
import TextWrapper from './components/common/TextWrapper';

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
          <Spacer />
          <Spacer />
          <IntroSection />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <div id="section1" className="w-full text-6xl text-[#f999ff]">
            Work Projects
          </div>
          <Spacer />
          {/* Mock Project Card */}
          <ProjectCard
            company="Arima Data"
            description="Implementing report sharing for synthetic data analytics."
            title="Fullstack Engineer (Feb 2024 - Nov 2024)"
          />
          <Spacer />
          <Spacer />
          <Spacer />
          <ProjectCard
            company="Tesla"
            description="Building deployment and observability tools for testing new firmwares."
            title="Software Engineer Intern, Vehicle Software QA Tools (Winter 2022)"
          />
          <Spacer />
          <Spacer />
          <Spacer />
          <ProjectCard
            company="CertiK"
            description="Automating static analysis and formal verification tests for Web3 code audits."
            title="Backend Engineer Intern, Static Analysis Tools (Fall 2021)"
          />
          <Spacer />
          <Spacer />
          <Spacer />

          <div className="w-full text-6xl text-[#f999ff]">
            Personal Projects
          </div>
          <Spacer />
          <ProjectCard
            company="Home Web Server + AWS Learning Environment"
            description="A NixOS server to host websites, and a free AWS (localstack) test environment."
            title="Motivation: To avoid going backrupt to AWS, and to have a consistent environment to learn about systems design."
          />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
        </TextWrapper>
      </PageWrapper>
    </>
  );
}
