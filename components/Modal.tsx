'use client';
import { Dispatch, SetStateAction, useEffect } from 'react';

const buttonClass =
  'border-black border rounded-full py-2 px-8 hover:bg-black hover:text-white border-b-2 hover:cursor-pointer';

interface ModalProps {
  isModalOpen: boolean;
  modalSetter: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ isModalOpen, modalSetter }: ModalProps) {
  const handleEscKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') modalSetter(false);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  });

  return (
    isModalOpen && (
      <div className="fixed w-screen h-screen z-10">
        <div
          className="fixed w-screen h-screen opacity-30 bg-black left-0 bottom-0"
          onClick={() => modalSetter(false)}
        ></div>
        <div className="flex flex-col fixed bg-white border-black border border-b-2 max-w-[25%] min-w-[20rem] h-[20rem] rounded-3xl z-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -mt-8">
          <div
            className="fixed text-3xl right-4 top-2 rotate-45 hover:cursor-pointer"
            onClick={() => modalSetter(false)}
          >
            +
          </div>
          <div className="flex flex-col h-full items-center justify-center p-8 space-y-4">
            <div className="flex text-3xl justify-center font-bold text-center">
              Wait! Do you want to go silent?
            </div>
            <div className="flex w-full text-center">
              This will send you to my LinkedIn, which means that I&apos;ll be
              able to see that you checked my profile if you&apos;re not in
              private mode. Are you ready to go?
            </div>
            <div className="flex space-x-4 mt-8">
              <a href="https://www.linkedin.com/in/tuansydau" target="_blank">
                <div className={buttonClass}>Yes!</div>
              </a>
              <div className={buttonClass} onClick={() => modalSetter(false)}>
                Cancel!
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
