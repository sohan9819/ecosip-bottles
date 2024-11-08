import About from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Intro from '@/components/intro';
import Products from '@/components/products';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';
import Services from '@/components/services';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
      <About />
      <Products />
      <Services />
      <Contact />
    </main>
  );
}
