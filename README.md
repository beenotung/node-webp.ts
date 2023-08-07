# node-webp.ts

Convert image to webp and compress to save space with `cwebp` system program.

[![npm Package Version](https://img.shields.io/npm/v/node-webp.ts)](https://www.npmjs.com/package/node-webp.ts)

## Installation

You can install this package with `npm`, `pnpm`, `yarn`, `slnpm` and probably any other node.js package manager.

```bash
npm install node-webp.ts
```

This package invokes the system command `cwebp`. You need to install it separately if it is not already installed.

| Platform  | Install Command                |
| --------- | ------------------------------ |
| Ubuntu    | sudo apt-get install webp      |
| ArchLinux | sudo pacman -S libwebp         |
| CentOS    | sudo yum install libwebp-tools |
| MacOS     | brew install webp              |
| Windows   | scoop install libwebp          |
| Windows   | choco install webp             |

## License

This project is licensed with [BSD-2-Clause](./LICENSE)

This is free, libre, and open-source software. It comes down to four essential freedoms [[ref]](https://seirdy.one/2021/01/27/whatsapp-and-the-domestication-of-users.html#fnref:2):

- The freedom to run the program as you wish, for any purpose
- The freedom to study how the program works, and change it so it does your computing as you wish
- The freedom to redistribute copies so you can help others
- The freedom to distribute copies of your modified versions to others
