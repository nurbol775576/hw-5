import { createStore } from 'redux';
import textReducer from './Reducers';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.log('Error saving state to localStorage:', err);
  }
};

const store = createStore(textReducer, loadState());

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
