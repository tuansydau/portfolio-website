interface IntroSectionProps {
  textEnterFunction: () => void;
  textExitFunction: () => void;
  modalFunction: (isOpen: boolean) => void;
}

export default function IntroSection({
  textEnterFunction,
  textExitFunction,
  modalFunction
}: IntroSectionProps) {
  return (
    <div className="flex flex-col w-full items-center justify-between">
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1000px] md:space-x-4 mt-16 md:mt-24 lg:mt-12 lg:px-4">
        <div className="flex flex-col w-4/5 md:w-5/5 justify-center items-center">
          <div
            className="flex flex-col text-4xl font-light text-center items-center mb-2 bg-white border border-black rounded-xl py-12 px-16"
            onMouseEnter={textEnterFunction}
            onMouseLeave={textExitFunction}
          >
            Hey, I&apos;m Tuan, a full-stack developer. Currently obsessed with
            designing web apps, APIs, and occasionally green tea.
            <div
              className="flex bg-white text-black text-xl hover:border-white hover:bg-black hover:text-white hover:cursor-pointer border-b-3 border-r-2 h-12 w-fit rounded-full mt-6 px-4 border border-black items-center justify-center"
              onClick={() => modalFunction(true)}
            >
              Let&apos;s talk!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
