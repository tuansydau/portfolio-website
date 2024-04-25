'use client';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between ">
      {/* page container */}
      <div className="flex w-full min-h-screen max-w-[1360px]">
        {/* Navbar */}
        <div className="fixed w-full max-w-[1360px]">
          {/* <Navbar highlightedButton={'home'} /> */}
        </div>

        {/* Body container */}
        <div className="w-full">
          {/* Hero section */}
          <div
            className="mt-24 w-7/12"
            style={{
              fontFamily: 'inter',
              fontSize: '120px',
              lineHeight: '100%',
              letterSpacing: '-0.25rem',
              fontWeight: 700
            }}
          >
            <span className="-ml-6">TUAN DAU</span>
            <div className="flex h-[120px] items-center">
              {/* <div className="bg-black w-[400px] h-[90px] mr-2" /> */}
              IS NOW A
            </div>
            DEVELOPER
          </div>
          <div
            className="w-full text-right mt-36 text-[#414141]"
            style={{
              fontFamily: 'inter',
              fontSize: '120px',
              lineHeight: '100%',
              letterSpacing: '-0.25rem',
              fontWeight: 700
            }}
          >
            (Real shit?)
          </div>

          {/* About me */}
          <div className="flex w-full justify-between min-h-screen items-center">
            <div className="w-full flex">
              <div
                className="w-1/3"
                style={{
                  fontFamily: 'inter',
                  fontSize: '20px',
                  letterSpacing: '0rem',
                  fontWeight: 900
                }}
              >
                (Well, I mean)
              </div>
              <div
                className="w-2/3"
                style={{
                  fontFamily: 'satoshi',
                  fontSize: '40px',
                  lineHeight: '110%',
                  letterSpacing: '-0.05rem',
                  fontWeight: 300
                }}
              >
                Tuan was always a developer, but up until recently he was
                unemployed, and still finding his niche. Now that Tuan has a
                job, he can finally say that he has no idea what his niche is,
                but with confidence.
                <br />
                <br />
                Tuan is mainly a front end developer, and occasional UI/UX
                designer at{' '}
                <a
                  href="https://www.arimadata.com"
                  className="font-medium text-green-500"
                >
                  Arima Data
                </a>
                .
              </div>
            </div>
          </div>
          {/* Skills */}
          <div
            className="flex flex-col w-full items-center min-h-screen"
            style={{
              fontFamily: 'satoshi',
              fontSize: '60px',
              lineHeight: '110%',
              letterSpacing: '0rem',
              fontWeight: 700,
              listStyleType: 'circle'
            }}
          >
            <div className="text-center">
              Although Tuan doesn&apos;t know his niche, he has done the
              following...
            </div>
            <ul
              className="text-center mt-4"
              style={{
                fontFamily: 'satoshi',
                fontSize: '30px',
                lineHeight: '200%',
                letterSpacing: '-0.05rem',
                fontWeight: 300
              }}
            >
              <li>
                Back End - Python (Flask, FastAPI), MongoDB, PostgreSQL,
                Ethereum/Solidity
              </li>
              <li>
                Front End - Typescript/Javascript/React, Valtio, HTML/CSS,
                Framer
              </li>
              <li>
                DevOps - Azure/AWS, DigitalOcean, Jenkins, Github Actions,
                Docker
              </li>
              <li>UI/UX Design - Figma, User Interviews</li>
              <br />
              <li>
                And kind of: Computer Graphics, Compiler Tools, Data Mining,
                Machine Learning
              </li>
            </ul>
          </div>
          {/* <div className="min-h-screen"></div> */}
        </div>
      </div>
    </div>
  );
}
