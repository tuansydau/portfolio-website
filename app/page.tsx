import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex w-full justify-end">
        <div className="flex w-[24rem] h-24 items-center justify-between mr-16">
          <Link href="/"><div className="flex px-4 h-12 justify-center items-center text-lg font-semibold border-b-4 text-[#abb589] border-[#abb589]">Work</div></Link>
          <Link href="/about"><div className="flex h-12 justify-center items-center text-lg font-semibold text-[#abb589] hover:cursor-pointer">About</div></Link>
          <Link href="/resume"><div className="flex h-12 justify-center items-center text-lg font-semibold text-[#abb589] hover:cursor-pointer">Resume</div></Link>
        </div>
      </div>

      {/* intro section */}
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-row items-center justify-center w-3/4 space-x-4 mt-24">
          <div className="flex text-5xl w-full">
            this empty box will be a photo or something
          </div>
          <div>
            <div className="flex flex-row text-4xl font-light font-['Helvetica Neue']">
              Hey, I'm Tuan, a new-grad full-stack developer with a love of
              usable products. I make web apps that users love.
            </div>
            <div className="flex h-12 w-fit rounded-xl mt-4 px-4 border-2 text-[#abb589] border-[#abb589] font-bold items-center justify-center">
              Hire me
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/4 mt-16">
          <div className="text-3xl font-bold mt-16 text-[#abb589] mb-4">Work</div>
          
          <div className="flex flex-col space-y-4 mb-4">
                <div className="flex space-x-4">
                    <div className="flex items-center w-1/2 border h-24 rounded-xl">
                      <div>photo</div>
                      <div>
                        <div>company</div>
                        <div>job title</div>
                      </div>
                    </div>
                    <div className="flex items-center w-1/2 border h-24 rounded-xl">
                      <div>photo</div>
                      <div>
                        <div>company</div>
                        <div>job title</div>
                      </div>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className="flex items-center w-1/2 border h-24 rounded-xl">
                      <div>photo</div>
                      <div>
                        <div>company</div>
                        <div>job title</div>
                      </div>
                    </div>
                    <div className="flex items-center w-1/2 border h-24 rounded-xl">
                      <div>photo</div>
                      <div>
                        <div>company</div>
                        <div>job title</div>
                      </div>
                    </div>
                </div><div className="flex space-x-4">
                    <div className="flex items-center w-1/2 border h-24 rounded-xl">
                      <div>photo</div>
                      <div>
                        <div>company</div>
                        <div>job title</div>
                      </div>
                    </div>
                    <div className="flex items-center w-1/2 border h-24 rounded-xl">
                      <div>photo</div>
                      <div>
                        <div>company</div>
                        <div>job title</div>
                      </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}
