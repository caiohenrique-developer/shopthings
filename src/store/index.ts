import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { productCartManagerReducer } from '@store/reducers/productCartManager';

const rootReducer = combineReducers({
  productCartManager: productCartManagerReducer,
});

const persistentState = persistReducer(
  {
    key: '@Shopthings:globalState',
    storage,
  },
  rootReducer,
);

const store = createStore(persistentState, composeWithDevTools());
const persistentStore = persistStore(store);

export { store, persistentStore };
