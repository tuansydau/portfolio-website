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
    <div className="flex flex-col w-full items-center h-[800px] justify-center ">
      {/* Short Magazine Blurb */}
      {/* <div className="flex flex-col lg:flex-row items-center bg-white justify-center md:space-x-4 -mt-16 px-4">
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
      </div> */}

      {/* Designers/writers theme */}
      <div className="w-full h-full max-w-[2000px]">
        <div
          className="w-full h-full"
          style={{ fontFamily: 'zodiak' }}
          onMouseEnter={textEnterFunction}
          onMouseLeave={textExitFunction}
        >
          <div className="w-full h-full flex flex-col items-start justify-between">
            <div
              className="pl-16 -mt-24"
              style={{
                fontSize: '14rem',
                lineHeight: '14rem',
                fontWeight: 600
              }}
            >
              programmer
            </div>
            <div className="flex w-full justify-center items-center mt-24">
              <div className="w-1/6" style={{ fontSize: '.75rem' }}>
                <div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industrys standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </div>
              </div>
              <div
                className="flex justify-center items-center w-1/2 -mt-8"
                style={{ fontSize: '2rem' }}
              >
                tuan dau:{' '}
                <b className="pl-3" style={{ fontWeight: 900 }}>
                  portfolio website
                </b>
              </div>
              <div className="w-1/6" style={{ fontSize: '.75rem' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industrys
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </div>
            </div>
            <div
              className="flex justify-end w-full pr-16 mt-24"
              style={{ fontSize: '7rem', lineHeight: '7rem', fontWeight: 900 }}
            >
              <div>(sometimes designer)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
