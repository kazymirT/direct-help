'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Menu from './Menu';

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);
 
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  return (
    <div className="relative z-50 min-lg:hidden flex items-center justify-center">
      <button onClick={openMenu} className="relative">
        <Image src='/burger.svg' alt="menu open icon" width={24} height={24} />
      </button>
      <Menu closeMenu={closeMenu} isOpen={isOpen} menuRef={menuRef} />
      {isOpen && (
        <div onClick={closeMenu} className="fixed top-0 left-00 w-full h-[100dvh] inset-0 bg-black/40 z-30 transition-opacity duration-300" />
      )}
    </div>
  );
}
