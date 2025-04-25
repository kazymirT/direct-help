import { InputHTMLAttributes } from "react";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  requiredMessage?: string;
  onFocus?: () => void;
  label: string;
  sizeLabel?: 'm' | 'full';
}
