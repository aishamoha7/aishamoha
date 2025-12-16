import { Philosopher } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", '700'],
  variable: "--font-philosopher",
});

export const metadata = {
  title: "Aisha Mohamed | Portfolio",
  description: "Graphic Designer, Website Builder, Content Creator & Odoo Specialist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={philosopher.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
