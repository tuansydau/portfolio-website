`use client`;

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar />

      {/* intro section */}
      <div className="flex flex-col w-full h-screen justify-between items-center">
        <div></div>
        <div className="flex flex-col md:flex-row items-center justify-center w-3/4 md:space-x-4 mt-12">
          <div className="flex text-4xl w-full">
            this empty box will be a photo or something
          </div>
          <div className="flex flex-col space-y-6">
            <div className="flex flex-row text-4xl w-full font-['Helvetica Neue']">
              Hey, I&apos;m Tuan, a new-grad full-stack developer with a love
              for designing web apps and APIs.
            </div>
            <a
              className="flex text-black hover:border-white hover:bg-black hover:text-white hover:cursor-pointer h-12 w-fit rounded-xl mt-4 px-4 border border-black border-b-2 items-center justify-center"
              href="mailto:tuansdau@gmail.com"
            >
              Let&apos;s talk!
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
