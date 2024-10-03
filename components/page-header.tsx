import Image from "next/image";

export default function PageHeader({
  h1,
  caption,
  imageSrc,
}: {
  h1: string;
  caption?: string;
  imageSrc: string;
}) {
  return (
    <header>
      <div className='container flex flex-col gap-2 py-4'>
        <div className='relative h-28'>
          <Image src={imageSrc} alt={h1} fill />
        </div>
        <div className=' flex flex-col gap-2'>
          <h1 className='text-3xl'>{h1}</h1>
          {caption && <p className='text-sm'>{caption}</p>}
        </div>
      </div>
    </header>
  );
}
