import { RiInstagramLine, RiTelegramLine } from "react-icons/ri";

export const GeneralData = {
  mobile: {
    title: "0913-367-0062",
    href: "tel:+989133670062",
  },
  mail: {
    title: "info@baghetalayi.com",
    href: "mailto:info@baghetalayi.com",
  },

  socialMedia: [
    {
      title: "اینستاگرام",
      href: "https://www.instagram.com/goldengarden.esfahan",
      icon: <RiInstagramLine className='w-6 h-6' />,
      id: "goldengarden.esfahan",
    },
    {
      title: "تلگرام",
      href: "https://t.me/goldengardenesfahan",
      icon: <RiTelegramLine className='w-6 h-6' />,
      id: "goldengardenesfahan",
    },
  ],

  address: "اصفهان، روستای کبوترآباد",
};
