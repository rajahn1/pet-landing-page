import "./globals.css";
import { Roboto_Mono, Sansita, PT_Sans } from "next/font/google";
import Header from "@/components/Header";

const robot_mono = Roboto_Mono({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const sansita = Sansita({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sansita",
});

const pt_sans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pt-sans",
});

export const metadata = {
  title: "Banho&Tosa",
  description: "Bernardo Ribeiro, Banho & Tosa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${robot_mono.variable} ${sansita.variable} ${pt_sans.variable}`}
    >
      <body className={sansita.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
