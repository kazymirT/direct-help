import clsx from "clsx";
import { FC } from "react";
import { CheckboxProps } from "./types";

const Checkbox: FC<CheckboxProps> = ({ id, label, errorMessage, sizeLabel = 'm', ...props }) => {
  const labelSize = {
    m: 'w-[45%]',
    full: 'w-full',
  }  
  const wrapperCL = clsx("flex gap-4 items-center", labelSize[sizeLabel]);
    const inputClassNames = clsx(`appearance-none cursor-pointer h-[35px] w-[32px] rounded-sm relative border-1 border-[#838688] border-solid bg-[#fff] duration-300 translate-all
          hover:bg-[#d9d9d9] hover:checked:bg-[#3d69d8]
          checked:bg-[#3d69d8] checked:before:absolute checked:before:content-[''] checked:before:bg-[url('/icons/checked.svg')] checked:before:bg-no-repeat
          checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-y-1/2 checked:before:-translate-x-1/2
          checked:before:bg-cover checked:before:w-[23px] checked:before:h-[16px]`, {
            ['border-[#8E0E0E]']: errorMessage,
          });
      
    return (
      <div className={wrapperCL}>
        <div className='flex items-center justify-center'>
          <input
            {...props}
            id={id}
            type="checkbox"
            className={inputClassNames}
          />
        </div>
        {label && (
          <label
            htmlFor={id}
            className="text-xl text-[#1b1a1a] cursor-pointer"
          >
            {label}
          </label>
        )}
      </div>
    );
};

export default Checkbox;
