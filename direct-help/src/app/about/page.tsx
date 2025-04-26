// import PresentationPage from "@/modules/Presentation/Presentation";

import Image from "next/image";

export default function About() {
    return (
      <section>
        {Array.from({length: 11}).map((_, index) => (
          <Image key={index} src={`/about/about_${index}.png`} alt="" width={1440} height={810} className="w-full h-auto" />
        ))}
      </section>
    );
  }
  