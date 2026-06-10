// Licensed under the MIT License. See LICENSE file in the project root for full license information.

import type { Metadata } from "next";

const title: string = "@uartnet - software infrastructure, networking & AI tooling";
const description: string =
  "I build software systems for networking, automation, and infrastructure.";

export const site: {
  metadata: Metadata;
} = {
  metadata: {
    metadataBase: new URL("https://uartnet.co"),
    title: title,
    description: description,
    authors: { name: "@uartnet", url: "https://x.com/uartnet" },
    creator: "@uartnet",
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: "https://uartnet.co",
      title: title,
      description: description,
      siteName: "@uartnet",
      images: [
        {
          url: "/uartnet.png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@uartnet",
      images: "/uartnet.png",
    },
  },
};
