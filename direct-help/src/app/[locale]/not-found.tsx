import Button from '@/components/Button/Button';
import HeaderRoot from '@/modules/HeaderRoot/HeaderRoot';
import { getTranslations } from 'next-intl/server'
import Image from 'next/image';
 
export default async function NotFound() {
  const t = await getTranslations('not-found');
  return (
    <>
    <HeaderRoot />
    <section className='flex flex-col items-center pt-15 gap-25 pb-21' >
      <h2 className='font-medium text-3xl text-[#1B1A1A]'>{t('title')}</h2>
      <div className='flex flex-col gap-13'>
      <Image src='/error.png' alt='404 page' width={414} height={183} />
      <div className='w-full max-w-[415px]'>
        <Button size='full' text={t('button')} variant='second' link='/' />
      </div>
      </div>
    </section>
    </>
  )
}
