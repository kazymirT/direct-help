import { Roboto, Oswald } from 'next/font/google';
import './globals.css';
import Footer from '@/modules/Footer/Footer';
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from 'next-intl/server';
import { locales } from '@/i18n/locales';

const oswald = Oswald({
  variable: '--font-oswald-sans',
  subsets: ['latin'],
});

const roboto = Roboto({
  variable: '--font-roboto-sans',
  subsets: ['latin'],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.home' });

  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: [
        {
          url: '/favicon/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          url: '/favicon/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        { url: '/favicon/favicon.ico', sizes: 'any' },
      ],
      apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
      other: [
        {
          rel: 'icon',
          url: '/favicon/android-chrome-192x192.png',
          type: 'image/png',
          sizes: '192x192',
        },
        {
          rel: 'icon',
          url: '/favicon/android-chrome-512x512.png',
          type: 'image/png',
          sizes: '512x512',
        },
      ],
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${roboto.variable} ${oswald.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
