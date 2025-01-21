import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Providers from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mini drinks app, Nextjs',
  description: 'A mini app for nextJs playground.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="px-8 py-20 max-w-6xl mx-auto">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
