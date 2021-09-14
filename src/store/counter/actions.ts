import {
    INCREMENT,
    IncrementAction,
    INCREASE,
    IncreaseAction,
    DECREMENT,
    DecrementAction
} from './types';

const increment = (payload: string): IncrementAction => {
    return {
        type: INCREMENT,
        payload: payload
    };
};

const increase = (payload: string): IncreaseAction => {
    return {
        type: INCREASE,
        payload: payload
    };
};

const decrement = (payload: string): DecrementAction => {
    return {
        type: DECREMENT,
        payload: payload
    };
};

const counter = {
    increment,
    increase,
    decrement
};

export type CounterActionTypes = IncrementAction | IncreaseAction | DecrementAction;

export default counter;
