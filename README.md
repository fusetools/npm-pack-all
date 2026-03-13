# npm-pack-all

[![Version](https://img.shields.io/github/package-json/v/fusetools/npm-pack-all.svg)](https://github.com/fusetools/npm-pack-all/releases)
[![CI](https://github.com/fusetools/npm-pack-all/actions/workflows/node.js.yml/badge.svg)](https://github.com/fusetools/npm-pack-all/actions/workflows/node.js.yml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

`npm-pack-all` packages your project together with its installed dependencies when you run `npm pack`.

This fork is distributed through GitHub Releases instead of npm.

## Requirements

- Node `20.19+`, `22.13+`, or `24+`
- npm

## Install

Install this fork directly from GitHub:

```bash
npm install github:fusetools/npm-pack-all#v2.0.0
```

You can also pin to a branch or commit if needed:

```bash
npm install github:fusetools/npm-pack-all#main
npm install github:fusetools/npm-pack-all#<commit-sha>
```

## Run

If installed locally in your project:

```bash
npx npm-pack-all
```

Or with the direct binary path:

```bash
node node_modules/.bin/npm-pack-all
```

## Common Usage

Create a package with production dependencies:

```bash
npx npm-pack-all
```

Write the archive to a specific directory:

```bash
npx npm-pack-all --output build/
```

Write the archive to a specific file name:

```bash
npx npm-pack-all --output build/artifact.tgz
```

Include devDependencies too:

```bash
npx npm-pack-all --dev-deps --output build/artifact.tgz
```

## What It Does

When you run `npm-pack-all`, it:

1. Backs up `package.json`, `package-lock.json`, `yarn.lock`, and `.npmignore`
2. Adds dependencies to `bundledDependencies`
3. Optionally adds `devDependencies` when `--dev-deps` is used
4. Creates a temporary `.npmignore` so installed modules are included in the archive
5. Runs `npm pack`
6. Restores your original project files

## Release Notes

- `v2.0.0` is the first GitHub Releases-only version of this fork
- `v2.0.0` requires modern Node versions because of updated tooling
