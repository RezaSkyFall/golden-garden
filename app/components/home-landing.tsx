import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomeLanding() {
  const data = {
    h1: "طراحی و ساخت باغ و ویلا در اصفهان | باغ طلایی",
    caption:
      "به دنبال طراحی و ساخت باغ و ویلا در اصفهان با بالاترین کیفیت و دقت هستید؟ برند باغ طلایی با سال‌ها تجربه در زمینه طراحی، ساخت و اجرای انواع پروژه‌های ویلایی و باغی، همراه شماست تا فضای دلخواهتان را خلق کنید. از طراحی لوکس و مدرن تا ساخت باغ‌های سنتی و آرامش‌بخش، ما در تمامی مراحل همراه شما خواهیم بود.",
  };
  return (
    <header className='grid  grid-cols-1 flex-row-reverse lg:grid-cols-2 gap-8 container py-4 '>
      <div className='flex flex-col gap-4 h-full justify-center order-1 lg:-order-1'>
        <h1 className='text-3xl font-bold'>{data.h1}</h1>
        <p className='px-2'>{data.caption}</p>
        <div className='flex gap-2'>
          <Button asChild className='hover:text-primary-foreground'>
            <Link href={"/gallery"}>{"نمونه کارها"}</Link>
          </Button>
          <Button asChild variant={"link"}>
            <Link href={"/contact-us"}>{"تماسی با ما"}</Link>
          </Button>
        </div>
      </div>
      <div className='relative lg:h-96 h-48 md:h-56'>
        <Image
          src={"/images/باغ_طلایی_اصلی.jpg"}
          alt='باغ_طلایی_اصلی'
          fill
          className='object-cover rounded-3xl'
        />
      </div>
    </header>
  );
}
