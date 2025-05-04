"use client"
import FormActions from "@/modules/Forms/FormActions/FormActions";
import NewPartner from "@/modules/Forms/NewPartner/NewPartner";

export default function Partners() {
  return (
    <FormActions form={(setStatus) => (
      <NewPartner setStatus={setStatus} />
    )} >
    </FormActions>
  );
}
