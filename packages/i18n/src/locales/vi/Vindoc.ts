import ViewerTool from './ViewerTool';
import date from './date';
import gender from './gender';
import status from './status';
import messageConstant from './message.constant';
import vi from './vi';
import AIResult from './AIResult';

export default {
  ...gender,
  ...date,
  ...status,
  ...vi,
  ...messageConstant,
  ...ViewerTool,
  ...AIResult,
};
