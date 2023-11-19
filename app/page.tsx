import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex w-full justify-end">
        <div className="flex w-[24rem] h-24 items-center justify-between mr-16">
          <div className="flex px-4 h-12 justify-center items-center text-lg font-semibold border-b-4 text-[#abb589] border-[#abb589]">
            Work
          </div>
          <div className="flex h-12 justify-center items-center text-lg font-semibold text-[#abb589]">
            About
          </div>
          <div className="flex h-12 justify-center items-center text-lg font-semibold text-[#abb589]">
            Resume
          </div>
        </div>
      </div>

      {/* intro section */}
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-row items-center justify-center w-1/2 mt-24">
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
        <div className="flex flex-col w-2/3 mt-16">
          <div className="text-3xl font-bold mt-16 text-[#abb589]">Work</div>
          <div className="">item 1</div>
          <div>item 2</div>
          <div>item 3</div>
          <div>item 4</div>
          <div>item 5</div>
          <div>item 6</div>
        </div>
      </div>
    </div>
  );
}
