import "../globals.css";
import { dir } from "i18next";
import { Inter } from "next/font/google";
import { languages } from "../lib/i18n/settings";
import { GoogleAnalytics } from "@next/third-parties/google";

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
      <body className={inter.className}>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        {children}
      </body>
      <GoogleAnalytics gaId="G-TEQCKZNTK3" />
    </html>
  );
}
