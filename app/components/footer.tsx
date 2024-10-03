import { Separator } from "@/components/ui/separator";
import { NavLinks } from "@/data/links";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { RiInstagramLine, RiTelegramLine } from "react-icons/ri";
import { ToggleTheme } from "./toggle-theme";

export default function Footer() {
  return (
    <footer className='flex flex-col gap-4 py-4 items-center mt-20'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          <div className='md:col-span-2 flex flex-col gap-2'>
            <div className='flex flex-col gap-4'>
              <h4 className='text-xl'>{"درباره ما"}</h4>
              <p className='text-sm px-2 text-secondary-foreground'>
                {
                  "به دنبال طراحی و ساخت باغ و ویلا در اصفهان با بالاترین کیفیت و دقت هستید؟ برند باغ طلایی با سال‌ها تجربه در زمینه طراحی، ساخت و اجرای انواع پروژه‌های ویلایی و باغی، همراه شماست تا فضای دلخواهتان را خلق کنید."
                }
              </p>
            </div>

            <div className='flex gap-1 items-center'>
              <h6 className=''>{"شماره تماس: "}</h6>
              <Link href={"tel:+989133670062"}>
                <p className='font-bold'>{"0913-367-0062"}</p>
              </Link>
            </div>
            <div className='flex gap-1 items-center'>
              <h6 className=''>{"آدرس: "}</h6>
              <Link href={"tel:+989133670062"}>
                <p className='font-bold'>{"اصفهان، روستای کبوترآباد"}</p>
              </Link>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h4 className='text-xl'>{"لینک های مفید"}</h4>
            <ul className='flex flex-col gap-2 text-secondary-foreground '>
              {NavLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className='flex gap-1 items-center hover:text-primary transition-colors'
                  >
                    <ArrowLeft className='w-4 h-4' />
                    <span className='text-sm'>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col gap-4 items-start'>
            <h4>{"ما در شبکه های اجتماعی"}</h4>
            <Link
              href={"https://www.instagram.com/goldengarden.esfahan"}
              className='flex items-center gap-1 px-2 py-2 border rounded-lg'
            >
              <RiInstagramLine className='w-6 h-6' />
              <span className='text-xs text-secondary-foreground'>
                {"اینستاگرام"}
              </span>
            </Link>
            <Link
              href={"https://t.me/goldengardenesfahan"}
              className='flex items-center gap-1 px-2 py-2 border rounded-lg'
            >
              <RiTelegramLine className='w-6 h-6' />
              <span className='text-xs text-secondary-foreground'>
                {"تلگرام"}
              </span>
            </Link>
          </div>
        </div>
      </div>

      <ToggleTheme />

      <Separator />
      <div className='flex shrink-0 text-nowrap flex-wrap gap-2 justify-center items-center container'>
        <p className='text-sm text-wrap'>
          {"تمامی حقوق سایت متعلق به باغ طلایی میباشد. ©2024"}
        </p>
        <span>{"|"}</span>
        <p className='text-wrap'>
          {"طراحی و توسعه سایت توسط: "}
          <Link
            href={"https://reza-barati.ir/"}
            target='_blank'
            className='bg-blue-600 dark:bg-blue-700  text-white px-4 py-1 rounded-full hover:underline hover:text-white'
          >
            {"رضا براتی"}
          </Link>
        </p>
      </div>
    </footer>
  );
}
