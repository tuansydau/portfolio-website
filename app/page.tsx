'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [randomSentence, setRandomSentence] = useState('');

  useEffect(() => {
    const sentences = [
      'Tuan is going to put NixOS on every computer he owns.',
      'Song of the Year: APT by Bruno Mars, Rosé (Spotify Wrapped, 2024).',
      'Ask Tuan about his home server, he really loves his home server.',
      'Runescape is the only game Tuan plays anymore.',
      'Previously at Arima Data, Skinopathy, Artemis Data, Tesla, CertiK, and 4PAY.',
      'Currently Watching: Better Call Saul (Season 3).',
      '39,326 Minutes Listened (Spotify Wrapped, 2024).',
      'Artist of the Decade: The Weeknd (Spotify Wrapped, 2020).',
      'Artist of the Year: Knock2 (Spotiy Wrapped, 2024).',
      "Tuan once broke prod at 4PAY - be careful with SSH, y'all.",
      'PSA: Pocketbase is awesome.',
      "Tuan's Nginx reverse proxy brought you here.",
      'Brought to You By: My $6 per month Digital Ocean Droplet.',
      'Amy drink your water, please.',
      '"If you\'ve got health insurance I want you to prove it right now" - Dillon Francis'
    ];
    const randomIndex = Math.floor(Math.random() * sentences.length);
    setRandomSentence(sentences[randomIndex]);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center text-white font-medium">
        {/* Scrolling Banner */}
        <div className="flex w-screen items-center border-t-4 border-b-4 border-white py-8 h-8 text-3xl">
          <p className="scrolling-text">{randomSentence}</p>
        </div>
        <div className="mt-8" />

        {/* Text Container */}
        <div className="flex flex-col max-w-[1500px]">
          {/*  Intro Tagline */}
          <div className="text-6xl">
            <span className="text-[#F999F9] hover:cursor-pointer">
              Tuan Dau{' '}
            </span>
            is a software engineer for{' '}
            <span className="text-[#9999FF]">hire</span>.
            <p>
              <span>{'>>>'} Prev @</span>{' '}
              <span className="text-white transition-colors duration-200 ease-in-out hover:text-red-500 hover:cursor-pointer">
                Tesla
              </span>
              ,{' '}
              <span className="text-white transition-colors duration-200 ease-in-out hover:text-gray-500 hover:cursor-pointer">
                CertiK
              </span>
              {', '}
              <span className="text-white transition-colors duration-200 ease-in-out hover:text-green-500 hover:cursor-pointer">
                Arima Data
              </span>
            </p>
            <p>{'>>> '}From Toronto, Canada</p>
          </div>

          {/* Spacer */}
          <div className="mt-8" />

          {/* "Navbar" */}
          <div className="flex w-full items-center text-3xl justify-between">
            {/* Button Container */}
            <div className="flex space-x-8">
              <div className="relative">
                {/* See My Work */}
                <div className="relative">
                  {/* Hire Me */}
                  <div className="absolute w-full text-opacity-0 h-20 rounded-md bg-[#ffbaff] z-0 text-black">
                    Hire Me
                  </div>
                  <div className="relative transition-all duration-300 ease-in-out flex items-center justify-center text-black px-8 h-20 rounded-md bg-[#f999f9] hover:cursor-pointer z-10 -top-1 -left-1 hover:top-0 hover:left-0">
                    Hire Me
                  </div>
                </div>
              </div>
              {/* See My Work */}
              <div className="relative">
                <div className="absolute w-full text-opacity-0 h-20 rounded-md bg-[#c4c4ff] z-0 text-black">
                  See My Work
                </div>
                <div className="relative transition-all duration-300 ease-in-out flex items-center justify-center text-black px-8 h-20 rounded-md bg-[#9999ff] hover:cursor-pointer z-10 -top-1 -left-1 hover:top-0 hover:left-0">
                  See My Work
                </div>
              </div>
            </div>

            {/* Button Menu */}
            <div className="flex space-x-8 -mt-2">
              {/* About Buttom */}
              <div className="decoration-solid underline-offset-8 underline hover:decoration-wavy hover:cursor-pointer ">
                About
              </div>
              {/* Work Button */}
              <div className="decoration-solid underline-offset-8 underline hover:decoration-wavy hover:cursor-pointer ">
                Work
              </div>
              {/* Download Resume Button */}
              <div className="decoration-solid underline-offset-8 underline hover:decoration-wavy hover:cursor-pointer ">
                Download Resume
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
