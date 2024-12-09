/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  appId: 'io.github.tuvm.Vimed',
  productName: 'Vimed',
  copyright: 'CC-BY-NC-4.0',
  files: ['.vite/**/*', '!node_modules', 'vimed-desktop/renderer/dist/**/*'],
  mac: {
    target: [
      { target: 'dmg', arch: ['arm64', 'x64'] },
      { target: 'zip', arch: ['arm64', 'x64'] },
    ],
    icon: './assets/icon.icns',
    extendInfo: {
      CFBundleDisplayName: 'Vimed',
    },
    category: 'public.app-category.productivity',
    notarize: {
      teamId: process.env.APPLE_TEAM_ID || '',
    },
  },
  win: {
    target: ['nsis', 'zip'],
    icon: './assets/icon.ico',
    signingHashAlgorithms: ['sha256', 'sha1'],
    signAndEditExecutable: true,
    publisherName: 'Vu Minh Tu',
  },
  nsis: {
    oneClick: false,
    allowToChangeInstallationDirectory: true,
    shortcutName: 'Vimed',
  },
  linux: {
    target: ['deb', 'tar.xz'],
    icon: './assets/icon.icns',
    vendor: 'Vu Minh Tu',
    category: 'Medical',
    executableName: 'Vimed',
    description:
      'A Dicom Viewer support many image format, developed by Vimed team.',
    synopsis: 'Dicom Viewer',
  },
};

module.exports = config;
