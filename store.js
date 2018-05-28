import { createStore } from 'redux';
import videos from './reducers/videos';

const store = createStore(
  videos,
  {},
);

export default store;
