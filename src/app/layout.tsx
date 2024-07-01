import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import Providers from "@/lib/Providers/Providers";

export const metadata: Metadata = {
  title: "Dashboard | Mehedi Hasan",
  description: "Dasboard for managing data of Mehedi Hasan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body>
          {children}
          <Toaster />
        </body>
      </html>
    </Providers>
  );
}
