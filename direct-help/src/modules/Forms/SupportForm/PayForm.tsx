'use client'
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input"
import Image from "next/image";
import { useState } from "react"

const PayForm = () => {
  const [value, setValue] = useState('100 грн');
  return (
    <form className="w-full max-w-[669px] m-auto flex flex-col gap-[41px]">
      <div className="flex flex-col gap-[29px]">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <div className="w-full flex justify-between">
        <button className="cursor-pointer hover:bg-[#eae8e8] transition-all duration-300 leading-[28px] px-[11px] py-[13px] border border-[#838688] rounded-md text-2xl text-[#2f2d2d]" type="button" onClick={() => setValue('100 грн')}>100 грн</button>
        <button className="cursor-pointer hover:bg-[#eae8e8] transition-all duration-300 leading-[28px] px-[11px] py-[13px] border border-[#838688] rounded-md text-2xl text-[#2f2d2d]" type="button" onClick={() => setValue('250 грн')}>250 грн</button>
        <button className="cursor-pointer hover:bg-[#eae8e8] transition-all duration-300 leading-[28px] px-[11px] py-[13px] border border-[#838688] rounded-md text-2xl text-[#2f2d2d]" type="button" onClick={() => setValue('500 грн')}>500 грн</button>
        <button className="cursor-pointer hover:bg-[#eae8e8] transition-all duration-300 leading-[28px] px-[11px] py-[13px] border border-[#838688] rounded-md text-2xl text-[#2f2d2d]" type="button" onClick={() => setValue('1000 грн')}>1000 грн</button>
      </div>
      </div>
      <div className="m-auto flex gap-[14px] pt-5">
        <Image alt="icon" src='/support/visa.svg' width={60} height={40} />
        <Image alt="icon" src='/support/mastercard.svg' width={60} height={40} />
        <Image alt="icon" src='/support/pay.svg' width={60} height={40} />
      </div>
      <Button size="full" variant="second" text="Підтримати" />
    </form>
  )
}

export default PayForm