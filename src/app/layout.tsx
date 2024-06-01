import MainHeader from "@/components/main-header";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Shre X ThuKhaAung",
  description: "Shre Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
