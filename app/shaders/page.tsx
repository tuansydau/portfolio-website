'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Shaders() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Navbar />

      {/* Project Intro */}
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
          <div className="flex flex-col ml-80 p-16">
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

      {/* Project Summary */}
      <div className="flex h-screen w-full">
        <div className="flex w-1/2 px-4">
          <div className="bg-black w-full h-2/3">Photo</div>
        </div>
        <div className="flex flex-col w-1/2">
          <div>OpenGL Shaders</div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
