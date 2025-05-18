'use client';

import React from 'react';

export interface ClipboardButtonProps {
  textToCopy: string;
  className?: string;
}

const ClipboardButton: React.FC<ClipboardButtonProps> = ({
  textToCopy,
  className,
}) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch (error) {
      console.error('Не вдалося скопіювати текст:', error);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex size-fit items-center justify-center p-2 outline-none ${className}`}
      aria-label="Copy to clipboard"
    >
      <svg
        width="15"
        height="19"
        viewBox="0 0 15 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg-icon"
      >
        <rect
          x="2.35742"
          y="0.5"
          width="12.1429"
          height="16.1111"
          rx="2.5"
          className="fill-rect"
          stroke="#2F2D2D"
        />
        <rect
          x="0.5"
          y="2.38867"
          width="12.1429"
          height="16.1111"
          rx="2.5"
          className="fill-rect"
          stroke="#2F2D2D"
        />
      </svg>
    </button>
  );
};

export default ClipboardButton;
