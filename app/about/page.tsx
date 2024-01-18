import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Navbar highlightedButton={'about'} />

      <div className="flex space-x-16 w-full justify-center mt-32 mb-32">
        <div className="flex flex-col text-[#000] items-center justify-center mx-96">
          <p
            className="text-center w-fit mb-16"
            style={{
              fontFamily: 'Zodiak, serif',
              fontSize: '4rem',
              lineHeight: '3rem',
              fontWeight: 700
            }}
          >
            Hi, I&apos;m Tuan!
          </p>
          <p
            className="text-center w-fit mb-16"
            style={{
              fontFamily: 'Zodiak, serif',
              fontSize: '1.25rem',
              lineHeight: '4rem',
              fontWeight: 375
            }}
          >
            I went to York University for Software Engineering, and currently
            live in Guelph, Ontario. I&apos;ve worked at Tesla, CertiK, Artemis
            Data, 4PAY Inc (x2), Big Whale Labs, and Skinopathy building
            automation tools and build CI/CD pipelines. I also love designing
            websites and talking to clients.
          </p>
          <p
            className="text-center w-fit mb-16"
            style={{
              fontFamily: 'Zodiak, serif',
              fontSize: '1.25rem',
              lineHeight: '4rem',
              fontWeight: 375
            }}
          >
            When I&apos;m not programming, I{' '}
            <Link
              className="text-violet-600 hover:text-violet-400"
              href="https://www.tuandau.ca"
              target="_blank"
            >
              do DJ/event photography,
            </Link>{' '}
            <Link
              className="text-blue-600 hover:text-blue-400"
              href="https://how-dry-is-moo.vercel.app/"
              target="_blank"
            >
              play a lot of Runescape,
            </Link>{' '}
            <Link
              className="text-[#4d94ca] hover:text-[#8fc4ea]"
              href="https://scuderia.alphatauri.com/en/"
              target="_blank"
            >
              patiently wait for the F1 season to start,
            </Link>{' '}
            <Link
              className="text-[#FF4454] hover:text-[#f4979f]"
              href="https://tracker.gg/valorant/profile/riot/Verified%20Email%23NA1/overview"
              target="_blank"
            >
              derank in Valorant,
            </Link>{' '}
            enjoy the photography of others, read magazines, doomscroll, geek
            about my skincare, occasionally rewatch Silicon Valley for the 5th+
            time, go on little nature walks, get injured on the nature walk
            without knowing where the damage came from, pump iron,
            chit-chat/cook with friends, and take spontaneous trips.
          </p>
          {/* <p
            className="text-center w-fit mb-16"
            style={{
              fontFamily: 'Zodiak, serif',
              fontSize: '2.5rem',
              lineHeight: '2rem',
              fontWeight: 375
            }}
          >
            Quotes that I think about often
          </p>
          <div className="flex flex-col items-center">
            <p
              className="text-center w-64 mb-4"
              style={{
                fontFamily: 'Zodiak, serif',
                fontSize: '1.25rem',
                lineHeight: '2rem',
                fontWeight: 375
              }}
            >
              &quot;If you&apos;ve got health insurance I want you to prove it
              right now&quot;
            </p>
            <p
              className="text-center w-full"
              style={{
                fontFamily: 'Zodiak, serif',
                fontSize: '1.25rem',
                lineHeight: '2rem',
                fontWeight: 500
              }}
            >
              <Link
                href="https://youtu.be/nonZwh7nKUQ?si=ZaStIwTSEX5Ua7BZ&t=2125"
                className="text-gray-600 hover:text-black"
              >
                - Dillon Francis
              </Link>
            </p>
          </div> */}
        </div>
        <div className="mt-32" />
      </div>

      <Footer />
    </div>
  );
}
