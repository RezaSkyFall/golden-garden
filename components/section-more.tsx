import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronLeftCircleIcon } from "lucide-react";

type Props = {
  href: string;
};

export default function SectionMore({ href }: Props) {
  return (
    <div className='flex justify-center'>
      <Button asChild variant={"outline"}>
        <Link href={href}>
          <ChevronLeftCircleIcon className='w-4 h-4' />
          {"مشاهده بیشتر"}
        </Link>
      </Button>
    </div>
  );
}
