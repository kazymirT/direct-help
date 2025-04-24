'use client'
import { FC, ReactNode } from "react"

export interface FieldBoxProps {
  placeholder: string;
  name: string;
  children: ReactNode
}

const FieldBox: FC<FieldBoxProps> = ({ name, placeholder, children }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <label htmlFor={name} className="w-full max-w-[319px] text-xl text-[#1b1a1a] leading-[23px]">{placeholder}</label>
      {children}
    </div>
  )
}

export default FieldBox