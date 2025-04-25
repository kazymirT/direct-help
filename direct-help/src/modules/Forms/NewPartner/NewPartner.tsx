import Button from "@/components/Button/Button"
import Checkbox from "@/components/Checkbox/Checkbox"
import FieldBox from "@/components/FieldBox/FieldBox"
import Input from "@/components/Input/Input"
import Textarea from "@/components/Textarea/Textarea"

const NewPartner = () => {
  return (
    <section className="pt-[67px] pb-[162px] flex justify-center w-full text-[#1b1a1a]">
      <div className="px-[110px] rounded-3xl border border-[#7c7c7c] shadow-form-partner pt-[51px] pb-[125px] flex flex-col items-center w-full max-w-[1280px]">
      <div className="self-start flex flex-col gap-[34px]">
      <h1 className="fond-medium text-5xl">Стати партнером</h1>
      <div className="text-[32px] w-full max-w-[736px] flex flex-col gap-1">
      <p>Долучайтесь як партнер- творимо зміни разом!</p>
      <p className="leading-[1.2]">Партнерство-це більше , ніж підтримка. Це спільна дія задля перемоги та добрих справ</p>
      </div>
      </div>
      <form className="pt-[38px] self-start w-full max-w-[1018px] flex flex-col gap-10">
      <fieldset>
        <legend className="text-[32px] font-medium">Інформація про компанію/особу</legend>
        <div className="pt-[18px] flex flex-col gap-[29px]">
        <FieldBox name="organization" placeholder="Ім’я або назва організації">
          <Input id="organization" sizeInput="s" />
        </FieldBox>
        <FieldBox name="name" placeholder="Контактна особа">
          <Input id="name" sizeInput="s" />
        </FieldBox>
        <FieldBox name="email" placeholder="Email">
          <Input id="email" sizeInput="s" />
        </FieldBox>
        <FieldBox name="phone" placeholder="Телефон">
          <Input id="phone" sizeInput="s" />
        </FieldBox>
        <FieldBox name="site" placeholder="Посилання на сайт/соцмережі">
          <Input id="site" sizeInput="s" />
        </FieldBox>
        </div>
      </fieldset>
      <fieldset>
        <legend className="text-[32px] font-medium">Тип партнерства</legend>
        <div className="pt-[27px] flex flex-wrap justify-between gap-y-[24px]">
          <Checkbox label="Фінансова підтримка" id='Financial support' />
          <Checkbox label="Матеріальна допомога" id='Material assistance' />
          <Checkbox label="Інформаційна/медійна підтримка" id='Information/media support' />
          <Checkbox label="Волонтерство / послуги" id='Volunteering / services' />
          <Checkbox label="Інше (вказати)" id='other' />
        </div>
      </fieldset>
      <fieldset>
        <legend className="text-[32px] font-medium pt-2">Коментар/Повідомлення</legend>
        <div className="pt-[16px] flex flex-wrap justify-between gap-y-[24px]">
          <Textarea rows={3} size="full" />
        </div>
      </fieldset>
      <div className="w-full flex justify-between items-center pt-3">
        <div className="flex flex-col gap-[22px] w-full max-w-[372px]">
        <Checkbox sizeLabel="full" label="Додати документ/презентацію" id='document' />
        <Checkbox sizeLabel="full" label="Я погоджуюсь з обробкою персональних данних" id='personal data' />
        </div>
        <div className="w-full max-w-[420px]">
          <Button size="full" variant="second" text="Стати партнером" type="button" />
        </div>
      </div>
      </form>
      </div>
    </section>
  )
}

export default NewPartner