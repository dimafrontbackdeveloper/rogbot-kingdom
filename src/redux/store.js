import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  wallet: null,
};

function globals(state = initialState, action) {
  switch (action.type) {
    case 'SET_WALLET':
      return {
        ...state,
        wallet: action.payload,
      };

    default:
      return state;
  }
}

export const store = createStore(globals, composeWithDevTools(applyMiddleware()));
