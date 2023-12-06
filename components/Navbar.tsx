import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed bg-white flex w-full justify-between items-center space-x-12 py-2 px-8 border-b border-black">
      <Image
        src="/logo1.png"
        alt=""
        title="isnt he cute i made him myself"
        width={50}
        height={50}
      />
      <Link href="/">
        <div className="py-3 px-8">Home</div>
      </Link>
      <Link href="/about">
        <div className="py-3 px-8">About</div>
      </Link>
      <Link href="/work">
        <div className="py-3 px-8">Work</div>
      </Link>
      <div className="py-3 px-8">Resume</div>
      <div />
    </div>
  );
}
