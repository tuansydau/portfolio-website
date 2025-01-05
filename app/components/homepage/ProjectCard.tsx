export default function ProjectCard({
  company,
  description,
  title
}: {
  company: string;
  description: string;
  title: string;
}) {
  return (
    <div className="flex flex-col w-full space-y-4 hover:cursor-pointer">
      <h2 className="text-6xl" style={{ fontFamily: 'Array-BoldWide' }}>
        {company}
      </h2>
      <h3 className="text-3xl font-poppinsLight">{description}</h3>
      <h4 className="text-2xl font-poppinsLight">{title}</h4>
    </div>
  );
}
