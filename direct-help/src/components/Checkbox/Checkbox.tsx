import clsx from 'clsx';
import { FC } from 'react';
import { CheckboxProps } from './types';

const Checkbox: FC<CheckboxProps> = ({
  id,
  label,
  errorMessage,
  sizeLabel = 'm',
  ...props
}) => {
  const labelSize = {
    m: 'w-full md:w-[45%]',
    full: 'w-full',
  };
  const wrapperCL = clsx(
    'relative flex gap-4 items-center',
    labelSize[sizeLabel]
  );
  const inputClassNames = clsx(
    `appearance-none cursor-pointer h-[25px] w-[25px] lg:h-[35px] lg:w-[32px] rounded-sm relative border-1 border-[#838688] border-solid bg-[#fff] duration-300 translate-all
    md:hover:bg-[#d9d9d9] md:hover:checked:bg-[#3d69d8]
    checked:bg-[#3d69d8] checked:before:absolute checked:before:content-[''] checked:before:bg-[url('/icons/checked.svg')] checked:before:bg-no-repeat
    checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-y-1/2 checked:before:-translate-x-1/2
    checked:before:bg-cover checked:before:w-[18px] checked:before:h-[12px] lg:checked:before:w-[23px] lg:checked:before:h-[16px]`,
    {
      ['border-[#8E0E0E]']: errorMessage,
    }
  );

  return (
    <div className={wrapperCL}>
      <div className="flex items-center justify-center">
        <input {...props} id={id} type="checkbox" className={inputClassNames} />
      </div>
      <div className="relative flex flex-col">
        {label && (
          <label
            htmlFor={id}
            className="cursor-pointer text-base leading-[1.2] text-[#2f2d2d] md:text-lg lg:text-xl"
          >
            {label}
          </label>
        )}
        {!!errorMessage && (
          <span className="absolute -bottom-full left-0 text-xs text-[#b71010]">
            {errorMessage}
          </span>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
