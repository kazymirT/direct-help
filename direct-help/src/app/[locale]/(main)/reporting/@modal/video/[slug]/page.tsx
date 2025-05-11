import { Modal } from "@/components/Modal/Modal";
import { videos } from "@/modules/Reporting/ReportingList/data";

type Props = {
  params: { slug: keyof typeof videos };
};

export default async function VideoModal({ params }: Props) {
  const { slug } = await params;

  const videoId = videos[slug];

  if (!videoId) return null;

  return (
    <Modal>
      <div className="h-[80dvh] max-w-[80vw] aspect-[0.76] rounded-xl">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=0&modestbranding=1&fs=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=${videoId}`}
          allow="autoplay"
          allowFullScreen
          className="h-[80dvh] max-w-[80vw] aspect-[0.76] rounded-xl"
        />
      </div>
    </Modal>
  );
}
