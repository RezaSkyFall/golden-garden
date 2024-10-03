import { Button } from "@/components/ui/button";
import { NavLinks } from "@/data/links";
import { MenuIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GeneralData } from "@/data/general";
import Image from "next/image";

function LogoBanner() {
  return (
    <div className='flex gap-1 items-center'>
      <Image
        src={"/images/logo.png"}
        alt='logo'
        height={32}
        width={32}
        unoptimized
      />
      <span className='font-bold'>
        <span className='text-primary'>{"G"}</span>
        {"olden"}
        <span className='text-primary'>{"G"}</span>
        {"arden"}
      </span>
    </div>
  );
}

function MobileNavDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' size={"icon"}>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle></SheetTitle>
        <ul className='flex flex-col gap-6 py-6'>
          {NavLinks.map((item, index) => (
            <li key={index} className='hover:text-primary transition-colors'>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
export default function NavBar() {
  return (
    <div className='py-4 lg:py-6 flex justify-center sticky top-0 bg-background z-50 border-b '>
      <div className='container  flex flex-row justify-between'>
        <div className='flex gap-4 lg:gap-12 items-center'>
          <div className='lg:hidden'>
            <MobileNavDrawer />
          </div>

          <Link href={"/"}>
            <LogoBanner />
          </Link>

          <ul className='lg:flex flex-row gap-6 hidden'>
            {NavLinks.map((item, index) => (
              <li key={index} className='hover:text-primary transition-colors'>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <Button variant={"outline"} asChild className='hidden lg:flex'>
          <Link href={GeneralData.mobile.href}>
            <PhoneIcon className='w-4 h-4 scale-x-[-1]' />
            {GeneralData.mobile.title}
          </Link>
        </Button>
      </div>
    </div>
  );
}
