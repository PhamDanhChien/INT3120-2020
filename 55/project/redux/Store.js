import { createStore } from 'redux';
import { persistStore } from 'redux-persist';

import reducer from './Reducer';

// Create Store
export const store = createStore(reducer);
export const persistor = persistStore(store);