import React from 'react';
import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri';
import { LuGraduationCap, LuLaptop } from 'react-icons/lu';

import { FiGift } from 'react-icons/fi';
import { BsBoxSeam } from 'react-icons/bs';
import { BiLeaf } from 'react-icons/bi';

import { FaReact } from 'react-icons/fa';

import Fauxica from '@/public/Portfolio_1.png';
import NotesApp from '@/public/Portfolio_2.png';
import AlphaUI from '@/public/Portfolio_3.webp';

import Blog1 from '@/public/Blog_1.webp';
import Blog2 from '@/public/Blog_2.webp';
import Blog3 from '@/public/Blog_3.webp';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Products',
    hash: '#products',
  },
  {
    name: 'Services',
    hash: '#services',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const aboutData = [
  {
    title: 'Our Origin',
    description:
      'EcoSip was borm from a passion for sustainability and a desire to reduce single-use plastics.',
    icon: React.createElement(RiNumber1),
  },
  {
    title: 'Our Mission',
    description:
      'We craft bamboo bottles that respect nature while providing a stylish hydration solution.',
    icon: React.createElement(RiNumber2),
  },
  {
    title: 'Our Impact',
    description:
      'EcoSip has helped reduce plastiv waste and inspired eco-conscious living worldwode',
    icon: React.createElement(RiNumber3),
  },
] as const;

export const experiencesData = [
  {
    title: 'Software Engineering Internship',
    location: 'JPMorgan Chase & Co.',
    description:
      'I worked on fixing bugs and issues in an open-source project named perspective, I also enhanced my skills in Python, Git, and GitHub during this internship',
    icon: React.createElement(LuLaptop),
    date: '2020',
  },
  {
    title: 'Advanced Frontend Developer',
    location: 'NEOG bootcamp',
    description:
      'I completed my advanced frontend Bootcamp in 6 months where I also worked on multiple projects to sharpen my skills.',
    icon: React.createElement(LuLaptop),
    date: '2022',
  },
  {
    title: 'B.Tech Industrial Instrumentation',
    location: 'Mumbai, India',
    description:
      "I graduated from Vivekanand Eduation Society's Institute of Technology(VESIT)",
    icon: React.createElement(LuGraduationCap),
    date: '2019 - 2023',
  },
  {
    title: 'Frontend Developer',
    location: 'Mumbai, India',
    description:
      "I'm now a Frontend developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2023 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'Natural Beauty',
    description:
      'Each EcoSip bottle showcases unique bamboo patterns, making it a work of art',
    imageUrl: Fauxica,
  },
  {
    title: 'Stylish Design',
    description:
      'A Next.js note-taking app with markdown and tag support, plus social authentication. Simplify your note management.',
    github: 'https://github.com/sohan9819/notes_app',
    live: 'https://notes-app-tuo1.vercel.app',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'T3', 'Supabase'],
    imageUrl: NotesApp,
  },
  {
    title: 'Eco-Friendly',
    description:
      'An elegant UI library for responsive web design solutions. Elevate your web projects with simplicity and style.',
    github: 'https://github.com/sohan9819/Alpha-UI',
    live: 'https://alpha-dark-ui.netlify.app',
    tags: ['HTML', 'SCSS', 'JavaScript', 'Netlify'],
    imageUrl: AlphaUI,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'SCSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'T3',
  'Express',
  'PostgreSQL',
  'Firebase',
  'Python',
  'Django',
  'FastApi',
  'Framer Motion',
] as const;

export const servicesData = [
  {
    icon: FiGift,
    title: 'Custom Branding',
    describtion:
      'We offer personalized bamboo bottles for corporate gifting and events.',
  },
  {
    icon: BsBoxSeam,
    title: 'Bulk Orders',
    describtion:
      'Eco-conscious businesses can order in bulk for sustainable office solutions.',
  },
  {
    icon: BiLeaf,
    title: 'Eco-Packaging',
    describtion:
      'Our packaging is 100% recyclable, furthering our commitment to the environment.',
  },
] as const;

export const contactData = [
  {
    title: 'How can we help you?',
    describtion:
      'For inquiries, orders, or partnerships, reach out to us at 9117736591 or 8779004596 (Manipal).',
  },
  {
    title: 'Connect on social media',
    describtion:
      'Follow us on Instagram, Facebook, and Twitter for eco-tips and product updates.',
  },
  {
    title: 'Visit our store',
    describtion:
      'Experience EcoSip bottles in person at our Manipal location. See map for directions.',
  },
] as const;
