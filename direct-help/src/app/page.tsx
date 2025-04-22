import Banner from "@/modules/Banner/Banner";
import Partners from "@/modules/Partners/Partners";
import Quality from "@/modules/Quality/Quality";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <Partners />
      <Quality />
    </div>
  );
}
