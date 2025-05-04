"use client"
import Button from "@/components/Button/Button"
import Checkbox from "@/components/Checkbox/Checkbox"
import FieldBox from "@/components/FieldBox/FieldBox"
import Input from "@/components/Input/Input"
import Textarea from "@/components/Textarea/Textarea"
import { useTranslations } from "next-intl"
import { FC, useState } from "react"
import { SupportFormProps } from "../SupportForm/SupportForm"
import { useForm } from "react-hook-form"
import { getPartnersSchema, PartnersValues } from "@/lib/validateSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import Loading from "../Loading/Loading"
import { sendPartnersForm } from "@/actions/sendPartnersForm"
import { CheckboxGroup } from "./CheckboxGroup/CheckboxGroup"

const NewPartner: FC<SupportFormProps> = ({ setStatus }) => {
  const t =  useTranslations('form.partners');

  const [isLoading, setIsLoading] = useState(false);
    const {
      register,
      handleSubmit,
      trigger,
      formState: { isValid, errors },
    } = useForm<PartnersValues>({
      defaultValues: {
      },
      resolver: zodResolver(getPartnersSchema(t)),
      mode: 'onSubmit',
    });
    const onSubmit = async (data: PartnersValues) => {
      if (isValid) {  
        setIsLoading(true);
        try {
          const result = await sendPartnersForm(data);
          if (result.success) {
            setStatus('success');
          } else {
            setStatus('error');
          }
        } 
        catch (error) {
          console.log(error);
          setStatus('error');
        }
      }
    }
  return (
    <section className="wrapper relative pt-0 md:pt-10 lg:pt-13 xl:pt-[67px] pb-0 md:pb-20 lg:pb-30 xl:pb-[175px] flex justify-center w-full text-[#2f2d2d]">
      <div className="md:px-10 lg:px-15 xl:px-[110px] rounded-3xl min-md:border min-md:border-[#7c7c7c] min-md:shadow-form-partner pt-6 xl:pt-[51px] pb-29 xl:pb-[150px] flex flex-col items-center w-full max-w-[1280px]">
      <div className="self-start flex flex-col gap-[20px]">
      <h1 className="text-[clamp(1.5rem,1.067rem+1.849vw,2.25rem)]">{t('title')}</h1>
      <div className="text-[clamp(1.25rem,0.961rem+1.233vw,1.75rem)] max-md:pt-1 w-full max-w-[736px] flex flex-col">
      <p className="max-md:leading-[1.2]">{t('description-one')}</p>
      <p className="leading-[1.17]">{t('description-two')}</p>
      </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}  className="pt-5 xl:pt-[68px] self-start w-full max-w-[1018px] flex flex-col gap-[25px] xl:gap-[42px]">
      <fieldset>
        <legend className="text-[clamp(1.25rem,1.03rem+0.939vw,1.875rem)]">{t('form.personal.title')}</legend>
        <div className="pt-4 xl:pt-[18px] flex flex-col gap-[11px] xl:gap-[29px]">
        <FieldBox name="organization" placeholder={t('form.personal.name')}>
          <Input 
            id="organization"
            sizeInput="s" 
            {...register('organization')}
            errorMessage={errors.organization?.message}
          />
        </FieldBox>
        <FieldBox name="name" placeholder={t('form.personal.person')}>
          <Input 
            id="name"
            sizeInput="s"
            {...register('fullName')}
            errorMessage={errors.fullName?.message}
          />
        </FieldBox>
        <FieldBox name="email" placeholder={t('form.personal.email')}>
          <Input 
            id="email"
            sizeInput="s"
            {...register('email')}
            errorMessage={errors.email?.message}
          />
        </FieldBox>
        <FieldBox name="phone" placeholder={t('form.personal.phone')}>
          <Input
            id="phone"
            sizeInput="s"
            {...register('phone')}
            errorMessage={errors.phone?.message}
          />
        </FieldBox>
        <FieldBox name="site" placeholder={t('form.personal.cite')}>
          <Input 
            id="site"
            sizeInput="s"
            {...register('cite')}
            errorMessage={errors.cite?.message}
          />
        </FieldBox>
        </div>
      </fieldset>
      <fieldset>
        <legend className="text-[clamp(1.25rem,1.03rem+0.939vw,1.875rem)]">{t('form.type.title')}</legend>
        <CheckboxGroup errors={errors} register={register} trigger={trigger} />
      </fieldset>
      <fieldset>
        <legend className="text-[clamp(1.25rem,1.03rem+0.939vw,1.875rem)] pt-2">{t('form.comment')}</legend>
        <div className="pt-[16px] flex flex-wrap justify-between gap-y-[24px]">
          <Textarea 
            rows={3}
            size="full"
            {...register('comment')}
            errorMessage={errors.comment?.message}
          />
        </div>
      </fieldset>
      <div className="w-full flex max-md:flex-col max-md:gap-11 justify-between items-start md:items-center xl:pt-[18px]">
        <div className="flex flex-col gap-[22px] w-full max-w-[372px]">
        <Checkbox
          sizeLabel="full"
          label={t('form.personal-data')}
          id='personal data'
          {...register('accept')}
          errorMessage={errors.accept?.message}
        />
        </div>
        <div className="w-full max-w-[330px] xl:max-w-[420px]">
          <Button size="full" variant="second" text={t('form.button')} type="submit" />
        </div>
      </div>
      </form>
      </div>
      {isLoading && <Loading />}
    </section>
  )
}

export default NewPartner;
