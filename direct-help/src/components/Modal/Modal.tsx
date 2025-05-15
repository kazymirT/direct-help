import { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export function Modal({ children, onClose }: ModalProps) {
  return (
    <div
      className="fixed inset-0 w-full h-[100dvh] bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="h-[80dvh] lg:h-[90dvh] max-w-[80vw] aspect-[0.763] relative flex justify-center items-center rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-5 right-7 text-[#786F6F] md:hover:text-white md:hover:cursor-pointer"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
