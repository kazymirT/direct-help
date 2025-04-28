import HeaderRoot from "@/modules/HeaderRoot/HeaderRoot"

export default function FormLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HeaderRoot />
      <main>{children}</main>
    </>
  )
}
