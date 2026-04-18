import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaishnavi kabra | Interior Design Portfolio",
  description: "Undergraduate Interior Design Portfolio 2021-2025",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="bg-[#f8f5f0] text-[#3a3a3a] antialiased font-light">
        {children}
      </body>
    </html>
  );
}
