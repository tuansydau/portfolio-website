import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  imagePath: string;
  description: string;
  linkTo: string;
  targetBlank?: boolean;
  noCover?: boolean;
}

export default function ProjectCard({
  title,
  imagePath,
  description,
  linkTo,
  targetBlank,
  noCover
}: ProjectCardProps) {
  return (
    <div className="w-1/2 h-full">
      <Link href={linkTo} target={targetBlank ? '_blank' : ''}>
        <div className="relative w-full h-3/4 rounded-xl mb-2">
          <Image
            className=""
            src={imagePath}
            alt=""
            objectFit={noCover ? '' : 'cover'}
            fill
          ></Image>
        </div>
        <div className="border-b border-black mb-1 font-medium text-2xl">
          {title}
        </div>
        <div className="font-light text-2xl text-gray-700">{description}</div>
      </Link>
    </div>
  );
}
