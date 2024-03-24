# vega-dx

[![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)](https://www.typescriptlang.org/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Typescript library built with Tsup with fully automated releasing. Powered by [esbuild](https://github.com/evanw/esbuild)

# Getting Started

Modern typescript libraries made easy. Following commands

## ⚙️ Install

To install repo from source you need pnpm or npm.

```bash
pnpm install
```

## 🔗 Symlink

```bash
pnpm link <dir>
pnpm link --global <package>

pnpm unlink <dir>
pnpm unlink --global <package>
```

Consider cross-file system links for local development to avoid unnecessary library packaging.

## 📖 Build

```bash
pnpm run build
```

This will output dist folder.

## 📚 Documentation

```bash
pnpm dlx typedoc
```

This will output docs for this project.
