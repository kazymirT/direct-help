import Banner from "@/modules/Banner/Banner";
import Partners from "@/modules/Partners/Partners";
import About from "@/modules/About/About";
import Attainment from "@/modules/Attainment/Attainment";
import Donate from "@/modules/Donate/Donate";
import Quality from "@/modules/Quality/Quality";
import Volunteers from "@/modules/Volunteers/Volunteers";
import Awards from "@/modules/Awards/Awards";
import { setRequestLocale } from "next-intl/server";
import BannerAction from "@/modules/BannerAction/BannerAction";

type Props =  {
  params: Promise<{locale: string}>;
}
export default async function HomePage({ params }: Props) {
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
