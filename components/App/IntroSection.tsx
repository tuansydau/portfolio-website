interface IntroSectionProps {
  textEnterFunction?: () => void;
  textExitFunction?: () => void;
  modalFunction: (isOpen: boolean) => void;
}

export default function IntroSection({
  textEnterFunction,
  textExitFunction,
  modalFunction
}: IntroSectionProps) {
  return (
    <div
      className="flex flex-col w-full items-center h-[800px] justify-center "
      onMouseEnter={textEnterFunction}
      onMouseLeave={textExitFunction}
    >
      <div className="flex flex-col lg:flex-row items-center bg-white justify-center md:space-x-4 -mt-16 px-4">
        <div className="flex flex-col max-w-[1200px] justify-center items-center -ml-16">
          <div className="flex">
            <div className="bg-black w-4 h-[360px] mt-8 -mr-8" />
            <div className="flex flex-col text-4xl rounded-md px-32 border-black">
              <div className="border-b-3 w-fit border-black">
                <p
                  style={{
                    fontFamily: 'Zodiak, serif',
                    fontSize: '4rem',
                    lineHeight: '8rem',
                    marginLeft: '-1rem'
                  }}
                >
                  Tuan Dau
                </p>
              </div>
              <br />
              <p
                style={{
                  fontFamily: 'Zodiak, serif',
                  fontSize: '1.25rem',
                  lineHeight: '3rem'
                }}
              >
                Full-stack developer, designer, and DevOps engineer. I&apos;ve
                worked at industry leaders like Tesla and CertiK, creating tools
                and pipelines to automate work that people hate doing. Also an
                avid tea, music, and Runescape enjoyer.
              </p>
              <br />
              <p
                style={{
                  fontFamily: 'Zodiak, serif',
                  fontSize: '1.25rem',
                  fontWeight: 600
                }}
              >
                Currently: Blasting Knock2 and redesigning this website
              </p>
              <br />
              <div
                className="flex bg-white text-black text-xl hover:border-white hover:bg-black hover:text-white hover:cursor-pointer border-b-3 border-r-2 h-12 w-fit rounded-full px-4 border border-black items-center justify-center"
                onClick={() => modalFunction(true)}
                style={{
                  fontFamily: 'Zodiak, serif'
                }}
              >
                Let&apos;s talk!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
