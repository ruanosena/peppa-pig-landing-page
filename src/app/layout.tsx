import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { WideContextProvider } from "@/lib/contexts/wideContext";
import { BackToTop } from "@/components/custom/backToTop";

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Peppa Pig Site",
  description:
    "Atividades para os pequenos, diversão e aventuras para experimentar, aproveita os produtos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <WideContextProvider>
        <body
          className={cn(
            "antialiased",
            fontHeading.className,
            fontBody.className,
          )}
        >
          {children}
          <BackToTop />
        </body>
      </WideContextProvider>
    </html>
  );
}
