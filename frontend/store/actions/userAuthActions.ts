import { apiCall, setHeader } from '../../utils/apiCall';
import Router from 'next/router';
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
    IAddressForm,
    IContactInfoForm,
    ICurrentUser,
    ILoginData,
    IResetPasswordForm,
    ISignUpForm,
} from '../../types';
import { IPublicUser } from '../../../@types';
import { resetCurrentUser, resetPasswordRecoveryForm } from '../../utils/reset';
import store from '../store';
import router from 'next/router';
import { resetResetPasswordForm } from './resetPasswordFormActions';

export function setCurrentUser(currentUser: ICurrentUser): AppActions {
    return {
        type: SET_CURRENT_USER,
        currentUser,
    };
}
export function removeCurrentUser(currentUser: ICurrentUser): AppActions {
    return {
        type: REMOVE_CURRENT_USER,
        currentUser,
    };
}
/** This method is called from logout button. But also when checking for valid session */
export function logout() {
    return (dispatch: Dispatch<any>) => {
        clearSession();
        store.dispatch(removeCurrentUser(resetCurrentUser()));
        store.dispatch(
            addMessage({
                text: 'Kiitos, uloskirjaus onnistui!',
                variant: 'success',
                icon: 'checkCircle',
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
            return apiCall('post', `http://localhost:8080/login`, loginData)
                .then((res: any) => {
                    dispatch(
                        setCurrentUser({
                            user: res.user,
                            isAuthenticated: true,
                            isAdmin: validateUserRole(
                                res.user.admin.premission_level,
                            ),
                        }),
                    );
                    setSession({
                        authToken: res.authToken,
                        token: res.token,
                        expiry: res.expiry,
                    });
                    dispatch(
                        addMessage({
                            text:
                                'Tervetuoa takaisin' + res.user.username + '!',
                            variant: 'success',
                            icon: 'alert',
                            visible: true,
                        }),
                    );
                    Router.push(`/profiili/${res.user.user.username}`);
                    resolve();
                })
                .catch((error: Error) => {
                    console.log(error);
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yrit?? uudelleen hetken kuluttua.',
                            variant: 'danger',
                            icon: 'alert',
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
                        setCurrentUser({
                            user: res.user,
                            isAuthenticated: true,
                            isAdmin: validateUserRole(
                                res.user.admin.premission_level,
                            ),
                        }),
                    );
                    resolve();
                })
                .catch((_) => {
                    addMessage({
                        text: 'Valitettavasti tietojen haku ep??onnistui!',
                        variant: 'warning',
                        icon: 'alert',
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
            return apiCall('post', 'http://localhost:8080/register', formData)
                .then((res: any) => {
                    dispatch(
                        addMessage({
                            text: res.message,
                            variant: 'success',
                            icon: 'checkCircle',
                            visible: true,
                        }),
                    );
                    router.push('/rekisteroidy/pinkoodi');
                    resolve();
                })
                .catch((error: Error) => {
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yrit?? uudelleen hetken kuluttua.',
                            variant: 'danger',
                            icon: 'alert',
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
            return apiCall(
                'post',
                'http://localhost:8080/register/pincode',
                signUpForm,
            )
                .then((res: any) => {
                    dispatch(
                        addMessage({
                            text: res.message,
                            variant: 'success',
                            icon: 'checkCircle',
                            visible: true,
                        }),
                    );
                    router.push('/rekisteroidy/pinkoodi/vahvistus');
                    resolve();
                })
                .catch((error: Error) => {
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yrit?? uudelleen hetken kuluttua.',
                            variant: 'danger',
                            icon: 'alert',
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
    setHeader('post', '');
    return (dispatch: Dispatch<any>) => {
        return new Promise<void>((resolve, reject) => {
            return apiCall(
                'post',
                'http://localhost:8080/users/passwordreset',
                resetPasswordForm,
            )
                .then((res: any) => {
                    const { message } = res;
                    console.log(res.user.contactBy);
                    dispatch(
                        addMessage({
                            text: message,
                            variant: 'success',
                            icon: 'checkCircle',
                            visible: true,
                        }),
                    );
                    router.push('/salasananpalautus/pinkoodi');
                    resolve();
                })
                .catch((error: Error) => {
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yrit?? uudelleen hetken kuluttua.',
                            variant: 'danger',
                            icon: 'alert',
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
                'http://localhost:8080/users/passwordreset/pincode',
                resetPasswordForm,
            )
                .then((res: { message }) => {
                    const { message } = res;
                    dispatch(
                        addMessage({
                            text: message,
                            variant: 'success',
                            icon: 'checkCircle',
                            visible: true,
                        }),
                    );
                    router.push('/salasananpalautus/pinkoodi/uusisalasana');
                    resolve();
                })
                .catch((error: Error) => {
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yrit?? uudelleen hetken kuluttua.',
                            variant: 'danger',
                            icon: 'alert',
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
                'http://localhost:8080/users/passwordreset',
                resetPasswordForm,
            )
                .then((res: any) => {
                    const { message } = res;
                    dispatch(
                        addMessage({
                            text: message,
                            variant: 'success',
                            icon: 'checkCircle',
                            visible: true,
                        }),
                    );
                    dispatch(
                        resetResetPasswordForm({
                            resetPasswordForm: resetPasswordRecoveryForm(),
                        }),
                    );
                    router.push('/kirjaudu');
                    resolve();
                })
                .catch((error: Error) => {
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yrit?? uudelleen hetken kuluttua.',
                            variant: 'danger',
                            icon: 'alert',
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
    setHeader('get', localStorage.getItem('AuthToken'));
    return (dispatch: Dispatch<any>) => {
        return new Promise<void>((resolve, reject) => {
            return apiCall('get', `/api/users/${id}/profile`, {})
                .then((res: any) => {
                    const { user } = res;
                    dispatch(
                        setCurrentUser({
                            user: res.user,
                            isAuthenticated: true,
                            isAdmin: validateUserRole(
                                res.user.admin.premission_level,
                            ),
                        }),
                    );
                    resolve();
                })
                .catch((error: Error) => {
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yrit?? uudelleen hetken kuluttua.',
                            variant: 'danger',
                            icon: 'alert',
                            visible: true,
                        }),
                    );
                    reject(); // indicate the API call failed
                });
        });
    };
}

/** Update Address /profiili/<%= user._id %>/osoite */
export function updateUserAddress(addressForm: IAddressForm) {
    setHeader('put', localStorage.getItem('authToken'));
    return (dispatch: Dispatch<any>) => {
        return new Promise<void>((resolve, reject) => {
            return apiCall(
                'put',
                'http://localhost:8080/profile/' +
                    addressForm.userId +
                    '/address',
                addressForm,
            )
                .then((res: { message: string; user: IPublicUser }) => {
                    dispatch(
                        addMessage({
                            text: res.message,
                            variant: 'success',
                            icon: 'checkCircle',
                            visible: true,
                        }),
                    );
                    dispatch(
                        setCurrentUser({
                            user: res.user,
                            isAuthenticated: true,
                            isAdmin: validateUserRole(
                                res.user.admin.premission_level,
                            ),
                        }),
                    );
                    resolve();
                })
                .catch((error: Error) => {
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yrit?? uudelleen hetken kuluttua.',
                            variant: 'danger',
                            icon: 'alert',
                            visible: true,
                        }),
                    );
                    reject();
                });
        });
    };
}

/** Update user data call */
export function updateUserData(contactInfoForm: IContactInfoForm) {
    setHeader('put', localStorage.getItem('authToken'));
    return (dispatch: Dispatch<any>) => {
        return new Promise<void>((resolve, reject) => {
            return apiCall(
                'put',
                'http://localhost:8080/profile/' + contactInfoForm.userId,
                contactInfoForm,
            )
                .then((res: { message: string; user: IPublicUser }) => {
                    dispatch(
                        addMessage({
                            text: res.message,
                            variant: 'success',
                            icon: 'checkCircle',
                            visible: true,
                        }),
                    );
                    dispatch(
                        setCurrentUser({
                            user: res.user,
                            isAuthenticated: true,
                            isAdmin: validateUserRole(
                                res.user.admin.premission_level,
                            ),
                        }),
                    );
                    resolve();
                })
                .catch((error: Error) => {
                    dispatch(
                        addMessage({
                            text: error
                                ? error.message
                                : 'virhe palvelimella, yrit?? uudelleen hetken kuluttua.',
                            variant: 'danger',
                            icon: 'alert',
                            visible: true,
                        }),
                    );
                    reject();
                });
        });
    };
}
