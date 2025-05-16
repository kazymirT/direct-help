"use client"
import FormActions from "@/modules/Forms/FormActions/FormActions";
import NewPartner from "../Forms/NewPartner/NewPartner";

const Partners = () => {
  return (
    <FormActions form={(setStatus) => (
      <NewPartner setStatus={setStatus} />
    )} >
    </FormActions>
  );
}

export default Partners;
