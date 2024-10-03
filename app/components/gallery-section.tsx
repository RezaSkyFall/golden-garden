"use client";
import Section from "@/components/section";
import SectionTitle from "@/components/section-title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import SectionMore from "@/components/section-more";

export default function GallerySection() {
  const data = [
    {
      title: "نقشه کشی باغ آقای محمدی",
      image: "/images/gallery/1.jpg",
    },
    {
      title: "نقشه کشی باغ آقای محمدی",
      image: "/images/gallery/2.jpg",
    },
    {
      title: "نقشه کشی باغ آقای محمدی",
      image: "/images/gallery/3.jpg",
    },
    {
      title: "نقشه کشی باغ آقای محمدی",
      image: "/images/gallery/4.jpg",
    },
    {
      title: "نقشه کشی باغ آقای محمدی",
      image: "/images/gallery/5.webp",
    },
  ];
  return (
    <Section>
      <SectionTitle
        title={"پروژه‌های موفق باغ طلایی"}
        caption={
          "ما تاکنون ده‌ها پروژه موفق در اصفهان و مناطق اطراف آن اجرا کرده‌ایم که نمونه‌های آن شامل باغ‌های لاکچری، ویلاهای مدرن و ساخت ویلاهای خصوصی برای افراد خاص بوده است. مشتریان ما همواره از همکاری با باغ طلایی رضایت کامل داشته‌اند و پروژه‌های ما به‌عنوان یکی از برترین نمونه‌های طراحی و ساخت ویلا و باغ در منطقه شناخته می‌شوند."
        }
      />

      <Carousel
        opts={{
          direction: "rtl",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3500,
          }),
        ]}
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className='basis-3/4 md:basis-1/2 lg:basis-1/3'
            >
              <div className='p-3 bg-accent rounded-3xl flex flex-col gap-3'>
                <div className='relative lg:h-56 h-36'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className='object-cover rounded-3xl'
                  />
                </div>
                <h3>{item.title}</h3>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <SectionMore href='/gallery' />
    </Section>
  );
}
