# DICOM viewer for cross-platform

## Environment

### Node v18.12.1, pnpm v9.14.2

## Structure

Multi platform project contains source for web app and desktop app build with electron
We need at least 2 shell to build seperate 2 environments
So we create shell folder contain 2 project: viewer-web and viewer-desktop
Folder packages will contain core and shared packages

Add 2 script to run web and desktop
Web:

```bash
pnpm vwd
pnpm viewer-web:dev
```

Desktop:

```bash
pnpm vdd
pnpm viewer-desktop:dev
```
