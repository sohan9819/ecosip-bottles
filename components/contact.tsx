'use client';

import React, { useRef } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';
import { contactData } from '@/lib/data';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  const contactForm = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}>
      <SectionHeading>Contact Us</SectionHeading>

      <div className='flex flex-col justify-start items-start gap-4'>
        {contactData.map((contact, index) => (
          <div className='text-start' key={index}>
            <div className='before:content-["⯆"] flex justify-start gap-4'>
              <h1>{contact.title}</h1>
            </div>
            <p className='pl-6 border-l-2 border-[#9ca3af] ml-1 my-4'>
              {contact.describtion}
            </p>
          </div>
        ))}
      </div>

      <p className='text-neutral-700 dark:text-white/80 mt-4'>
        You can also contact us directly through this form.
      </p>
      <form
        className='mt-2 flex flex-col dark:text-black'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          contactForm.current?.reset();
          toast.success('Email sent successfully!');
        }}
        ref={contactForm}>
        <input
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all outline-none'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all outline-none resize-none'
          name='message'
          placeholder='Your message'
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
