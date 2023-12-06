import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="fixed bg-white flex w-full justify-between items-center space-x-12 py-2 px-8 border-b border-black">
        <Image
          src="/logo1.png"
          alt=""
          title="isnt he cute i made him myself"
          width={50}
          height={50}
        />
        <Link href="/">
          <div>Home</div>
        </Link>
        <Link href="/about">
          <div>About</div>
        </Link>
        <Link href="/work">
          <div>Work</div>
        </Link>
        <div>Resume</div>
        <div></div>
      </div>
      {/* About me */}
      <div className="flex w-full mt-32">
        <div className="flex w-full justify-center items-center">
          <div className="flex flex-col w-3/4 items-center md:flex-row md:space-x-4 md:justify-center">
            <div className="w-full md:w-2/5 break-words">
              PHOTO IS HERE
              AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </div>
            <div className="w-full md:w-3/5 space-y-6">
              <div className="text-4xl">Some fun tidbits about me</div>
              <div>
                😀 I&apos;m a full-stack software engineer in Toronto. I grew up
                in Guelph, and moved to Toronto for school when I was 18.
              </div>
              <div>
                📖 I&apos;ve been programming since I was 12 years old, starting
                by programming Roblox games and making websites with my friends!
                I continued programming in university, and completed Software
                Engineering at York University
              </div>
              <div>
                🔨 I focus on full-stack web development nowadays, but I always
                love being involved in all parts of the development process -
                especially UI/UX design.
              </div>
              <div>
                🌴 Previously, I&apos;ve interned at Tesla, CertiK, Skinopathy,
                Artemis Data, Big Whale Labs, and 4Pay Inc. I&apos;ve done
                everything from web development to data engineering to DevOps,
                so I&apos;d like to think that I&apos;ve become a well-rounded
                dev!
              </div>
              <div>
                <p>
                  💤 When I&apos;m not coding, you can find me in my room
                  listening to music with a cup of tea in hand 🍵, playing F1
                  23, watching an F1 race 🏎️, or at a venue doing concert
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

      <div className="flex w-3/4 justify-between items-end space-x-12 mt-16 mb-8">
        <div>Designed and coded by Tuan Dau • 2023</div>
        <div className="flex justify-center items-center space-x-4 md:space-x-12">
          <div className="flex justify-center h-fit px-2 hover:border-white hover:bg-black hover:text-white hover:cursor-pointer items-center text-lg border border-b-2 rounded-2xl border-black">
            LinkedIn
          </div>
          <div className="flex justify-center h-fit px-2 hover:border-white hover:bg-black hover:text-white hover:cursor-pointer items-center text-lg border border-b-2 rounded-2xl border-black">
            Email
          </div>
        </div>
      </div>
    </div>
  );
}
