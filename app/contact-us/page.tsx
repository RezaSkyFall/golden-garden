import LabelValue from "@/components/label-value";
import PageHeader from "@/components/page-header";
import Section from "@/components/section";
import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { GeneralData } from "@/data/general";
import { Metadata } from "next";
import Link from "next/link";

const data = {
  h1: "تماس با ما",
  caption:
    "در باغ طلایی، آماده‌ایم تا شما را در هر مرحله از طراحی و ساخت ویلا یا باغ رویایی‌تان یاری کنیم. اگر سوالی دارید یا می‌خواهید با ما درباره پروژه‌های آینده‌تان مشورت کنید، با ما تماس بگیرید. تیم حرفه‌ای ما آماده است تا شما را در تمامی مراحل طراحی، ساخت و اجرای پروژه‌ها همراهی کند.",
  contacts: [
    {
      label: "شماره تماس",
      value: GeneralData.mobile.title,
      link: GeneralData.mobile.href,
    },
    {
      label: "ایمیل",
      value: GeneralData.mail.title,
      link: GeneralData.mail.href,
    },
    {
      label: "ساعات کاری",
      value: "شنبه تا پنج‌شنبه، 9 صبح تا 6 بعد از ظهر",
      link: "#",
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
        imageSrc='images\undraw_voice_control.svg'
      />

      <Section>
        <SectionTitle title='اطلاعات تماس با باغ طلایی' />

        <ul className='flex flex-col gap-2 max-w-2xl self-center w-full'>
          {data.contacts.map((item, index) => (
            <li key={index}>
              <Button asChild variant={"ghost"}>
                <Link href={item.link} className='flex gap-1 '>
                  <span className='font-bold'>{item.label + ": "}</span>
                  <span className='text-wrap'>{item.value}</span>
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionTitle
          title={"شبکه‌های اجتماعی"}
          caption={
            "برای اطلاع از جدیدترین پروژه‌ها و پیشنهادات ویژه ما، می‌توانید ما را در شبکه‌های اجتماعی دنبال کنید"
          }
        />

        <ul className='flex flex-col gap-2 max-w-2xl self-center w-full'>
          {GeneralData.socialMedia.map((item, index) => (
            <li key={index}>
              <Button asChild variant={"outline"} className='h-auto'>
                <Link href={item.href} className='flex gap-1 py-2'>
                  <div>{item.icon}</div>
                  <div className='flex flex-col gap-1'>
                    <span className='font-bold'>{item.title + ": "}</span>
                    <span className='text-wrap'>{item.id}</span>
                  </div>
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionTitle
          title='موقعیت مکانی'
          caption='شما می‌توانید به راحتی از طریق نقشه زیر به آدرس ما دسترسی پیدا کنید و حضوری با ما ملاقات کنید'
        />

        <div className='flex flex-col gap-2 max-w-2xl self-center w-full'>
          <LabelValue label='آدرس' value={GeneralData.address} />

          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250.1182071782609!2d51.826764159775024!3d32.49472316272373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc430015777801%3A0xc30cfaa653de278a!2z2KfZhdmE2KfaqSDYqNin2Log2LfZhNin24zbjA!5e0!3m2!1sen!2sfr!4v1727427348650!5m2!1sen!2sfr'
            //   width='600'
            //   height='450'
            //   style='border:0;'
            //   allowfullscreen=''
            loading='lazy'
            //   referrerpolicy='no-referrer-when-downgrade'
            className='rounded-xl shadow-md'
          ></iframe>
        </div>
      </Section>
    </main>
  );
}
