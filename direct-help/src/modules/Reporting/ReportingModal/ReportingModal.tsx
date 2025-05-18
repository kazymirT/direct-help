import { Modal } from '@/components/Modal/Modal';
import React, { FC } from 'react';
import { videos } from '../ReportingList/data';

type ReportingModalProps = {
  videoId: keyof typeof videos;
  onClose: () => void;
};

const ReportingModal: FC<ReportingModalProps> = ({ onClose, videoId }) => {
  const id = videos[videoId];
  if (!id) return null;
  return (
    <Modal onClose={onClose}>
      <div className="aspect-[0.763] h-[80dvh] max-w-[80vw] rounded-xl lg:h-[90dvh]">
        <iframe
          src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&controls=1&modestbranding=1&fs=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=${id}`}
          allow="autoplay"
          allowFullScreen
          className="aspect-[0.763] h-[80dvh] max-w-[80vw] rounded-xl bg-white p-4 lg:h-[90dvh]"
        />
      </div>
    </Modal>
  );
};

export default ReportingModal;
