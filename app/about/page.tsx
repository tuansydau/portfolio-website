import Image from 'next/image';
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="fixed flex w-3/4 justify-between items-center space-x-12 mt-4">
        <Image
          src="/logo1.png"
          alt=""
          title="isnt he cute i made him myself"
          width={50}
          height={50}
        />
        <Link href="/about"><div>About</div></Link>
        <div>Work</div>
        <div>Resume</div>
        <div>Contact Me</div>
      </div>
      {/* About me */}
      <div className="flex w-full min-h-screen">
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

      {/* Work experience */}
      <div className="flex w-full justify-center mt-96">
        <div className="flex flex-col w-3/4">
          {/* TODO: Add a button to link to my resume */}
          <div className="flex mb-4 items-center justify-between">
            <div className="text-4xl">Work</div>
            <div className="flex items-center border text-white bg-black h-full rounded-xl px-4 hover:cursor-pointer">
              Download Resume
            </div>
          </div>
          <div className="flex flex-col space-y-4 mb-4">
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 ">
              <div className="flex items-center w-full md:w-1/2 border h-24 rounded-xl space-x-4 border-black px-4">
                <Image src="/skinopathy.png" alt="" width={50} height={50} />
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="font-semibold">Skinopathy</div>
                    <div>2023</div>
                  </div>
                  <div>Software Engineer Intern</div>
                  <div className="font-light">Frontend/DevOps</div>
                </div>
              </div>
              <div className="flex items-center w-full md:w-1/2 border h-24 rounded-xl space-x-4 border-black px-4">
                <Image src="/artemis.png" alt="" width={50} height={50} />
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="font-semibold">Artemis Data</div>
                    <div>2022</div>
                  </div>
                  <div>Software Engineer Intern</div>
                  <div className="font-light">Frontend/Data/DevOps</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 ">
              <div className="flex items-center w-full md:w-1/2 border h-24 rounded-xl space-x-4 border-black px-4">
                <Image src="/bwl.jpg" alt="" width={50} height={50} />
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="font-semibold">Big Whale Labs</div>
                    <div>2022</div>
                  </div>
                  <div>Software Engineer Intern</div>
                  <div className="font-light">Frontend/Blockchain</div>
                </div>
              </div>
              <div className="flex items-center w-full md:w-1/2 border h-24 rounded-xl space-x-4 border-black px-4">
                <Image src="/tesla.png" alt="" width={50} height={50} />
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="font-semibold">Tesla</div>
                    <div>2022</div>
                  </div>
                  <div>Software Engineer Intern</div>
                  <div className="font-light">Infotainment/QA Tools</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 ">
              <div className="flex items-center w-full md:w-1/2 border h-24 rounded-xl space-x-4 border-black px-4">
                <Image src="/Certik.jpeg" alt="" width={50} height={50} />
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="font-semibold">CertiK</div>
                    <div>2021</div>
                  </div>
                  <div>Software Engineer Intern</div>
                  <div className="font-light">Security/Build Tools</div>
                </div>
              </div>
              <div className="flex items-center w-full md:w-1/2 border h-24 rounded-xl space-x-4 border-black px-4">
                <Image src="/4pay.jpg" alt="" width={50} height={50} />
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="font-semibold">4PAY Inc.</div>
                    <div>2021</div>
                  </div>
                  <div>Software Engineer Intern</div>
                  <div className="font-light">Full-Stack</div>
                </div>
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
