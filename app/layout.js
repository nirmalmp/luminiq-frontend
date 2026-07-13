import { Inter, Playfair_Display, Allura } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['500', '600', '700'],
  display: 'swap',
});

const allura = Allura({
  subsets: ['latin'],
  variable: '--font-script',
  weight: '400',
  display: 'swap',
});

const SITE_TITLE = 'Luminiq Media | Real Estate Photography & Videography';
const SITE_DESC =
  'Cinematic real estate photography and video for the Greater Toronto Area. Property tours, HDR photography, aerial drone, and 3D virtual tours that help listings sell faster.';

export const metadata = {
  title: SITE_TITLE,
  description: SITE_DESC,
  keywords: [
    'real estate videography',
    'real estate photography',
    'property video tour',
    'drone real estate',
    'Toronto real estate media',
    'GTA listing photography',
  ],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESC,
    siteName: 'Luminiq Media',
    type: 'website',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESC,
  },
};

export const viewport = {
  themeColor: '#0A1428',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${allura.variable}`}>
      <body>{children}</body>
    </html>
  );
}
