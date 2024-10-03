import PageHeader from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import React from "react";

const data = {
  h1: "خدمات ما",
  caption:
    "باغ طلایی با سال‌ها تجربه در زمینه طراحی و ساخت ویلا و باغ در اصفهان و مناطق اطراف، آماده است تا بهترین خدمات را با کیفیتی بی‌نظیر و مطابق با نیازهای مشتریان ارائه دهد. خدمات ما شامل مراحل مختلف از طراحی تا اجرای کامل پروژه‌های ویلایی و باغی است.",
  services_list: [
    {
      title: "خدمات طراحی و ساخت ویلا",
      description:
        "ما در باغ طلایی تخصص ویژه‌ای در طراحی ویلاهای مدرن، کلاسیک و لوکس داریم. تیم طراحی ما با در نظر گرفتن نیازها، سلیقه‌ها و بودجه شما، طرحی منحصربه‌فرد خلق می‌کند که هم از لحاظ زیبایی و هم کاربری بی‌نظیر باشد.",
      features: [
        "طراحی سه‌بعدی و ارائه پیش‌نمایش",
        "استفاده از متریال‌های با کیفیت",
      ],
    },
    {
      title: "خدمات طراحی و اجرای باغ",
      description:
        "یکی از خدمات اصلی ما طراحی و اجرای باغ‌های لاکچری، کوچک و بزرگ با توجه به نیازها و خواسته‌های شما است. ما با در نظر گرفتن شرایط اقلیمی اصفهان، بهترین گیاهان و طراحی‌های متناسب با محیط زیست را به کار می‌بریم تا باغی منحصر‌به‌فرد و آرامش‌بخش برای شما ایجاد کنیم.",
      features: ["باغ‌های مدرن و سنتی", "آبیاری و نگهداری"],
    },
    {
      title: "خدمات بازسازی ویلا و باغ",
      description:
        "آیا ویلای شما قدیمی و نیازمند نوسازی است؟ ما در باغ طلایی تجربه زیادی در بازسازی و به‌روزرسانی ویلاها و باغ‌های قدیمی داریم. ما پروژه‌های شما را با حفظ ویژگی‌های اصیل، به فضاهایی مدرن و زیبا تبدیل می‌کنیم.",
      features: ["بازسازی کلی و جزئی ویلا", "بازسازی باغ‌های قدیمی"],
    },
    {
      title: "خدمات مشاوره رایگان",
      description:
        "تیم مشاوره ما در باغ طلایی آماده است تا در تمامی مراحل پروژه به شما مشاوره‌های رایگان ارائه دهد. ما با بررسی نیازهای شما، بهترین راهکارهای طراحی و ساخت را پیشنهاد می‌کنیم تا پروژه‌ای متناسب با بودجه و سلیقه شما اجرا شود.",
      features: ["ارائه طرح‌های پیشنهادی", "تخمین هزینه"],
    },
    {
      title: "خدمات پس از اجرای پروژه",
      description:
        "ما نه‌تنها در طول پروژه، بلکه پس از تحویل آن نیز همواره در کنار شما هستیم. خدمات پس از اجرای پروژه شامل نگهداری و تعمیرات ویلا و باغ شماست تا از کیفیت و دوام پروژه خود مطمئن باشید.",
      features: ["نگهداری از باغ", "تعمیرات ویلا"],
    },
  ],
  why_us: {
    title: "چرا باغ طلایی؟",
    points: [
      "تجربه و تخصص بالا",
      "کیفیت و دقت در اجرا",
      "مشاوره و پشتیبانی حرفه‌ای",
    ],
  },
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
        imageSrc={"/images/undraw_right_direction.svg"}
      />
      <section>
        <ul className='flex flex-col gap-8 container'>
          {data.services_list.map(({ description, features, title }, index) => (
            <li key={index} className='flex gap-1'>
              <div className='text-primary text-6xl'>{index + 1 + "."}</div>

              <div className='flex flex-col gap-2'>
                <h2 className='text-xl'>{title}</h2>
                <p className='px-2 text-secondary-foreground'>{description}</p>
                <ul className='px-4 flex gap-2 flex-wrap'>
                  {features.map((feature, index) => (
                    <li key={index}>
                      <Badge>{feature}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
