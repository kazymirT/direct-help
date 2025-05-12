import { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export function Modal({ children, onClose }: ModalProps) {
  return (
    <div
      className="fixed inset-0 bg-[#fdf9f0]/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="rounded-md max-w-lg w-fit relative border-2 border-[#7c7c7c]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-[#786F6F] md:hover:text-[#181717] md:hover:cursor-pointer"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
