import {
    INCREMENT,
    IncrementAction,
    INCREASE,
    IncreaseAction,
    DECREMENT,
    DecrementAction,
    SET_VISIBILITY,
    SetVisibilityAction
} from './types';

const increment = (): IncrementAction => {
    return {
        type: INCREMENT,
    };
};

const increase = (payload: number): IncreaseAction => {
    return {
        type: INCREASE,
        payload: payload,
    };
};

const decrement = (): DecrementAction => {
    return {
        type: DECREMENT,
    };
};

const setVisibility = (): SetVisibilityAction => {
    return {
        type: SET_VISIBILITY
    }
}

const counter = {
    increment,
    increase,
    decrement,
    setVisibility
};

export type CounterActionTypes = IncrementAction | IncreaseAction | DecrementAction | SetVisibilityAction;

export default counter;
