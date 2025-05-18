import { TextareaHTMLAttributes } from 'react';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorMessage?: string;
  requiredMessage?: boolean;
  onFocus?: () => void;
  size?: 'full' | 'm';
}
