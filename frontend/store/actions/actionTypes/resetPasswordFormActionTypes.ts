import { IResetPasswordFormState } from '../../../types';

export const UPDATE_RESET_PASSWORD_FORM = 'UPDATE_RESET_PASSWORD_FORM';
export const RESET_RESET_PASSWORD_FORM = 'RESET_RESET_PASSWORD_FORM';

export interface UpdateResetPasswordForm {
    type: typeof UPDATE_RESET_PASSWORD_FORM;
    resetPasswordFormState: IResetPasswordFormState;
}

export interface ResetResetPasswordForm {
    type: typeof RESET_RESET_PASSWORD_FORM;
    resetPasswordFormState: IResetPasswordFormState;
}

export type ResetPasswordFormActionTypes =
    | UpdateResetPasswordForm
    | ResetResetPasswordForm;
