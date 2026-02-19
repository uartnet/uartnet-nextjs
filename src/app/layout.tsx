// Licensed under the MIT License. See LICENSE file in the project root for full license information.

import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { site } from "@/config/site";
import { Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

const font = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = site.metadata;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
