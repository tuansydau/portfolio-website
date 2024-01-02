'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Shaders() {
  return (
    <div className="bg-white flex min-h-screen flex-col justify-between">
      <Navbar />
      <div className="w-full h-screen">
        <div className="mt-16 px-24">
          <div className="text-6xl border-b pb-8 font-light">
            OpenGL Shaders
          </div>
          <div className="flex justify-between mt-8">
            <div className="font-bold">Side Project</div>
            <div className="w-1/2">
              <div className="font-bold">Overview</div>
              <div>
                A collection of shaders that I created, either through tutorials
                or messing around, that I decided to make after binge watching
                Acerola&apos;s YouTube videos.
              </div>
            </div>
            <div className="font-bold">2023</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
