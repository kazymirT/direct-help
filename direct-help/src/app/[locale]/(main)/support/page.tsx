"use client"
import SupportForm from "@/modules/Forms/SupportForm/SupportForm";
import FormActions from "@/modules/Forms/FormActions/FormActions";

export default function Support() {
  return (
    <section className="flex flex-col m-auto w-full max-w-[1280px]">
        <FormActions form={(setStatus) => (
          <SupportForm setStatus={setStatus} />
        )} >
        </FormActions>
    </section>
  );
}
