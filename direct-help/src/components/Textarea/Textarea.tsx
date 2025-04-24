import { FC } from "react";
import { TextareaProps } from "./types";
import clsx from "clsx";

const Textarea: FC<TextareaProps> = ({ errorMessage, ...props }) => {
  const inputClassName = clsx(
    "w-full outline-none max-w-[808px] rounded-md bg-[#f5f1f1] px-[33px] py-[10px] text-[24px] text-[#2f2d2d] leading-[29px] border border-[#838688] transition-all duration-300",
    "focus:border-[#525455] focus:bg-[#eae8e8]",
    "disabled:border-[#c5c8c9] disabled:bg-[#eae8e8]",
    "hover:border-[#525455] hover:bg-[#eae8e8] hover:text-grey-002",
    {
      ["border-[#d90026] bg-[#fffafa]"]:
        errorMessage,
    },
  );

  return (
    <div className="flex flex-col relative w-full max-w-[808px]">
      <textarea {...props} className={inputClassName} />
      {!!errorMessage && (
        <span className="absolute -bottom-3 left-3 text-red-error leading-3 text-[10px] font-extralight">
          {errorMessage}
        </span>
        )}
    </div>
  );
}

export default Textarea;
