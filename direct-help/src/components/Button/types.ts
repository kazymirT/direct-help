import { ReactNode } from "react";

export type Variant =
  | "basic"
  | "second";

export type Sizes = "full" | 'full-s' | 'full-l';

export type IconPosition = "left" | "right" | "center";
export type TextPosition = "start" | "end" | "center" | "between";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  size: Sizes;
  text?: string;
  icon?: ReactNode;
  isActive?: boolean;
  iconPosition?: IconPosition;
  textPosition?: TextPosition;
  rounded?: string;
  link?: string;
}