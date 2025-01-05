import { SuffixPathnameNormalizer } from 'next/dist/server/future/normalizers/request/suffix';
import Link from 'next/link';
import { useState } from 'react';

export default function HireMeBlock() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('tuansdau@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    // Top-level
    <div className="w-full border-2 border-white p-12">
      {/* Text and button wrapper */}
      <div className="flex">
        {/* Text Wrapper */}
        <div className="w-3/5">
          <div className="text-5xl" style={{ fontFamily: 'Array-Wide' }}>
            {"Like my work? Let's chat!"}
          </div>
          <div className="text-2xl mt-6 font-poppinsLight leading-loose">
            {
              "If you're looking for a developer for your company, or for someone to talk about music and Runescape, I'd love to meet you! Open to emails and meetings, as well as coffee if you're in the Toronto area :)"
            }
          </div>
        </div>

        {/* Button Wrapper */}
        <div
          className="flex flex-col w-2/5 px-10 justify-center space-y-16"
          style={{ fontFamily: 'Array-BoldWide' }}
        >
          <Link href="https://www.linkedin.com/in/tuansydau/" target="_blank">
            <button className="border border-white px-10 py-5 text-4xl w-full min-w-[280px] hover:text-black hover:bg-white">
              LinkedIn
            </button>
          </Link>
          <button
            className="border border-white py-5 w-full min-h-[83px] min-w-[280px] hover:text-black hover:bg-white"
            onClick={handleCopyEmail}
          >
            {copied ? (
              <span className="text-2xl">Copied to Clipboard</span>
            ) : (
              <span className="text-4xl px-10">Email Me</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
