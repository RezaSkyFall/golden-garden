import React from "react";

type Props = {
  title: string;
  caption?: string;
};

export default function SectionTitle({ title, caption }: Props) {
  return (
    <div className='w-full items-center flex flex-col gap-2'>
      <h2 className=' text-2xl font-bold text-center'>{title}</h2>
      {caption && (
        <p className='text-sm text-center text-secondary-foreground '>
          {caption}
        </p>
      )}
    </div>
  );
}
