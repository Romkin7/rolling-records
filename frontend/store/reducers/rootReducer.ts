import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import deliveryCostsReducer from './deliveryCostsReducer';
import loadingReducer from './loadingReducer';
import marketingCampaignReducer from './marketingCampaignReducer';
import messageReducer from './messageReducer';
import modalReducer from './modalReducer';
import paginationReducer from './paginationReducer';
import resetPasswordFormReducer from './passwordResetFormReducer';
import postOfficesReducer from './postOfficesReducer';
import productReducer from './productReducer';
import titleReducer from './titleReducer';
import toggleReducer from './toggleReducer';
import userAuthReducer from './userAuthReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    currentUser: userAuthReducer,
    deliveryCosts: deliveryCostsReducer,
    loading: loadingReducer,
    marketingCampaigns: marketingCampaignReducer,
    message: messageReducer,
    modalOpen: modalReducer,
    pagination: paginationReducer,
    postOffices: postOfficesReducer,
    products: productReducer,
    resetPasswordForm: resetPasswordFormReducer,
    title: titleReducer,
    toggle: toggleReducer,
});

export default rootReducer;
