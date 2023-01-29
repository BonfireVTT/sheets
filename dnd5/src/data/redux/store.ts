import { configureStore } from '@reduxjs/toolkit';
import SyncMiddleware from './middlewares/sync.middleware';

import reducer from './reducer';

export const store = configureStore({
  middleware: (gDM) => gDM({ serializableCheck: false }).concat([SyncMiddleware]),
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
