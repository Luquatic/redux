export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_AUTHENTICATED = 'SET_AUTHENTICATED';

export interface LoginAction {
    type: typeof LOGIN
}

export interface LogoutAction {
    type: typeof LOGOUT
}
