import { Inter } from "@next/font/google";

import "@/src/app/styles/global.css";
import "@/src/app/styles/reset.css";

import Footer from "@/src/app/components/footer";
import Header from "@/src/app/components/header";

const interFontFamily = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFontFamily.className}>
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
