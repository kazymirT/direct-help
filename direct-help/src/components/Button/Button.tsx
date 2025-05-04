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
  const baseStyles = `transition-all duration-300 hover:cursor-pointer`;

  const variantStyles = {
   basic: "bg-[#f8b428] text-text2 rounded-4xl  text-[20px] md:text-xl lg:text-2xl shadow-button-basic leading-[28px] hover:bg-[#3d69d8] hover:text-[#efefef] active:bg-[#1842aa] active:text-[#efefef] disabled:bg-[#acb0b4] disabled:text-[#efefef] disabled:cursor-auto",
   second: "bg-[#3d69d8] text-white rounded-4xl text-[20px] md:text-xl lg:text-2xl shadow-button-second hover:bg-[#f8b428] hover:text-[#2f2d2d] active:bg-[#de9809] active:text-[#2f2d2d] disabled:bg-[#acb0b4] disabled:text-[#efefef] disabled:cursor-auto",
  };

  const sizeStyles = {
    full: "w-full p-[19px]",
    'full-s': "w-full p-[10px] lg:p-[14px]",
    'full-l': "w-full p-[30px]",
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
