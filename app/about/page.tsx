import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Navbar highlightedButton={'about'} />
      <div className="max-w-[800px] mt-16 mb-16">
        <div className="flex flex-col border bg-[#eee] text-[#000] items-center px-36 py-12">
          <p
            className="border-b text-center w-fit"
            style={{
              fontFamily: 'Zodiak, serif',
              fontSize: '3rem',
              lineHeight: '3rem'
            }}
          >
            Hi, I&apos;m Tuan!
          </p>
          <br />
          <p
            className="text-center"
            style={{
              fontFamily: 'Zodiak, serif',
              fontSize: '1.5rem',
              lineHeight: '2rem'
            }}
          >
            The website is currently under maintenance - If you&apos;re an
            employer, my bad :)
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
