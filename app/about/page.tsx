import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Navbar highlightedButton={'about'} />
      <div />
      {/* About me */}
      <div className="flex w-full h-fit mt-16">
        <div className="flex w-full justify-center items-center">
          <div className="flex flex-col w-3/4 items-center md:flex-row md:space-x-4 md:justify-center">
            {/* <div className="w-full md:w-2/5 break-words">
              PHOTO IS HERE
              AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </div> */}
            <div className="w-full md:w-3/5 space-y-6 text-xl">
              <div className="text-4xl">Some fun tidbits about me</div>
              <div>
                😀 I&apos;m a full-stack software engineer in Toronto. I grew up
                in Guelph, and moved to Toronto for school when I was 18.
              </div>
              <div>
                📖 I&apos;ve been programming since I was 12 years old - I
                started by programming Roblox games and making websites with my
                friends! I did Software Engineering at York University and loved
                it.
              </div>
              <div>
                🔨 I focus on full-stack web development nowadays, but I have
                always loved working on all parts of the development process -
                especially UI/UX design.
              </div>
              <div>
                ✍️ Previously, I&apos;ve interned at Tesla, CertiK, Artemis
                Data, and a few other startups. I&apos;ve mainly done web and
                tools development, and I have found it to be really satisfying.
                I also love digging into other fields of programming in my free
                time (like shaders!).
              </div>
              <div>
                <p>
                  💤 When I&apos;m not coding, you can find me in my room
                  listening to music with a cup of tea in hand 🍵, playing
                  Runescape, watching an F1 race 🏎️, or at a venue doing concert
                  photography! See my work @{' '}
                  <a className="text-[#24AF4C]" href="https://www.tuandau.ca">
                    www.tuandau.ca
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
