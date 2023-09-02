import "./globals.css";
import localFont from "next/font/local";
import { Pacifico, Roboto_Mono } from "next/font/google";
const visby = localFont({
  src: "../fonts/Visby-Round-www.Dfonts.org/OTF/VisbyRoundCF-Bold.otf",
});

const pacifico = Pacifico({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-pacifico",
});

const robot_mono = Roboto_Mono({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto-mono",
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
    <html lang="en" className={`${robot_mono.variable} ${pacifico.variable}`}>
      <body className={visby.className}>{children}</body>
    </html>
  );
}
