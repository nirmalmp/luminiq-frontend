import { Inter, Playfair_Display } from 'next/font/google';
import styles from './layout.module.css';
import './globals.css';

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['400', '500', '600']
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700']
});

export const metadata = {
  title: 'Luminiq',
  description: 'Luminiq',
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
  }
};

export const viewport = {
  themeColor: '#09090B',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} ${styles.body}`}>
        {children}
      </body>
    </html>
  );
}
