'use client';
import Image from 'next/image';
import Link from 'next/link';

const buttonClass =
  'border-black border py-2 px-8 text-xs bg-white hover:bg-black hover:text-white border-b-3 border-r-2';

const highlightedClass =
  'border-black border py-2 px-8 text-xs bg-black text-white border-b-2';

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
      className="z-10 flex w-full justify-between items-center space-x-12 border-black bg-white"
      // style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
    >
      <Link href="/">
        <Image
          src="/tuan-dau.gif"
          className="invisible sm:visible md:ml-8"
          alt=""
          title=""
          width={200}
          height={40}
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
          href="https://drive.google.com/file/d/1QI8FG7deMMsXLC0AKguzT7mfudOF8CFN/view?usp=drive_link"
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
