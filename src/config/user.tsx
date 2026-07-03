// Licensed under the MIT License. See LICENSE file in the project root for full license information.

import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export const user = {
  name: "@uartnet",
  description: "networking, cybersecurity, and infrastructure",
  location: "France",
  contact: {
    email: "contact@uartnet.co",
    href: "mailto:contact@uartnet.co",
  },
  about:
    "I'm @uartnet. I build software infrastructure for private networks, remote systems, and agent-driven infrastructure.\n\nMy work is focused on networking, cybersecurity, distributed systems, embedded software, secure access, and software that makes infrastructure easier to deploy, operate, and inspect.\n\nI am currently building rstream, a secure networking stack for private systems, remote access, WebTTY, realtime workloads, and AI agent workflows.",
  interests:
    "network protocols · cybersecurity · secure access · distributed systems · embedded infrastructure · AI agents · product engineering",
  advisory:
    "I work with technical teams, integrators, and infrastructure operators on secure connectivity, private access, deployment architecture, cybersecurity posture, and product strategy.\n\nThis includes rstream licensing, enterprise deployments, integrator partnerships, technical onboarding, secure access architecture, and the evaluation of networking, cybersecurity, or infrastructure systems that need to become reliable product surfaces.",
  avatar: {
    src: "/uartnet.png",
    alt: "@uartnet",
  },
  products: [
    {
      name: "rstream tunnels",
      description:
        'Secure networking infrastructure for private systems, remote machines, devices, WebTTY, realtime applications, and agent-driven operations. Built around <span class="underline">controlled connectivity, protocol breadth, zero-trust security, cryptographic protection, and production-grade runtime behavior.</span>',
      href: "https://rstream.io",
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
  ],
};
