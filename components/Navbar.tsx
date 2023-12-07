'use client';
import Image from 'next/image';
import Link from 'next/link';

const buttonClass =
  'border-black border rounded-full py-2 px-8 bg-white hover:bg-black hover:text-white border-b-2';

const highlightedClass =
  'border-black border rounded-full py-2 px-8 bg-black text-white border-b-2';

export default function Navbar({ highlightedButton }: any) {
  return (
    <div className="fixed z-0 flex w-full justify-between items-center space-x-12 py-2 px-8 border-black">
      <Link href="/">
        <Image
          src="/logo1.png"
          className="invisible sm:visible sm:ml-4"
          alt=""
          title="isnt he cute i made him myself"
          width={50}
          height={50}
        />
      </Link>
      <div className="flex space-x-4">
        <Link href="/">
          <div
            className={
              highlightedButton === 'home' ? highlightedClass : buttonClass
            }
          >
            Home
          </div>
        </Link>
        <Link href="/about">
          <div
            className={
              highlightedButton === 'about' ? highlightedClass : buttonClass
            }
          >
            About
          </div>
        </Link>
        <Link href="/work">
          <div
            className={
              highlightedButton === 'work' ? highlightedClass : buttonClass
            }
          >
            Work
          </div>
        </Link>
        {/* <div
          className={
            highlightedButton === 'resume' ? highlightedClass : buttonClass
          }
        >
          Resume
        </div> */}
      </div>
    </div>
  );
}
