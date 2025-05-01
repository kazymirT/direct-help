'use client';

import { ChangeEvent } from 'react';
import { FieldErrors, UseFormRegister, UseFormTrigger } from 'react-hook-form';
import Checkbox from '@/components/Checkbox/Checkbox';
import { PartnersValues } from '@/lib/validateSchema';
import { useTranslations } from 'next-intl';

interface CheckboxGroupProps {
  name: keyof PartnersValues;
  field: keyof PartnersValues['partnership'];
  label: string;
  register: UseFormRegister<PartnersValues>;
  trigger: UseFormTrigger<PartnersValues>;
}

const PartnershipCheckbox = ({
  name,
  field,
  label,
  register,
  trigger,
}: CheckboxGroupProps) => {
  const fullName = `partnership.${field}` as const;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    register(fullName).onChange(e);
    trigger(name);
  };

  return <Checkbox {...register(fullName)} onChange={handleChange} label={label} id={field} />;
};

interface GroupProps {
  register: UseFormRegister<PartnersValues>;
  trigger: UseFormTrigger<PartnersValues>;
  errors: FieldErrors<PartnersValues>;
}

export const CheckboxGroup = ({ register, trigger, errors }: GroupProps) => {
  const t = useTranslations('form.partners.form');

  const options: { field: keyof PartnersValues['partnership']; label: string }[] = [
    { field: 'donation', label: t('type.financial') },
    { field: 'material', label: t('type.material') },
    { field: 'media', label: t('type.media') },
    { field: 'services', label: t('type.volunteering') },
    { field: 'other', label: t('type.other') },
  ];

  return (
    <div className="pt-[27px] relative">
      <div className="flex flex-wrap justify-between gap-y-[24px]">
        {options.map((opt) => (
          <PartnershipCheckbox
            key={opt.field}
            name="partnership"
            field={opt.field}
            label={opt.label}
            register={register}
            trigger={trigger}
          />
        ))}
      </div>
      {errors.partnership?.message && (
        <p className="text-[#b71010] text-xs absolute -bottom-6 left-0">{errors.partnership.message}</p>
      )}
    </div>
  );
};
