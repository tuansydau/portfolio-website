'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/app/globals.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10
    },
    text: {
      height: 500,
      width: 500,
      x: mousePosition.x - 250,
      y: mousePosition.y - 250,
      backgroundColor: 'white',
      mixBlendMode: 'difference'
    }
  };

  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');

  return (
    <div className="flex min-h-screen flex-col items-center">
      <Navbar highlightedButton="work" />
      <motion.div
        className="cursor"
        /* 
        //@ts-ignore */
        variants={variants}
        /* 
        //@ts-ignore */
        animate={cursorVariant}
      />
      <div
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="space-y-16 mb-36"
      >
        <div className="flex flex-col bg-white w-full max-w-[1200px] border border-black py-8 px-24 rounded-xl mt-16 text-justify">
          <p className="text-3xl font-bold underline mb-4">
            jan 17 2024 12:44am - hero section testing
          </p>
          <br />
          <h1
            className="text-center"
            style={{
              fontFamily: 'Zodiak, serif',
              fontSize: '13rem',
              lineHeight: '6rem'
            }}
          >
            Tuan Dau
          </h1>
          <br />
          <br />
          <br />
          <p
            style={{
              fontFamily: 'Zodiak, serif',
              fontSize: '2rem',
              lineHeight: '3rem',
              fontWeight: 100
            }}
          >
            Full-stack engineer, designer, and occasional DevOps developer.
            I&apos;ve worked at industry leaders like Tesla and CertiK, creating
            tools to automate away work that people hate.
          </p>
          <br />
          <p
            style={{
              fontFamily: 'Zodiak, serif',
              fontSize: '1.25rem',
              lineHeight: '3rem',
              fontWeight: 900
            }}
          >
            Currently blasting Knock2/Space Laces and programming all day (ie.
            I&apos;m unemployed)
          </p>
          <br />
          <br />
        </div>
        <div className="flex flex-col bg-white w-full max-w-[1000px] border border-black py-8 px-24 rounded-xl mt-16">
          <p className="text-3xl font-bold underline mb-4">
            dec 13 5:43pm - font testing
          </p>
          <br />
          <h1
            style={{
              fontFamily: 'Comico, cursive',
              fontSize: '2.5rem',
              lineHeight: '3rem'
            }}
          >
            &quot;Hello, we are about to launch an all-out attack on your
            houze&quot;, says zombies to plants. (Comico/Zodiak)
          </h1>
          <br />
          <p style={{ fontFamily: 'Zodiak, serif', fontSize: '1.25rem' }}>
            Good grief, what a day it&apos;s been. After dealing with a mountain
            of homework and the chaos of recess, I&apos;m utterly exhausted.
            Finally, I can crash and get some well-deserved sleep in my comfy
            bed. But hold on a minute... What&apos;s that sound? Did my closet
            door just creak open? Oh, come on! Is there another one of those
            annoying creatures lurking in my closet? Why is it that every night
            I have to deal with these creepy noises and mysterious creatures?
            Enough is enough! I&apos;ve done my bedtime routine – brushed my
            teeth, put on my pajamas, and even got tucked in by Mom. I&apos;m
            all set for a peaceful night&apos;s sleep, and now I have to lie
            here in the darkness, wondering if some zombie or monster is going
            to invade my space? Give me a break!
          </p>
          <br />
          <br />
          <h1
            style={{
              fontFamily: 'Array, sans-serif',
              fontSize: '3rem',
              lineHeight: '3rem'
            }}
          >
            Ah, Great, I Think I Got A Goddamned Monster In My Closet Again
            (Array/Khand)
          </h1>
          <br />
          <p style={{ fontFamily: 'Khand, sans-serif', fontSize: '1.5rem' }}>
            Man oh man, what a day. I tell you, all that homework and running
            around at recess must really be catching up with me, because
            brother, I am bushed. So thank God I can finally get some damned
            shut-eye around here. Yes, sir, after another hard day at school,
            nothing feels better than drifting off to sleep here in my big,
            cozy—whoa, wait a second…what was that? Did my closet door just
            creak open? Ah, for Christ&apos;s sake. Is that a goddamned monster
            in my closet again? What is it with these son of a bitch monsters?
            Every night with the creaking and the crawling. Enough, already,
            will ya? Give it a rest! Look, I&apos;ve brushed my teeth, I&apos;ve
            put on my jammies, Mommy&apos;s tucked me in—I&apos;m all ready for
            beddy-bye here, for crying out loud. And now I have to lie here in
            the darkness like a putz and wait for some stupid monster to tear me
            limb from limb? Give me a break!
          </p>
        </div>

        <div className="flex flex-col bg-white space-y-4 border border-black p-8 rounded-xl">
          <p className="text-3xl font-bold underline">
            dec 13 2:29am - name gif
          </p>
          <Image src="/tuan-dau.gif" width={350} height={75} alt=""></Image>
          <p>isnt it so cool look LOOOL</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
