import type { Metadata } from "next";
import { Roboto, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const source = Source_Sans_3({ subsets: ["latin"] });
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ramit",
  description: "FrontEnd Developer Ramit Singh",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${source.className}`}>
        {children}
      </body>
    </html>
  );
}
