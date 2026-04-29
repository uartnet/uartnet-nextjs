// Licensed under the MIT License. See LICENSE file in the project root for full license information.

import {
  faGithub,
  faXTwitter,
  faReddit,
  faProductHunt,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export const user = {
  name: "@uartnet",
  description: "deep tech, telecom & AI infrastructure",
  about:
    "I'm @uartnet, a telecom and systems engineer with 10+ years of experience building deep tech products, including as CTO in startup environments.\n\nMy background is rooted in embedded systems, telecommunications, connectivity, and distributed systems, across a range of complex technical products. Lately, I've been especially interested in AI agents, automation, developer tools, and infrastructure for software systems that can become more autonomous, composable, and useful.\n\nSome of my past work resulted in patent filings around connectivity, autonomous systems, constrained path planning, and distributed processing.",
  interests:
    "AI agents · automation · developer tools · distributed systems · infrastructure · telecommunications · product engineering · technical strategy",
  avatar: {
    src: "/uartnet.png",
    alt: "@uartnet",
  },
  products: [
    {
      name: "rstream tunnels",
      description:
        'rstream delivers <span class="underline">state-of-the-art networking solutions</span>, covering real-time connectivity and end-to-end zero-trust security. Designed to meet enterprise data sovereignty requirements, it provides secure, scalable access to otherwise unreachable online resources.',
      href: "https://rstream.io",
      labels: [],
    },
    {
      name: "rstream sandbox",
      description: `spawnai <span class="underline">runs LLM-generated code in secure, fast-booting microVMs</span>. Open source and purpose-built for AI workflows, it offers a lightweight SDK, full filesystem and network access, and flexible deployment across shared or self-hosted runners.`,
      href: "https://rstream.io",
      labels: ["WIP"],
    },
  ],
  tools: [
    {
      name: "web remote terminal",
      description:
        "Simple, secure remote terminal straight from your browser. Connect to any Linux, macOS, or Windows system with just a single command. Trusted by thousands of developers worldwide. Start with the account-free demo. Powered by rstream tunnels.",
      href: "https://rstream.io/tools/webtty",
      labels: [],
    },
    {
      name: "share files from command-line",
      description:
        "Share files directly from your terminal. Files are end-to-end encrypted and accessible via the download link. The download link expires after 24 hours. Transfer up to 1 GB. Free forever. No account required.",
      href: "https://rstream.io/tools/file-sharing",
      labels: [],
    },
    {
      name: "free STUN/TURN Server",
      description:
        "Generate short-lived TURN credentials for testing and interoperability checks. Credentials are valid for one hour. Free forever. No account required.",
      href: "https://rstream.io/tools/turn-server",
      labels: [],
    },
    // {
    //   name: "IP address lookup",
    //   description:
    //     "Find out your IP geo-location! No ads. No tracking. No cookies.",
    //   href: "https://rstream.io/tools/ip-lookup",
    //   labels: [],
    // },
    {
      name: "linux toolchains for cross-compilation",
      description:
        "Cross-compile software using our pre-built toolchains for Linux for a variety of architectures.",
      href: "https://rstream.io/tools/linux-toolchains",
      labels: [],
    },
  ],
  social: [
    {
      name: "x",
      href: "https://x.com/uartnet",
      icon: (props: Omit<FontAwesomeIconProps, "icon">) => (
        <FontAwesomeIcon {...props} icon={faXTwitter} />
      ),
    },
    {
      name: "github",
      href: "https://github.com/uartnet",
      icon: (props: Omit<FontAwesomeIconProps, "icon">) => (
        <FontAwesomeIcon {...props} icon={faGithub} />
      ),
    },
    {
      name: "product-hunt",
      href: "https://www.producthunt.com/@uartnet",
      icon: (props: Omit<FontAwesomeIconProps, "icon">) => (
        <FontAwesomeIcon {...props} icon={faProductHunt} />
      ),
    },
    {
      name: "reddit",
      href: "https://www.reddit.com/user/uartnet",
      icon: (props: Omit<FontAwesomeIconProps, "icon">) => (
        <FontAwesomeIcon {...props} icon={faReddit} />
      ),
    },
  ],
};
