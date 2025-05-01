"use client"
import FormActions from "@/modules/Forms/FormActions/FormActions";
import NewPartner from "@/modules/Forms/NewPartner/NewPartner";

export default function Partners() {
  return (
    <section className="flex flex-col m-auto w-full max-w-[1280px]">
        <FormActions form={(setStatus) => (
          <NewPartner setStatus={setStatus} />
        )} >
        </FormActions>
    </section>
  );
}
