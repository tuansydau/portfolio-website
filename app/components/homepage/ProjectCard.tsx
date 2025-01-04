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
    <div className="flex flex-col w-full space-y-4 hover:cursor-pointer transition-colors text-white hover:text-gray-400">
      <h2 className="text-6xl" style={{ fontFamily: 'Array-BoldWide' }}>
        {company}
      </h2>
      <h3 className="text-4xl">{description}</h3>
      <h4 className="text-2xl">{title}</h4>
      <div className="w-full h-[500px] bg-white rounded-md" />
    </div>
  );
}
