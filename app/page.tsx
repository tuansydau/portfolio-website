`use client`;

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const projectRowClasses =
    'flex flex-col 2xl:flex-row 2xl:space-x-36 space-y-24 2xl:space-y-0';

  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar highlightedButton={'home'} />

      {/* intro section */}
      <div className="flex flex-col w-full items-center">
        <div></div>
        <div className="flex flex-col md:flex-row items-center justify-center w-3/4 md:space-x-4 mt-12">
          {/* <div className="flex text-4xl w-full">
            this empty box will be a photo or something
          </div> */}
          <div className="flex flex-col space-y-6 items-center justify-center mt-64 mb-64">
            <div className="flex flex-row text-4xl text-center w-1/2">
              Hey, I&apos;m Tuan, a new-grad full-stack developer with a love
              for designing web apps and APIs.
            </div>
            <a
              className="flex text-black hover:border-white hover:bg-black hover:text-white hover:cursor-pointer border-b-2 h-12 w-fit rounded-xl mt-4 px-4 border border-black border-b2 items-center justify-center"
              href="mailto:tuansdau@gmail.com"
            >
              Let&apos;s talk!
            </a>
          </div>
        </div>

        {/* Projects */}
        <div className="flex flex-col w-full justify-center items-center space-y-16 mb-32">
          <div className={projectRowClasses}>
            <div className="w-[32rem] h-full">
              <div className="w-full h-72 bg-gray-100 mb-6">Image</div>
              <div className="text-3xl w-full border-b border-black mb-4">
                Tesla Vehicle Firmware Tools
              </div>
              <div className="font-light">
                Design and implement a set of tools and data dashboards to help
                accelerate the speed of infotainment system testing.
              </div>
            </div>
            <div className="w-[32rem] h-full">
              <div className="w-full h-72 bg-gray-100 mb-6">Image</div>
              <div className="text-3xl w-full border-b border-black mb-4">
                Big Whale Labs Homepage
              </div>
              <div className="font-light">
                Implement a stunning website to capture the attention of
                audiences.
              </div>
            </div>
          </div>
          <div className={projectRowClasses}>
            <a href="https://github.com/tuansydau/shader-work" target="_blank">
              <div className="w-[32rem] h-full">
                <div className="w-full h-72 bg-gray-100 mb-6">Image</div>
                <div className="text-3xl w-full border-b border-black mb-4">
                  Shaders
                </div>
                <div className="font-light">
                  Program a set of realtime OpenGL fragment shaders to create
                  high definition visuals, in GLSL.
                </div>
              </div>
            </a>
            <a href="https://github.com/tuansydau/TAB2XML" target="_blank">
              <div className="w-[32rem] h-full">
                <div className="w-full h-72 bg-gray-100 mb-6">Image</div>
                <div className="text-3xl w-full border-b border-black mb-4">
                  Tab2XML
                </div>
                <div className="font-light">
                  Create a program to convert plaintext guitar tablature into
                  playable music files.
                </div>
              </div>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
