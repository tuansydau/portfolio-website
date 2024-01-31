'use client';

import Modal from './Modal';
import { useState } from 'react';

const whiteButtonClass =
  'border-black text-black border rounded-full py-2 px-8 bg-white hover:bg-black hover:text-white border-b-3 border-r-2 hover:cursor-pointer';

const darkButtonClass =
  'border-white text-white border rounded-full py-2 px-8 bg-[#050D21] hover:bg-white hover:text-black border-b-3 border-r-2 hover:cursor-pointer';

const whiteNavbarClass = 'flex w-full justify-center';
const darkNavbarClass = 'flex bg-[#050D21] w-full justify-center';
interface FooterPropTypes {
  buttonEnterFunction?: () => void;
  buttonLeaveFunction?: () => void;
  dark?: boolean;
}

export default function Footer({
  buttonEnterFunction,
  buttonLeaveFunction,
  dark
}: FooterPropTypes) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={dark ? darkNavbarClass : whiteNavbarClass}>
      <div className="flex w-3/4 justify-center sm:justify-between items-center sm:space-x-12 mt-4 mb-4">
        <Modal isModalOpen={modalOpen} modalSetter={setModalOpen} />
        <div
          className={'hidden sm:flex'.concat(
            dark ? ' text-white' : ' text-black'
          )}
        >
          Designed and coded by Tuan Dau • 2023
        </div>
        <div className="flex justify-center items-center space-x-4 md:space-x-12">
          <div
            className={dark ? darkButtonClass : whiteButtonClass}
            onMouseEnter={buttonEnterFunction}
            onMouseLeave={buttonLeaveFunction}
            onClick={() => setModalOpen(true)}
          >
            LinkedIn
          </div>
          <a
            className={dark ? darkButtonClass : whiteButtonClass}
            onMouseEnter={buttonEnterFunction}
            onMouseLeave={buttonLeaveFunction}
            href="mailto:tuansdau@gmail.com"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
