import Image from 'next/image';
import Link from 'next/link';

const buttonClass =
  'border-black border rounded-full py-2 px-8 bg-white hover:bg-black hover:text-white border-b-2';

export default function Navbar() {
  return (
    <div className="fixed z-0 flex w-full justify-between items-center space-x-12 py-2 px-8 border-black">
      <Link href="/">
        <Image
          src="/logo1.png"
          className="ml-4"
          alt=""
          title="isnt he cute i made him myself"
          width={50}
          height={50}
        />
      </Link>
      <div className="flex space-x-4">
        <Link href="/">
          <div className={buttonClass}>Home</div>
        </Link>
        <Link href="/about">
          <div className={buttonClass}>About</div>
        </Link>
        <Link href="/work">
          <div className={buttonClass}>Work</div>
        </Link>
        <div className={buttonClass}>Resume</div>
      </div>
    </div>
  );
}
