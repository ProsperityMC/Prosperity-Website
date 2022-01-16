# Prosperity Website

[![](https://img.shields.io/badge/framework-next--js-black?logo=next.js)](https://nextjs.org/)
[![](https://img.shields.io/badge/main--lang-typescript-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Discord](https://img.shields.io/discord/844449121376534558?color=%235865F2&label=discord&logo=discord&logoColor=white)](https://discord.gg/hfTxZ4XxYj/)

Website and wiki built for the Prosperity Minecraft server. Created with Next.js, TypeScript, and Tailwind. Using markdown for wiki page generation.

## Deployment

New commits on `main` are automatically built and deployed to Vercel. You can visit the site with the following URLs.

[Production site](https://prosperity.vercel.app/)

[Development site](https://prosperity-dev.vercel.app/)

## Development

If you wish to run the site locally you can follow these steps:

1. [Download Node](https://nodejs.org/en/) (Next.js requires Node 14.x or above).
2. Clone the latest commit from GitHub.
3. Run the `npm install` command in the project directory to get any required dependencies.
4. Run `./node_modules/.bin/contentlayer build` in order to compile the markdown wiki pages.
5. Run `npm run dev` in order to start the dev server.
6. Navigate to http://localhost:3000/ in order to connect to the development server.

## Contributing

You are free to fork this repository and create a pull request with your changes. It is recommended that you get the latest [PostCSS](https://marketplace.visualstudio.com/items?itemName=csstools.postcss) and [Tailwind](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extensions if you are using Visual Studio Code.

In addition, I use the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind) for code formatting.

### Contributing to the wiki

If you wish the contribute to wiki, please follow the development setup instructions. This site uses the standard markdown format in addition to some custom frontmatter, you can see the formatting in the existing wiki pages.

Run `./node_modules/.bin/contentlayer dev` in order to automatically recompile any markdown files in the `/content/wiki/` directory so you can preview your changes on the dev server.

When making any changes, please ensure that you use proper text formatting, spelling, and grammar.

### Contributing to the gallery

_The gallery isn't fully implemented yet, you will be able to contribute to it in the future ..._
