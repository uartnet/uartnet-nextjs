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
  description: "software engineer",
  about:
    "I'm @uartnet, a Software Engineer focused on product development and deeply passionate about networking. I strive to create tech solutions that enrich people's lives and improve connectivity.",
  avatar: {
    src: "/uartnet.png",
    alt: "@uartnet",
  },
  products: [
    {
      name: "rstream",
      description:
        'rstream delivers <span class="underline">state-of-the-art networking solutions</span>, covering real-time connectivity and end-to-end zero-trust security. Designed to meet enterprise data sovereignty requirements, it provides secure, scalable access to otherwise unreachable online resources.',
      href: "https://rstream.io",
      labels: ["WIP"],
    },
    {
      name: "spawnai",
      description:
        "spawnai runs LLM-generated code in secure, fast-booting microVMs. Open source and purpose-built for AI workflows, it offers a lightweight SDK, full filesystem and network access, and flexible deployment across shared or self-hosted runners.",
      href: "https://spawnai.dev",
      labels: ["WIP"],
    },
  ],
  tools: [
    {
      name: "web remote terminal",
      description:
        "Simple, Secure Remote Terminal straight from Your Browser. Connect to any Linux, macOS, or Windows system with just a single command. Free. No account required. Powered by rstream.",
      href: "https://rstream.io/tools/webtty",
      labels: [],
    },
    {
      name: "share files from command-line",
      description:
        'Share files directly from your terminal. Files are <span class="underline">end-to-end encrypted</span> and accessible via the download link. The download link expires after 24 hours. Transfer up to 1 GB. Free forever. No account required.',
      href: "https://rstream.io/tools/file-sharing",
      labels: [],
    },
    {
      name: "IP address lookup",
      description:
        "Find out your IP geo-location! No ads. No tracking. No cookies.",
      href: "https://rstream.io/tools/ip-lookup",
      labels: [],
    },
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
