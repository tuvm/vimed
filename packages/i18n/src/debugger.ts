import { debugMode } from './config';

export default (message: any, level = 'log') => {
  if (debugMode) {
    // eslint-disable-next-line
    console[level]('@ohif/i18n: ', message);
  }
};
