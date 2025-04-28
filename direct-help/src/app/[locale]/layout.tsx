import { Roboto, Oswald } from "next/font/google";
import "./globals.css";
import Footer from "@/modules/Footer/Footer";
import {NextIntlClientProvider} from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n/locales";

const oswald = Oswald({
  variable: "--font-oswald-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({params}: Omit<Props, "children">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'rootLayout' });

  return {
    title: t('title')
  }
};
type Props =  {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}
export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${roboto.variable} ${oswald.variable} antialiased`}>
        <NextIntlClientProvider messages={messages} >
          <main>
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
