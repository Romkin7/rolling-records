import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/rootReducer';
import rootReducer from './reducers/rootReducer';

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
