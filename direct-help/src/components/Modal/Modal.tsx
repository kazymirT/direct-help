'use client';

import { useRouter } from 'next/navigation';
import { MouseEvent, ReactNode } from 'react';

export function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();

  const handleBackdropClick = () => {
    router.push('/reporting', { scroll: false });
  };

  const stopPropagation = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-[#D9D7D7]/50"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white p-6 rounded-xl shadow-lg relative"
        onClick={stopPropagation}
      >
        <button
          aria-label="Close modal"
          className="absolute top-2 right-2 text-gray-600 hover:text-black cursor-pointer"
          onClick={handleBackdropClick}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
