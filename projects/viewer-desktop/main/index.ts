import { BrowserWindow, app } from 'electron';
import { resolve } from 'path';
import isDev from 'electron-is-dev';
import { autoUpdater } from 'electron-updater';

if (app.requestSingleInstanceLock()) {
  app.whenReady().then(() => {
    let icon = 'icon.ico';
    if (process.platform == 'linux') icon = '64x64.png';
    else if (process.platform == 'darwin') icon = 'icon.icns';

    const window = new BrowserWindow({
      width: 480,
      height: 320,
      minWidth: 480,
      minHeight: 320,
      show: false,
      icon: resolve(__dirname, '../assets/' + icon),
      webPreferences: {
        preload: resolve(__dirname, 'preload.cjs'),
      },
    });

    if (isDev) {
      window.loadURL('http://localhost:5173');
    } else {
      window.loadFile('.vite/renderer/index.html');
    }

    autoUpdater.checkForUpdatesAndNotify();

  autoUpdater.on('update-available', () => {
    console.log('Update available');
    window.webContents.send('update_available');
  });

  autoUpdater.on('update-downloaded', () => {
    console.log('Update downloaded');
    window.webContents.send('update_downloaded');
  });

    window.show();
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
} else {
  app.quit();
}
