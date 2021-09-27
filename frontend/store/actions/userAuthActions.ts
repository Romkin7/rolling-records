import { apiCall, setHeader } from '../../utils/apiCall';
import {
    SET_CURRENT_USER,
    REMOVE_CURRENT_USER,
} from './actionTypes/userAuthActionTypes';
import { Dispatch } from 'redux';

import { clearSession, setSession } from '../../utils/session';

import { AppActions } from './actions';
import { addMessage } from './messageActions';
import { validateUserRole } from '../../utils/utils';
import {
    ICurrentUser,
    IJwtToken,
    ILoginData,
    IResetPasswordForm,
    ISignUpForm,
} from '../../types';
import { IPublicUser } from '../../../@types';
import { resetCurrentUser } from '../../utils/reset';

export function setCurrentUser(
    user: IPublicUser,
    isAuthenticated: boolean,
    isAdmin: boolean,
): AppActions {
    return {
        type: SET_CURRENT_USER,
        user,
        isAuthenticated,
        isAdmin,
    };
}
export function removeCurrentUser(currentUser: ICurrentUser): AppActions {
    return {
        type: REMOVE_CURRENT_USER,
        ...currentUser,
    };
}
/** This method is called from logout button. But also when checking for valid session */
export function logout() {
    return (dispatch: Dispatch<any>) => {
        clearSession();
        dispatch(removeCurrentUser(resetCurrentUser()));
        dispatch(
            addMessage({
                text: 'Kiitos, uloskirjaus onnistui!',
                bgColor: 'success',
                visible: true,
            }),
        );
    };
}

/** handleLogin will call fetchUser */
export function fetchUser(loginData: ILoginData) {
    setHeader('post', '');
    return (dispatch: Dispatch<any>) => {
        return new Promise<void>((resolve, reject) => {
            return apiCall('post', `/api/users/login`, loginData)
                .then((res: any) => {
                    const {
                        expiry,
                        token,
                        ...user
                    }: {
                        expiry: string;
                        token: IJwtToken;
                        user: IPublicUser;
                    } = res;
                    setSession(token);
                    dispatch(
                        setCurrentUser(
                            res.user,
                            true,
                            validateUserRole(res.user.role),
                        ),
                    );
                    dispatch(
                        addMessage({
                            text:
                                'Tervetuoa takaisin' + user.user.username + '!',
                            bgColor: 'success',
                            visible: true,
                        }),
                    );
                    // dispatch(removeMessage({ text: "", bgColor: "", visible: false }));
                    resolve();
                })
                .catch((error: Error) => {
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yritä uudelleen hetken kuluttua.',
                            bgColor: 'danger',
                            visible: true,
                        }),
                    );
                    reject(); // indicate the API call failed
                });
        });
    };
}

export function reFetchUser(userId: string) {
    setHeader('get', window.localStorage.getItem('token'));
    return (dispatch: Dispatch<any>) => {
        return new Promise<void>((resolve, reject) => {
            return apiCall('get', '/api/users/' + userId, null)
                .then((res: any) => {
                    dispatch(
                        setCurrentUser(
                            res.user,
                            true,
                            validateUserRole(res.user.role),
                        ),
                    );
                    resolve();
                })
                .catch((_) => {
                    addMessage({
                        text: 'Valitettavasti tietojen haku epäonnistui!',
                        bgColor: 'warning',
                        visible: true,
                    });
                    reject();
                });
        });
    };
}

/** HandleSignUp will call signUpUpUser */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function signUpUser(formData: ISignUpForm) {
    setHeader('post', '');
    return (dispatch: Dispatch<any>) => {
        return new Promise<void>((resolve, reject) => {
            return apiCall('post', '/api/users/register', formData)
                .then((res: any) => {
                    dispatch(
                        addMessage({
                            text: res.message,
                            bgColor: 'success',
                            visible: true,
                        }),
                    );
                    resolve();
                })
                .catch((error: Error) => {
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yritä uudelleen hetken kuluttua.',
                            bgColor: 'danger',
                            visible: true,
                        }),
                    );
                    reject();
                });
        });
    };
}

/** Verify pincode from server */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function verifyPincode(signUpForm: ISignUpForm) {
    setHeader('post', '');
    return (dispatch: Dispatch<any>) => {
        return new Promise<void>((resolve, reject) => {
            return apiCall('post', '/api/users/register/pincode', signUpForm)
                .then((res: any) => {
                    dispatch(
                        addMessage({
                            text: res.message,
                            bgColor: 'success',
                            visible: true,
                        }),
                    );

                    resolve();
                })
                .catch((error: Error) => {
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yritä uudelleen hetken kuluttua.',
                            bgColor: 'danger',
                            visible: true,
                        }),
                    );
                    reject();
                });
        });
    };
}

/** request password recovery pincode */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function requestResetPasswordPincode(
    resetPasswordForm: IResetPasswordForm,
) {
    setHeader('patch', '');
    return (dispatch: Dispatch<any>) => {
        return new Promise<void>((resolve, reject) => {
            return apiCall(
                'patch',
                '/api/users/register/pincode',
                resetPasswordForm,
            )
                .then((res: any) => {
                    const { message } = res;
                    dispatch(
                        addMessage({
                            text: message,
                            bgColor: 'success',
                            visible: true,
                        }),
                    );
                    resolve();
                })
                .catch((error: Error) => {
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yritä uudelleen hetken kuluttua.',
                            bgColor: 'danger',
                            visible: true,
                        }),
                    );
                    reject(); // indicate the API call failed
                });
        });
    };
}

/** Request password reset pincode validation */
export function requestPincodeValidation(
    resetPasswordForm: IResetPasswordForm,
) {
    setHeader('post', '');
    return (dispatch: Dispatch<any>) => {
        return new Promise<void>((resolve, reject) => {
            return apiCall(
                'post',
                '/api/users/register/pincode/validate',
                resetPasswordForm,
            )
                .then((res: { message }) => {
                    const { message } = res;
                    dispatch(
                        addMessage({
                            text: message,
                            bgColor: 'success',
                            visible: true,
                        }),
                    );
                    resolve();
                })
                .catch((error: Error) => {
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yritä uudelleen hetken kuluttua.',
                            bgColor: 'danger',
                            visible: true,
                        }),
                    );
                    reject();
                });
        });
    };
}

/** request password reset action */
export function requestPasswordReset(resetPasswordForm: IResetPasswordForm) {
    setHeader('patch', '');
    return (dispatch: Dispatch<any>) => {
        return new Promise<void>((resolve, reject) => {
            return apiCall(
                'patch',
                '/api/users/register/passwordrecovery',
                resetPasswordForm,
            )
                .then((res: any) => {
                    const { message } = res;
                    dispatch(
                        addMessage({
                            text: message,
                            bgColor: 'success',
                            visible: true,
                        }),
                    );
                    resolve();
                })
                .catch((error: Error) => {
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yritä uudelleen hetken kuluttua.',
                            bgColor: 'danger',
                            visible: true,
                        }),
                    );
                    reject();
                });
        });
    };
}

/** handleLogin will call fetchUser */
export function fetchProfile(id: string) {
    setHeader('get', localStorage.getItem('token'));
    return (dispatch: Dispatch<any>) => {
        return new Promise<void>((resolve, reject) => {
            return apiCall('get', `/api/users/${id}/profile`, {})
                .then((res: any) => {
                    const { user } = res;
                    dispatch(
                        setCurrentUser(
                            user,
                            true,
                            validateUserRole(res.user.role),
                        ),
                    );
                    resolve();
                })
                .catch((error: Error) => {
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yritä uudelleen hetken kuluttua.',
                            bgColor: 'danger',
                            visible: true,
                        }),
                    );
                    reject(); // indicate the API call failed
                });
        });
    };
}

/** Update user data call */
export function updateUserData(formData: ISignUpForm, id: string) {
    setHeader('put', localStorage.getItem('token'));
    return (dispatch: Dispatch<any>) => {
        return new Promise<void>((resolve, reject) => {
            return apiCall('put', '/api/users/' + id, formData)
                .then((res: { message: string; user: IPublicUser }) => {
                    dispatch(
                        addMessage({
                            text: res.message,
                            bgColor: 'success',
                            visible: true,
                        }),
                    );
                    dispatch(
                        setCurrentUser(
                            res.user,
                            true,
                            validateUserRole(res.user.admin.premission_level),
                        ),
                    );
                    resolve();
                })
                .catch((error: Error) => {
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yritä uudelleen hetken kuluttua.',
                            bgColor: 'danger',
                            visible: true,
                        }),
                    );
                    reject();
                });
        });
    };
}
