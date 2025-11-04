import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import AppFooter from "@/components/AppFooter";
import { Providers } from "@/components/providers/Providers";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Your one-stop ecommerce shop for high-quality audio gear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <Providers>
          {/* <AppHeader /> */}
          {children}
          <AppFooter />
        </Providers>
      </body>
    </html>
  );
}
