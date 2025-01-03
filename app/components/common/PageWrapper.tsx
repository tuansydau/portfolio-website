export default function PageWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col items-center font-medium">{children}</div>
    </>
  );
}
