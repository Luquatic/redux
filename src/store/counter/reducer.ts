import {CounterActionTypes} from './actions';

export type ProjectState = {
    counter: number
}

const initialState: ProjectState = {
    counter: 0
};

function counterReducer(state:ProjectState = initialState, action: CounterActionTypes): ProjectState {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }
}

export default counterReducer;
