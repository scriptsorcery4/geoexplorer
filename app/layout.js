import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "GeoExplorer",
  description: "Generated by create next app",
  icons:{
    icon: ['/favicon.ico?v=4'],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="emerald">
      <body className={rubik.className}>
        <div className="space-y-6 md:space-y-10">
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
        </div>
        </body>
    </html>
  );
}
