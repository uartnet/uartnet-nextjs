// Licensed under the MIT License. See LICENSE file in the project root for full license information.

import type { Metadata } from "next";

const title: string = "@uartnet — deep tech, telecom & AI infrastructure";
const description: string =
  "Telecom and systems engineer with 10+ years building deep tech products, interested in AI agents, automation, infrastructure, developer tools, and distributed systems.";

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
