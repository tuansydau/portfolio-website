import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex w-3/4 justify-between items-end space-x-12 mt-16 mb-8">
      <div>Designed and coded by Tuan Dau • 2023</div>
      <div className="flex justify-center items-center space-x-4 md:space-x-12">
        <div className="flex justify-center h-fit px-2 hover:border-white hover:bg-black hover:text-white hover:cursor-pointer items-center text-lg border border-b-2 rounded-2xl border-black">
          LinkedIn
        </div>
        <a
          className="flex justify-center h-fit px-2 hover:border-white hover:bg-black hover:text-white hover:cursor-pointer items-center text-lg border border-b-2 rounded-2xl border-black"
          href="mailto:tuansdau@gmail.com"
        >
          Email
        </a>
      </div>
    </div>
  );
}
