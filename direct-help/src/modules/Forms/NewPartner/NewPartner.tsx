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
    console.log(errors)
    const onSubmit = async (data: PartnersValues) => {
      console.log('submit')
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
    <section className="relative pt-[67px] pb-[162px] flex justify-center w-full text-[#1b1a1a]">
      <div className="px-[110px] rounded-3xl border border-[#7c7c7c] shadow-form-partner pt-[51px] pb-[125px] flex flex-col items-center w-full max-w-[1280px]">
      <div className="self-start flex flex-col gap-[34px]">
      <h1 className="fond-medium text-5xl">{t('title')}</h1>
      <div className="text-[32px] w-full max-w-[736px] flex flex-col gap-1">
      <p>{t('description-one')}</p>
      <p className="leading-[1.2]">{t('description-two')}</p>
      </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}  className="pt-[38px] self-start w-full max-w-[1018px] flex flex-col gap-10">
      <fieldset>
        <legend className="text-[32px] font-medium">{t('form.personal.title')}</legend>
        <div className="pt-[18px] flex flex-col gap-[29px]">
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
        <legend className="text-[32px] font-medium">{t('form.type.title')}</legend>
        <CheckboxGroup errors={errors} register={register} trigger={trigger} />
      </fieldset>
      <fieldset>
        <legend className="text-[32px] font-medium pt-2">{t('form.comment')}</legend>
        <div className="pt-[16px] flex flex-wrap justify-between gap-y-[24px]">
          <Textarea 
            rows={3}
            size="full"
            {...register('comment')}
            errorMessage={errors.comment?.message}
          />
        </div>
      </fieldset>
      <div className="w-full flex justify-between items-center pt-3">
        <div className="flex flex-col gap-[22px] w-full max-w-[372px]">
        <Checkbox sizeLabel="full" label={t('form.document')} id='document' />
        <Checkbox
          sizeLabel="full"
          label={t('form.personal-data')}
          id='personal data'
          {...register('accept')}
          errorMessage={errors.accept?.message}
        />
        </div>
        <div className="w-full max-w-[420px]">
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
