import type { FC } from "react";
import { ButtonProps } from "./types";
import clsx from "clsx";
import { Link } from "@/i18n/navigation";

const Button: FC<ButtonProps> = ({
  variant,
  size,
  className,
  text,
  isActive = false,
  link,
  ...props
}) => {
  const baseStyles = `transition-all duration-300 md:hover:cursor-pointer`;

  const variantStyles = {
   basic: "bg-[#f8b428] text-text2 rounded-4xl shadow-button-basic md:hover:bg-[#3d69d8] md:hover:text-[#efefef] active:bg-[#1842aa] active:text-[#efefef] disabled:bg-[#acb0b4] disabled:text-[#efefef] disabled:cursor-auto",
   second: "bg-[#3d69d8] text-white rounded-4xl shadow-button-second md:hover:bg-[#f8b428] md:hover:text-[#2f2d2d] active:bg-[#de9809] active:text-[#2f2d2d] disabled:bg-[#acb0b4] disabled:text-[#efefef] disabled:cursor-auto",
  };

  const sizeStyles = {
    full: "w-full p-[10px] text-base lg:p-[12px] xl:p-[17px] text-[clamp(1.063rem,-0.014rem+1.683vw,1.5rem)]",
    'full-xs': "w-full max-md:text-lg p-1 md:p-[10px] lg:p-[5.5px] xl:p-[10.5px]",
    'full-s': "w-full p-[10px] lg:p-[14px] text-[clamp(1.063rem,-0.014rem+1.683vw,1.5rem)] leading-[1]",
    'full-l': "w-full max-md:text-lg p-1 sm:p-2 md:p-4 lg:p-[21px] xl:p-[30px] text-[clamp(1.063rem,-0.014rem+1.683vw,1.5rem)] leading-[1]",
  };

  const buttonClasses = clsx(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className,
    {
      ["!bg-white"]: isActive,
    },
  );

  return (
    <>
    {link ? (<Link href={link} className="flex w-full">
      <button className={buttonClasses} {...props}>
          {text}
      </button>
    </Link>) : (
      <button className={buttonClasses} {...props}>
          {text}
      </button>
    )}
    </>
  );
};

export default Button;
