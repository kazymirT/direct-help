import Banner from '@/modules/Home/Banner/Banner';
import Partners from '@/modules/Home/Partners/Partners';
import About from '@/modules/Home/About/About';
import Attainment from '@/modules/Home/Attainment/Attainment';
import Donate from '@/modules/Home/Donate/Donate';
import Quality from '@/modules/Home/Quality/Quality';
import Volunteers from '@/modules/Home/Volunteers/Volunteers';
import Awards from '@/modules/Home/Awards/Awards';
import { setRequestLocale } from 'next-intl/server';
import BannerAction from '@/modules/Home/BannerAction/BannerAction';

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col">
      <Banner />
      <BannerAction />
      <Partners />
      <About />
      <Attainment />
      <Donate />
      <Quality />
      <Volunteers />
      <Awards />
    </div>
  );
}
