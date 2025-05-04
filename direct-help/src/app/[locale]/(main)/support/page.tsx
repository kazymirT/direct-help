"use client"
import SupportForm from "@/modules/Forms/SupportForm/SupportForm";
import FormActions from "@/modules/Forms/FormActions/FormActions";

export default function Support() {
  return (
    <FormActions form={(setStatus) => (
      <SupportForm setStatus={setStatus} />
    )} >
    </FormActions>
  );
}
