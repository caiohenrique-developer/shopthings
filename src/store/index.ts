import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import calculatorReducer from '@store/reducers/Calculator';

const rootReducer = combineReducers({
  calculator: calculatorReducer,
});

const persistentState = persistReducer(
  {
    key: '@Shopthings:allStates',
    storage,
  },
  rootReducer,
);

export const store = createStore(persistentState);
export const persistentStore = persistStore(store);
