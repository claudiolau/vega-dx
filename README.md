# vega-dx

Typescript library built with Tsup with fully automated releasing. Powered by [esbuild](https://github.com/evanw/esbuild)

# Getting Started

Modern typescript libraries made easy. Following commands

## ⚙️ Install

To install repo from source you need pnpm or npm.

```bash
pnpm install
```

## 🔗 Symlink

Consider cross-file system links for local development to avoid unnecessary library packaging.

```bash
pnpm link <dir>
pnpm link --global <package>

pnpm unlink <dir>
pnpm unlink --global <package>
```

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

## Development

```bash
pnpm run plop
```

Micro-Generator will create a file which will be useful to enforce a consistent coding pattern.

```bash
pnpm run changeset
```

Run command to bump version.
