import { BrowserWindow, ipcMain, ipcRenderer } from 'electron';

enum EVENTS {
  LOAD_PAGE = 'LOAD_PAGE',
  WRITE_PAGE = 'WRITE_PAGE',
  GET_DIRECTORY = 'GET_DIRECTORY',
  GET_DEFAULT_SAVE_LOCATION = 'GET_DEFAULT_SAVE_LOCATION',
  CHANGE_SAVE_LOCATION = 'CHANGE_SAVE_LOCATION',
  EXIT = 'EXIT',
  OPEN_LINK = 'OPEN_LINK',
  RESTART = 'RESTART',
  OPEN_EXTERNAL_LINK = 'OPEN_EXTERNAL_LINK',
  UPDATE_AVAILABLE = 'UPDATE_AVAILABLE',
  MENU_TOGGLE_SIDEBAR = 'MENU_TOGGLE_SIDEBAR',
  MENU_RESET_SIDEBAR_WIDTH = 'MENU_RESET_SIDEBAR_WIDTH',
  MENU_TOGGLE_EDITOR_TOOLBAR = 'MENU_TOGGLE_EDITOR_TOOLBAR',
}

export type Link =
  | 'help'
  | 'website'
  | 'changelogs'
  | 'download'
  | 'github'
  | 'issues'
  | 'feedback';

export class TypedIpcMain {
  window: BrowserWindow;

  constructor(window: BrowserWindow) {
    this.window = window;
  }

  onLoadPage = (callback: (fileName: string) => string) => {
    ipcMain.on(EVENTS.LOAD_PAGE, (e, args) => {
      e.returnValue = callback(args[0]);
    });
  };

  onWritePage = (callback: (fileName: string, data: string) => void) => {
    ipcMain.handle(EVENTS.WRITE_PAGE, (e, args: any[]) => {
      callback(args[0], args[1]);
    });
  };

  onGetDirectory = (callback: () => string | undefined) => {
    ipcMain.on(EVENTS.GET_DIRECTORY, (e) => (e.returnValue = callback()));
  };

  onGetDefaultSaveLocation = (callback: () => string) => {
    ipcMain.on(EVENTS.GET_DEFAULT_SAVE_LOCATION, (e) => {
      e.returnValue = callback();
    });
  };

  onChangeSaveDirectory = (callback: (newSaveLocation: string) => void) => {
    ipcMain.on(EVENTS.CHANGE_SAVE_LOCATION, (e, args) => callback(args[0]));
  };

  onExit = (callback: () => void) => {
    ipcMain.on(EVENTS.EXIT, callback);
  };

  onOpenLink = (callback: (link: Link) => void) => {
    ipcMain.on(EVENTS.OPEN_LINK, (e, args) => callback(args[0]));
  };

  onRestart = (callback: () => void) => {
    ipcMain.on(EVENTS.RESTART, callback);
  };

  onOpenExternalLink = (callback: (href: string) => void) => {
    ipcMain.on(EVENTS.OPEN_EXTERNAL_LINK, (e, args) => callback(args[0]));
  };
}

export class TypedIpcRenderer {
  constructor() {}

  loadPage = (fileName: string): string => {
    return ipcRenderer.sendSync(EVENTS.LOAD_PAGE, [fileName]);
  };

  writePage = async (fileName: string, data: string) => {
    await ipcRenderer.invoke(EVENTS.WRITE_PAGE, [fileName, data]);
  };

  getDirectory = (): string | undefined => {
    return ipcRenderer.sendSync(EVENTS.GET_DIRECTORY);
  };

  getDefaultSaveLocation = (): string => {
    return ipcRenderer.sendSync(EVENTS.GET_DEFAULT_SAVE_LOCATION);
  };

  changeSaveLocation = (newSaveLocation: string) => {
    ipcRenderer.send(EVENTS.CHANGE_SAVE_LOCATION, [newSaveLocation]);
  };

  onBeforeExit = (callback: () => void) => {
    ipcRenderer.removeAllListeners(EVENTS.EXIT);
    ipcRenderer.on(EVENTS.EXIT, callback);
  };

  exit = () => {
    ipcRenderer.send(EVENTS.EXIT);
  };

  onToggleSidebar = (callback: () => void) => {
    ipcRenderer.removeAllListeners(EVENTS.MENU_TOGGLE_SIDEBAR);
    ipcRenderer.on(EVENTS.MENU_TOGGLE_SIDEBAR, () => callback());
  };

  onResetSidebarWidth = (callback: () => void) => {
    ipcRenderer.removeAllListeners(EVENTS.MENU_RESET_SIDEBAR_WIDTH);
    ipcRenderer.on(EVENTS.MENU_RESET_SIDEBAR_WIDTH, () => callback());
  };

  onToggleEditorToolbar = (callback: () => void) => {
    ipcRenderer.removeAllListeners(EVENTS.MENU_TOGGLE_EDITOR_TOOLBAR);
    ipcRenderer.on(EVENTS.MENU_TOGGLE_EDITOR_TOOLBAR, () => callback());
  };

  openLink = (link: Link) => {
    ipcRenderer.send(EVENTS.OPEN_LINK, [link]);
  };

  restart = () => {
    ipcRenderer.send(EVENTS.RESTART);
  };

  onUpdateAvailable = (callback: (newVersion: string) => void) => {
    ipcRenderer.removeAllListeners(EVENTS.UPDATE_AVAILABLE);
    ipcRenderer.on(EVENTS.UPDATE_AVAILABLE, (e, args) => callback(args[0]));
  };

  isMac = () => process.platform === 'darwin';

  openExternalLink = (href: string) => {
    ipcRenderer.send(EVENTS.OPEN_EXTERNAL_LINK, [href]);
  };
}
