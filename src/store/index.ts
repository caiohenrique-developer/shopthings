import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { addProductToCartReducer } from './reducers/addProductToCart';

const rootReducer = combineReducers({
  addProductToCart: addProductToCartReducer,
});

const persistentState = persistReducer(
  {
    key: '@Shopthings:globalState',
    storage,
  },
  rootReducer,
);

export const store = createStore(persistentState);
export const persistentStore = persistStore(store);
