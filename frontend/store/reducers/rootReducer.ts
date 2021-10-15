import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import messageReducer from './messageReducer';
import paginationReducer from './paginationReducer';
import productReducer from './productReducer';
import stepReducer from './stepReducer';
import titleReducer from './titleReducer';
import userAuthReducer from './userAuthReducer';

const rootReducer = combineReducers({
    currentUser: userAuthReducer,
    loading: loadingReducer,
    message: messageReducer,
    pagination: paginationReducer,
    products: productReducer,
    step: stepReducer,
    title: titleReducer,
});

export default rootReducer;
