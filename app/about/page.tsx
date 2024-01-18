import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Navbar highlightedButton={'about'} />

      <div className="flex space-x-16 w-full justify-center -mt-32 mb-16">
        <div className="flex flex-col text-[#000] items-center space-y-16">
          <p
            className="text-center w-fit"
            style={{
              fontFamily: 'Zodiak, serif',
              fontSize: '3rem',
              lineHeight: '3rem'
            }}
          >
            Hi, I&apos;m Tuan!
          </p>
          <div className="relative w-48 h-64">
            <Image src="/me.jpg" alt="" fill objectFit="cover" />
          </div>
        </div>
        <div className="mt-32"></div>
      </div>

      <Footer />
    </div>
  );
}
