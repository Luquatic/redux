export const INCREMENT = 'INCREMENT';
export const INCREASE = 'INCREASE';
export const DECREMENT = 'DECREMENT';

export interface IncrementAction {
    type: typeof INCREMENT,
    payload: string
}

export interface IncreaseAction {
    type: typeof INCREASE,
    payload: string
}

export interface DecrementAction {
    type: typeof DECREMENT,
    payload: string
}
