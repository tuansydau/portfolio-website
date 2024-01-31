'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Shaders() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Navbar />

      <div className="min-h-screen flex flex-col justify-center">
        <div className="flex items-center">
          <div
            className="-ml-80"
            style={{
              fontFamily: 'zodiak, serif',
              fontSize: '48rem',
              lineHeight: '48rem',
              letterSpacing: '-1rem',
              fontWeight: 100
            }}
          >
            01
          </div>
          <div className="flex flex-col bg-gray-50 ml-80 p-16 border border-gray-100">
            <div
              style={{ fontSize: '4rem', lineHeight: '4rem', fontWeight: 600 }}
            >
              OpenGL Shaders
            </div>

            <div
              className="mt-12 w-2/3"
              style={{
                fontSize: '1.5rem',
                lineHeight: '2rem',
                fontWeight: 300
              }}
            >
              A collection of OpenGL fragment shaders that I wrote to explore
              the field of graphics programming.
            </div>
            <div className="mt-8" />
            <ul style={{ fontSize: '1.25rem' }}>
              <li>
                <b>Categories/Tools:</b>
              </li>
              <li style={{ fontWeight: 300 }}>OpenGL</li>
              <li style={{ fontWeight: 300 }}>GLSL</li>
              <li style={{ fontWeight: 300 }}>Graphics Programming</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
