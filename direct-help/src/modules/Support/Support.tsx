'use client';
import SupportForm from '@/modules/Forms/SupportForm/SupportForm';
import FormActions from '@/modules/Forms/FormActions/FormActions';

const Support = () => {
  return (
    <FormActions
      form={(setStatus) => <SupportForm setStatus={setStatus} />}
    ></FormActions>
  );
};

export default Support;
