import About from "@/modules/About/About";
import Attainment from "@/modules/Attainment/Attainment";
import Awards from "@/modules/Awards/Awards";
import Banner from "@/modules/Banner/Banner";
import Donate from "@/modules/Donate/Donate";
import Partners from "@/modules/Partners/Partners";
import Quality from "@/modules/Quality/Quality";
import Volunteers from "@/modules/Volunteers/Volunteers";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <Partners />
      <About/>
      <Attainment />
      <Donate />
      <Quality />
      <Volunteers />
      <Awards />
    </div>
  );
}
