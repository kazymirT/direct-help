'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';

const PayForm = () => {
  const t = useTranslations('form.payment');
  const [value, setValue] = useState('100');
  const [error, setError] = useState('');

  const handleSetValue = (newValue: string) => {
    setValue(newValue);
    if (Number(newValue) * 100 < 5000) {
      setError(t('error.min'));
    } else {
      setError('');
    }
  };
  const handleAmountSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const amount = Number(value) * 100;

    if (amount < 5000) {
      setError(t('error.min'));
      return;
    }
    const [name, description] = [t('name'), t('description')];
    const res = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, name, description }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert('Помилка при створенні платежу');
    }
  };

  return (
    <section className="relative w-full">
      <form
        onSubmit={handleAmountSubmit}
        className="flex w-full flex-col gap-5 pt-2 sm:pt-3 md:pt-5 lg:max-w-[clamp(33.25rem,1.558rem+49.519vw,46.125rem)] lg:gap-9.5 lg:pt-8 xl:gap-[42px] xl:pt-[45px]"
      >
        <div className="flex flex-col gap-4 lg:gap-4 xl:gap-[26px]">
          <Input
            value={value}
            type="number"
            errorMessage={error}
            onChange={(e) => handleSetValue(e.target.value)}
          />
          <div className="flex w-full justify-between">
            <button
              className="cursor-pointer rounded-md border border-[#838688] px-[13px] py-1 text-[clamp(0.75rem,0.497rem+1.079vw,1.188rem)] leading-[28px] text-[#2f2d2d] transition-all duration-300 md:hover:bg-[#eae8e8] lg:px-[9px] lg:py-2 lg:text-[19px] xl:px-[22px] xl:py-[13px] xl:text-2xl"
              type="button"
              onClick={() => handleSetValue('100')}
            >
              {t('moneyInfo', { amount: 100 })}
            </button>
            <button
              className="cursor-pointer rounded-md border border-[#838688] px-[13px] py-1 text-[clamp(0.75rem,0.497rem+1.079vw,1.188rem)] leading-[28px] text-[#2f2d2d] transition-all duration-300 md:hover:bg-[#eae8e8] lg:px-[9px] lg:py-2 lg:text-[19px] xl:px-4 xl:py-[13px] xl:text-2xl 2xl:px-[22px]"
              type="button"
              onClick={() => handleSetValue('250')}
            >
              {t('moneyInfo', { amount: 250 })}
            </button>
            <button
              className="cursor-pointer rounded-md border border-[#838688] px-[13px] py-1 text-[clamp(0.75rem,0.497rem+1.079vw,1.188rem)] leading-[28px] text-[#2f2d2d] transition-all duration-300 md:hover:bg-[#eae8e8] lg:px-[9px] lg:py-2 lg:text-[19px] xl:px-4 xl:py-[13px] xl:text-2xl 2xl:px-[22px]"
              type="button"
              onClick={() => handleSetValue('500')}
            >
              {t('moneyInfo', { amount: 500 })}
            </button>
            <button
              className="cursor-pointer rounded-md border border-[#838688] px-[13px] py-1 text-[clamp(0.75rem,0.497rem+1.079vw,1.188rem)] leading-[28px] text-[#2f2d2d] transition-all duration-300 md:hover:bg-[#eae8e8] lg:px-[9px] lg:py-2 lg:text-[19px] xl:px-4 xl:py-[13px] xl:text-2xl 2xl:px-[22px]"
              type="button"
              onClick={() => handleSetValue('1000')}
            >
              {t('moneyInfo', { amount: 1000 })}
            </button>
          </div>
        </div>
        <div className="m-auto flex gap-1 sm:gap-[6px] md:gap-2 lg:gap-3 lg:pt-4 xl:gap-[14px] xl:pt-5">
          <Image
            alt="icon"
            src="/support/visa.svg"
            width={60}
            height={40}
            className="aspect-[1.5] w-[50px] xl:w-15"
          />
          <Image
            alt="icon"
            src="/support/mastercard.svg"
            width={60}
            height={40}
            className="aspect-[1.5] w-[50px] xl:w-15"
          />
          <Image
            alt="icon"
            src="/support/pay.svg"
            width={60}
            height={40}
            className="aspect-[1.5] w-[50px] xl:w-15"
          />
        </div>
        <Button
          size="full-l"
          type="submit"
          variant="second"
          text={t('payment-button')}
        />
      </form>
    </section>
  );
};

export default PayForm;
