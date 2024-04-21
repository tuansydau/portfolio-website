import { useState } from 'react';

interface IntroSectionProps {
  textEnterFunction?: () => void;
  textExitFunction?: () => void;
  modalFunction?: (isOpen: boolean) => void;
}

export default function SiftIntroSection({
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
        This is test text
      </div>

    </div>
  );
}
