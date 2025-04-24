'use client'

import FieldBox from "@/components/FieldBox/FieldBox"
import Input from "@/components/Input/Input"
import Select from "@/components/Select/Select"
import Textarea from "@/components/Textarea/Textarea"
import { useState } from "react"

const CarForm = () => {
  const [fuel, setFuel] = useState('');
  const [transmission, setTransmission] = useState('');
  const [drive, setDrive] = useState('');

  return (
    <form className="flex flex-col pb-10 gap-[25px] w-full max-w-[1170px]">
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
    </form>
  )
}

export default CarForm