'use client'
import { default as ReactSelect, DropdownIndicatorProps } from 'react-select';

import { type SelectProps, Option } from './types';
import clsx from 'clsx';
import Image from 'next/image';

const DropdownIndicator = (props: DropdownIndicatorProps<Option>) => {
  const clName = clsx('cursor-pointer lg:w-3 lg:h-5 rotate-0 transition-all duration-300 mr-2', {
    ['rotate-90']: props.selectProps.menuIsOpen,
  });
  return (
    <div className='inline-flex'>
      <Image src='/icons/select_arrow.svg' alt="" width={10} height={16} className={clName} />
    </div>
  );
};

const optionClName = (focused: boolean) => {
  return clsx('cursor-pointer text-[#2F2D2D] p-1 lg:p-3 rounded-[4px]', {
    ['text-[#0D1617] bg-[#EAE8E8] cursor-pointer']: focused,
  });
};

const Select = ({
  value,
  options,
  onChange,
  errorMessage,
  helperText,
  ...props
}: SelectProps) => {
  const selectValue = value ? { value, label: value } : undefined;

  const selectOptions = options.map((option) => ({
    value: option,
    label: option,
  }));

  const containerClName = clsx('static p-0 lg:p-[9px] text-blue-400 border-1 border-[#838688] bg-[#f5f1f1] rounded-[4px]', {
    ['border-red-500']: errorMessage,
  });
  return (
    <div className='relative w-full max-w-[808px]'>
      <ReactSelect
        isSearchable={false}
        unstyled
        value={selectValue}
        options={selectOptions}
        onChange={(newValue) => newValue && onChange(newValue.value)}
        controlShouldRenderValue
        blurInputOnSelect
        components={{ DropdownIndicator, IndicatorSeparator: null }}
        classNames={{
          container: () => containerClName,
          control: () => 'cursor-pointer text-base lg:text-[24px] pl-3 lg:pl-[33px] text-[#2f2d2d] leading-[18px] lg:leading-[29px] flex gap-[8px]',
          menu: () => 'top-0 w-full p-3 left-0 bg-[#F5F1F1] border-1 rounded-[4px] border-[#838688]',
          indicatorSeparator: () => 'hidden',
          menuList: () => 'flex flex-col gap-3',
          option: (state) => optionClName(state.isFocused),
        }}
        {...props}
      />
      {helperText && <p className='text-xs'>{helperText}</p>}
      {errorMessage && <p className='absolute -bottom-3 left-8 text-[#b71010] leading-0 text-xs'>{errorMessage}</p>}
    </div>
  );
};

export default Select;
