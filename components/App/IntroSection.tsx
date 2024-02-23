import { useState } from 'react';

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
      className="flex flex-col w-full h-screen items-center justify-center pt-16"
      onMouseEnter={textEnterFunction}
      onMouseLeave={textExitFunction}
    >
      <div
        className="px-24 w-full"
        style={{
          fontFamily: 'satoshi',
          fontSize: '2.5vw',
          fontWeight: '900',
          paddingRight: '40vw'
        }}
      >
        Hello!{' '}
        <span style={{ fontWeight: '100' }}>
          I&apos;m Tuan, a fullstack engineer from Toronto! I&apos;m currently
          working at{' '}
          <span className="text-[#2fd063]" style={{ fontWeight: '600' }}>
            Arima Data
          </span>{' '}
          as a <span style={{ fontWeight: '500' }}>Frontend Engineer</span> and{' '}
          <span style={{ fontWeight: '500' }}>Designer</span>.
          <div
            className="flex bg-white font-light text-black text-[1.75vw] font-thin hover:border-white hover:bg-black hover:text-white hover:cursor-pointer border-b-3 border-r-2 h-[10vh] mt-[5vh] w-[9vw] px-2 border border-black items-center justify-center"
            onClick={() => modalFunction(true)}
            style={{
              fontFamily: 'satoshi, serif'
            }}
          >
            Let&apos;s talk!
          </div>
        </span>
      </div>

      {/* Short Magazine Blurb */}
      {/* <div className="flex w-full max-w-[2000px] flex-col lg:flex-row md:space-x-4 px-24">
        <div className="flex flex-col items-center -ml-16">
          <div className="flex">
            <div className="bg-black w-4 h-[360px] mt-8 ml-16" />
            <div className="flex flex-col text-4xl rounded-md px-32 border-black">
              <div className="border-b-3 w-fit border-black">
                <p
                  style={{
                    fontFamily: 'satoshi, serif',
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
                className="w-full max-w-[800px]"
                style={{
                  fontFamily: 'satoshi, serif',
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
                  fontFamily: 'satoshi, serif',
                  fontSize: '1.25rem',
                  fontWeight: 600
                }}
              >
                Currently: Blasting Knock2 and redesigning this website
              </p>
              <br />
              <div
                className="flex bg-white text-black text-xl hover:border-white hover:bg-black hover:text-white hover:cursor-pointer border-b-3 border-r-2 h-12 w-fit px-4 border border-black items-center justify-center"
                onClick={() => modalFunction(true)}
                style={{
                  fontFamily: 'satoshi, serif'
                }}
              >
                Let&apos;s talk!
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Designers/writers theme */}
      {/* <div className="w-full h-full max-w-[2000px]">
        <div
          className="w-full h-full"
          style={{ fontFamily: 'satoshi' }}
          onMouseEnter={textEnterFunction}
          onMouseLeave={textExitFunction}
        >
          <div className="w-full h-full flex flex-col items-center justify-between">
            <div
              className="-mt-24"
              style={{
                fontSize: '14rem',
                lineHeight: '14rem',
                fontWeight: 600
              }}
            >
              programmer
            </div>
            <div className="flex flex-col w-full items-center">
              <div
                className="flex justify-center items-center w-1/2"
                style={{ fontSize: '2rem' }}
              >
                <b style={{ fontWeight: 900 }}>tuan dau: </b>
                <div className="pl-2">portfolio website</div>
              </div>
              <div className="w-1/2 text-center" style={{ fontSize: '.95rem' }}>
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
              className="flex justify-center w-full"
              style={{ fontSize: '7rem', lineHeight: '7rem', fontWeight: 900 }}
            >
              <div>(sometimes designer)</div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
