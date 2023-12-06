'use client';

import Modal from './Modal';
import { useState } from 'react';

const buttonClass =
  'border-black border rounded-full py-2 px-8 bg-white hover:bg-black hover:text-white border-b-2 hover:cursor-pointer';

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex w-3/4 justify-between items-end space-x-12 mt-16 mb-8">
      <Modal isModalOpen={modalOpen} modalSetter={setModalOpen} />
      <div>Designed and coded by Tuan Dau • 2023</div>
      <div className="flex justify-center items-center space-x-4 md:space-x-12">
        <div className={buttonClass} onClick={() => setModalOpen(true)}>
          LinkedIn
        </div>
        <a className={buttonClass} href="mailto:tuansdau@gmail.com">
          Email
        </a>
      </div>
    </div>
  );
}
