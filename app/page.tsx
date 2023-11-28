import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="flex w-3/4 justify-center items-center space-x-12 mt-4">
        <Image
          src="/logo1.png"
          alt=""
          title="isnt he cute i made him myself"
          width={50}
          height={50}
        />
        {/* 
        <div className="flex justify-center items-center space-x-12">
          <div className="flex justify-center h-fit p-2 items-center text-lg border border-b-2 rounded-2xl border-black">
            Work
          </div>
          <div className="flex justify-center h-fit p-2 items-center text-lg border border-b-2 rounded-2xl border-black">
            About
          </div>
          <div className="flex justify-center h-fit p-2 items-center text-lg border border-b-2 rounded-2xl border-black">
            Resume
          </div>
        </div> */}
      </div>

      {/* intro section */}
      <div className="flex flex-col w-full justify-center items-center mt-32">
        <div className="flex flex-row items-center justify-center w-3/4 space-x-4">
          <div className="flex text-4xl w-full">
            this empty box will be a photo or something
          </div>
          <div className="flex flex-col space-y-6">
            <div className="flex flex-row text-4xl font-['Helvetica Neue']">
              Hey, I'm Tuan, a new-grad full-stack developer with a love for
              designing pretty web apps and performant APIs.
            </div>
            <div className="flex text-black border-black hover:border-white hover:bg-black hover:text-white hover:cursor-pointer h-12 w-fit rounded-xl mt-4 px-4 border border-black border-b-2 items-center justify-center">
              Let's talk!
            </div>
          </div>
        </div>
      </div>

      {/* About me */}
      <div className="flex w-full mt-80">
        <div className="flex w-full justify-center">
          <div className="flex w-3/4 space-x-4 justify-center">
            <div className="w-2/5 break-words">
              PHOTO IS HERE
              AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </div>
            <div className="w-3/5 space-y-6">
              <div className="text-4xl">Some fun tidbits about me</div>
              <div>
                😊 I'm a full-stack software engineer in Toronto. I grew up in
                Guelph, and moved to Toronto for school when I was 18.
              </div>
              <div>
                💡 I've been programming since I was 12 years old, starting by
                programming Roblox games and making websites with my friends! I
                still do game development from time to time, but mainly focus on
                full-stack development nowadays.
              </div>
              <div>
                🌴 Previously, I've interned at Tesla, CertiK, Skinopathy,
                Artemis Data, Big Whale Labs, and 4Pay Inc. I mainly do full
                stack development, UI/UX design, and DevOps :)
              </div>
              <div>
                <p>
                  💤 When I'm not coding, you can find me in my room listening
                  to music with a cup of tea in hand 🍵, playing F1 23, watching
                  an F1 race 🏎️, or at a venue doing concert photography! See my
                  work @{' '}
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
      <div className="flex w-full justify-center mt-60">
        <div className="flex flex-col w-3/4">
          {/* TODO: Add a button to link to my resume */}
          {/* TODO: Add work images */}
          <div className="text-4xl mb-4">Work</div>
          <div className="flex flex-col space-y-4 mb-4">
            <div className="flex space-x-4">
              <div className="flex items-center w-1/2 border h-24 rounded-xl space-x-4 border-[#24AF4C]">
                <Image
                  className="ml-4"
                  src="/logo1.png"
                  alt=""
                  title="i made him myself isnt he cute"
                  width={40}
                  height={40}
                />
                <div>
                  <div className="font-semibold">Skinopathy</div>
                  <div>Software Engineer Intern</div>
                  <div className="font-light">Acne App + EMR Teams</div>
                </div>
              </div>
              <div className="flex items-center w-1/2 border h-24 rounded-xl space-x-4 border-[#24AF4C]">
                <Image
                  className="ml-4"
                  src="/logo1.png"
                  alt=""
                  title="i made him myself isnt he cute"
                  width={40}
                  height={40}
                />
                <div>
                  <div className="font-semibold">Artemis Data</div>
                  <div>Software Engineer Intern, Frontend/Data</div>
                  <div className="font-light">Query Engine Platform Team</div>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center w-1/2 border h-24 rounded-xl space-x-4 border-[#24AF4C]">
                <Image
                  className="ml-4"
                  src="/logo1.png"
                  alt=""
                  title="i made him myself isnt he cute"
                  width={40}
                  height={40}
                />
                <div>
                  <div className="font-semibold">Big Whale Labs</div>
                  <div>Software Engineer Intern</div>
                  <div className="font-light">Product Team</div>
                </div>
              </div>
              <div className="flex items-center w-1/2 border h-24 rounded-xl space-x-4 border-[#24AF4C]">
                <Image
                  className="ml-4"
                  src="/logo1.png"
                  alt=""
                  title="i made him myself isnt he cute"
                  width={40}
                  height={40}
                />
                <div>
                  <div className="font-semibold">Tesla</div>
                  <div>Software Engineer Intern, QA Tools</div>
                  <div className="font-light">
                    Infotainment QA + Navigation Team
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center w-1/2 border h-24 rounded-xl space-x-4 border-[#24AF4C]">
                <Image
                  className="ml-4"
                  src="/logo1.png"
                  alt=""
                  title="i made him myself isnt he cute"
                  width={40}
                  height={40}
                />
                <div>
                  <div className="font-semibold">CertiK</div>
                  <div>Software Engineer Intern, Internal Tools</div>
                  <div className="font-light">Static Analysis Team</div>
                </div>
              </div>
              <div className="flex items-center w-1/2 border h-24 rounded-xl space-x-4 border-[#24AF4C]">
                <Image
                  className="ml-4"
                  src="/logo1.png"
                  alt=""
                  title="i made him myself isnt he cute"
                  width={40}
                  height={40}
                />
                <div>
                  <div className="font-semibold">4PAY Inc.</div>
                  <div>Software Engineer Intern, Full-stack</div>
                  <div className="font-light">Microloans + KYC Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-3/4 justify-between items-center space-x-12 mt-20 mb-8">
        <div>Designed and coded by Tuan Dau • 2023</div>

        <div className="flex justify-center items-center space-x-12">
          <div className="flex justify-center h-fit p-2 items-center text-lg border border-b-2 rounded-2xl border-black">
            LinkedIn
          </div>
          <div className="flex justify-center h-fit p-2 items-center text-lg border border-b-2 rounded-2xl border-black">
            Email
          </div>
        </div>
      </div>
    </div>
  );
}
