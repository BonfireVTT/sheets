import { reduxToRemote } from '@data/utilities/dataConverter';
import { syncData } from '../../../utils/postMessage';

/**
 * Periodically saves changes
 */
const SyncMiddleware = (store: any) => (next: Function) => (action: any): void => {
  syncData(reduxToRemote(store.getState()));

  return next(action);
};

export default SyncMiddleware;
