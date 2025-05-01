import { FC } from "react";
import { TextareaProps } from "./types";
import clsx from "clsx";

const Textarea: FC<TextareaProps> = ({ errorMessage, size = 'm', ...props }) => {
  
  const sizeTextarea = {
    full: 'max-w-[1018px] leading-[30px]',
    m: 'max-w-[808px] leading-[27.5px]'
  }
  const inputClassName = clsx(
    "w-full resize-none outline-none rounded-md bg-[#f5f1f1] px-[33px] py-[10px] text-[24px] text-[#2f2d2d] border border-[#838688] transition-all duration-300",
    "focus:border-[#525455] focus:bg-[#eae8e8]",
    "disabled:border-[#c5c8c9] disabled:bg-[#eae8e8]",
    "hover:border-[#525455] hover:bg-[#eae8e8] hover:text-grey-002",
    sizeTextarea[size],
    {
      ["border-[#d90026] bg-[#fffafa]"]:
        errorMessage,
    },
  );
  const containerCN = clsx('flex flex-col relative w-full', sizeTextarea[size]);
  return (
    <div className={containerCN}>
      <textarea {...props} className={inputClassName} />
      {!!errorMessage && (
        <span className="absolute -bottom-3 left-8 text-[#b71010] leading-0 text-xs">
          {errorMessage}
        </span>
        )}
    </div>
  );
}

export default Textarea;
