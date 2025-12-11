import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ThemeSwitcher } from "./theme-switcher";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MDaffaIlhami React UI",
  description: "MDaffaIlhami React UI",
};

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="system">
      {children}
    </ThemeProvider>
  );
};

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <Providers>
          <div className="isolate">{children}</div>
          <ThemeSwitcher />
        </Providers>
      </body>
    </html>
  );
};
