import Image from 'next/image';
import Link from 'next/link'

// fix: scroll

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
        <Link href="/"><div>Home</div></Link>
        <Link href="/about"><div>About</div></Link>
        <div>Work</div>
        <div>Resume</div>
        <div>Contact Me</div>
      </div>

      {/* intro section */}
      <div className="flex flex-col w-full min-h-screen justify-center items-center -mt-8">
        <div className="flex flex-col -mt-16 md:flex-row items-center justify-center w-3/4 md:space-x-4">
          <div className="flex text-4xl w-full">
            this empty box will be a photo or something
          </div>
          <div className="flex flex-col space-y-6">
            <div className="flex flex-row text-4xl w-full font-['Helvetica Neue']">
              Hey, I&apos;m Tuan, a new-grad full-stack developer with a love
              for designing web apps and APIs.
            </div>
            <div className="flex text-black hover:border-white hover:bg-black hover:text-white hover:cursor-pointer h-12 w-fit rounded-xl mt-4 px-4 border border-black border-b-2 items-center justify-center">
              Let&apos;s talk!
            </div>
          </div>
        </div>
      </div>
      {/* Projects here 
      1. Tab2XML
      2. Nifty Art?
      3. old bwl homepage
      4. make a new one

      */}


      <div className="flex w-3/4 justify-between items-end space-x-12 -mt-8 mb-8">
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
