import "../globals.css";
import { dir } from "i18next";
import { Inter } from "next/font/google";
import { languages } from "../lib/i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Portfolio of Meng Xu",
//   description: "This is a portfolio of Meng Xu(Amon)",
// };

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
