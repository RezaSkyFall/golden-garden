import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Section({ children }: Props) {
  return <div className='flex flex-col gap-6 container'>{children}</div>;
}
