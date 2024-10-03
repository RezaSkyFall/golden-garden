import PageHeader from "@/components/page-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPagination,
} from "@/components/ui/carousel";
import { Metadata } from "next";
import Image from "next/image";

const data = {
  h1: "نمونه کارها",
  caption:
    "در باغ طلایی، ما به خلق فضاهایی زیبا، آرامش‌بخش و لوکس افتخار می‌کنیم. هر یک از پروژه‌های ما با دقت و توجه ویژه‌ای به جزئیات طراحی و اجرا شده‌اند تا تجربه‌ای بی‌نظیر را برای مشتریانمان فراهم کنند. ",

  services: [
    {
      title: "طراحی و نقشه کشی باغ آقای محمدی",
      images: [
        "/images/gallery/1.jpg",
        "/images/gallery/2.jpg",
        "/images/gallery/3.jpg",
      ],
    },
    {
      title: "طراحی و نقشه کشی باغ آقای محمدی",
      images: [
        "/images/gallery/2.jpg",
        "/images/gallery/3.jpg",
        "/images/gallery/4.jpg",
        "/images/gallery/5.webp",
        "/images/gallery/1.jpg",
      ],
    },
    {
      title: "طراحی و نقشه کشی باغ آقای محمدی",
      images: [
        "/images/gallery/5.webp",
        "/images/gallery/2.jpg",
        "/images/gallery/3.jpg",
      ],
    },
  ],
};
export const metadata: Metadata = {
  title: data.h1,
  description: data.caption,
};
export default function Page() {
  return (
    <main className='flex flex-col gap-12'>
      <PageHeader
        h1={data.h1}
        caption={data.caption}
        imageSrc={"images/undraw_under_construction.svg"}
      />

      <ul className='container flex flex-col gap-8'>
        {data.services.map((item, index) => (
          <li key={index} className='flex flex-col gap-2'>
            <h2 className='text-xl'>{item.title}</h2>
            <Carousel opts={{ direction: "rtl" }}>
              <CarouselContent>
                {item.images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className='basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4'
                  >
                    <div className='relative h-32 md:h-36 lg:h-44 rounded-xl '>
                      <Image
                        src={image}
                        alt={item.title + index}
                        fill
                        className='object-cover rounded-xl'
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPagination />
            </Carousel>
          </li>
        ))}
      </ul>
    </main>
  );
}
