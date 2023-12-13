import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Navbar highlightedButton="work" />

      <div></div>
      <div className="flex flex-col items-center">
        <Image src="/tuan-dau.gif" width={350} height={75} alt=""></Image>
        isnt it so cool look LOOOL
      </div>
      <Footer />
    </div>
  );
}
