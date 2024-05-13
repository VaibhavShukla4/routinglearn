/** @format */

import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'; // Import Redux Logger
import rootReducer from './slice'; // Import your root reducer

// Manually specify middleware
const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(logger);

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});
