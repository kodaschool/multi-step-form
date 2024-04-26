"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { FormProvider } from "@/context/useFormContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <FormProvider>
        <body className={`flex justify-center my-24 ${inter.className}`}>
          {children}
        </body>
      </FormProvider>
    </html>
  );
}
