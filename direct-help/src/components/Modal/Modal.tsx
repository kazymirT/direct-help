import { ReactNode } from 'react';

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export function Modal({ children, onClose }: ModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex h-[100dvh] w-full items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex aspect-[0.763] h-[80dvh] max-w-[80vw] items-center justify-center rounded-xl lg:h-[90dvh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-5 right-7 text-[#786F6F] md:hover:cursor-pointer md:hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
