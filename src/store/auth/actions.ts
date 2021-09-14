import {LOGIN, LoginAction, LOGOUT, LogoutAction} from './types';

const login = (): LoginAction => {
    return {
        type: LOGIN
    }
}

const logout = (): LogoutAction => {
    return {
        type: LOGOUT
    }
}

const auth = {
    login,
    logout,
}

export type AuthActionTypes = LoginAction | LogoutAction;

export default auth;
