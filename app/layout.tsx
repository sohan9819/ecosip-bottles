import Header from '@/components/header';
import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "EcoSip: Nature's Hydration Solution",
  description:
    "Sip Sustainably, Stay Hydrated with EcoSip's eco-friendly bamboo bottles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${inter.className} bg-neutral-50 text-neutral-950 relative pt-28 sm:pt-36 dark:bg-neutral-950 dark:text-neutral-50 dark:text-opacity-90 selection:text-neutral-100 selection:bg-neutral-950 dark:selection:text-neutral-950 dark:selection:bg-neutral-100 `}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position='top-right' />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
