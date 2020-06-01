import { createStore } from 'redux';
import { persistStore } from 'redux-persist';

import pReducer from './Reducer';

// Create Store
export const store = createStore(pReducer);
export const persistor = persistStore(store);