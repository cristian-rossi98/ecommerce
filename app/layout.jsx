import "./globals.css";
import { Inter } from "next/font/google";
import toast, { Toaster } from "react-hot-toast";

import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce",
  description: "Created by Cristian Rossi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Toaster />
        <main className="m-auto lg:w-4/5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
