import { IResetPasswordForm, IResetPasswordFormState } from '../../types';
import { AppActions } from './actions';
import {
    RESET_RESET_PASSWORD_FORM,
    UPDATE_RESET_PASSWORD_FORM,
} from './actionTypes/resetPasswordFormActionTypes';

export function updateResetPasswordForm(
    resetPasswordForm: IResetPasswordForm,
): AppActions {
    return {
        type: UPDATE_RESET_PASSWORD_FORM,
        resetPasswordFormState: { resetPasswordForm },
    };
}

export function resetResetPasswordForm(
    resetPasswordFormState: IResetPasswordFormState,
): AppActions {
    return {
        type: RESET_RESET_PASSWORD_FORM,
        resetPasswordFormState,
    };
}
