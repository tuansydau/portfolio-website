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
          <IntroSection />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          {/* Mock Project Card */}
          <ProjectCard />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
        </TextWrapper>
      </PageWrapper>
    </>
  );
}
