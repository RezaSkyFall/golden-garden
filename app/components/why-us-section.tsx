import Section from "@/components/section";
import SectionTitle from "@/components/section-title";

export default function WhyUsSection() {
  const data = [
    {
      title: "تجربه و تخصص در طراحی و ساخت ویلا و باغ",
      caption:
        "تیم متخصص باغ طلایی با بیش از [تعداد سال] سال تجربه در زمینه طراحی و ساخت ویلا و باغ، بهترین خدمات را به مشتریان خود ارائه می‌دهد. ما با به‌کارگیری جدیدترین متدهای طراحی و ساخت، فضایی زیبا و دل‌نشین برای شما خلق می‌کنیم.",
    },
    {
      title: "طراحی منحصربه‌فرد و متناسب با نیازهای شما",
      caption:
        "هر پروژه‌ای که ما اجرا می‌کنیم، به‌صورت کامل با نیازها و سلیقه‌های شما منطبق می‌شود. از سبک‌های معماری مدرن و کلاسیک گرفته تا طراحی‌های خاص برای باغ‌های بزرگ و کوچک، باغ طلایی در کنار شماست تا ویلا و باغی بی‌نظیر را ایجاد کنید.",
    },
    {
      title: "استفاده از بهترین متریال و مصالح",
      caption:
        "کیفیت در اولویت ما قرار دارد. در تمامی مراحل ساخت و ساز از بهترین و با کیفیت‌ترین متریال‌ها استفاده می‌کنیم تا پروژه شما علاوه بر زیبایی، دوام و مقاومت بالا نیز داشته باشد.",
    },
    {
      title: "اجرای پروژه‌های متنوع و مطابق با محیط زیست",
      caption:
        "طراحی‌ها و ساخت‌های ما نه‌تنها زیبا و لوکس هستند، بلکه با حفظ محیط زیست و استفاده از منابع طبیعی به‌صورت بهینه انجام می‌شود.",
    },
  ];
  return (
    <Section>
      <SectionTitle title='چرا باغ طلایی بهترین انتخاب شماست؟' />

      <ul className='flex flex-col gap-4'>
        {data.map((item, index) => (
          <li
            key={index}
            className='rounded-3xl px-8 py-6 bg-accent flex gap-4 flex-col lg:flex-row'
          >
            <div className='text-primary text-6xl'>{index + 1 + "."}</div>
            <div className='flex flex-col gap-2'>
              <h3 className='text-xl'>{item.title}</h3>
              <h4 className='px-2'>{item.caption}</h4>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
