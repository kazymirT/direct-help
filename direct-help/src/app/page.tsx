import Attainment from "@/modules/Attainment/Attainment";
import Banner from "@/modules/Banner/Banner";
import Donate from "@/modules/Donate/Donate";
import Partners from "@/modules/Partners/Partners";
import Quality from "@/modules/Quality/Quality";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <Partners />
      <Attainment />
      <Donate />
      <Quality />
    </div>
  );
}
