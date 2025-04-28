'use client'

import Button from "@/components/Button/Button"
import FieldBox from "@/components/FieldBox/FieldBox"
import Input from "@/components/Input/Input"
import Select from "@/components/Select/Select"
import Textarea from "@/components/Textarea/Textarea"
import { useState } from "react"
import Loading from "../Loading/Loading"
import { useTranslations } from "next-intl"

const CarForm = () => {
  const t = useTranslations('form.support');
  const [fuel, setFuel] = useState('');
  const [transmission, setTransmission] = useState('');
  const [drive, setDrive] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitForm = () => {
    console.log('submit form');
    setIsLoading(true);
  }
  return (
    <section className="flex pt-15 pb-80 flex-col gap-15 relative">
      <h1 className="font-medium text-[40px] leading-[47px] text-[#1b1a1a]">{t('title')}</h1>
    <form className="flex flex-col gap-[20px] w-full max-w-[1170px]">
      <div className="flex flex-col pb-10 gap-[25px]">
      <FieldBox name="email" placeholder={t('email.label')}>
        <Input id="email" requiredMessage={t('email.support-text')} />
      </FieldBox>
      <FieldBox name="fullname" placeholder={t('name')}>
        <Input id="fullname" />
      </FieldBox>
      <FieldBox name="status" placeholder={t('status')}>
        <Input id="status" />
      </FieldBox>
      <FieldBox name="phone" placeholder={t('phone.label')}>
        <Input id="phone" placeholder={t('phone.placeholder')} />
      </FieldBox>
      <FieldBox name="auto" placeholder={t('auto')}>
        <Input id="auto" />
      </FieldBox>
      <FieldBox name="fuel" placeholder={t('fuel.label')}>
        <Select id="fuel" options={[t('fuel.variants.one'), t('fuel.variants.two')]} value={fuel} instanceId={'fuel-select'} onChange={(newValue) => setFuel(newValue)} />
      </FieldBox>
      <FieldBox name="transmission" placeholder={t('transmission.label')}>
        <Select id="transmission" options={[t('transmission.variants.one'), t('transmission.variants.two')]} value={transmission} instanceId={'transmission-select'} onChange={(newValue) => setTransmission(newValue)} />
      </FieldBox>
      <FieldBox name="drive" placeholder={t('drive.label')}>
        <Select id="drive" options={[t('transmission.variants.one'), t('transmission.variants.two')]} value={drive} instanceId={'drive-select'} onChange={(newValue) => setDrive(newValue)} />
      </FieldBox>
      <FieldBox name="comment" placeholder={t('comment')}>
        <Textarea id="comment" cols={2} rows={5} />
      </FieldBox>
      </div>
      <div className="self-end w-full max-w-[347px]">
        <Button size="full-s" type="button" variant="second" text={t('button')} onClick={handleSubmitForm} />
      </div>
    </form>
    {isLoading && <Loading />}
    </section>
  )
}

export default CarForm