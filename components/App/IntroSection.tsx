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
    <div className="flex flex-col w-full items-center justify-between">
      <div className="flex flex-col lg:flex-row items-center justify-center md:space-x-4 mt-32 md:mt-16 px-4">
        <div className="flex flex-col max-w-[1600px] justify-center items-center">
          <div
            className="flex flex-col text-4xl font-light bg-white rounded-md py-16 px-32 border border-black"
            onMouseEnter={textEnterFunction}
            onMouseLeave={textExitFunction}
          >
            <div className="border-b-3 w-fit border-black">
              <p
                style={{
                  fontFamily: 'Zodiak, serif',
                  fontSize: '8rem',
                  lineHeight: '10rem',
                  marginLeft: '-1.5rem'
                }}
              >
                Tuan Dau
              </p>
            </div>
            <br />
            <p
              style={{
                fontFamily: 'Zodiak, serif',
                fontSize: '2rem',
                lineHeight: '4rem',
                fontWeight: 100
              }}
            >
              Full-stack developer, designer, and occasional DevOps engineer.
              I&apos;ve worked at industry leaders like Tesla and CertiK,
              creating tools and pipelines to automate work that people hate
              doing. I also love designing websites :)
            </p>
            <br />
            <p
              style={{
                fontFamily: 'Zodiak, serif',
                fontSize: '1.75rem',
                // lineHeight: '3rem',
                fontWeight: 600
              }}
            >
              Currently: Blasting Knock2 and programming all day (I&apos;m
              unemployed)
            </p>
            <br />
            <div
              className="flex bg-white text-black text-3xl hover:border-white hover:bg-black hover:text-white hover:cursor-pointer border-b-3 border-r-2 h-16 w-fit rounded-full px-4 border border-black items-center justify-center"
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
