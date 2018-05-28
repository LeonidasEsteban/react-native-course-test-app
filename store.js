import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from './reducers/videos';


const config = {
  key: 'root',
  storage,
  blacklist: ['selectedMovie'],
}

const persistedReducer = persistReducer(config, reducer)

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
