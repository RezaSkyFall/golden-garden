import SectionMore from "@/components/section-more";
import SectionTitle from "@/components/section-title";

export default function ServicesSection() {
  const services = [
    {
      title: "طراحی ویلا",
      caption:
        "طراحی ویلاهای لوکس و مدرن بر اساس آخرین ترندهای روز دنیا. تیم معماری باغ طلایی با ترکیب علم و هنر، فضایی را برای شما خلق می‌کند که هم زیبا و هم کاربردی باشد.",
      gradiant: "linear-gradient(to bottom right, #027fff, #4eeec2)",
    },
    {
      title: "ساخت و ساز ویلا",
      caption:
        "اجرای پروژه‌های ساخت ویلا با بهترین کیفیت و در کمترین زمان ممکن. ما تمامی مراحل ساخت را از ابتدا تا انتها مدیریت می‌کنیم و شما را در جریان کامل روند کار قرار می‌دهیم.",
    },
    {
      title: "طراحی و اجرای باغ",
      caption:
        "طراحی و اجرای باغ‌های زیبا و خاص با استفاده از گیاهان طبیعی و بومی منطقه اصفهان. ما در باغ طلایی محیطی آرامش‌بخش و طبیعی برای شما ایجاد می‌کنیم که با زیبایی طبیعت همخوانی داشته باشد.",
    },
    {
      title: "بازسازی ویلا و باغ",
      caption:
        "بازسازی ویلاها و باغ‌ها با توجه به نیازهای مدرن امروز. ما پروژه‌های قدیمی شما را با جدیدترین متدهای روز به‌روزرسانی می‌کنیم و فضایی جدید و کاربردی برای شما ایجاد می‌کنیم.",
      gradiant: "linear-gradient(135deg, #14B1A1 10%, #6EEFC2)",
    },
  ];

  return (
    <section className='flex flex-col gap-6 container'>
      <SectionTitle title='خدمات ما در باغ طلایی' />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {services.map((item, index) => (
          <div
            key={index}
            className={`px-8 py-6 flex flex-col items-center gap-4 rounded-3xl ${
              item.gradiant ? "text-white" : "bg-accent"
            }`}
            style={{
              background: item.gradiant,
            }}
          >
            <h3 className='text-xl font-bold'>{item.title}</h3>
            <h4>{item.caption}</h4>
          </div>
        ))}
      </div>

      <SectionMore href='/services' />
    </section>
  );
}
