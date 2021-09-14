import {AuthActionTypes} from './actions';

export type AuthState = {
    isAuthenticated: boolean
}

const initialState: AuthState = {
    isAuthenticated: false
}

function authReducer(state: AuthState = initialState, action: AuthActionTypes): AuthState {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true
            }
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false
            }
        default:
            return {
                ...state
            }
    }
}

export default authReducer;
