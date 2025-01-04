import Link from 'next/link';

export default function NavigationMenu() {
  return (
    <>
      {/* Nav Menu */}
      <div className="flex space-x-8 text-4xl w-full justify-end">
        {/* Home Button */}
        <Link href="/">
          <div className="decoration-solid underline-offset-8 underline hover:decoration-wavy hover:cursor-pointer ">
            Home
          </div>
        </Link>
        {/* About Button */}
        <Link href="/about">
          <div className="decoration-solid underline-offset-8 underline hover:decoration-wavy hover:cursor-pointer ">
            About
          </div>
        </Link>
        {/* For Fun Button */}
        {/* <Link href="/">
          <div className="decoration-solid underline-offset-8 underline hover:decoration-wavy hover:cursor-pointer ">
            For Fun
          </div>
        </Link> */}
        {/* Download Resume Button */}
        <Link
          href="https://drive.google.com/file/d/15ee9NF4J-UAojcLkore_cBhtF1FVezUk/view?usp=drive_link"
          target="_blank"
        >
          <div className="decoration-solid underline-offset-8 underline hover:decoration-wavy hover:cursor-pointer ">
            Resume
          </div>
        </Link>
      </div>
    </>
  );
}
