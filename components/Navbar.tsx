'use client';
import Image from 'next/image';
import Link from 'next/link';

const buttonClass =
  'border-black border rounded-full py-2 px-8 bg-white hover:bg-black hover:text-white border-b-3 border-r-2';

const highlightedClass =
  'border-black border rounded-full py-2 px-8 bg-black text-white border-b-2';

interface NavbarPropTypes {
  highlightedButton?: string;
  buttonEnterFunction?: () => void;
  buttonLeaveFunction?: () => void;
}

export default function Navbar({
  highlightedButton,
  buttonEnterFunction,
  buttonLeaveFunction
}: NavbarPropTypes) {
  return (
    <div
      className="z-10 flex w-full justify-between items-center space-x-12 py-6 px-8 border-black"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
    >
      <Link href="/">
        <Image
          src="/tuan-dau.gif"
          className="invisible sm:visible md:ml-16"
          alt=""
          title=""
          width={200}
          height={80}
        />
      </Link>
      <div className="flex space-x-4">
        <Link href="/">
          <div
            className={
              highlightedButton === 'home' ? highlightedClass : buttonClass
            }
            onMouseEnter={buttonEnterFunction}
            onMouseLeave={buttonLeaveFunction}
          >
            Home
          </div>
        </Link>
        <Link href="/about">
          <div
            className={
              highlightedButton === 'about' ? highlightedClass : buttonClass
            }
            onMouseEnter={buttonEnterFunction}
            onMouseLeave={buttonLeaveFunction}
          >
            About
          </div>
        </Link>
        <Link
          href="https://drive.google.com/file/d/1oj6qSUW23p4jZxEMGuhqXzd7lqEUuPBL/view?usp=sharing"
          target="_blank"
        >
          <div
            className={
              highlightedButton === 'work' ? highlightedClass : buttonClass
            }
            onMouseEnter={buttonEnterFunction}
            onMouseLeave={buttonLeaveFunction}
          >
            Resume
          </div>
        </Link>
      </div>
    </div>
  );
}
