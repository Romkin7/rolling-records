import { IResetPasswordFormState } from '../../types';

import { resetPasswordRecoveryForm } from '../../utils/reset';
import {
    ResetPasswordFormActionTypes,
    RESET_RESET_PASSWORD_FORM,
    UPDATE_RESET_PASSWORD_FORM,
} from '../actions/actionTypes/resetPasswordFormActionTypes';

const DEFAULT_STATE: IResetPasswordFormState = {
    resetPasswordForm: resetPasswordRecoveryForm(),
};

const resetPasswordFormReducer = (
    state = DEFAULT_STATE,
    action: ResetPasswordFormActionTypes,
) => {
    switch (action.type) {
        case UPDATE_RESET_PASSWORD_FORM:
            return Object.assign({}, state, {
                resetPasswordForm: {
                    ...state.resetPasswordForm,
                    [Object.keys(
                        action.resetPasswordFormState.resetPasswordForm,
                    )[0]]: Object.values(
                        action.resetPasswordFormState.resetPasswordForm,
                    )[0],
                },
            });
        case RESET_RESET_PASSWORD_FORM:
            return {
                ...state,
                resetPasswordForm:
                    action.resetPasswordFormState.resetPasswordForm,
            };
        default:
            return state;
    }
};

export default resetPasswordFormReducer;
