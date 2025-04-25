'use client'

import Button from "@/components/Button/Button"
import FieldBox from "@/components/FieldBox/FieldBox"
import Input from "@/components/Input/Input"
import Select from "@/components/Select/Select"
import Textarea from "@/components/Textarea/Textarea"
import { useState } from "react"
import Loading from "../Loading/Loading"

const CarForm = () => {
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
      <h1 className="font-medium text-[40px] leading-[47px] text-[#1b1a1a]">Запит на доставку автомобіля</h1>
    <form className="flex flex-col gap-[20px] w-full max-w-[1170px]">
      <div className="flex flex-col pb-10 gap-[25px]">
      <FieldBox name="email" placeholder="Електронна адреса *">
        <Input id="email" requiredMessage={`Вся комунікація з Вами буде проходити через електронну пошту, тому просимо вказувати дійсну електронну адресу та перевірити спам. Результат розгляду Вашого запиту буде відправлено на вказану електрону пошту.`} />
      </FieldBox>
      <FieldBox name="fullname" placeholder="ПІБ,  заявника  *">
        <Input id="fullname" />
      </FieldBox>
      <FieldBox name="status" placeholder={`Статус (військовослужбовець, волонтер)`}>
        <Input id="status" />
      </FieldBox>
      <FieldBox name="phone" placeholder="Номер заявника  *">
        <Input id="phone" />
      </FieldBox>
      <FieldBox name="auto" placeholder="Марка та модель авто">
        <Input id="auto" />
      </FieldBox>
      <FieldBox name="fuel" placeholder="Тип палива">
        <Select id="fuel" options={['Бензин', 'Дизель']} value={fuel} instanceId={'fuel-select'} onChange={(newValue) => setFuel(newValue)} />
      </FieldBox>
      <FieldBox name="transmission" placeholder="Тип коробки передач">
        <Select id="transmission" options={['Механічна', 'Автоматична']} value={transmission} instanceId={'transmission-select'} onChange={(newValue) => setTransmission(newValue)} />
      </FieldBox>
      <FieldBox name="drive" placeholder="Тип привода">
        <Select id="drive" options={['Повний', 'Передній']} value={drive} instanceId={'drive-select'} onChange={(newValue) => setDrive(newValue)} />
      </FieldBox>
      <FieldBox name="comment" placeholder="Коментар">
        <Textarea id="comment" cols={2} rows={5} />
      </FieldBox>
      </div>
      <div className="self-end w-full max-w-[347px]">
        <Button size="full-s" type="button" variant="second" text="Відправити" onClick={handleSubmitForm} />
      </div>
    </form>
    {isLoading && <Loading />}
    </section>
  )
}

export default CarForm