import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  requiredMessage?: string;
  onFocus?: () => void;
  sizeInput?: 's' | 'm';
}
