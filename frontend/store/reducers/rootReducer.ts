import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import messageReducer from './messageReducer';
import productReducer from './productReducer';
import userAuthReducer from './userAuthReducer';

const rootReducer = combineReducers({
    currentUser: userAuthReducer,
    loading: loadingReducer,
    message: messageReducer,
    products: productReducer,
});

export default rootReducer;
