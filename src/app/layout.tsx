import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MDaffaIlhami React UI",
  description: "MDaffaIlhami React UI",
};

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className="isolate">{children}</div>
      </body>
    </html>
  );
};
