import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./components/footer";
import NavBar from "./components/nav-bar";
import "./globals.css";

const geistSans = localFont({
  src: [
    {
      path: "./fonts/iranyekanweblight(fanum).woff2",
      weight: "300",
    },
    {
      path: "./fonts/iranyekanwebregular(fanum).woff2",
      weight: "500",
    },
    {
      path: "./fonts/iranyekanwebbold(fanum).woff2",
      weight: "700",
    },
  ],
  variable: "--font-iran-yekan",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | باغ طلایی",
    default: "طراحی و ساخت باغ و ویلا در اصفهان | باغ طلایی",
  },
  description:
    "به دنبال طراحی و ساخت باغ و ویلا در اصفهان با بالاترین کیفیت و دقت هستید؟ برند باغ طلایی با سال‌ها تجربه در زمینه طراحی، ساخت و اجرای انواع پروژه‌های ویلایی و باغی، همراه شماست تا فضای دلخواهتان را خلق کنید. از طراحی لوکس و مدرن تا ساخت باغ‌های سنتی و آرامش‌بخش، ما در تمامی مراحل همراه شما خواهیم بود.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fa' dir='rtl'>
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
          <Separator />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
