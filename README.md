# Overview

This is a personal website for uartnet.co, built using Next.js.

Feel free to use this project as a template to create your own personal website. Customize the site by modifying the configuration files located in the `src/config` folder.

# Quick Start

### Clone the Repository

First, clone the repository to your local machine:

```sh
git clone https://github.com/uartnet/uartnet.co.git
```

## Install Dependencies

Navigate into your project folder and install the required dependencies:

```sh
cd uartnet.co
npm install
```

## Run Development Server

To start the development server, run:

```sh
npm run dev
```

Your site should now be running on http://localhost:3000/.

# Configuration

To personalize the website, navigate to the `src/config` folder and modify the configuration files as per your requirements.

# Dependency maintenance

ESLint stays on version 9 and TypeScript on version 6 to match the peer dependencies of the Next.js lint plugins. A scoped override updates `minimatch` for `@typescript-eslint/typescript-estree` to address [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249); remove it once the upstream dependency includes a patched version.

Run `npm run lint`, `npm run check-types`, `npm run build`, and `npm audit` after dependency updates.

# Contributing

Feel free to submit issues and enhancement requests.

# License

This project is licensed under the MIT License - see the LICENSE file for details.

Enjoy!

Your contributions to improving this project are most welcome!
