import { createStore } from 'redux';
import todoReducers from '../reducers/reducers';

export default function configureStore(initialState) {
  return createStore(todoReducers, initialState);
}
