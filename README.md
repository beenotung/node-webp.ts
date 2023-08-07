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
