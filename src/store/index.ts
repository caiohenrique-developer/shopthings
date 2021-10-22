import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { calc } from './reducers/Calculator';

const rootReducer = combineReducers({
  calculator: calc,
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
