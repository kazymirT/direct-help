import { FC } from 'react';
import { InputProps } from './types';
import clsx from 'clsx';

const Input: FC<InputProps> = ({
  errorMessage,
  sizeInput = 'm',
  requiredMessage,
  ...props
}) => {
  const sizeStyles = {
    s: 'max-w-[669px]',
    m: 'max-w-[808px]',
  };

  const inputClassName = clsx(
    'w-full self-end outline-none rounded-md bg-[#f5f1f1] px-3 md:px-6 lg:px-8 py-[3px] lg:py-3 text-base md:text-lg lg:text-[24px] text-[#2f2d2d] leading-[29px] border border-[#838688] transition-all duration-300',
    'focus:border-[#525455] focus:bg-[#eae8e8]',
    'disabled:border-[#c5c8c9] disabled:bg-[#eae8e8]',
    'md:hover:border-[#525455] md:hover:bg-[#eae8e8] md:hover:text-grey-002',
    sizeStyles[sizeInput],
    {
      ['border-[#d90026] bg-[#fffafa] md:hover:border-[#d90026] focus:border-[#d90026] ']:
        errorMessage,
    }
  );

  return (
    <div className="relative flex w-full max-w-[808px] flex-col gap-[6px]">
      <input {...props} className={inputClassName} />
      {!!requiredMessage && (
        <p className="w-full max-w-[753px] text-[10px] leading-[1.1] font-light text-[#1b1a1a] max-md:hidden">
          {requiredMessage}
        </p>
      )}
      {!!errorMessage && (
        <span className="absolute -bottom-2 left-3 text-xs leading-0 text-[#b71010] lg:-bottom-3 lg:left-8">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default Input;
