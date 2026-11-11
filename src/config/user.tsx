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
    "I build software for private networks and remote systems, making infrastructure easier to deploy, operate, and inspect.\n\nMy work spans distributed systems, embedded software, and infrastructure for AI agents. I'm currently building rstream.",
  interests:
    "network protocols · cybersecurity · secure access · AI agents · product engineering",
  advisory:
    "I help technical teams, integrators, and infrastructure operators with secure connectivity, private access, deployment architecture, cybersecurity posture, and product strategy.\n\nEngagements range from evaluating systems and turning them into reliable products to rstream licensing, enterprise deployments, integrator partnerships, and technical onboarding.",
  avatar: {
    src: "/uartnet.png",
    alt: "@uartnet",
  },
  products: [
    {
      name: "rstream tunnels",
      description:
        'Connect private systems, remote machines, and devices for remote access, WebTTY, realtime applications, and AI agent workflows. <span class="underline">Controlled connectivity across protocols, with zero-trust security, cryptographic protection, and a runtime built for production.</span>',
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
