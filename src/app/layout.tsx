import "./globals.css";
import { Pacifico, Roboto_Mono, Cinzel } from "next/font/google";

const pacifico = Pacifico({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const cinzel = Cinzel({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"]
})

const robot_mono = Roboto_Mono({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: "Banho&Tosa",
  description: "Bernardo Ribeiro, Banho & Tosa"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${robot_mono.variable}`}>
      <body className={cinzel.className}>{children}</body>
    </html>
  );
}
