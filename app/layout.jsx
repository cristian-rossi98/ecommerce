import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import { ReduxProvider } from "./redux/provider";

import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce",
  description: "Created by Cristian Rossi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ReduxProvider>
          <Toaster />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}

// {/* <Toaster /> */}
// {/* <Footer /> */}
