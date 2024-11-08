'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import BambooBottleImage from '@/public/BambooBottle.webp';
import HackerText from './hackerText';
import { textTypingEffect } from '@/lib/utils';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const tagLineRef = useRef<HTMLElement>(null);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    textTypingEffect(
      tagLineRef.current as HTMLElement,
      ": Nature's Hydration Solution",
    );
  }, []);

  return (
    <section
      ref={ref}
      id='home'
      className='mb-28 max-w-4xl text-center sm:mb-0 scroll-mt-[100rem] w-screen relative'>
      <div className='flex items-center justify-start px-4'>
        <div className='relative w-3/12'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}>
            <Image
              src={BambooBottleImage}
              alt='profile image'
              layout='responsive'
              width={120}
              height={120}
              className='dark:grayscale dark:hover:grayscale-0'
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className='mb-6 mt-4 px-4 text-2xl lg:text-8xl md:text-4xl !leading-[1.5] text-left'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        {/* <HackerText>Hello world;</HackerText> */}
        EcoSip
        <span ref={tagLineRef} />
      </motion.h1>
      <motion.h1
        className='mb-10 mt-4 px-4 text-base !leading-[1.5] text-left'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        Sip Sustainably, Stay Hydrated with EcoSip's eco-friendly bamboo
        bottles.
      </motion.h1>

      <motion.div
        className='flex flex-row items-center flex-wrap justify-start gap-2 px-4 text-base font-medium w-full'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}>
        <Link
          href='#contact'
          className='group px-4 py-1 rounded-lg bg-neutral-900 text-white hover:bg-neutral-950 transition-all flex items-center gap-2 justify-center dark:bg-white dark:text-neutral-900'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}>
          Shop Now
          {/* <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' /> */}
        </Link>

        <Link
          className='group bg-white px-4 py-1 flex items-center gap-2 rounded-lg transition cursor-pointer borderBlack dark:bg-white/10'
          href='/SOHAN_SHETTY.pdf'
          download
          target='_blank'>
          Learn More
          {/* <HiDownload className='opacity-60 group-hover:translate-y-1 transition' /> */}
        </Link>
      </motion.div>
    </section>
  );
}
