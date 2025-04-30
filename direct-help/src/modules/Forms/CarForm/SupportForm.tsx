'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import Button from "@/components/Button/Button"
import FieldBox from "@/components/FieldBox/FieldBox"
import Input from "@/components/Input/Input"
import Select from "@/components/Select/Select"
import Textarea from "@/components/Textarea/Textarea"
import { FC, useState } from "react"
import Loading from "../Loading/Loading"
import { useTranslations } from "next-intl"
import { Status } from "../FormActions/FormActions"
import { getSupportSchema, SupportValues } from '@/lib/validateSchema';
import { useForm, Controller } from 'react-hook-form';
import { sendSupportForm } from '@/actions/sendSupportForm';

export interface SupportFormProps {
    setStatus: (status: Status) => void;
}

const SupportForm: FC<SupportFormProps> = ({ setStatus }) => {
  const t = useTranslations('form.support');
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm<SupportValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(getSupportSchema(t)),
    mode: 'onTouched',
  });
  const onSubmit = async (data: SupportValues) => {
    setIsLoading(true);
    try {
     const result = await sendSupportForm(data);
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
  return (
    <section className="flex pt-15 pb-80 flex-col gap-15 relative">
      <h1 className="font-medium text-[40px] leading-[47px] text-[#1b1a1a]">{t('title')}</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[20px] w-full max-w-[1170px]">
      <div className="flex flex-col pb-10 gap-[25px]">
      <FieldBox name="email" placeholder={t('email.label')}>
        <Input 
          id="email"
          {...register('email')}
          errorMessage={errors.email?.message}
          requiredMessage={t('email.support-text')}
        />
      </FieldBox>
      <FieldBox name="fullname" placeholder={t('name')}>
        <Input 
          id="fullname" 
          {...register('fullName')}
          errorMessage={errors.fullName?.message}
         />
      </FieldBox>
      <FieldBox name="status" placeholder={t('status')}>
        <Input 
          id="status"
          {...register('status')}
          errorMessage={errors.status?.message}
        />
      </FieldBox>
      <FieldBox name="phone" placeholder={t('phone.label')}>
        <Input
          id="phone"
          placeholder={t('phone.placeholder')}
          {...register('phone')}
          errorMessage={errors.phone?.message}
        />
      </FieldBox>
      <FieldBox name="auto" placeholder={t('auto')}>
        <Input 
          id="auto"
          {...register('auto')}
          errorMessage={errors.auto?.message}
         />
      </FieldBox>
      <FieldBox name="fuel" placeholder={t('fuel.label')}>
      <Controller
        control={control}
        name="fuel"
        render={({ field, fieldState }) => (
          <Select 
            id="fuel"
            options={[t('fuel.variants.one'), t('fuel.variants.two')]}
            instanceId={'fuel-select'}
            value={field.value}
            onChange={(newValue) => field.onChange(newValue)}
            errorMessage={fieldState.error?.message}
            placeholder={t('fuel.label')}
          />
        )}
      />
      </FieldBox>
      <FieldBox name="transmission" placeholder={t('transmission.label')}>
      <Controller
        control={control}
        name="transmission"
        render={({ field, fieldState }) => (
          <Select 
            id="transmission"
            options={[t('transmission.variants.one'), t('transmission.variants.two')]}
            instanceId={'transmission-select'}
            value={field.value}
            onChange={(newValue) => field.onChange(newValue)}
            errorMessage={fieldState.error?.message}
            placeholder={t('transmission.label')}
            />
        )}
      />
      </FieldBox>
      <FieldBox name="drive" placeholder={t('drive.label')}>
      <Controller
        control={control}
        name="drive"
        render={({ field, fieldState }) => (
          <Select 
            id="drive"
            options={[t('drive.variants.one'), t('drive.variants.two')]}
            instanceId={'drive-select'}
            value={field.value}
            onChange={(newValue) => field.onChange(newValue)}
            errorMessage={fieldState.error?.message}
            placeholder={t('drive.label')}
            />
        )}
      />
      </FieldBox>
      <FieldBox name="comment" placeholder={t('comment')}>
        <Textarea 
          id="comment"
          cols={2}
          rows={5}
          {...register('comment')}
          errorMessage={errors.comment?.message}
        />
      </FieldBox>
      </div>
      <div className="self-end w-full max-w-[347px]">
        <Button size="full-s" type="submit" variant="second" text={t('button')} disabled={!isValid} />
      </div>
    </form>
    {isLoading && <Loading />}
    </section>
  )
}

export default SupportForm;
