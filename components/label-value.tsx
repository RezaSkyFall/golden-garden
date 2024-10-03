import React from "react";

type Props = {
  label: string;
  value: string;
};

export default function LabelValue({ label, value }: Props) {
  return (
    <div className='flex gap-1 '>
      <span className='font-bold'>{label + ": "}</span>
      <span className='text-wrap'>{value}</span>
    </div>
  );
}
