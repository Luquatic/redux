export const INCREMENT = 'INCREMENT';
export const INCREASE = 'INCREASE';
export const DECREMENT = 'DECREMENT';
export const SET_VISIBILITY = 'SET_VISIBILITY'

export interface IncrementAction {
    type: typeof INCREMENT,
}

export interface IncreaseAction {
    type: typeof INCREASE,
    payload: number
}

export interface DecrementAction {
    type: typeof DECREMENT,
}

export interface SetVisibilityAction {
    type: typeof SET_VISIBILITY,
}
