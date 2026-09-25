import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "J. S. Engineering | Bread Slicing & Bakery Machinery Manufacturer",
  description:
    "J. S. Engineering manufactures high-speed bread slicing machines, toast slicers, cake slicing machines, gravity slicers and bakery equipment in India.",
  keywords: [
    "bread slicing machine manufacturer",
    "bread slicer manufacturer in India",
    "high speed bread slicing machine",
    "toast slicing machine",
    "gravity bread slicer",
    "cake slicing machine",
    "bakery machinery manufacturer",
    "bread slicer supplier",
    "bakery equipment manufacturer",
    "bread slicing machine Delhi",
  ],
  openGraph: {
    title: "J. S. Engineering | Bread Slicing & Bakery Machinery Manufacturer",
    description:
      "High-speed bread, toast and cake slicing machines and bakery equipment, engineered in Delhi, India since 1948.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="font-body antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
