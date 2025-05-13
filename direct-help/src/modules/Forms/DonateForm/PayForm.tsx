'use client'
import { useState } from "react"
import Image from "next/image";
import { useTranslations } from "next-intl";

import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input"

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined')
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const PayForm = () => {
  const t = useTranslations('form.payment');
  const [value, setValue] = useState('100');
  const [clientSecret, setClientSecret] = useState("");

  const handleAmountSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const amount = Number(value) * 100; // Конвертуємо в центи

    if (amount < 100) return alert("Мінімальна сума – 1 USD");

    const res = await fetch("/api/donate-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const data = await res.json();
    if (data.clientSecret) {
      setClientSecret(data.clientSecret);
    } else {
      alert("Помилка при створенні платежу");
    }
  };

  return (
    <section className="relative w-full">
    <form onSubmit={handleAmountSubmit} className="w-full lg:max-w-[clamp(33.25rem,1.558rem+49.519vw,46.125rem)] pt-2 sm:pt-3 md:pt-5 lg:pt-8 xl:pt-[45px] flex flex-col gap-5 lg:gap-9.5 xl:gap-[42px]">
      <div className="flex flex-col gap-4 lg:gap-4 xl:gap-[26px]">
      <Input value={value} type="number" onChange={(e) => setValue(e.target.value)} />
      <div className="w-full flex justify-between">
        <button className="cursor-pointer md:hover:bg-[#eae8e8] transition-all duration-300 leading-[28px] px-[13px] lg:px-[9px] xl:px-[22px] py-1 lg:py-2 xl:py-[13px] border border-[#838688] rounded-md text-[clamp(0.75rem,0.497rem+1.079vw,1.188rem)] lg:text-[19px] xl:text-2xl text-[#2f2d2d]" type="button" onClick={() => setValue('100')}>{t('moneyInfo', { amount: 100 })}</button>
        <button className="cursor-pointer md:hover:bg-[#eae8e8] transition-all duration-300 leading-[28px] px-[13px] lg:px-[9px] xl:px-4 2xl:px-[22px] py-1 lg:py-2 xl:py-[13px] border border-[#838688] rounded-md text-[clamp(0.75rem,0.497rem+1.079vw,1.188rem)] lg:text-[19px] xl:text-2xl text-[#2f2d2d]" type="button" onClick={() => setValue('250')}>{t('moneyInfo', { amount: 250 })}</button>
        <button className="cursor-pointer md:hover:bg-[#eae8e8] transition-all duration-300 leading-[28px] px-[13px] lg:px-[9px] xl:px-4 2xl:px-[22px] py-1 lg:py-2 xl:py-[13px] border border-[#838688] rounded-md text-[clamp(0.75rem,0.497rem+1.079vw,1.188rem)] lg:text-[19px] xl:text-2xl text-[#2f2d2d]" type="button" onClick={() => setValue('500')}>{t('moneyInfo', { amount: 500 })}</button>
        <button className="cursor-pointer md:hover:bg-[#eae8e8] transition-all duration-300 leading-[28px] px-[13px] lg:px-[9px] xl:px-4 2xl:px-[22px] py-1 lg:py-2 xl:py-[13px] border border-[#838688] rounded-md text-[clamp(0.75rem,0.497rem+1.079vw,1.188rem)] lg:text-[19px] xl:text-2xl text-[#2f2d2d]" type="button" onClick={() => setValue('1000')}>{t('moneyInfo', { amount: 1000 })}</button>
      </div>
      </div>
      <div className="m-auto flex gap-1 sm:gap-[6px] md:gap-2 lg:gap-3 xl:gap-[14px] lg:pt-4 xl:pt-5">
        <Image alt="icon" src='/support/visa.svg' width={60} height={40} className="w-[50px] xl:w-15 aspect-[1.5]" />
        <Image alt="icon" src='/support/mastercard.svg' width={60} height={40} className="w-[50px] xl:w-15 aspect-[1.5]" />
        <Image alt="icon" src='/support/pay.svg' width={60} height={40} className="w-[50px] xl:w-15 aspect-[1.5]" />
      </div>
      <Button size="full-l" type="submit" variant="second" text={t('payment-button')} />
    </form>
    {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </section>
  )
}

export default PayForm;

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + "/donate/success",
      },
    });

    if (error) {
      alert(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="fixed z-50 w-full h-[100dvh] top-0 left-0 bg-blue-500/30 flex justify-center items-center">
      <form onSubmit={handleSubmit} className='bg-white py-15 px-10 w-full max-w-md rounded-lg'>
        <PaymentElement/>
        <button type="submit" disabled={!stripe || loading} className="bg-black w-full p-2 rounded-sm text-white text-lg">
          {loading ? "Обробка..." : "Оплатити"}
        </button>
      </form>
    </div>
  );
}