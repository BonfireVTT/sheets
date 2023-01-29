import { throttle } from 'lodash';

import constants from '../constants';

// declare type MessageType = 'roll' | 'chat';

const bonfireMessage = (data: any) => {
  window.parent.postMessage(data, { targetOrigin: import.meta.env.VITE_TARGET_ORIGIN });
};

export const syncData = throttle((data: Record<string, any>) => {
  console.log('SYNCING DATA >>>', data);
}, constants.REMOTE_REFRESH_RATE);

export default bonfireMessage;
