'use client';
import { FC, ReactNode } from 'react';

export interface FieldBoxProps {
  placeholder: string;
  name: string;
  children: ReactNode;
}

const FieldBox: FC<FieldBoxProps> = ({ name, placeholder, children }) => {
  return (
    <div className="flex w-full items-start justify-between max-md:max-w-[669px] max-md:flex-col max-md:gap-2 md:items-center lg:gap-6">
      <label
        htmlFor={name}
        className="w-full max-w-[319px] text-base leading-[23px] text-[#2f2d2d] max-md:font-light md:text-lg lg:text-xl"
      >
        {placeholder}
      </label>
      {children}
    </div>
  );
};

export default FieldBox;
