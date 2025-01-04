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
          <Spacer />
          <div className="text-2xl leading-normal">
            {/* About Block */}
            <div>
              <h1
                className="flex w-full text-6xl tracking-tighter text-[#f999f9]"
                style={{ fontFamily: 'Array-BoldWide' }}
              >
                {"Hi - I'm Tuan, nice to meet you!"}
              </h1>
              <Spacer />
              <p>
                {
                  "Thanks for visiting my website! I've spent a lot of time creating this website, so I hope that you had as much fun viewing it as I had making it. I'm a new grad engineer who really enjoys backend and devops engineering, and I'm currently looking for a new role. If you're looking to hire, I'd love to talk!"
                }
              </p>
            </div>
            {/* Fave Thing Block */}
            <div>
              <p
                className="text-[#f999f9] mt-16"
                style={{ fontFamily: 'Array-BoldWide' }}
              >
                {'Outside of software engineering, I really like: '}
              </p>
              <div className="h-1 w-full bg-[#f999f9] my-4" />
              <div className="flex w-full justify-between">
                <ul className="text-2xl leading-loose">
                  <li>Runescape</li>
                  <li>Concerts</li>
                  <li>{"DigitalOcean's VPS Service"}</li>
                  <li>{"Paper Mario 64's OST"}</li>
                  <li>{"Wendy's"}</li>
                  <li>NixOS</li>
                  <li>MFF PCs</li>
                  <li>Elixir</li>
                </ul>
                <ul className="text-2xl leading-loose">
                  <li>Valorant</li>
                  <li>Film photography</li>
                  <li>League of Legends</li>
                  <li>{"A Bird Story's OST"}</li>
                  <li>Chrono Trigger</li>
                  <li>spotify-tui</li>
                  <li>Figma</li>
                  <li>Really cool websites</li>
                </ul>
                <ul className="text-2xl leading-loose">
                  <li>Concept Albums</li>
                  <li>A really good video essay</li>
                  <li>Spontaneous road trips with friends</li>
                  <li>Apps with good UX</li>
                  <li>Apple Silicon CPUs</li>
                  <li>Collecting vinyl records</li>
                  <li>Pocketbase</li>
                  <li>Nice photos</li>
                </ul>
              </div>
            </div>
            <Spacer />
            {/* Fave Song Block */}
            <div>
              <p
                className="text-[#f999f9] mt-16"
                style={{ fontFamily: 'Array-BoldWide' }}
              >
                {
                  'If you like music as much as I do, here are my favourite songs:'
                }
              </p>
              <div className="h-1 w-full bg-[#f999f9] my-4" />
              <div className="flex w-full justify-between">
                <ul className="text-2xl leading-loose w-1/2">
                  <li>1. Bruno Mars, Rosé - APT</li>
                  <li>2. Bad Omens - Just Pretend</li>
                  <li>3. Aespa - Flowers</li>
                  <li>4. Sza - Low</li>
                  <li>5. Thirty Seconds To Mars - The Kill</li>
                </ul>
                <ul className="text-2xl leading-loose w-1/2">
                  <li>6. Kai Wachi, Lø Spirit - Happier By Now</li>
                  <li>7. Dijon - Skin</li>
                  <li>8. Virtual Self - Angel Voices</li>
                  <li>9. Giveon, Snoh Aalegra - Last Time</li>
                  <li>10. The Weeknd - After Hours</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-32" />
        </TextWrapper>
      </PageWrapper>
    </>
  );
}
