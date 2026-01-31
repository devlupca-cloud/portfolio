import Image from 'next/image';

interface TechIconProps {
  name: string;
  size?: number;
}

export default function TechIcon({ name }: TechIconProps) {
  const iconPath = `/icons/${name}.png`;

  return (
    <div className="flex flex-col items-center justify-center p-2">
      <div className="relative w-12 h-12 mb-2">
        <Image
          src={iconPath}
          alt={name}
          fill
          className="object-contain"
          sizes="(max-width: 48px) 100vw, 48px"
        />
      </div>
      <span className="text-sm text-center text-gray-600 dark:text-gray-300">
        {name}
      </span>
    </div>
  );
} 