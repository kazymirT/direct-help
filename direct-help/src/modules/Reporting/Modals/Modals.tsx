import { Modal } from '@/components/Modal/Modal'
import React, { FC } from 'react'
import { videos } from '../ReportingList/data'

type ModalsProps = {
  videoId: keyof typeof videos;
  onClose: () => void;
}

const Modals: FC<ModalsProps> = ({ onClose, videoId }) => {
  const id = videos[videoId]; 
  if (!id) return null;
  return (
    <Modal onClose={onClose}>
      <div className="h-[80dvh] max-w-[80vw] aspect-[0.563] rounded-md">
        <iframe
          src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&controls=0&modestbranding=1&fs=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=${id}`}
          allow="autoplay"
          allowFullScreen
          className="h-[80dvh] max-w-[80vw] aspect-[0.563] rounded-md"
        />
      </div>
    </Modal>
  )
}

export default Modals