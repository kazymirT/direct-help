'use client'
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input"
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react"

const PayForm = () => {
  const t = useTranslations('form.payment');
  const [value, setValue] = useState(t('moneyInfo', { amount: 100 }));
  return (
    <form className="w-full max-w-[669px] m-auto flex flex-col gap-[41px]">
      <div className="flex flex-col gap-[29px]">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <div className="w-full flex justify-between">
        <button className="cursor-pointer hover:bg-[#eae8e8] transition-all duration-300 leading-[28px] px-[11px] py-[13px] border border-[#838688] rounded-md text-2xl text-[#2f2d2d]" type="button" onClick={() => setValue(t('moneyInfo', { amount: 100 }))}>{t('moneyInfo', { amount: 100 })}</button>
        <button className="cursor-pointer hover:bg-[#eae8e8] transition-all duration-300 leading-[28px] px-[11px] py-[13px] border border-[#838688] rounded-md text-2xl text-[#2f2d2d]" type="button" onClick={() => setValue(t('moneyInfo', { amount: 250 }))}>{t('moneyInfo', { amount: 250 })}</button>
        <button className="cursor-pointer hover:bg-[#eae8e8] transition-all duration-300 leading-[28px] px-[11px] py-[13px] border border-[#838688] rounded-md text-2xl text-[#2f2d2d]" type="button" onClick={() => setValue(t('moneyInfo', { amount: 500 }))}>{t('moneyInfo', { amount: 500 })}</button>
        <button className="cursor-pointer hover:bg-[#eae8e8] transition-all duration-300 leading-[28px] px-[11px] py-[13px] border border-[#838688] rounded-md text-2xl text-[#2f2d2d]" type="button" onClick={() => setValue(t('moneyInfo', { amount: 1000 }))}>{t('moneyInfo', { amount: 1000 })}</button>
      </div>
      </div>
      <div className="m-auto flex gap-[14px] pt-5">
        <Image alt="icon" src='/support/visa.svg' width={60} height={40} />
        <Image alt="icon" src='/support/mastercard.svg' width={60} height={40} />
        <Image alt="icon" src='/support/pay.svg' width={60} height={40} />
      </div>
      <Button size="full" variant="second" text={t('payment-button')} />
    </form>
  )
}

export default PayForm