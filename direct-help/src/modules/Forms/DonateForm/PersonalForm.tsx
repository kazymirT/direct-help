import Checkbox from "@/components/Checkbox/Checkbox"
import { getTranslations } from "next-intl/server";

const PersonalForm = async () => {
  const t = await getTranslations('form.payment');
  return (
    <div className="w-full m-auto pt-[55px] pl-2">
      <Checkbox id="personal" sizeLabel="full" label={t('personal')} />
    </div>
  )
}

export default PersonalForm