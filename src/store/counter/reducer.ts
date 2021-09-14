import {CounterActionTypes} from './actions';

export type CounterState = {
    value: number,
    showCounter: boolean
}

const initialState: CounterState = {
    value: 0,
    showCounter: true
};

function counterReducer(state:CounterState = initialState, action: CounterActionTypes): CounterState {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + 1
            };
        case 'INCREASE':
            return {
                ...state,
                value: state.value + action.payload
            }
        case 'DECREMENT':
            return {
                ...state,
                value: state.value - 1
            }
        case 'SET_VISIBILITY':
            return {
                ...state,
                showCounter: !state.showCounter
            }
        default:
            return state;
    }
}

export default counterReducer;
