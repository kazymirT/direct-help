'use client'
import { FC, ReactNode } from "react"

export interface FieldBoxProps {
  placeholder: string;
  name: string;
  children: ReactNode
}

const FieldBox: FC<FieldBoxProps> = ({ name, placeholder, children }) => {
  return (
    <div className="w-full flex max-md:flex-col max-md:gap-2 lg:gap-6 items-start md:items-center justify-between">
      <label htmlFor={name} className="w-full max-md:font-light max-w-[319px] text-base md:text-lg lg:text-xl text-[#2f2d2d] leading-[23px]">{placeholder}</label>
      {children}
    </div>
  )
}

export default FieldBox