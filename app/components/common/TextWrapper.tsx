export default function TextWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col max-w-[1200px] w-full">{children}</div>;
}
