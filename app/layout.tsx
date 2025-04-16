import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Neuton } from "next/font/google";
import { Notable } from "next/font/google";
import { League_Spartan } from "next/font/google";
import "./app.css";

const inter = Inter({ subsets: ["latin"] });
const neuton = Neuton({ weight: "400", subsets: ["latin"] });
const notable = Notable({ weight: "400", subsets: ["latin"] });
const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Campus Coders Crew",
  description: "We build websites for clubs. By Students. For Students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${neuton.className} ${notable.className} ${leagueSpartan.className}`}>
        {children}
      </body>
    </html>
  );
} 