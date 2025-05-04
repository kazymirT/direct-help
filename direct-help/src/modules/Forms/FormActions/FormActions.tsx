"use client"

import { FC, ReactNode, useState } from "react"
import SuccessForm from "../SuccessForm/SuccessForm";
import ErrorForm from "../ErrorForm/ErrorForm";

export interface FormActionsProps {
  form: (onClick: (status: Status) => void) => ReactNode
}

export type Status = 'idle' | 'success' | 'error';

const FormActions: FC<FormActionsProps> = ({ form }) => {
  const [status, setStatus] = useState<Status>('idle');

  const handleChangeStatus = (newStatus: Status) => setStatus(newStatus);

  return (
    <>
      {
        status === 'idle' && form(handleChangeStatus)
      }
      {
        status === 'success' && <SuccessForm />
      }
      {
        status === 'error' && <ErrorForm onClick={handleChangeStatus} />
      }
    </>
  )
}

export default FormActions