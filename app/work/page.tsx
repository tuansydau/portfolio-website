import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Navbar highlightedButton="work" />
      <div />
      {/* Work experience */}
      <div className="flex w-full justify-center mt-16">
        <div className="flex flex-col w-3/4">
          {/* TODO: Add a button to link to my resume */}
          <div className="flex mb-4 items-center justify-between">
            <div className="text-4xl">Work</div>
            <div className="flex items-center border text-white bg-black h-full rounded-full px-4 hover:cursor-pointer">
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

      <Footer />
    </div>
  );
}
