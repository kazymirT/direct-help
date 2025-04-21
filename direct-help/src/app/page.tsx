import Banner from "@/modules/Banner/Banner";
import Partners from "@/modules/Partners/Partners";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <Partners />
    </div>
  );
}
