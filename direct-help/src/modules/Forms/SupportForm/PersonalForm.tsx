import Checkbox from "@/components/Checkbox/Checkbox"

const PersonalForm = () => {
  return (
    <div className="w-full max-w-[669px] m-auto pt-[29px]">
      <Checkbox id="personal" sizeLabel="full" label="Я погоджуюсь з обробкою персональних данних" />
    </div>
  )
}

export default PersonalForm