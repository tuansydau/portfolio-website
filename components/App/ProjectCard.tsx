import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  category: string;
  title: string;
  imagePath: string;
  description: string;
  linkTo: string;
  targetBlank?: boolean;
  noCover?: boolean;
  textColor?: string;
  filter?: string;
  lowBaseOpacity?: boolean;
}

export default function ProjectCard({
  category,
  title,
  imagePath,
  description,
  linkTo,
  targetBlank,
  noCover,
  textColor,
  filter,
  lowBaseOpacity
}: ProjectCardProps) {
  const topMargin = 1;
  const leftMargin = '2rem';

  return (
    <div className="w-full h-[450px]">
      <Link href={linkTo} target={targetBlank ? '_blank' : ''}>
        <div className="relative w-full h-full mb-2 bg-black">
          <Image
            className={
              lowBaseOpacity
                ? 'transition ease-in-out opacity-60 hover:opacity-40'
                : 'transition ease-in-out hover:opacity-60'
            }
            src={imagePath}
            alt=""
            objectFit={noCover ? '' : 'cover'}
            fill
            style={{
              filter: filter ? filter : ''
            }}
          />
          <p
            className="absolute text-white"
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '1rem',
              top: topMargin.toString().concat('rem'),
              left: leftMargin,
              color: textColor,
              fontWeight: 700
            }}
          >
            {category}
          </p>
          <p
            className="absolute text-white"
            style={{
              fontFamily: 'satoshi, sans-serif',
              fontSize: '1.25rem',
              top: (1.75 + topMargin).toString().concat('rem'),
              left: leftMargin,
              color: textColor,
              fontWeight: 800
            }}
          >
            {title}
          </p>
          <p
            className="absolute text-white"
            style={{
              width: '20vw',
              top: (4 + topMargin).toString().concat('rem'),
              left: leftMargin,
              color: textColor
            }}
          >
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
}
