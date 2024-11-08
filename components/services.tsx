'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import Image from 'next/image';
import Fauxica from '@/public/Fauxica.bmp';
import { servicesData } from '@/lib/data';
import Link from 'next/link';
import { FiGift } from 'react-icons/fi';

export default function Services() {
  const { ref } = useSectionInView('Services');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-4xl leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='services'>
      <SectionHeading>Our Services</SectionHeading>

      <div className='flex flex-col gap-6 lg:gap-4 lg:flex-row'>
        {servicesData.map((service, index) => {
          const Icon = service.icon;
          return (
            <article
              key={index}
              className='flex flex-nowrap justify-center items-center text-center max-w-sm flex-col gap-2'>
              <Icon className='text-6xl' />
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white line-clamp-2'>
                {service.title}
              </h5>
              <p className='mb-3 font-normal text-neutral-700 dark:text-neutral-400 line-clamp-3 text-sm'>
                {service.describtion}
              </p>
            </article>
          );
        })}
      </div>
    </motion.section>
  );
}
