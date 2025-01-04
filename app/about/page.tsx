'use client';

import NavigationMenu from '../components/homepage/NavigationMenu';
import PageWrapper from '../components/common/PageWrapper';
import ScrollingTextBanner from '../components/common/ScrollingTextBanner';
import Spacer from '../components/common/Spacer';
import TextWrapper from '../components/common/TextWrapper';

export default function About() {
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
        </TextWrapper>
      </PageWrapper>
    </>
  );
}
